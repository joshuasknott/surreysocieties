# Final QA Checklist

Use this checklist for final reconciliation after implementation, design reviews, and build fixes. The final QA owner should mark each item, record commands run, and list residual risks.

## Preconditions

- [ ] `AUDIT_PACK.md`, `TASK_LEDGER.md`, `DESIGN_SYSTEM_BRIEF.md`, and `CONTENT_AND_SEO_BRIEF.md` have been read.
- [ ] All relevant task handoff notes have been reviewed.
- [ ] `DESIGN-REVIEW-01` completed after homepage redesigns.
- [ ] `DESIGN-REVIEW-02` completed after subpage redesigns.
- [ ] `DESIGN-REVIEW-03` completed before final GPT 5.5 QA.
- [ ] Known society facts have not been superseded by undocumented assumptions.

## Data And Content

- [ ] No mock public events remain.
- [ ] No fake committee names, fake committee images, or `Name TBC` public committee grids remain.
- [ ] No invented speakers, sponsors, partners, equipment access, lab access, attendance numbers, awards, or project outcomes appear.
- [ ] Public events are driven by Convex published events.
- [ ] Public current committee pages are driven by Convex active committee data.
- [ ] Past committee is manageable in admin and displayed publicly if the past committee task was implemented.
- [ ] Empty event states are honest and do not look like scheduled events.
- [ ] Empty committee states are honest and do not look like real people.
- [ ] Founding/established dates are visible for AI 2025, Business 2021, and Neurotech 2024.
- [ ] Neurotech duplicated/mojibake mission text is fixed.

## Links And CTAs

- [ ] No public `href="#"` links remain.
- [ ] AI email is `ussu.aianddatascience@surrey.ac.uk` everywhere.
- [ ] Business email is `ussu.bizsoc@surrey.ac.uk` everywhere.
- [ ] Neurotech email is `ussu.neurotechsoc@surrey.ac.uk` everywhere.
- [ ] AI Instagram links to `https://www.instagram.com/surrey.ai.ds/`.
- [ ] Business Instagram links to `https://www.instagram.com/surreybusinesssociety`.
- [ ] Neurotech Instagram links to `https://www.instagram.com/surreyneurotech/`.
- [ ] AI LinkedIn is hidden or marked unavailable without a dead link.
- [ ] Business LinkedIn links to `https://www.linkedin.com/company/surreybusinesssociety/`.
- [ ] Neurotech LinkedIn links to `https://www.linkedin.com/company/surrey-neurotech/posts/?feedView=all`.
- [ ] Each Join primary CTA points to the correct Students' Union membership URL.
- [ ] Each society union/context link points to the correct Students' Union society page.
- [ ] Footer links work on all three public sites.
- [ ] Event registration links use event-specific `registrationUrl` where available.
- [ ] Admin invitation links point to an implemented route and acceptance flow.

## Media And Assets

- [ ] No public stock image/video dependence remains after media replacement tasks.
- [ ] No referenced media files are missing.
- [ ] Logos still work for all sites.
- [ ] Favicons still work for all sites.
- [ ] Uploaded event images render correctly where present.
- [ ] Uploaded committee images render correctly where present.
- [ ] Image alt text is meaningful for content images and empty/decorative for decoration.
- [ ] Reduced-motion mode does not autoplay or emphasize heavy background videos/animations.
- [ ] Removed media files were verified unreferenced before deletion.

## Themes And Visual Coherence

- [ ] AI light theme works.
- [ ] AI dark theme works.
- [ ] AI public theme toggle persists preference and initializes before paint without unreadable flash.
- [ ] Business has no public theme toggle, `data-theme` switching, or localStorage theme preference system.
- [ ] Business uses a single polished professional/editorial visual mode with strong contrast.
- [ ] Neurotech has no public theme toggle, `data-theme` switching, or localStorage theme preference system.
- [ ] Neurotech uses a single scientific brain/neural visual mode with strong contrast.
- [ ] Admin theme behavior matches the implemented admin theme scope.
- [ ] Theme preference persists only where designed: AI public theme switching, and admin only if explicitly implemented.
- [ ] Theme initialization does not flash unreadable colors before paint where theme switching exists.
- [ ] Text contrast passes visually in each implemented visual mode.
- [ ] CTA hierarchy is clear on every public page.
- [ ] Cross-site ecosystem feels coherent without making the sites identical.
- [ ] Visual hierarchy is clear: AI is most visually overengineered, Neurotech second-most, Business most professional/basic.
- [ ] Spacing, heading scale, and section rhythm are internally consistent within each site.

