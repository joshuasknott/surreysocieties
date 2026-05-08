# Content And SEO Brief

This brief coordinates copy, IA, SEO, links, and fact handling across the three society websites. The project goal is refinement and professionalisation, not a full rebuild.

## No-Invented-Facts Rule

Do not invent or imply facts that have not been verified. This includes:

- Committee names, photos, bios, roles, or past committee records.
- Event titles, dates, speakers, locations, attendance numbers, sponsors, or outcomes.
- Membership fees or benefits not confirmed by the Students' Union or society leads.
- Partnerships, industry relationships, alumni involvement, awards, research access, lab access, equipment ownership, or project successes.
- Claims that a society is the first, largest, official research group, or professionally affiliated unless verified.

Acceptable placeholder language:

- `Events will appear here once confirmed.`
- `Committee details will be published once confirmed.`
- `Membership is handled through Surrey Students' Union.`

Avoid placeholder language where known data exists. The Phase 0 audit already has verified links and emails.

## Canonical Known Society Info

Use this data until a later research pack supersedes it.

| Society | Established | Instagram | Email | Union page | Membership | LinkedIn |
| --- | --- | --- | --- | --- | --- | --- |
| Surrey Artificial Intelligence Society | 2025 | `https://www.instagram.com/surrey.ai.ds/` | `ussu.aianddatascience@surrey.ac.uk` | `https://surreyunion.org/your-activity/clubs-and-societies-a-z/ai-and-data-science-society` | `https://surreyunion.org/shop/ai-and-data-science-society/293e762b-01b8-46f4-a541-2260e4d9ec4f` | N/A for now |
| Surrey Business Society | 2021 | `https://www.instagram.com/surreybusinesssociety` | `ussu.bizsoc@surrey.ac.uk` | `https://surreyunion.org/your-activity/clubs-and-societies-a-z/business-society` | `https://surreyunion.org/shop/business-society/5c580cdd-8641-44e0-acd6-69d9545eacdb` | `https://www.linkedin.com/company/surreybusinesssociety/` |
| Surrey Neurotech Society | 2024 | `https://www.instagram.com/surreyneurotech/` | `ussu.neurotechsoc@surrey.ac.uk` | `https://surreyunion.org/your-activity/clubs-and-societies-a-z/neurotech-society` | `https://surreyunion.org/shop/neurotech-society/d5784e49-49f7-4bd4-a66c-b4f3971103af` | `https://www.linkedin.com/company/surrey-neurotech/posts/?feedView=all` |

## Society-Specific Messaging Direction

AI Society:

- Core promise: make AI understandable, practical, and responsible for Surrey students across disciplines.
- Tone: clear, modern, technical but beginner-friendly.
- Emphasize: learning, building, responsible AI, interdisciplinary access, project experimentation.
- Avoid: hype, replacing human judgment, overclaiming technical depth, fake industry connections.

Business Society:

- Core promise: help Surrey students develop professional confidence, commercial awareness, networks, and career direction.
- Tone: ambitious, polished, direct, professional.
- Emphasize: careers, enterprise, networking, skills, commercial thinking, inclusive access beyond business courses.
- Avoid: generic corporate cliches, fake sponsor/partner claims, vague `future leaders` language without substance.

Neurotech Society:

- Core promise: provide an accessible student community for exploring neuroscience, brain-computer interfaces, technology, ethics, and human-centred innovation.
- Tone: curious, scientific, responsible, interdisciplinary.
- Emphasize: neuroscience, BCIs, signal processing, research literacy, ethics, accessibility, beginner-friendly learning.
- Avoid: medical claims, lab/research access claims, equipment ownership claims, sci-fi overstatement.

## Pillar And Stream IA

AI Society pillars:

- Learn: beginner-friendly AI, ML, NLP, generative AI, computer vision.
- Build: hackathons, build nights, projects, prototypes.
- Discuss: ethics, policy, safety, societal impact.
- Connect: students from all disciplines, careers and industry awareness when verified.
- Experiment: AI Track Lab and interactive demos as learning tools.

Business Society pillars:

- Careers: graduate roles, internships, CVs, interviews, commercial awareness.
- Enterprise: startups, founders, ideation, pitching, entrepreneurship.
- Networking: peers, alumni, professionals when verified.
- Skills: presentation, negotiation, leadership, practical workshops.
- Community: social events and interdisciplinary membership.

Neurotech Society pillars:

- Neuroscience foundations: brain, cognition, neural systems.
- Brain-computer interfaces: EEG, signal processing, interface concepts.
- Research literacy: reading groups, journals, current developments.
- Human-centred ethics: accessibility, wellbeing, privacy, responsible innovation.
- Hands-on exploration: projects and demos only when verified or framed as future opportunities.

## Page-Level Copy Goals

Home:

- Explain the society's purpose in one clear hero statement.
- Surface correct primary CTAs: Join, Events, and relevant social/contact links.
- Show real upcoming events and real active committee data if available.
- If no real events/committee exist, use honest empty states or neutral programme descriptions.
- Avoid hard-coded fake event previews and `Name TBC` grids.
- Show established/founding date once data task is complete.

