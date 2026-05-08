# Task Ledger

This ledger coordinates future Opencode and Antigravity sessions. It is intentionally explicit because future agents may not share memory.

Status values:

- `Done`: completed in a prior phase.
- `Pending`: not started.
- `Blocked`: cannot start until dependency is resolved.
- `In progress`: actively owned by one session.
- `Review`: implementation complete but needs verification.

## Global Coordination Rules

- Read `AUDIT_PACK.md`, this ledger, `DESIGN_SYSTEM_BRIEF.md`, `CONTENT_AND_SEO_BRIEF.md`, and `FINAL_QA_CHECKLIST.md` before editing product files.
- For Convex work, read `AGENTS.md` and `convex/_generated/ai/guidelines.md` first.
- Do not redesign pages in data/link-only tasks.
- Do not edit backend/schema files unless the task explicitly owns Convex.
- Do not delete media until replacement references are confirmed and QA passes.
- Do not invent events, committee members, partnerships, sponsors, achievements, or dates.
- Use the known society facts in `AUDIT_PACK.md` unless a later research pack provides verified replacements.
- Every task must leave a handoff note using the template at the end of this file.

## File Ownership Rules

- `docs/coordination/**`: coordination/documentation owner only.
- `convex/**`: one backend or migration owner at a time.
- `packages/admin/**`: shared admin owner or metadata/link owner only; coordinate before changing shared exports.
- `packages/ui/**`: shared UI owner only; avoid app-specific styling here unless the component is genuinely shared.
- `apps/ai/src/**`: AI site owner only for site-specific changes.
- `apps/business/src/**`: Business site owner only for site-specific changes.
- `apps/neurotech/src/**`: Neurotech site owner only for site-specific changes.
- `apps/*/public/**`: media owner only; delete nothing until references are removed and QA confirms.
- `apps/*/src/pages/admin/**`: admin owner only; coordinate with backend owner when forms depend on schema changes.
- If two tasks need the same file, run them sequentially and record the handoff.

## Dependency Gates

- Backend schema/data tasks must complete before public/admin UI tasks consume new fields.
- Canonical link data must be wired before SEO/CTA polish.
- Media replacement must be referenced before stock files are removed.
- Theme token work must complete before large visual polish passes.
- Homepage redesigns must complete before `DESIGN-REVIEW-01`.
- Subpage redesigns must complete before `DESIGN-REVIEW-02`.
- Final implementation and review fixes must complete before `DESIGN-REVIEW-03` and final GPT 5.5 QA.

## Tasks

