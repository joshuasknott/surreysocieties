# Design System Brief

This brief guides future frontend/design agents. The project goal is refinement and professionalisation, not a full rebuild. The three society sites should feel like part of one Surrey student-society ecosystem without becoming identical.

## Shared Design Principles

- Professional, student-led, credible: the sites should feel trustworthy enough for students, committee members, sponsors, and the Students' Union.
- Distinct but related: each society keeps its own visual language, but spacing, accessibility, navigation quality, CTA clarity, and content reliability should feel consistently high.
- Real data over theatre: events, committee, past committee, founding dates, links, and images should come from verified data or approved assets.
- Useful interactions only: interactive elements should help people understand the society, find events, join, or learn something relevant.
- Accessible by default: keyboard access, focus states, reduced motion, color contrast, alt text, and responsive layouts are non-negotiable.
- Small correct changes beat broad rewrites: keep existing architecture where reasonable and avoid unnecessary component churn.

## Anti-Patterns To Avoid

- Generic SaaS card clutter with interchangeable icon grids and vague slogans.
- Fake media, stock-event atmosphere, or public stock video dependence.
- Invented events, speakers, sponsors, partnerships, committee members, testimonials, attendance numbers, awards, or project outcomes.
- Dead CTAs, `href="#"`, coming-soon placeholders where known official links exist, or vague `Contact us` links without a target.
- Motion-heavy sections that ignore `prefers-reduced-motion` or trap keyboard/mouse users.
- Making all three sites share one identical template, hero layout, or visual motif.
- Replacing all imagery with large abstract graphics if society-owned photos later become available.

## Theme Requirements

AI Society:

- Keep the existing light/dark theme system in `apps/ai/src/styles/global.css` and `apps/ai/src/layouts/Layout.astro`.
- Preserve the clean technical palette: white/black surfaces, cyan, purple, graphite.
- Maintain localStorage theme persistence and pre-paint initialization.
- Ensure new AI components use `--ai-*` tokens rather than hard-coded theme-only colors.

Business Society:

- Add a real light/dark theme system, not just dark hero sections.
- Preserve the corporate/editorial identity: navy/slate, gold, serif display use, structured professional rhythm.
- Dark mode should feel premium and readable, not just inverted.
- CTAs should use a clear primary hierarchy, especially membership and union links.

Neurotech Society:

- Add a real light/dark theme system while preserving the bioluminescent/neurotechnology identity.
- Current site is effectively dark-only; light mode must still feel scientific and polished.
- Fix or replace undefined classes such as `glass-card`, `bg-accent`, `text-secondary`, `neural-wave-bg-dark`, and `neural-pathway`.
- 3D/animated hero work must degrade gracefully on low-power devices and reduced motion.

Admin:

- Current admin is light-only. If admin theming is scoped, prioritize usability over visual expression.
- Tables, forms, sidebars, alerts, and empty states must maintain strong contrast.
- Admin should be consistent across societies unless a clear reason exists to vary it.

## Motion And Accessibility Requirements

- Respect `prefers-reduced-motion` in all animations, videos, smooth scrolling, GSAP, Lenis, Three.js, and interactive prototypes.
- Avoid continuous animation that cannot be paused or reduced.
- Keyboard users must be able to operate nav menus, tabs, hotspots, theme toggles, and CTAs.
- Use visible focus states with adequate contrast in both light and dark themes.
- Keep semantic headings in order; avoid using visual size as the only hierarchy.
- Use real text instead of text baked into images.
- Use descriptive alt text for meaningful images; decorative images should have empty alt text or be hidden.
- Do not rely on hover-only interactions. Provide click and keyboard equivalents.
- Keep mobile layouts first-class; no horizontal overflow, unusable sidebars, or clipped CTAs.

## Components That Should Be Shared

Candidates for `packages/ui` or consistent copy/patterns:

- Shared `SiteHead` metadata conventions.
- Base page shell and skip-link behavior.
- Theme toggle pattern and pre-paint theme initialization, once generalized safely.
- Public empty states for no events and no committee records.
- Event card/list pattern that supports date, time, location, category, image, and registration URL.
- Committee member card pattern that supports name, role, bio, image, email, LinkedIn, current/past status.
- CTA link treatments for membership, Students' Union page, Instagram, LinkedIn, email.
- Admin form field patterns, alerts, table actions, and dashboard cards.
- Accessible tab/accordion patterns if repeated across sites.

Shared does not mean visually identical. Shared components should accept tokens/variants so each society keeps its identity.

## Components That Should Stay Society-Specific

AI-specific:

- AI Track Lab and its prototypes.
- Technical learning track storytelling.
- Cyan/purple graph/agent/automation motifs.

Business-specific:

- Editorial/corporate homepage structure.
- Careers, enterprise, networking, and speaker focus modules.
- Gold/navy professional CTA language and sponsorship treatment.

Neurotech-specific:

- Three.js or neural visual systems.
- Brain/BCI/bioluminescent interaction motifs.
- Research/focus-area educational interactions.

Admin-specific:

- Admin layouts should remain shared in behavior and usability; society-specific decoration should be minimal.

## Per-Society Visual Direction

AI Society:

