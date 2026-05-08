# Phase 0 Audit Pack

This document is the main source of truth for future Opencode and Antigravity sessions working on `surreysocieties`. It records the Phase 0 read-only audit findings and the coordination constraints for refinement work.

Future agents must read this file, `TASK_LEDGER.md`, `DESIGN_SYSTEM_BRIEF.md`, `CONTENT_AND_SEO_BRIEF.md`, and `FINAL_QA_CHECKLIST.md` before making product changes.

## Audit Metadata

| Field | Value |
| --- | --- |
| Audit date | 2026-05-08 |
| Repository | `C:\Users\Josh\Projects\surreysocieties` |
| Branch | `main` |
| Commit | `cea6158` |
| Working tree at audit start | Clean, `## main...origin/main` |
| Agent/model | Opencode, GPT 5.5 where known |
| Task type | Phase 0 read-only audit, then Phase 0B coordination document write |

Commands and tools run during audit:

| Command/tool | Purpose |
| --- | --- |
| Read `AGENTS.md` | Mandatory project instructions |
| Read `convex/_generated/ai/guidelines.md` | Mandatory Convex guidelines before backend inspection |
| `git status --short --branch` | Confirm branch and worktree state |
| `git rev-parse --short HEAD` | Capture current commit |
| `git branch --show-current` | Capture branch name |
| Glob `**/package.json` | Map workspace packages |
| Glob `**/astro.config.*` | Map Astro apps |
| Glob `**/src/pages/**/*` | Map public and admin routes |
| Glob `convex/**/*.ts` | Map backend files |
| Glob `apps/*/public/**/*` | Map public media and logos |
| Glob `packages/ui/src/**/*` | Map shared UI package |
| Glob `packages/admin/src/**/*` | Map shared admin package |
| Grep for `Convex`, `client.query`, `events:listPublished`, `committee:listActive` | Map data flows |
| Grep for links, placeholders, stock/media references | Identify broken/stale content and media dependencies |
| Glob for tests, eslint, vitest config | Check lint/test support |
| `npm run` | List available scripts |

Limitations:

- No product code was changed during Phase 0 audit.
- No Convex schema or function changes were made.
- No media was removed.
- No browser inspection was performed in Phase 0; visual findings are based on source inspection only.
- No builds, dev servers, or tests were run in Phase 0; build script existence was audited via manifests and `npm run`.
- `.env.local` exists in the root, but secrets were not read. Future agents must not expose secrets.
- Line numbers are source-inspection line numbers from commit `cea6158`; they may drift after implementation.

## Known Society Facts

Use these facts as canonical until a later research pack supersedes them. Do not invent additional facts.

| Society | Established | Instagram | Email | Union page | Membership | LinkedIn |
| --- | --- | --- | --- | --- | --- | --- |
| Surrey Artificial Intelligence Society | 2025 | `https://www.instagram.com/surrey.ai.ds/` | `ussu.aianddatascience@surrey.ac.uk` | `https://surreyunion.org/your-activity/clubs-and-societies-a-z/ai-and-data-science-society` | `https://surreyunion.org/shop/ai-and-data-science-society/293e762b-01b8-46f4-a541-2260e4d9ec4f` | N/A for now |
| Surrey Business Society | 2021 | `https://www.instagram.com/surreybusinesssociety` | `ussu.bizsoc@surrey.ac.uk` | `https://surreyunion.org/your-activity/clubs-and-societies-a-z/business-society` | `https://surreyunion.org/shop/business-society/5c580cdd-8641-44e0-acd6-69d9545eacdb` | `https://www.linkedin.com/company/surreybusinesssociety/` |
| Surrey Neurotech Society | 2024 | `https://www.instagram.com/surreyneurotech/` | `ussu.neurotechsoc@surrey.ac.uk` | `https://surreyunion.org/your-activity/clubs-and-societies-a-z/neurotech-society` | `https://surreyunion.org/shop/neurotech-society/d5784e49-49f7-4bd4-a66c-b4f3971103af` | `https://www.linkedin.com/company/surrey-neurotech/posts/?feedView=all` |

## Repository Structure

Top-level entries observed:

- `AGENTS.md`: Convex-specific agent instructions.
- `CLAUDE.md`: duplicate Convex agent guidance.
- `README.md`: setup and architecture overview.
- `package.json`: npm workspace root.
- `package-lock.json`: npm lockfile.
- `tsconfig.json`: TypeScript project references.
- `apps/`: three Astro society apps.
- `packages/`: shared UI and admin packages.
- `convex/`: shared Convex backend.
- `scripts/`: admin provisioning script.
- `.env.local`: present and ignored; not read during audit.
- `node_modules/`: present and ignored.
- `.agents/`, `skills-lock.json`: agent skill files.
- `.vscode/`: workspace settings.