| Task ID | Title | Site affected | Likely files affected | Recommended agent/model type | Dependencies | Parallel/sequential status | Acceptance criteria | Status | Handoff notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DOC-00 | Phase 0 coordination docs | All | `docs/coordination/AUDIT_PACK.md`, `TASK_LEDGER.md`, `DESIGN_SYSTEM_BRIEF.md`, `CONTENT_AND_SEO_BRIEF.md`, `FINAL_QA_CHECKLIST.md` | GPT 5.5 documentation agent | None | Sequential, completed before implementation | Five docs exist and are self-contained | Done | Update docs only when new facts or architecture decisions land |
| DOC-01 | Maintain task ledger after each implementation batch | All | `docs/coordination/TASK_LEDGER.md` | GPT 5.5 documentation or coordination agent | Any completed task | Sequential after task completion | Status, dependencies, and handoff notes are current | Pending | Do not change product code in this task |
| DATA-01 | Establish canonical society metadata source | All | `packages/admin/src/config.ts`, `convex/seed.ts`, possibly `convex/societies.ts`, public layouts/pages | GPT 5.5 implementation agent with Convex awareness | Read Convex guidelines | Sequential before link/SEO tasks | Known emails, Instagram, LinkedIn, union pages, membership URLs are represented consistently without stale blanks | Done | Phase 1A decision: Convex `societies` is runtime source of truth; `packages/admin/src/config.ts` mirrors canonical values as static fallback/admin convenience |
| DATA-02 | Add established/founding dates | All | `convex/schema.ts`, `convex/seed.ts`, `convex/societies.ts`, `packages/admin/src/types.ts`, public about/home/join pages | Convex migration helper plus GPT 5.5 | DATA-01 | Sequential backend first, then frontend can parallel by site | AI 2025, Business 2021, Neurotech 2024 are stored and visibly rendered on appropriate public pages | Done | Optional `establishedYear` added; no schema narrowing/backfill migration required. Existing deployments should run `seed:syncCanonicalSocietyMetadata` only as an authenticated owner; it preserves noncanonical socials while syncing canonical metadata |
| DATA-03 | Model past committees | All | `convex/schema.ts`, `convex/committee.ts`, maybe new Convex module, admin committee pages, public committee pages | Convex migration helper plus admin/frontend agents | DATA-02 recommended | Sequential backend first; admin/public UI after | Active and past committee can be managed separately and displayed without abusing `isActive` | Done | Phase 1B model decision: added separate `pastCommitteeMembers` table keyed by `societyId` and `yearLabel`; no `isActive` reuse |
| DATA-04 | Remove homepage fake event/committee public data | Business, Neurotech | `apps/business/src/pages/index.astro`, `apps/neurotech/src/pages/index.astro` | GPT 5.5 or Antigravity frontend agent | None, but DATA-01 helps links | Can run in parallel per site if file ownership is separate | Homepages no longer hard-code event-like items or `Name TBC` committee tiles; use Convex data or neutral non-data content | Done | Phase 1B: fake event/committee data replaced with Convex queries and honest empty states; both builds pass |
| LINK-01 | Wire canonical external links and emails | All | `packages/admin/src/config.ts`, `convex/seed.ts`, `apps/*/src/layouts/Layout.astro`, `apps/*/src/pages/join.astro` | GPT 5.5 content/link agent | DATA-01 preferred | Sequential if shared config/seed touched; per-site page edits can parallel after shared data | No dead `href="#"`; correct AI email; known Instagram, membership, union, and LinkedIn links are wired or hidden if N/A | Review | Phase 1A partial: shared config/seed plus obvious footer/join placeholders were wired; broader page-level CTA/copy polish remains for later content tasks |
| LINK-02 | Fix admin invite acceptance flow | All admin | `apps/*/src/pages/admin/admins/index.astro`, new `apps/*/src/pages/admin/invite/accept.astro` or alternate route, `convex/memberships.ts` if needed | GPT 5.5 admin/backend agent | Read Convex guidelines | Sequential across all admin apps to keep flow consistent | Rendered invite link points to an existing route; invited matching email can accept; expired/revoked cases handled | Pending | Do not send emails unless explicitly scoped |
| ADMIN-01 | Make admin settings useful for society metadata | All admin | `apps/*/src/pages/admin/settings.astro`, `convex/settings.ts`, `packages/admin/src/validation/**` | GPT 5.5 admin agent | DATA-01 | Sequential after metadata source decision | Admins can view/edit allowed society metadata safely; account settings remain accessible | Pending | Coordinate with LINK-01 to avoid conflicting link edits |
| ADMIN-02 | Improve admin dashboard usability | All admin | `apps/*/src/layouts/AdminLayout.astro`, `apps/*/src/styles/admin.css`, admin index/list pages | GPT 5.5 admin UX agent | LINK-02 optional | Sequential per shared admin pattern; can parallel per app only after pattern agreed | Dashboard works on desktop/mobile, tables usable, sidebar accessible, empty states clear | Pending | Do not change data model in this task |
| ADMIN-03 | Add image upload/storage flow | All admin/public | `convex/schema.ts`, new Convex storage functions, `apps/*/src/pages/admin/events/**`, `apps/*/src/pages/admin/committee/**`, public renderers | Convex migration helper plus GPT 5.5 admin agent | DATA-01; storage design approved | Sequential backend first; then admin/public UI | Event and committee images can be uploaded, rendered, and retained; URL/path-only dependency removed or documented as fallback | Pending | Follow Convex storage guidelines; do not use deprecated metadata calls |
| ADMIN-04 | Add past committee admin management | All admin/public | `convex/committee.ts`, `apps/*/src/pages/admin/committee/**`, public committee pages | Convex migration helper plus admin/frontend agents | DATA-03 | Sequential after backend model | Admin can create/edit/archive committee records by year/session; public pages show current and past committees | Done | Added `/admin/past-committee` list/create/edit/delete across all apps and public past committee sections with honest empty states |
| THEME-01 | Implement Business light/dark theme | Business | `apps/business/src/styles/global.css`, `apps/business/src/layouts/Layout.astro`, Business public pages as needed | Antigravity frontend or GPT 5.5 frontend agent | None; coordinate with BUS-01 | Sequential within Business layout/styles | Business has proper light/dark theme, persisted preference, accessible toggle, and no broken contrast | Pending | Preserve corporate editorial identity |
| THEME-02 | Implement Neurotech light/dark theme and fix undefined classes | Neurotech | `apps/neurotech/src/styles/global.css`, `apps/neurotech/src/layouts/Layout.astro`, Neurotech public pages | Antigravity frontend or GPT 5.5 frontend agent | None; coordinate with NEU-01/NEU-02 | Sequential within Neurotech layout/styles | Neurotech has theme toggle, light/dark token system, defined classes or replacements for `glass-card`, `bg-accent`, `text-secondary`, `neural-wave-bg-dark`, `neural-pathway` | Pending | Preserve neurotechnology visual direction without dark-only lock-in |
| THEME-03 | Add admin theme support | All admin | `apps/*/src/styles/admin.css`, `apps/*/src/layouts/AdminLayout.astro` | GPT 5.5 admin frontend agent | ADMIN-02 preferred | Sequential across admin shared duplication | Admin supports light/dark or system theme with readable forms, tables, and sidebars | Pending | Keep noindex admin head metadata |
| MEDIA-01 | Replace public stock image/video dependence | All public | `apps/*/public/videos/**`, `apps/*/src/assets/images/**`, public pages using media, `packages/ui/src/components/BackgroundVideo.astro` if needed | Antigravity visual agent plus GPT 5.5 implementation agent | DATA-04, THEME-01, THEME-02 recommended | Sequential per site; do not delete until MEDIA-02 | Public pages no longer require stock/public videos or stock-like photos; approved replacements or non-media systems are in use | Pending | List every replaced reference in handoff |
| MEDIA-02 | Remove unused media after replacement | All public | `apps/*/public/videos/**`, unused `apps/*/src/assets/images/**` | GPT 5.5 cleanup agent | MEDIA-01 and QA build pass | Sequential cleanup only | Only unreferenced stock assets removed; logos and uploaded-media paths unaffected; build passes | Pending | Must run search for references before deleting any file |
| AI-01 | Review AI Track Lab integration and safety | AI | `apps/ai/src/pages/api/ai/track-lab.ts`, `apps/ai/src/lib/server/ai/**`, Track Lab components | GPT 5.5 backend/frontend agent | None | Sequential within AI files | `GEMINI_API_KEY` remains server-only; fallbacks work; errors are graceful; prompts remain bounded and validated | Pending | Do not add client-side AI keys |
| AI-02 | Improve AI Track Lab UX copy and fallback transparency | AI | `apps/ai/src/components/home/track-lab/**`, `apps/ai/src/data/aiTracks.ts` | GPT 5.5 frontend/content agent | AI-01 | Can run after AI-01 | AI feature is useful, honest, accessible, and does not overclaim | Pending | Keep educational/prototype nature clear |
| BUS-01 | Professionalize Business homepage | Business | `apps/business/src/pages/index.astro`, maybe Business components if created | Antigravity frontend agent or GPT 5.5 frontend agent | DATA-04, LINK-01 preferred; THEME-01 may run first | Sequential with THEME-01 if same files | Homepage uses real/neutral data, no fake events/committee, correct CTAs, responsive and polished | Pending | Preserve Business distinction; no generic SaaS layout |
| BUS-02 | Refine Business subpages | Business | `apps/business/src/pages/about.astro`, `events.astro`, `committee.astro`, `join.astro`, `404.astro` | GPT 5.5 content/frontend agent | LINK-01, THEME-01 | Can run parallel with NEU-02 and AI subpage tasks if file ownership separate | Subpages have consistent IA, correct links, no placeholders where known facts exist, responsive theme behavior | Pending | Avoid claiming unverified sponsors, speakers, or outcomes |
| NEU-01 | Professionalize Neurotech homepage | Neurotech | `apps/neurotech/src/pages/index.astro`, maybe Neurotech components if created | Antigravity frontend agent or GPT 5.5 frontend agent | DATA-04, LINK-01 preferred; THEME-02 may run first | Sequential with THEME-02 if same files | Homepage uses real/neutral data, no fake events/committee, correct CTAs, accessible 3D/motion behavior | Pending | Preserve scientific/biotech identity and reduce motion safely |
| NEU-02 | Refine Neurotech subpages and fix content defects | Neurotech | `apps/neurotech/src/pages/about.astro`, `events.astro`, `committee.astro`, `join.astro`, `404.astro`, styles if needed | GPT 5.5 content/frontend agent | LINK-01, THEME-02 | Can run parallel with BUS-02 and AI subpage tasks if file ownership separate | Duplicate/mojibake text fixed; undefined classes resolved; links and copy correct; pages cohesive | Pending | Do not invent research achievements or lab access details |
| AI-03 | Refine AI public subpages | AI | `apps/ai/src/pages/about.astro`, `events.astro`, `committee.astro`, `join.astro`, `404.astro`, AI home components | GPT 5.5 content/frontend agent | LINK-01, AI-01 optional | Can run parallel with BUS-02 and NEU-02 if file ownership separate | Correct email/links, established date visible, theme remains working, no fake data | Pending | Maintain AI's clean technical visual language |
| SEO-01 | Add cross-site SEO/content metadata improvements | All public | `packages/ui/src/components/SiteHead.astro`, `apps/*/src/layouts/Layout.astro`, public pages, possible sitemap/robots files | GPT 5.5 SEO/content agent | LINK-01, DATA-02 | Sequential if shared head/layout touched | Titles/descriptions/canonicals/OG/Twitter metadata are complete; admin remains noindex; no invented facts | Pending | Record search snippets before/after where practical |
| SEO-02 | Create research TODO pack for unverified claims | All | `docs/coordination/CONTENT_AND_SEO_BRIEF.md` or new docs under `docs/coordination/` | Research/content agent | None | Can run any time before copy finalization | Unknowns are clearly listed: committees, events, fees, sponsors, photos, awards, partner details | Pending | Documentation-only unless explicitly scoped |
| DESIGN-REVIEW-01 | Homepage cross-site design coherence review | All homepages | Review only; possible findings doc under `docs/coordination/` | Gemini 3.1 Pro with browser inspection | BUS-01, NEU-01, AI homepage changes, THEME-01, THEME-02 | Gate after homepage redesigns | Compare all three homepages for cross-site coherence, quality bar, theme behavior, and visual differentiation; output actionable findings | Pending | Findings go to implementers; do not auto-edit unless separately approved |
| DESIGN-REVIEW-02 | Public subpage ecosystem design review | All public pages | Review only; possible findings doc under `docs/coordination/` | Gemini 3.1 Pro with browser inspection | BUS-02, NEU-02, AI-03, SEO-01 | Gate after subpage redesigns | Review all public pages across all three sites for consistency within each society and coherence across ecosystem | Pending | Include page-by-page findings and severity |
| DESIGN-REVIEW-03 | Final visual reconciliation review | All public/admin as needed | Review only; possible findings doc under `docs/coordination/` | Gemini 3.1 Pro with browser inspection | All implementation tasks and DESIGN-REVIEW-02 fixes | Gate before final QA | Final visual reconciliation completed; findings handed to GPT 5.5 final QA | Pending | Preserve differentiation while correcting polish issues |
| QA-01 | Build verification | All | No intended source edits unless fixing failures in owned files | GPT 5.5 QA agent | Relevant implementation tasks | Sequential near end and after major changes | `npm run build:ai`, `npm run build:business`, `npm run build:neurotech`, and `npm run build:all` pass or failures are documented | Pending | If no lint/test scripts exist, state that explicitly |
| QA-02 | Accessibility, responsive, and performance pass | All public/admin | Public pages, admin layouts, styles, media references | GPT 5.5 QA/frontend agent, browser inspection recommended | QA-01, DESIGN-REVIEW-02 | Sequential near end | Keyboard, reduced motion, mobile, color contrast, image alt, media weight, and nav behavior checked | Pending | Include browser/device matrix in handoff |
| QA-03 | Final GPT 5.5 reconciliation QA | All | Fixes only in files explicitly assigned by findings | GPT 5.5 final QA agent | DESIGN-REVIEW-03, QA-01, QA-02 | Final sequential gate | `FINAL_QA_CHECKLIST.md` completed; no mock public data, no stock dependence, links/theme/admin/backend all verified | Pending | Final report must include remaining risks |