- Personality: precise, modern, technical, welcoming, accessible to beginners.
- Visual language: clean surfaces, measured grid, cyan/purple accents, subtle data/graph motifs, restrained gradients.
- Avoid: cyberpunk overload, excessive neon, fake futuristic imagery, jargon-heavy visuals.
- Ideal feel: a credible AI learning community for students from any discipline.

Business Society:

- Personality: confident, professional, editorial, commercially aware, ambitious.
- Visual language: navy/slate, gold accents, serif display headlines, strong rule lines, structured sections, refined spacing.
- Avoid: generic startup SaaS dashboards, fake office stock imagery, overused handshake/city skyline visuals.
- Ideal feel: student professional network with real career value.

Neurotech Society:

- Personality: scientific, curious, experimental, human-centred, responsible.
- Visual language: deep/clean scientific surfaces, cyan/gold signal accents, neural/circuit motifs, controlled glow, lab-inspired structure.
- Avoid: uncontrolled sci-fi, illegible glow text, dark-only pages, overstated medical/research claims.
- Ideal feel: accessible gateway into neuroscience and technology.

## Per-Society Colour Palette Direction

AI:

- Light: white/off-white backgrounds, near-black text, cyan primary, purple secondary.
- Dark: near-black backgrounds, zinc surfaces, bright cyan primary, soft purple secondary.
- Use cyan for primary actions and purple for secondary emphasis.

Business:

- Light: off-white backgrounds, slate/navy text, gold accents, high-contrast navy sections.
- Dark: deep slate/navy backgrounds, warm gold accents, off-white text, muted slate cards.
- Use gold sparingly for primary actions, section rules, and active states.

Neurotech:

- Light: clean pale surfaces with deep blue/slate text, cyan/gold accents, subtle signal lines.
- Dark: deep void/navy surfaces, cyan and neural gold accents, restrained glow.
- Use cyan for technology/signal interactions and gold for warmth, emphasis, and CTAs.

## Interaction And Prototype Direction

AI:

- Keep interactions educational and explainable.
- AI Track Lab should show what each AI area means through concise prototypes, not opaque magic.
- Server-side AI output must fall back gracefully; interactions should remain useful when AI is disabled.
- Prioritize keyboard-operable tabs, clear labels, and human-readable explanations.

Business:

- Interactions should support decision-making: find events, understand value, join, contact, sponsor.
- Use editorial reveal, filters, timelines, or agenda interactions only if they make content easier to scan.
- Avoid gamified finance/startup cliches.
- Sponsorship interactions should be factual and not imply unverified sponsor packages.

Neurotech:

- Interactions can be more immersive, but must remain stable, accessible, and purposeful.
- 3D brain/neural visuals should educate and set tone; they must not block readability or core navigation.
- Hotspots need click/keyboard parity and text alternatives.
- Reduced-motion mode should disable heavy animation and show a static visual/fallback.

## Design Boundaries For Future Frontend Agents

- Do not redesign all pages from scratch unless a task explicitly scopes a redesign.
- Do not make the three sites identical.
- Do not create new global abstractions before verifying at least two sites need them.
- Do not change Convex/schema/data flow from a frontend task.
- Do not delete stock assets from a design task; use `MEDIA-02` after references are gone.
- Do not add unverified facts to make a design feel fuller.
- Do not hide missing real data behind fake-looking cards.
- Do not introduce a new dependency without checking the app package that imports it.
- Do not rely on browser globals for GSAP/ScrollTrigger unless the page actually imports or loads them.
- Do not ship theme work without checking both desktop and mobile in light and dark modes.

## Design Coherence Review Gates

These gates are mandatory review points in `TASK_LEDGER.md`.

- After homepages are redesigned, compare all three sites together.
- After subpages are redesigned, compare each site internally and across the full ecosystem.
- Before final QA, perform one final browser-based visual reconciliation.
- Reviews should preserve differentiation while correcting inconsistent spacing, CTA hierarchy, motion quality, theme behavior, accessibility, and visual polish.

Review task mapping:

- `DESIGN-REVIEW-01`: after homepage redesigns, run Gemini 3.1 Pro with browser inspection to compare all three homepages for cross-site coherence, quality bar, theme behavior, and visual differentiation.
- `DESIGN-REVIEW-02`: after subpage redesigns, run Gemini 3.1 Pro with browser inspection to review all public pages across all three sites for consistency within each society and coherence across the ecosystem.
- `DESIGN-REVIEW-03`: before final QA, run Gemini 3.1 Pro with browser inspection for final visual reconciliation, then hand findings to GPT 5.5 final QA.

Reviewers should inspect at least:

- Desktop and mobile.
- Light and dark themes where implemented.
- Homepage, About, Committee, Events, Join, and 404 pages for each public site.
- Admin dashboard if admin visual changes were made.
- Reduced-motion behavior for AI Track Lab, Business GSAP sections, and Neurotech Three.js/Lenis/GSAP interactions.

## Minimum Quality Bar

- No fake public data.
- No public stock image/video dependence after media tasks complete.
- No dead CTAs.
- Founding/established dates visible after data tasks complete.
- Events and committee pages are database-driven.
- Past committee is manageable and displayable after data tasks complete.
- Themes work across public sites.
- Admin remains usable and professional.
- Visual systems feel deliberate, not generated filler.
