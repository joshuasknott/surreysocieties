import { describe, expect, it } from 'vitest';
import { applySecurityHeaders } from './securityHeaders.js';

describe('applySecurityHeaders', () => {
  it('sets baseline headers when missing', () => {
    const response = applySecurityHeaders(new Response('ok'));
    expect(response.headers.get('Strict-Transport-Security')).toBe(
      'max-age=63072000; includeSubDomains',
    );
    expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff');
    expect(response.headers.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
    expect(response.headers.get('Permissions-Policy')).toBe(
      'camera=(), microphone=(), geolocation=()',
    );
    expect(response.headers.get('X-Frame-Options')).toBe('SAMEORIGIN');
  });

  it('does not overwrite headers already present', () => {
    const response = new Response('ok', {
      headers: { 'X-Frame-Options': 'DENY' },
    });
    applySecurityHeaders(response);
    expect(response.headers.get('X-Frame-Options')).toBe('DENY');
    expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff');
  });
});