## Parallel Work Map

Can run in parallel if file ownership is respected:

- `BUS-02`, `NEU-02`, and `AI-03` after shared link/theme dependencies are stable.
- Per-site media replacement exploration after `MEDIA-01` scope is agreed.
- Content research documentation `SEO-02` while implementation tasks proceed.
- Site-specific theme work only if it does not overlap with the same site's homepage/subpage implementation.

Must run sequentially:

- Convex schema/migration tasks: `DATA-02`, `DATA-03`, `ADMIN-03`, `ADMIN-04`.
- Shared config/link source tasks before per-page link polish: `DATA-01` before `LINK-01` preferred.
- Homepage design implementation before `DESIGN-REVIEW-01`.
- Subpage design implementation before `DESIGN-REVIEW-02`.
- Final visual reconciliation before `QA-03`.
- Media deletion after media replacement and build validation only.

## Required Handoff Note Template

Every implementation or review task must leave a handoff note with these fields:

```md
Task ID:
Status:
Files changed:
Commands run:
What changed:
Acceptance criteria result:
Known risks or blockers:
Follow-up tasks:
Suggested next owner:
```

For review-only tasks, use:

```md
Task ID:
Status:
Pages inspected:
Browser/device/theme matrix:
Findings by severity:
Files likely affected by fixes:
Recommended owner:
Residual risks:
```