## Admin Dashboards

- [ ] `/admin/login` works for all three sites.
- [ ] Protected admin and owner access works as expected.
- [ ] Users without membership cannot access another society admin area.
- [ ] Dashboard stats load and are accurate enough for current data.
- [ ] Event create/edit/delete works.
- [ ] Committee create/edit/delete or archive works.
- [ ] Past committee management works if implemented.
- [ ] Image upload/storage works if implemented.
- [ ] Settings page supports the intended society metadata/account settings scope.
- [ ] Admin invite flow works or clearly states manual limitations.
- [ ] Admin tables and forms are usable on mobile.
- [ ] Admin noindex/no follow metadata remains in place.

## Responsive QA

- [ ] AI Home, About, Committee, Events, Join, and 404 work on mobile.
- [ ] Business Home, About, Committee, Events, Join, and 404 work on mobile.
- [ ] Neurotech Home, About, Committee, Events, Join, and 404 work on mobile.
- [ ] Public nav menus work on mobile for all sites.
- [ ] No horizontal overflow on common mobile widths.
- [ ] CTAs remain tappable and visible.
- [ ] Tables/forms in admin do not overflow unusably.
- [ ] Hero sections do not hide key text below the fold on small screens.

## Accessibility QA

- [ ] Keyboard navigation reaches all interactive elements.
- [ ] Focus states are visible in each implemented visual mode.
- [ ] Nav toggles expose correct labels and expanded state.
- [ ] Tabs/hotspots/prototypes have keyboard or non-hover alternatives.
- [ ] `prefers-reduced-motion` is respected by AI Track Lab, Business GSAP, Neurotech GSAP/Lenis/Three.js, and videos.
- [ ] Headings are semantically ordered.
- [ ] Forms have labels and useful validation messages.
- [ ] Color is not the only way to understand state.
- [ ] Decorative SVGs/icons are hidden from assistive tech where appropriate.
- [ ] External links and mail links have understandable link text.

## Performance QA

- [ ] Heavy videos have been removed, replaced, or justified with optimized sources.
- [ ] Images are optimized through Astro assets or approved static optimized files.
- [ ] Three.js/GSAP/Lenis usage is limited to pages that need it.
- [ ] Business declares any dependency it imports directly.
- [ ] No unnecessary client scripts are added to static pages.
- [ ] Public pages load useful content even if optional animations fail.
- [ ] Largest visible media does not dominate page weight without reason.

## Build, Lint, And Tests

Commands to run near final QA:

```bash
npm run build:ai
npm run build:business
npm run build:neurotech
npm run build:all
```

Checklist:

- [ ] `npm run build:ai` passes.
- [ ] `npm run build:business` passes.
- [ ] `npm run build:neurotech` passes.
- [ ] `npm run build:all` passes.
- [ ] If lint scripts were added, lint passes.
- [ ] If test scripts were added, tests pass.
- [ ] If lint/test scripts still do not exist, final report explicitly states that they are unavailable.
- [ ] Convex generated types are current if schema/functions changed.

## Security And Secrets

- [ ] No secrets are committed or exposed in docs, source, HTML, or client bundles.
- [ ] `GEMINI_API_KEY` remains server-side only.
- [ ] `CLERK_SECRET_KEY` remains server-side only.
- [ ] Public Clerk publishable keys are the only Clerk keys exposed to clients.
- [ ] Convex auth uses server-derived identity for authorization.
- [ ] No admin action accepts a user ID for authorization decisions without server-side auth checks.
- [ ] CSRF protection remains on admin form POSTs where relevant.
- [ ] Admin routes remain protected by middleware.

## AI Fallbacks

- [ ] AI Track Lab works when `AI_FEATURES_ENABLED` is not `true`.
- [ ] AI Track Lab works when `GEMINI_API_KEY` is missing.
- [ ] AI Track Lab handles Gemini timeout/failure gracefully.
- [ ] AI outputs are bounded and rendered safely.
- [ ] UI does not claim AI output is live if fallback data is used and that distinction matters.
- [ ] No AI feature exists on Business or Neurotech unless explicitly scoped and reviewed.

## Final Reporting Template

```md
Final QA owner:
Date:
Branch/commit:
Commands run:
Browser/device/theme matrix:
Checklist result:
Files changed during QA:
Remaining risks:
Recommended follow-ups:
```