About:

- Explain mission, who the society is for, what members can expect, and principles.
- Keep copy specific to each society's domain.
- Include established/founding date once data task is complete.
- Avoid duplicated text and formatting artifacts.
- For Neurotech, fix the duplicated mission paragraph and mojibake in `apps/neurotech/src/pages/about.astro`.

Committee:

- Display current committee from Convex active committee records.
- Display past committee once the model exists.
- Do not invent names or use fake people.
- If empty, explain that confirmed committee details will appear once available.
- Include a clear route to join or learn about committee elections without overclaiming process details.

Events:

- Display published Convex events only.
- Include date, time, location, category, description, registration/membership link where available.
- Use honest empty states for no events.
- Avoid event-like placeholders that look scheduled.
- Include a member suggestion/contact CTA with a real target.

Join:

- Make membership through Surrey Students' Union the primary CTA.
- Use the known membership URL for each society.
- Include union page as secondary context.
- Include correct email and social links.
- Explain who can join and what membership gives them without inventing fees or unverified perks.
- Hide unavailable links such as AI LinkedIn rather than using dead placeholders.

Admin:

- Copy should be operational and clear, not marketing-heavy.
- Admin settings should clearly distinguish account management from society metadata/settings.
- Invite flow must explain manual link sharing until email sending exists.
- Validation and error messages should be human-readable.

## SEO Opportunities

Shared:

- Keep unique page titles with society name suffixes.
- Write unique meta descriptions for Home, About, Committee, Events, Join, and 404 pages.
- Ensure canonical URLs use each app's configured site domain.
- Add or supply OG images per site once stock media is replaced or approved social share assets exist.
- Keep admin routes `noindex, nofollow`.
- Consider sitemap and robots support after routing is stable.
- Use structured data only if facts are verified and implementation is scoped.
- Use consistent `University of Surrey`, `Surrey Students' Union`, and society names.

AI SEO topics:

- Surrey Artificial Intelligence Society.
- AI and Data Science Society if aligned with union naming.
- AI workshops, machine learning, generative AI, responsible AI, student society, University of Surrey.

Business SEO topics:

- Surrey Business Society.
- Business society, careers, entrepreneurship, networking, professional development, University of Surrey.

Neurotech SEO topics:

- Surrey Neurotech Society.
- Neurotechnology, neuroscience, brain-computer interfaces, BCI, EEG, student society, University of Surrey.

Internal linking:

- Home should link to Join and Events.
- About should link to Join and Events where natural.
- Committee should link to Join for elections/volunteering interest.
- Events should link to Join/contact for updates and suggestions.
- Footer should include key public pages and verified external links.

## TODO Markers For Later Research Pack

Create or update a research pack before writing copy that depends on these facts:

- TODO: Confirm current committee names, roles, bios, photos, emails, and LinkedIn links for each society.
- TODO: Confirm past committee years/sessions and member records.
- TODO: Confirm upcoming event schedule, event owners, registration links, rooms, speaker names, and descriptions.
- TODO: Confirm membership fee and any eligibility details shown on Students' Union shop pages.
- TODO: Confirm society-owned photos/videos approved for public use.
- TODO: Confirm whether Business has sponsorship packages or sponsor contacts.
- TODO: Confirm whether Neurotech has access to specific EEG/BCI equipment before making equipment claims.
- TODO: Confirm whether AI Society should publicly use `AI and Data Science Society` naming in any SEO or union references.
- TODO: Confirm any official brand guidelines from societies or Students' Union.

## Link And CTA Rules

- No `href="#"` on public CTAs.
- No `coming soon` text where a verified URL exists.
- External links should use `target="_blank"` and `rel="noopener noreferrer"` where appropriate.
- Emails should use `mailto:` with the known official inbox.
- If a channel is N/A, hide it or label it as unavailable without a link.
- Primary Join CTA should point to the Students' Union membership URL.
- Secondary society context CTA can point to the Students' Union society page.
- Social CTAs should use official Instagram and LinkedIn where known.
- Admin invitation links must point to an implemented route before being shown as shareable.
- If an event has `registrationUrl`, event cards should use it; otherwise use membership/join only if that is honest.
- Do not link to generic `https://surreyunion.org/` where a society-specific union page is known.

## Current High-Priority Copy/SEO Fixes

- Fix `apps/ai/src/pages/join.astro` wrong email `su.ai@surrey.ac.uk` to `ussu.aianddatascience@surrey.ac.uk`.
- Replace Business dead footer links in `apps/business/src/layouts/Layout.astro`.
- Replace Business and Neurotech membership `href="#"` CTAs.
- Replace coming-soon social/contact copy where known official links exist.
- Remove or reframe Business and Neurotech homepage hard-coded event/committee placeholders.
- Add established dates visibly once schema/config support exists.
- Fix Neurotech duplicated/mojibake mission copy.