## Implementation Handoffs

### Phase 1A Data Foundation

Task ID: `DATA-01`, `DATA-02`, partial `LINK-01`

Status: `DATA-01` Done, `DATA-02` Done, `LINK-01` Review/partial

Files changed: `convex/schema.ts`, `convex/seed.ts`, `convex/settings.ts`, `packages/admin/src/types.ts`, `packages/admin/src/config.ts`, `apps/ai/src/layouts/Layout.astro`, `apps/ai/src/pages/join.astro`, `apps/business/src/layouts/Layout.astro`, `apps/business/src/pages/join.astro`, `apps/neurotech/src/layouts/Layout.astro`, `apps/neurotech/src/pages/join.astro`, `docs/coordination/TASK_LEDGER.md`

Commands run: `npx convex codegen` passed; `npm run build:ai` passed; `npm run build:business` passed; `npm run build:neurotech` passed

What changed: Added optional `establishedYear` to `societies`, updated settings read/update support with year validation, seeded canonical emails/socials/membership/union links/established years, added `seed.syncCanonicalSocietyMetadata` for existing deployments, mirrored canonical metadata in shared config, rendered established year in each public footer, and replaced obvious footer/join link placeholders with canonical links. AI LinkedIn remains intentionally absent.

Source-of-truth decision: Convex `societies` is the runtime source of truth. `packages/admin/src/config.ts` is a static fallback/admin convenience source and must mirror the known canonical values until public layouts query Convex metadata directly.

