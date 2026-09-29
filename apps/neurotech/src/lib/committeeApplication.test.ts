import { afterEach, describe, expect, it, vi } from 'vitest';
import { del, get } from '@vercel/blob';
import { handleCommitteeApplication } from './committeeApplication';
import { COMMITTEE_APPLICATIONS_CLOSE_AT } from '@surreysocieties/ui/committeeDeadline';

vi.mock('@vercel/blob', () => ({ get: vi.fn(), del: vi.fn() }));

const config = { apiKey: 'test-key', fromEmail: 'Surrey Neurotech Society <applications@surreyneurotechsociety.org>' };
const postUrl = 'https://example.private.blob.vercel-storage.com/neurotech-committee-applications/example.png';
let address = 0;

function request(role = 'workshops-projects', extras: Record<string, string> = {}, origin = 'https://surreyneurotechsociety.org') {
  const form = new FormData();
  for (const [key, value] of Object.entries({
    role, fullName: 'Test Applicant', email: 'student@surrey.ac.uk', course: 'Psychology', yearOfStudy: 'Year 2',
    experience: 'I have helped organise a student workshop.', motivation: 'I want to make neurotech welcoming.', availability: '2 hours per week',
    workshopIdea: 'An introduction to brain signals', workshopPlan: 'Demo, activity, discussion',
    postCaption: 'Join our neurotech workshop', postApproach: 'Accessible beginner content', consent: 'yes', ...extras,
  })) form.set(key, value);
  return new Request('https://surreyneurotechsociety.org/api/committee-applications', { method: 'POST', headers: { origin }, body: form });
}

const send = (req = request(), options: { apiKey?: string; fromEmail?: string } = config) => handleCommitteeApplication(req, options, String(++address));
afterEach(() => { vi.useRealTimers(); vi.unstubAllGlobals(); vi.clearAllMocks(); });

describe('Neurotech committee applications', () => {
  it('sends role answers to the requested inbox', async () => {
    const fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: 'sent-1' })));
    vi.stubGlobal('fetch', fetch);
    expect((await send()).status).toBe(200);
    const mail = JSON.parse(fetch.mock.calls[0][1].body);
    expect(mail.to).toEqual(['joshhknott@gmail.com']);
    expect(mail.subject).toContain('Neurotech Society committee application');
    expect(mail.text).toContain('An introduction to brain signals');
  });

  it('rejects cross-origin and incomplete forms before sending', async () => {
    const fetch = vi.fn(); vi.stubGlobal('fetch', fetch);
    expect((await send(request('workshops-projects', {}, 'https://other.example'))).status).toBe(403);
    expect((await send(request('workshops-projects', { workshopIdea: '' }))).status).toBe(400);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('emails the private mock post as an attachment and removes the temporary upload', async () => {
    const bytes = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1, 2]);
    vi.mocked(get).mockResolvedValue({ statusCode: 200, blob: { size: bytes.byteLength, contentType: 'image/png' }, stream: new Response(bytes).body! } as Awaited<ReturnType<typeof get>>);
    vi.mocked(del).mockResolvedValue(undefined);
    const fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: 'sent-2' })));
    vi.stubGlobal('fetch', fetch);
    expect((await send(request('social-media-content', { mockPostUrl: postUrl }))).status).toBe(200);
    const mail = JSON.parse(fetch.mock.calls[0][1].body);
    expect(mail.attachments[0].filename).toBe('social-post-test-applicant.png');
    expect(del).toHaveBeenCalledWith(postUrl);
  });

  it('rejects unrelated upload URLs and missing delivery configuration', async () => {
    expect((await send(request('social-media-content', { mockPostUrl: 'https://attacker.example/file.png' }))).status).toBe(400);
    expect(get).not.toHaveBeenCalled();
    expect((await send(request(), {})).status).toBe(503);
  });

  it('stops accepting applications when the countdown ends', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(COMMITTEE_APPLICATIONS_CLOSE_AT));
    const fetch = vi.fn(); vi.stubGlobal('fetch', fetch);
    expect((await send()).status).toBe(410);
    expect(fetch).not.toHaveBeenCalled();
  });
});