No existing `docs/` convention was found, so `docs/coordination/` is the selected coordination location.

## Workspace And Package Structure

Root `package.json`:

- Workspace globs: `apps/*`, `packages/*`.
- Node engine: `>=22.12.0`.
- Root dependency: `convex`.
- Root dev dependency: `sharp`.
- Vite override: `^7.3.2`.

Root scripts:

- `npm run dev:ai`: runs `apps/ai` dev server on port `4321`.
- `npm run dev:business`: runs `apps/business` dev server on port `4322`.
- `npm run dev:neurotech`: runs `apps/neurotech` dev server on port `4323`.
- `npm run build:ai`: builds `apps/ai`.
- `npm run build:business`: builds `apps/business`.
- `npm run build:neurotech`: builds `apps/neurotech`.
- `npm run build:all`: builds all three apps sequentially.
- `npm run provision:admins`: runs `scripts/provision-admins.mjs`.

App packages:

- `apps/ai/package.json`: Astro, Clerk, Convex, Tailwind, shared packages, `@google/genai`.
- `apps/business/package.json`: Astro, Clerk, Convex, Tailwind, shared packages. It imports GSAP in source, but `gsap` is not declared in this package.
- `apps/neurotech/package.json`: Astro, Clerk, Convex, Tailwind, shared packages, `gsap`, `lenis`, `three`.

Shared packages:

- `packages/ui/package.json`: exports shared Astro components.
- `packages/admin/package.json`: exports admin config, types, validation, CSRF, action guard, and Convex HTTP client.

## Astro App Structure

Each site has the same core public page set:

- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/committee.astro`
- `src/pages/events.astro`
- `src/pages/join.astro`
- `src/pages/404.astro`

Each site has the same admin route set:

- `src/pages/admin/index.astro`
- `src/pages/admin/login.astro`
- `src/pages/admin/settings.astro`
- `src/pages/admin/events/index.astro`
- `src/pages/admin/events/new.astro`
- `src/pages/admin/events/[id]/edit.astro`
- `src/pages/admin/committee/index.astro`
- `src/pages/admin/committee/new.astro`
- `src/pages/admin/committee/[id]/edit.astro`
- `src/pages/admin/admins/index.astro`
- `src/pages/admin/admins/invite.astro`
- `src/pages/api/admin/auth/logout.ts`

Each site has:

- `src/layouts/Layout.astro`: public layout.
- `src/layouts/AdminLayout.astro`: admin layout.
- `src/styles/global.css`: public styles.
- `src/styles/admin.css`: admin styles.
- `src/middleware.ts`: Clerk and Convex admin protection.
- `src/actions/index.ts`: Astro actions for admin deletes and admin invite revoke/removal.

AI-specific public components:

- `apps/ai/src/components/home/*`: public homepage sections.
- `apps/ai/src/components/home/track-lab/*`: interactive AI track lab.
- `apps/ai/src/lib/server/ai/*`: Gemini integration and fallbacks.
- `apps/ai/src/pages/api/ai/track-lab.ts`: server-side AI API route.
- `apps/ai/src/data/aiTracks.ts`: static educational track data.

Business and Neurotech currently keep most public page UI directly inside page files rather than componentizing public sections.

## Shared UI Package Structure

Files:

- `packages/ui/src/components/BaseLayout.astro`: shared HTML document shell, shared head slot, shared mobile menu script for `mobile-menu-btn` and `mobile-menu` IDs.
- `packages/ui/src/components/SiteHead.astro`: title, description, canonical, Open Graph, Twitter Card, favicon, Google Fonts.
- `packages/ui/src/components/BackgroundVideo.astro`: background video wrapper with `webm`, `mp4`, poster, overlay slot, and reduced-motion fallback that hides video.
- `packages/ui/src/index.ts`: exports `SOCIETY_NAMES`, `SOCIETY_DOMAINS`, `SocietyKey`.

Observations:

- `BackgroundVideo.astro` is used by AI and Business homepage media.
- `BaseLayout.astro` mobile-menu script targets generic IDs. AI uses custom IDs and includes a separate script. Business and Neurotech use generic IDs.
- `SiteHead.astro` supports `ogImage`, but no audited page consistently supplies society-specific OG image assets.

## Shared Admin Package Structure

Files:

- `packages/admin/src/config.ts`: static society config for all sites.
- `packages/admin/src/types.ts`: shared TypeScript types and event category constants.
- `packages/admin/src/convex/client.ts`: creates `ConvexHttpClient` from `CONVEX_URL` and optional auth token.
- `packages/admin/src/validation/events.ts`: validates event form fields and image URL/path strings.
- `packages/admin/src/validation/committee.ts`: validates committee form fields and image URL/path strings.
- `packages/admin/src/validation/admins.ts`: validates invite inputs.
- `packages/admin/src/csrf.ts`: HMAC CSRF token helper using `CSRF_SECRET` or per-process random fallback.
- `packages/admin/src/actionGuard.ts`: validates Astro action context and admin role.
- `packages/admin/src/index.ts`: package exports.

Important findings:

- `packages/admin/src/config.ts` has blank `instagram`, `linkedin`, `membershipUrl`, and `studentsUnionUrl` values for all societies.
- Config contains correct protected admin emails, but public AI join page still uses the wrong email.
- Static config duplicates data stored in Convex `societies`; future work should decide the authoritative source or keep static config only as fallback.

## Convex Backend Structure

Mandatory Convex guidelines were read before backend inspection: `convex/_generated/ai/guidelines.md`.

Files:

- `convex/schema.ts`: schema tables and indexes.
- `convex/societies.ts`: public society lookup/list queries.
- `convex/events.ts`: event public/admin queries and mutations.
- `convex/committee.ts`: committee public/admin queries and mutations.
- `convex/settings.ts`: society settings read/update functions.
- `convex/memberships.ts`: membership, invitation, role, removal functions.
- `convex/users.ts`: current user helpers.
- `convex/permissions.ts`: auth, role, protected admin, owner, audit logging helpers.
- `convex/auditLogs.ts`: admin audit log query.
- `convex/auth.config.ts`: Clerk JWT provider config.
- `convex/seed.ts`: society and owner seed mutations.

Schema tables from `convex/schema.ts`:

- `societies`: `name`, `shortName`, `slug`, `domain`, optional `logo`, optional `contactEmail`, optional `socials`, optional `membershipUrl`, optional `studentsUnionUrl`; index `by_slug`.
- `memberships`: `userId`, `societyId`, `role`, `status`; indexes by user, society, user/society, society/status.
- `users`: `email`, `name`, optional `clerkId`; indexes by email and Clerk ID.
- `invitations`: `email`, `societyId`, `role`, `invitedBy`, `token`, `expiresAt`, `status`; indexes by token, society, society/status, email.
- `events`: `societyId`, `title`, optional description/date/start/end/location/category/image/registrationUrl, `status`, `isFeatured`; indexes by society, society/status, society/date.
- `committeeMembers`: `societyId`, `name`, `role`, optional bio/image/email/linkedIn, `displayOrder`, `isActive`; indexes by society and society/active.
- `siteSettings`: `societyId`, `key`, `value`; index `by_society_key`.
- `auditLogs`: `societyId`, `userId`, `action`, optional target and details; index by society.

Missing schema capabilities:

- No `establishedYear` or founding date field.
- No past committee/session/year model.
- No Convex storage reference fields for uploaded event or committee images.
- No separate `externalLinks` or typed settings model beyond generic string `siteSettings` and optional society fields.

## Current Data Model And Data Flows

Society metadata:

- Static defaults live in `packages/admin/src/config.ts`.
- Seed defaults live in `convex/seed.ts`.
- Runtime society records live in Convex `societies`.
- `convex/settings.ts` can read and patch `societies` fields, but audited admin settings pages do not expose society metadata editing.
- Known official links and established dates are not fully represented in config, seed, schema, or public pages.

Events:

- Public data source: `convex/events.ts` `listPublished` by `societySlug`.
- Admin data source: `convex/events.ts` `list`, `getById`, `create`, `update`, `remove`.
- Admin authorization: mutations use `requireContentEditor`; list/get use existing membership.
- Public pages call unauthenticated `createConvexClient()` and query `events:listPublished`.
- Admin pages use authenticated Convex clients created in middleware from a Clerk token.
- Event images are strings. Admin forms label them `Image URL` and accept `https://` or `/path/to/image`.
- No upload, storage, or signed URL flow exists.

Committee:

- Public data source: `convex/committee.ts` `listActive` by `societySlug`.
- Admin data source: `convex/committee.ts` `list`, `getById`, `create`, `update`, `remove`.
- Admin authorization: mutations use `requireContentEditor`; list/get use existing membership.
- Public pages sort `listActive` results by `displayOrder` then `name`.
- Committee images are strings. Admin forms label them `Image URL` and accept `https://` or `/path/to/image`.
- No past committee support exists beyond `isActive`; inactive entries are not displayed as past committees.

Settings:

- `convex/settings.ts` supports `getSettings`, `updateSettings`, and `setCustomSetting`.
- `apps/*/src/pages/admin/settings.astro` only provides Clerk account management and does not call these Convex settings functions.

Memberships and auth:

- Clerk handles sign-in through `@clerk/astro`.
- `convex/auth.config.ts` uses `CLERK_JWT_ISSUER_DOMAIN` and `applicationID: "convex"`.
- `apps/*/src/middleware.ts` uses `auth().getToken({ template: 'convex' })` and passes it to `createConvexClient`.
- Middleware checks `memberships:getMyMembership` for the app-specific society slug.
- Roles: `owner`, `protectedAdmin`, `admin`, `member`.
- Protected admin emails are in `convex/permissions.ts`.
- `member` can edit events and committee because `canEditContent` returns true for `member`.
- `admin`, `protectedAdmin`, and `owner` can manage users.
- `scripts/provision-admins.mjs` can create Clerk users and a `convex` JWT template, using env vars.

Invitations:

- `memberships:inviteUser` creates a token and invitation row.
- Admin invite page warns that email sending is not configured and invite links are shown manually.
- `apps/*/src/pages/admin/admins/index.astro` renders `/admin/invite/accept?token=...`, but no matching route was found under any app.
- `memberships:acceptInvitation` exists in Convex, but there is no audited Astro accept page wiring it.

## Current Public Event Flow

AI:

- `apps/ai/src/pages/index.astro` calls `events:listPublished` and passes results to `EventsPreview`.
- `apps/ai/src/components/home/EventsPreview.astro` displays up to four events or an honest empty state.
- `apps/ai/src/pages/events.astro` calls `events:listPublished` and renders all events or an honest empty state.

Business:

- `apps/business/src/pages/events.astro` calls `events:listPublished` and displays Convex events or a no-events empty state.
- `apps/business/src/pages/index.astro` does not use Convex for the homepage events preview. It hard-codes `Careers Evening` and `Founder Talk` as coming-soon/planned event-like content.

Neurotech:

- `apps/neurotech/src/pages/events.astro` calls `events:listPublished` and displays Convex events or a no-events empty state.
- `apps/neurotech/src/pages/index.astro` does not use Convex for the homepage events preview. It hard-codes `Intro to Neurotech` and `Brain-Computer Interfaces 101` as coming-soon/planned event-like content.

## Current Public Committee Flow

AI:

- `apps/ai/src/pages/index.astro` calls `committee:listActive` and passes results to `CommitteePreview`.
- `apps/ai/src/components/home/CommitteePreview.astro` displays active committee or an honest empty state.
- `apps/ai/src/pages/committee.astro` calls `committee:listActive` and displays active committee or placeholder role cards clearly labelled `To be announced`.

Business:

- `apps/business/src/pages/committee.astro` calls `committee:listActive` and displays active committee or an empty state.
- `apps/business/src/pages/index.astro` does not use Convex for the homepage committee preview. It hard-codes role tiles with `Name TBC`.

Neurotech:

- `apps/neurotech/src/pages/committee.astro` calls `committee:listActive` and displays active committee or an empty state.
- `apps/neurotech/src/pages/index.astro` does not use Convex for the homepage committee preview. It hard-codes role tiles with `Name TBC`.

## Current Admin Event And Committee Flow

All three apps duplicate the same admin implementation with only `SOCIETY_ID` changed.

Event admin files:

- `apps/*/src/pages/admin/events/index.astro`: list events from `events:list`, show delete form via Astro action.
- `apps/*/src/pages/admin/events/new.astro`: validate form, CSRF check, call `events:create`.
- `apps/*/src/pages/admin/events/[id]/edit.astro`: load via `events:getById`, validate, CSRF check, call `events:update`.
- `apps/*/src/actions/index.ts`: `deleteEvent` calls `events:remove`.

Committee admin files:

- `apps/*/src/pages/admin/committee/index.astro`: list members from `committee:list`, show delete/remove form via Astro action.
- `apps/*/src/pages/admin/committee/new.astro`: validate form, CSRF check, call `committee:create`.
- `apps/*/src/pages/admin/committee/[id]/edit.astro`: load via `committee:getById`, validate, CSRF check, call `committee:update`.
- `apps/*/src/actions/index.ts`: `deleteCommitteeMember` calls `committee:remove`.

Admin dashboard:

- `apps/*/src/pages/admin/index.astro`: dashboard stats from `events:list`, `committee:list`, and `memberships:listBySociety`.
- `apps/*/src/pages/admin/admins/index.astro`: active memberships and invitations.
- `apps/*/src/pages/admin/admins/invite.astro`: creates invitation tokens.
- `apps/*/src/pages/admin/settings.astro`: Clerk account profile only, not site settings.

Admin empty states:

- `apps/*/src/pages/admin/events/index.astro`: `No events yet` with add-event CTA.
- `apps/*/src/pages/admin/committee/index.astro`: `No committee members yet` with add-member CTA.

Admin gaps:

- No image upload UI.
- No past committee UI.
- No society metadata/settings UI despite backend settings functions.
- No invite accept page.
- Admin layout is fixed-sidebar; responsive CSS hides sidebar under 1024px but no audited mobile open button exists in `AdminLayout.astro`.

## Current Empty States

AI public:

- Events homepage and events page use honest empty states; no invented event dates or speakers.
- Committee page uses placeholder roles labelled `To be announced`; acceptable as a placeholder if visually clear, but future data-driven implementation should prefer no fake people.

Business public:

- Events page uses `No published events yet` when Convex has none.
- Committee page uses `Committee details coming soon` when Convex has none.
- Homepage hard-codes fake/planned event-like previews and `Name TBC` committee tiles; these should be replaced by Convex data or neutral non-data content.

Neurotech public:

- Events page uses `No published events yet` when Convex has none.
- Committee page uses `Committee details coming soon` when Convex has none.
- Homepage hard-codes fake/planned event-like previews and `Name TBC` committee tiles; these should be replaced by Convex data or neutral non-data content.

Admin:

- Event and committee lists have clear empty states.
- Admin invitations disclose that email sending is not configured.

## Current Theme Status

AI Society:

- `apps/ai/src/styles/global.css` defines light and dark tokens via `:root` and `:root[data-theme="dark"]`.
- `apps/ai/src/layouts/Layout.astro` initializes theme before paint, stores preference in `localStorage` under `surrey-ai-theme`, and exposes a theme toggle.
- AI public theme is the most complete.

Business Society:

- `apps/business/src/styles/global.css` defines one corporate palette, mostly light surfaces plus dark hero/footer sections.
- `apps/business/src/layouts/Layout.astro` has no theme initialization or toggle.
- Business public theme does not satisfy proper light/dark requirements yet.

Neurotech Society:

- `apps/neurotech/src/styles/global.css` defines an effectively dark bioluminescent palette.
- `apps/neurotech/src/layouts/Layout.astro` has no theme initialization or toggle.
- Neurotech public theme is effectively dark-only.

Admin:

- `apps/*/src/styles/admin.css` is light-only neutral admin styling.
- Admin has no light/dark toggle and no shared admin theme abstraction.

## Current AI/API Integration Status

AI feature files:

- `apps/ai/src/lib/server/ai/gemini.ts`
- `apps/ai/src/pages/api/ai/track-lab.ts`
- `apps/ai/src/lib/server/ai/trackLabFallbacks.ts`
- `apps/ai/src/components/home/track-lab/*`

Findings:

- AI Society has a server-side Gemini integration.
- `gemini.ts` enables AI only when `AI_FEATURES_ENABLED === "true"` and `GEMINI_API_KEY` exists.
- API key is read from `process.env.GEMINI_API_KEY` server-side only; no public env key was found for Gemini.
- Default model is `gemini-2.0-flash-lite` unless `AI_MODEL` overrides it.
- Timeout defaults to 4000 ms and is capped at 10000 ms.
- API route supports `remix-studio`, `task-relay`, `build-sprint`, `ml-explain`, `cv-explain`, and `ethics-assess`.
- If Gemini is disabled or fails, the route returns deterministic local fallback data from `trackLabFallbacks.ts`.
- This AI feature is AI Society-specific and does not appear in Business or Neurotech.

Risks:

- Future agents must not move `GEMINI_API_KEY` client-side.
- Public UI should disclose fallback mode only if useful and not over-explain.
- AI prompt outputs are bounded and normalized, but any future expansion needs server-side validation and rate limiting consideration.

## Current External Link Status

Known correct links are listed in `Known Society Facts` above. Current implementation does not consistently use them.

Concrete findings:

- `packages/admin/src/config.ts` lines 15-20, 33-38, 51-56 have blank social, membership, and Students' Union URL values.
- `convex/seed.ts` seeds only emails/logos/domains, not known Instagram, LinkedIn, membership, union page, or established date.
- `apps/ai/src/pages/join.astro` lines 122 and 125 use `su.ai@surrey.ac.uk`, which is wrong. Correct: `ussu.aianddatascience@surrey.ac.uk`.
- `apps/ai/src/layouts/Layout.astro` lines 186-188 shows Instagram and Email as coming soon and links only to generic `https://surreyunion.org/`.
- `apps/business/src/layouts/Layout.astro` lines 140-142 uses dead `href="#"` links for LinkedIn, Instagram, and Email.
- `apps/business/src/pages/join.astro` lines 76-78 uses `href="#"` for `Surrey Union Link - Coming Soon`.
- `apps/neurotech/src/pages/join.astro` lines 71-73 uses `href="#"` for `Surrey Union Link - Coming Soon`.
- `apps/neurotech/src/layouts/Layout.astro` lines 137-139 displays Instagram, Email, and Surrey Students' Union as plain coming-soon text, despite known links.
- Business and Neurotech join pages say contact details/socials are coming soon despite known Instagram, email, membership, and union links.
- AI LinkedIn is currently N/A and should be hidden or labelled N/A, not linked.

## Placeholder And Dead Link Inventory

Dead `href="#"` links:

- `apps/business/src/layouts/Layout.astro:140`: LinkedIn placeholder.
- `apps/business/src/layouts/Layout.astro:141`: Instagram placeholder.
- `apps/business/src/layouts/Layout.astro:142`: Email placeholder.
- `apps/business/src/pages/join.astro:76`: membership CTA placeholder.
- `apps/neurotech/src/pages/join.astro:71`: membership CTA placeholder.

Coming-soon placeholders where known data exists:

- `apps/ai/src/pages/join.astro:62-71`: membership portal opening soon, but known membership URL exists.
- `apps/ai/src/pages/join.astro:132-140`: Instagram coming soon, but known Instagram exists.
- `apps/ai/src/layouts/Layout.astro:186-187`: Instagram and Email coming soon, but known values exist.
- `apps/business/src/pages/join.astro:91-99`: Instagram, LinkedIn, and Email coming soon, but known values exist.
- `apps/neurotech/src/pages/join.astro:87-91`: Instagram and Email coming soon, but known values exist.
- `apps/neurotech/src/layouts/Layout.astro:137-139`: Instagram, Email, and Students' Union as plain coming-soon text despite known values.

Potential broken admin route:

- `apps/*/src/pages/admin/admins/index.astro:86`: renders `/admin/invite/accept?token={inv.token}`.
- No `apps/*/src/pages/admin/invite/accept.astro` or equivalent route was found.

Other source quality placeholders:

- `apps/neurotech/src/pages/about.astro:56`: mojibake fragment around `?"` in duplicated mission text.
- `apps/neurotech/src/pages/about.astro:55-60`: mission paragraph duplicated, once with mojibake and once clean.

## Mock, Fake, Or Static Public Content Inventory

Static educational/IA content can remain if clearly not pretending to be current public data. Static public data that looks like real events, committees, or society details needs replacement.

AI:

- `apps/ai/src/data/aiTracks.ts`: static educational track descriptions. This is not fake public event/committee data.
- `apps/ai/src/pages/committee.astro:55-73`: placeholder role cards in empty state. Clearly labelled `To be announced`; acceptable short term but should be removed or replaced once real committee data exists.

Business:

- `apps/business/src/pages/index.astro:167-200`: hard-coded homepage event previews `Careers Evening` and `Founder Talk` with `Coming Soon` and `Date TBC`. Replace with Convex published events or neutral programme description.
- `apps/business/src/pages/index.astro:220-229`: hard-coded committee role grid with `Name TBC`. Replace with Convex active committee preview or neutral CTA.
- `apps/business/src/pages/join.astro`: coming-soon link/contact placeholders despite known data.

Neurotech:

- `apps/neurotech/src/pages/index.astro:135-166`: hard-coded homepage event previews `Intro to Neurotech` and `Brain-Computer Interfaces 101`. Replace with Convex published events or neutral programme description.
- `apps/neurotech/src/pages/index.astro:184-193`: hard-coded committee role grid with `Name TBC`. Replace with Convex active committee preview or neutral CTA.
- `apps/neurotech/src/pages/join.astro`: coming-soon link/contact placeholders despite known data.

Backend seed/config:

- `convex/seed.ts` does not seed full known metadata.
- `packages/admin/src/config.ts` has blank links, causing placeholders downstream.

## Image And Video Dependency Inventory

Do not remove media until replacement tasks explicitly own that work. This inventory identifies current public dependencies and stock-like assets.

Public video dependencies:

- `apps/ai/public/videos/ai-hero.mp4`
- `apps/ai/public/videos/optimized/ai-hero.optimized.mp4`
- `apps/ai/public/videos/optimized/ai-hero.optimized.webm`
- `apps/ai/public/videos/posters/ai-hero.poster.jpg`
- `apps/ai/public/videos/stock/codingworkshop.mp4`
- `apps/ai/public/videos/stock/hackathonstudents.mp4`
- `apps/ai/public/videos/stock/studentscodinglaptops.mp4`
- `apps/ai/public/videos/stock/technologyworkshop.mp4`
- `apps/business/public/videos/business-hero.mp4`
- `apps/business/public/videos/optimized/business-hero.optimized.mp4`
- `apps/business/public/videos/optimized/business-hero.optimized.webm`
- `apps/business/public/videos/posters/business-hero.poster.jpg`
- `apps/business/public/videos/stock/businesseventaudience.mp4`
- `apps/business/public/videos/stock/networkingeventpeopletalking.mp4`
- `apps/business/public/videos/stock/speakereventaudience.mp4`
- `apps/business/public/videos/stock/studentscareerfair.mp4`
- `apps/neurotech/public/videos/neuro-hero.mp4`
- `apps/neurotech/public/videos/optimized/neuro-hero.optimized.mp4`
- `apps/neurotech/public/videos/optimized/neuro-hero.optimized.webm`
- `apps/neurotech/public/videos/posters/neuro-hero.poster.jpg`
- `apps/neurotech/public/videos/stock/braincomputerinterfacedemo.mp4`
- `apps/neurotech/public/videos/stock/scientificsignalscreen.mp4`

Current video usage found:

- `apps/ai/src/components/home/HomeHero.astro:29-33`: AI optimized hero video and poster. This component is currently not used by `apps/ai/src/pages/index.astro` at commit `cea6158`, but the dependency exists.
- `apps/business/src/pages/index.astro:14-18`: Business optimized hero video and poster.

Source image assets by app:

- AI images: `ai-gpt-hero.png`, `technologyworkshopuniversity.jpg`, `studentswhiteboardcoding.jpg`, `machinelearningworkshopstudents.jpg`, `datasciencestudents.jpg`, `studenthackathon.jpg`, `univertystudentslaptops.jpg`, `studentscodingworkshop.jpg`, `ai-students.jpg`.
- Business images: `business-gpt-hero.png`, `studentsbusinessworkshop.jpg`, `universityspeakerpanel.jpg`, `youngprofessionalsnetworkingevent.jpg`, `studententrepreneurshipworkshop.jpg`, `studentscareerfair.jpg`, `universitybusinessnetworking.jpg`, `studentsnetworkingevent.jpg`, `business-networking.jpg`.
- Neurotech images: `neurotech-gpt-hero.png`, `wearablesensorsstudents.jpg`, `neurosciencestudentslab.jpg`, `eegsignalscreen.jpg`, `studentselectronicslab.jpg`, `biomedicalengineeringstudentslab.jpg`, `neurotechnologyheadset.jpg`, `students EEG headset.jpg`, `eegheadsetdemo.jpg`, `braincomputerinterfacedemo.jpg`, `neuro-hardware.jpg`.

Current image usage examples:

- `apps/business/src/pages/index.astro:6,98`: `business-networking.jpg`.
- `apps/business/src/pages/about.astro:5-6,16,54`: `business-gpt-hero.png`, `studentscareerfair.jpg`.
- `apps/business/src/pages/events.astro:6,40`: `universityspeakerpanel.jpg`.
- `apps/neurotech/src/pages/index.astro:5,102`: `neuro-hardware.jpg`.
- `apps/neurotech/src/pages/about.astro:5-6,15,47`: `neurotech-gpt-hero.png`, `eegheadsetdemo.jpg`.
- `apps/neurotech/src/pages/events.astro:6,40`: `braincomputerinterfacedemo.jpg`.

Logo assets:

- `apps/ai/public/logos/ai-logo.png`
- `apps/ai/public/logos/optimized/ai-logo.optimized.png`
- `apps/business/public/logos/sbs-logo.png`
- `apps/neurotech/public/logos/neurotech-logo.png`
- `apps/*/public/favicon.svg`

Media direction:

- Goal is removal of public stock image/video dependence.
- Replacement can be approved society-owned media, abstract brand systems, generated geometric/illustrative assets approved by project owner, or data-driven uploaded assets from admin.
- Do not remove old media until no references remain and QA confirms logos/uploaded images still work.

## Build, Lint, And Test Command Status

Existing root scripts:

- `npm run build:ai`
- `npm run build:business`
- `npm run build:neurotech`
- `npm run build:all`
- `npm run dev:ai`
- `npm run dev:business`
- `npm run dev:neurotech`
- `npm run provision:admins`

Existing app scripts:

- Each app has `dev`, `build`, `preview`, and `astro`.

Missing or not found:

- No root `lint` script.
- No root `test` script.
- No `vitest.config.*` found.
- No `eslint.config.*` or `.eslintrc*` found.
- No `*.test.*` or `*.spec.*` files found.

Build/test execution status:

- Phase 0 did not run builds.
- Future implementation tasks should run the relevant app build after changes.
- Final QA should run `npm run build:all`.

## Known Risks And Blockers

- Backend migration risk: established dates, past committee, and storage references require schema changes and likely data migration planning.
- Public fake-data risk: Business and Neurotech homepages display hard-coded event/committee-like content that can be mistaken for real data.
- Link trust risk: known official links are missing from config, seed, and pages; current public CTAs include dead `href="#"` links.
- Admin invite risk: invitation acceptance is not wired to a route even though tokens are shown in admin.
- Media risk: stock image/video dependence is widespread. Removing files before replacing references will break pages.
- Upload risk: admin currently accepts image URL/path strings. Moving to Convex storage affects schema, admin forms, public rendering, and QA.
- Theme risk: AI has a theme system, Business and Neurotech do not. Admin is light-only.
- Neurotech visual/CSS risk: pages use classes such as `glass-card`, `bg-accent`, `text-secondary`, `neural-wave-bg-dark`, and `neural-pathway` that are not defined in `apps/neurotech/src/styles/global.css`.
- Neurotech content quality risk: `apps/neurotech/src/pages/about.astro` contains duplicated mission text and mojibake around line 56.
- Dependency risk: Business pages import/use GSAP but `apps/business/package.json` does not declare `gsap`.
- Public Convex runtime risk: public server-rendered pages call `createConvexClient()` and require `CONVEX_URL`; missing env will fail pages.
- Settings drift risk: data is duplicated across `packages/admin/src/config.ts`, Convex seed, Convex records, and hard-coded page copy.
- Accessibility/motion risk: Neurotech uses Three.js, GSAP, Lenis, hover hotspots, and continuous animation. Reduced-motion and keyboard parity need explicit QA.
- Admin mobile risk: sidebar hides at small widths but no audited open control exists.

## Recommended Next Tasks

Use `TASK_LEDGER.md` as the implementation source of truth. Recommended order:

1. `DATA-01` and `LINK-01`: confirm and wire canonical society metadata in config, seed, and pages.
2. `DATA-02`: add established/founding fields with migration planning.
3. `DATA-03` and `ADMIN-04`: design and implement past committee model and admin/public surfaces.
4. `ADMIN-03`: implement safe image upload/storage flow or approved media replacement path before removing stock media.
5. `BUS-01` and `NEU-01`: replace hard-coded homepage event/committee previews with Convex data or neutral content.
6. `THEME-01`, `THEME-02`, and `THEME-03`: complete light/dark theme systems for Business, Neurotech, and admin.
7. `MEDIA-01`: remove public stock media dependence only after replacement references are in place.
8. `DESIGN-REVIEW-01`: run browser-based Gemini 3.1 Pro homepage coherence review.
9. `BUS-02`, `NEU-02`, `SEO-01`: subpage IA, copy, SEO, and content fixes.
10. `DESIGN-REVIEW-02`: run browser-based Gemini 3.1 Pro subpage ecosystem review.
11. `QA-01`, `QA-02`, `DESIGN-REVIEW-03`, `QA-03`: final build, accessibility, visual reconciliation, and GPT 5.5 final QA.

## File Ownership Rules For Future Agents

- Only one agent may edit `convex/schema.ts`, Convex data model functions, or migration scripts at a time.
- Backend/schema tasks must complete before frontend tasks rely on new fields.
- Only one agent may edit a given app layout/style pair at a time, for example `apps/business/src/layouts/Layout.astro` and `apps/business/src/styles/global.css`.
- Homepage redesign agents must not edit subpages unless their task explicitly owns them.
- Media agents must not delete assets until all references are removed and QA confirms replacement behavior.
- Link/content agents may edit public pages and shared config only for link/copy tasks; they must not redesign layouts.
- Admin agents may edit `apps/*/src/pages/admin/**`, `apps/*/src/actions/index.ts`, `packages/admin/**`, and related Convex functions only if their task explicitly owns those paths.
- Documentation agents may edit only `docs/coordination/**` unless reassigned.
- Every task must leave a handoff note listing files changed, commands run, unresolved risks, and follow-up dependencies.