Acceptance criteria result: `societies` can represent established years; AI 2025, Business 2021, and Neurotech 2024 are in seed/config/backend-readable metadata and visible publicly; known emails, Instagram, LinkedIn where available, membership URLs, and union URLs are represented in seed/config and obvious public footer/join surfaces; relevant builds passed.

Known risks or blockers: Existing Convex deployments need `seed:syncCanonicalSocietyMetadata` run once as an authenticated owner to patch already-seeded society records; do not run it as an unauthenticated public CLI mutation. Public layouts currently read static config rather than querying Convex runtime metadata because the layouts are static/prerender-friendly and the task scope avoided wider data-loading changes.

Follow-up tasks: Continue `LINK-01` only if broader page-level CTA/link polish is needed, then proceed to `DATA-04` or site-specific content tasks.

Suggested next owner: GPT 5.5 content/link or data cleanup agent.

### PHASE-1A-FIX Canonical Metadata Sync Hardening

Task ID: `PHASE-1A-FIX`

Status: Done

Files changed: `convex/seed.ts`, `docs/coordination/TASK_LEDGER.md`

Commands run: `npx convex codegen` passed; `git diff --check` clean (only LF/CRLF warnings); `npm run build:ai` passed; `npm run build:business` passed; `npm run build:neurotech` passed

