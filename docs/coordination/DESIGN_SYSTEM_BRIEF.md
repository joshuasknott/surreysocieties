# Design System Brief

This brief guides future frontend/design agents. The project goal is refinement and professionalisation, not a full rebuild. The three society sites should feel like part of one Surrey student-society ecosystem without becoming identical.

Current product direction supersedes older theme guidance: AI Society is the only public society site that should keep light/dark theme switching. Business Society and Neurotech Society must not add or keep public theme toggles, `data-theme` switching, or localStorage theme preference systems.

Visual ambition hierarchy: AI Society should be the most visually overengineered, Neurotech Society should be second-most visually overengineered, and Business Society should be the most professional/basic.

## Shared Design Principles

- Professional, student-led, credible: the sites should feel trustworthy enough for students, committee members, sponsors, and the Students' Union.
- Distinct but related: each society keeps its own visual language, but spacing, accessibility, navigation quality, CTA clarity, and content reliability should feel consistently high.
- Real data over theatre: events, committee, past committee, founding dates, links, and images should come from verified data or approved assets.
- Useful interactions only: interactive elements should help people understand the society, find events, join, or learn something relevant.
- Visual complexity must be intentional and ordered: AI > Neurotech > Business.
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
- Adding or preserving Business/Neurotech public theme toggles, `data-theme` systems, or persisted light/dark preference scripts.
- Filling visual gaps with fake events, fake committee members, fake sponsors, fake speakers, fake equipment access, fake lab access, or invented impact claims.

## Theme Requirements

AI Society:

- Keep the existing light/dark theme system in `apps/ai/src/styles/global.css` and `apps/ai/src/layouts/Layout.astro`.
- Preserve the clean technical palette: white/black surfaces, cyan, purple, graphite.
- Maintain localStorage theme persistence and pre-paint initialization.
- Ensure new AI components use `--ai-*` tokens rather than hard-coded theme-only colors.

Business Society:

- Do not add a public light/dark theme system.
- Remove or revert any Business public theme toggle, `data-theme` switching, or localStorage theme preference system if one is found.
- Preserve a professional editorial identity: navy/slate, gold, restrained serif display use, structured rhythm, and premium publication-like polish.
- Business should be the most basic and professional site: refined, credible, and spacious rather than visually overengineered.
- Avoid SaaS/glass/card clutter, dashboard metaphors, generic startup gradients, and excessive decorative modules.
- CTAs should use a clear primary hierarchy, especially membership and union links.

Neurotech Society:

- Do not add a public light/dark theme system.
- Remove or revert any Neurotech public theme toggle, `data-theme` switching, or localStorage theme preference system if one is found.
- Neurotech should be the second-most visually overengineered site, behind AI and ahead of Business.
- Lean into an interactive brain/neural visual system: neural pathways, signal flow, brain/circuit motifs, BCI-inspired hotspots, and accessible educational micro-interactions.
- Preserve a scientific/neurotechnology identity without creating unverified research, lab, medical, or equipment-access claims.
- Fix or replace undefined classes such as `glass-card`, `bg-accent`, `text-secondary`, `neural-wave-bg-dark`, and `neural-pathway`.
- 3D/animated hero work must degrade gracefully on low-power devices and reduced motion.

Admin:

- Current admin is light-only. Do not use admin work as a reason to add public Business/Neurotech theme switching.
- Tables, forms, sidebars, alerts, and empty states must maintain strong contrast.
- Admin should be consistent across societies unless a clear reason exists to vary it.

## Motion And Accessibility Requirements

- Respect `prefers-reduced-motion` in all animations, videos, smooth scrolling, GSAP, Lenis, Three.js, and interactive prototypes.
- Avoid continuous animation that cannot be paused or reduced.
- Keyboard users must be able to operate nav menus, tabs, hotspots, AI theme toggles, and CTAs.
- Use visible focus states with adequate contrast in each site's implemented visual mode.
- Keep semantic headings in order; avoid using visual size as the only hierarchy.
- Use real text instead of text baked into images.
- Use descriptive alt text for meaningful images; decorative images should have empty alt text or be hidden.
- Do not rely on hover-only interactions. Provide click and keyboard equivalents.
- Keep mobile layouts first-class; no horizontal overflow, unusable sidebars, or clipped CTAs.

## Components That Should Be Shared

Candidates for `packages/ui` or consistent copy/patterns:

- Shared `SiteHead` metadata conventions.
- Base page shell and skip-link behavior.
- AI theme toggle pattern and pre-paint theme initialization should remain AI-specific unless a future task explicitly scopes shared admin theming.
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
- Visual language: the most visually overengineered of the three sites, with layered technical systems, data/graph motifs, cyan/purple accents, precise motion, and clear educational interactions.
- Avoid: cyberpunk overload, excessive neon, fake futuristic imagery, jargon-heavy visuals.
- Ideal feel: a credible AI learning community for students from any discipline.

Business Society:

- Personality: confident, professional, editorial, commercially aware, ambitious.
- Visual language: premium editorial polish with navy/slate, gold accents, restrained serif display headlines, strong rule lines, structured sections, and refined spacing.
- Avoid: generic startup SaaS dashboards, glass-card clutter, fake office stock imagery, overused handshake/city skyline visuals, and overbuilt visual effects.
- Ideal feel: student professional network with real career value.

Neurotech Society:

- Personality: scientific, curious, experimental, human-centred, responsible.
- Visual language: the second-most visually overengineered site, with deep/clean scientific surfaces, cyan/gold signal accents, neural/circuit motifs, controlled glow, brain/neural interaction, and lab-inspired structure.
- Avoid: uncontrolled sci-fi, illegible glow text, dark-only pages, overstated medical/research claims.
- Ideal feel: accessible gateway into neuroscience and technology.

## Per-Society Colour Palette Direction

AI:

- Light: white/off-white backgrounds, near-black text, cyan primary, purple secondary.
- Dark: near-black backgrounds, zinc surfaces, bright cyan primary, soft purple secondary.
- Use cyan for primary actions and purple for secondary emphasis.

Business:

- Single public visual mode: off-white backgrounds, slate/navy text, gold accents, high-contrast navy sections where useful.
- Use gold sparingly for primary actions, section rules, and active states.
- Do not add Business `data-theme` palettes or theme preference persistence.

Neurotech:

- Single public visual mode: deep/clean scientific surfaces with deep blue/slate text, cyan/gold accents, signal lines, and restrained glow.
- Use cyan for technology/signal interactions and gold for warmth, emphasis, and CTAs.
- Do not add Neurotech `data-theme` palettes or theme preference persistence.

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
- Do not add public theme work outside AI. For AI theme work, check both desktop and mobile in light and dark modes.
- Business redesign agents own professional editorial polish only; they must not add public theme toggles, `data-theme`, localStorage theme scripts, fake sponsors, or fake speaker/event content.
- Neurotech redesign agents own the interactive brain/neural visual direction; they must not add public theme toggles, `data-theme`, localStorage theme scripts, fake equipment access, fake lab access, or fake research claims.
- AI redesign agents own the most visually overengineered public experience and must preserve AI theme switching, server-side AI safety boundaries, and honest fallback behavior.

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
- AI light and dark themes; Business and Neurotech in their single public visual modes with no public theme toggle.
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
- AI public theme switching works.
- Business and Neurotech do not expose public theme switching or `data-theme` systems.
- Admin remains usable and professional.
- Visual systems feel deliberate, not generated filler.