What changed: Hardened `seed.syncCanonicalSocietyMetadata` so it requires an authenticated owner before syncing existing deployment metadata. The sync now builds a narrow patch for `contactEmail`, `membershipUrl`, `studentsUnionUrl`, `establishedYear`, and canonical `socials.email`/`socials.instagram`/available `socials.linkedin` instead of patching the whole canonical society object. Existing noncanonical socials such as Discord, TikTok, Twitter, and WhatsApp are preserved. AI LinkedIn remains intentionally absent from canonical data.

Acceptance criteria result: `seed.syncCanonicalSocietyMetadata` is owner-authenticated, no longer performs broad object patches, preserves existing noncanonical social fields, does not set AI LinkedIn, and validation passed.

Known risks or blockers: Existing deployments still need the sync run once, but only through an authenticated owner context. If an operator cannot provide owner auth to Convex, add a one-off owner-controlled admin maintenance trigger rather than temporarily exposing unauthenticated broad metadata writes.

Follow-up tasks: After validation, proceed to `DATA-03` past committee modeling if no review blockers remain.

Suggested next owner: Convex migration/helper agent for `DATA-03`.

### Phase 1B Past Committee Model And Management

Task ID: `DATA-03`, `ADMIN-04`

Status: Done

Files changed: `convex/schema.ts`, `convex/committee.ts`, `packages/admin/src/types.ts`, `packages/admin/src/validation/committee.ts`, `packages/admin/src/index.ts`, `packages/admin/src/validation/index.ts`, `apps/ai/src/actions/index.ts`, `apps/business/src/actions/index.ts`, `apps/neurotech/src/actions/index.ts`, `apps/ai/src/layouts/AdminLayout.astro`, `apps/business/src/layouts/AdminLayout.astro`, `apps/neurotech/src/layouts/AdminLayout.astro`, `apps/ai/src/pages/admin/index.astro`, `apps/business/src/pages/admin/index.astro`, `apps/neurotech/src/pages/admin/index.astro`, `apps/ai/src/pages/admin/past-committee/**`, `apps/business/src/pages/admin/past-committee/**`, `apps/neurotech/src/pages/admin/past-committee/**`, `apps/ai/src/pages/committee.astro`, `apps/business/src/pages/committee.astro`, `apps/neurotech/src/pages/committee.astro`, `docs/coordination/TASK_LEDGER.md`

Commands run: `npx convex codegen` passed; `npm run build:ai` passed; `npm run build:business` passed; `npm run build:neurotech` passed; `git diff --check` clean (only LF/CRLF warnings)

What changed: Added a separate migration-safe `pastCommitteeMembers` Convex table with `societyId`, `name`, `role`, `yearLabel`, optional `bio`/`image`/`email`/`linkedIn`, and `displayOrder`. Added public and admin Convex functions for listing, reading, creating, updating, and deleting past committee records without reusing `committeeMembers.isActive` as history. Added shared past committee input types and validation. Added `/admin/past-committee`, `/admin/past-committee/new`, and `/admin/past-committee/[id]/edit` across all three apps, plus delete actions, dashboard links, and sidebar navigation. Public committee pages now show active committee data and a past committee section grouped by `yearLabel`, with honest empty states when no past records exist.

Acceptance criteria result: Past committee has a real Convex model separate from active committee state; admin management exists for all three societies; public committee pages display records when present and honest empty states when absent; no fake past committee data was introduced; current committee and event flows remain intact; codegen and builds passed.

Known risks or blockers: No backfill is included because there are no verified past committee records yet. Public pages now make one additional unauthenticated SSR Convex query for past committee records. Admin image fields remain URL/path strings; upload/storage is still deferred to `ADMIN-03`.

Follow-up tasks: Populate verified past committee records through the new admin UI once confirmed; proceed to `ADMIN-03` image upload/storage or site-specific content polish as scheduled.

Suggested next owner: GPT 5.5 admin/backend agent for `ADMIN-03` or content/frontend agent for `BUS-02`, `NEU-02`, and `AI-03` after link/theme dependencies.

### Phase 1B DATA-04

Task ID: `DATA-04`

Status: Done

Files changed: `apps/business/src/pages/index.astro`, `apps/neurotech/src/pages/index.astro`, `docs/coordination/TASK_LEDGER.md`

Commands run: `npm run build:business` passed; `npm run build:neurotech` passed; `git diff --check` clean (only pre-existing LF/CRLF warnings)

What changed: Replaced hard-coded fake event previews (`Careers Evening`, `Founder Talk`, `Intro to Neurotech`, `Brain-Computer Interfaces 101`) and fake committee grids (`Name TBC` role tiles) on both Business and Neurotech homepages with server-side Convex queries for published events and active committee members. Pages switched from `prerender = true` to `prerender = false` to support SSR Convex data fetching. Empty states are honest and match existing event/committee page patterns. Committee sorted by `displayOrder` then `name`. Event dates formatted with existing `formatEventDate` helper. No redesign, no media changes, no backend changes, no `href="#"` reintroduced.

Acceptance criteria result: Both homepages use Convex published events and active committee data. No fake event titles, committee roles, speakers, dates, or names remain. Empty states are polished and clearly empty. No broad redesign was done. Both builds pass.

Known risks or blockers: Homepages now require `CONVEX_URL` at runtime (SSR) where previously they were statically prerendered. This matches the existing pattern used by AI homepage and all event/committee pages. No Convex query/function changes were made.

Follow-up tasks: `BUS-01` and `NEU-01` can now proceed with homepage polish/redesign on top of the data-driven foundation. `LINK-01` broader CTA/copy polish remains available.

Suggested next owner: GPT 5.5 frontend agent for `BUS-01`/`NEU-01` or content agent for `LINK-01` copy pass.
