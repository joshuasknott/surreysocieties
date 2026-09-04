# Agentic Builder Approved Showcase Build — 28 August 2026

final result: passed

## Source Visual Truth

- User-approved Product Design mockup: `C:\Users\Joshua Knott\.codex\generated_images\01a045b3-d0aa-73c0-bed5-0e869fd095c4\exec-78522ac1-5a66-4314-8eaa-f484498961da.png`
- Source dimensions: 1487 x 1058 pixels.
- Target state: the Agentic Builder project modal open on its initial prompt screen, using the official Surrey Artificial Intelligence Society lockup, floating fullscreen and close controls, one central prompt composer, and three visual example prompts.
- Explicit omissions preserved from the approved direction: no Student Project header, no Agentic Builder title strip, no decorative hero icon, no “Idea in. Prototype out.” line, no role/team explanation, and no “How it works” link.

## Implementation Evidence

- Local URL: `http://127.0.0.1:4324/`
- Final desktop modal: `C:\Users\Joshua Knott\Projects\surreysocieties\output\product-design\agentic-builder-modal-desktop-final.png`
- Final mobile modal: `C:\Users\Joshua Knott\Projects\surreysocieties\output\product-design\agentic-builder-modal-mobile-final.png`
- Side-by-side source comparison: `C:\Users\Joshua Knott\Projects\surreysocieties\output\product-design\agentic-builder-comparison.png`
- Desktop viewport/state: 1440 x 1024 at density 1, AI homepage, Agentic Builder project modal open, initial prompt state.
- Mobile viewport/state: 390 x 844 at density 1, AI homepage, Agentic Builder project modal open, initial prompt state.

## Comparison History and Fixes

- P1: The initial implementation still exposed the old internal title bar and role-ready status. The approved opening state now hides that chrome while retaining the existing build-progress and completed-preview states after submission.
- P2: The first layout pass inherited a grid display override that distributed the heading, composer, and examples too far apart. Replaced it with a measured vertical composition matching the source hierarchy.
- P2: The first desktop comparison showed an oversized heading, a narrower composer, and a stronger peach wash than the source. Tightened the display size, matched the composer dimensions, and reduced the background glow.
- P2: The mobile model label clipped. Added a compact `3.7 Flash` label for narrow screens and retuned the control widths without creating horizontal overflow.
- P2: The study and club examples initially inherited muted brand-token colors. Gave the existing Lucide book and people icons distinct sage and blue treatments to match the approved mockup.
- The final side-by-side comparison has no remaining actionable P0, P1, or P2 differences.

## Fidelity and Interaction

- The real Surrey AI Society raster lockup is used; it is not redrawn or approximated.
- The primary paperclip, model, arrow, calendar, book, and people symbols come from the project’s Lucide icon library.
- Example prompts remain functional: selecting Event planner populated the composer with its full prompt, and the field was cleared before the final capture.
- The composer retains file attachment, character limit, live status, and build submission behavior. The model label and server workflow now use Gemini 3.7 Flash consistently.
- Desktop and mobile modal layouts have no horizontal overflow. Controls remain reachable and have explicit visible focus styling and reduced-motion behavior.
- The actual AI generation request was not submitted because a Gemini key is not configured in this local preview; the existing server-side key boundary remains intact.

## Verification

- AI production build: passed.
- Desktop visual QA at 1440 x 1024: passed.
- Mobile visual QA at 390 x 844: passed.
- Initial-state example interaction: passed.
- Browser console errors: none. Only the expected local Clerk development-key warning was present.
- `git diff --check` on touched files: passed; only Windows line-ending notices were reported.

---

# Neurotech Hero Fidelity Amendments — 27 August 2026

final result: passed

## Source Visual Truth

- User-selected reference: `C:\Users\JOSHUA~1\AppData\Local\Temp\codex-clipboard-3033844f-328e-4bc1-885c-7aae80a0455f.png`
- Source dimensions: 864 x 1821 pixels at density 1.
- Amendment target: remove the separate full-width header treatment, integrate navigation into the hero image, align the cream logo block with the forest copy column, improve the supplied logo lockup's apparent size and position, and bring hero text and buttons closer to the reference.

## Implementation Evidence

- Local URL: `http://127.0.0.1:4322/`
- Desktop first viewport: `C:\Users\Joshua Knott\Projects\surreysocieties\output\product-design\neurotech-hero-amendment-desktop.png`
- Desktop full-page capture: `C:\Users\Joshua Knott\Projects\surreysocieties\output\product-design\neurotech-amendment-desktop-full.png`
- Clean full-page evidence: `C:\Users\Joshua Knott\Projects\surreysocieties\output\product-design\neurotech-amendment-desktop-full-clean.png`
- Mobile first viewport: `C:\Users\Joshua Knott\Projects\surreysocieties\output\product-design\neurotech-hero-amendment-mobile.png`
- Focused hero comparison: `C:\Users\Joshua Knott\Projects\surreysocieties\output\product-design\neurotech-amendment-hero-comparison.png`
- Full-view comparison: `C:\Users\Joshua Knott\Projects\surreysocieties\output\product-design\neurotech-amendment-full-comparison.png`
- Desktop CSS viewport: 1091 x 1000 at density 1; screenshot content width 1076 pixels because of the browser scrollbar.
- Mobile CSS viewport: 390 x 844 at density 1; screenshot content measured 375 x 812 pixels with no horizontal overflow.
- The 1076-pixel implementation was normalized to 864 pixels for comparison, producing a 864 x 2530 full-page image. The focused implementation hero crop was 1076 x 608 and normalized to 864 x 488 beside the source's 864 x 465 hero crop.
- The clean full-page evidence replaces the browser full-page capture's fixed-position skip-link paint artifact with the separately captured, browser-rendered first viewport from the same route and state. No page content was redrawn or altered.

## Comparison History and Fixes

- P1: The implementation initially placed a full cream header above the hero, so the laboratory image began below navigation rather than running behind it. Changed the desktop header to an overlay grid that shares the hero's 37/63 split: cream logo block on the left, transparent navigation over the image on the right.
- P2: The supplied logo lockup appeared undersized because its raster contains intentional transparent space. Increased and repositioned the real image asset inside a clipped cream brand region without redrawing or altering the logo.
- P2: Hero actions wrapped into a tall vertical stack at common desktop widths. Tightened button type and padding, removed the unnecessary external-link icon from the first CTA, kept both actions inline on desktop, and retained full-width stacking on mobile.
- P2: The first mobile check showed the long `neurotechnology` line reaching the viewport edge. Reduced the mobile display size and tracking; the final 390-pixel check has no clipping or horizontal overflow.
- Post-fix focused and full-view comparisons show no remaining actionable P0, P1, or P2 differences.

## Fidelity Surfaces

- Typography: the hero now uses the reference's compact three-line headline, smaller supporting copy, and lightweight navigation hierarchy. Desktop and mobile wrapping are deliberate and unclipped.
- Spacing and layout rhythm: the logo block, forest copy area, image, navigation, actions, and fact line now follow the reference's shared hero frame instead of separate stacked bars.
- Colors and tokens: the existing warm cream, deep forest, Surrey yellow, and photographic treatment remain unchanged and match the selected direction.
- Image quality and assets: the exact supplied logo and existing high-resolution EEG laboratory hero remain in use. The logo was only resized and positioned; it was not regenerated or approximated.
- Copy and content: all factual copy is unchanged. Button text is clearer after removing a decorative external-link icon from the hero's join action.
- Accessibility and interaction: skip link, focus rings, reduced-motion fallback, mobile menu states, and semantic navigation remain intact. The mobile menu was opened and closed successfully after the amendment.

## Verification

- Neurotech production build: passed.
- Desktop and mobile visual QA: passed.
- Desktop and mobile horizontal-overflow checks: passed.
- Mobile navigation open/close state: passed.
- Browser console errors: none. Only the expected local Clerk development-key warning is present.
- `git diff --check`: no whitespace errors; only Windows line-ending notices.

---

# Neurotech Showcase Build Design QA — 27 August 2026

final result: passed

## Source Visual Truth

- Selected mockup: `C:\Users\JOSHUA~1\AppData\Local\Temp\codex-clipboard-ffadcda1-ff9e-4293-b0e6-bbb092404819.png`
- Source dimensions: 864 x 1821 pixels.
- Direction: a warm, editorial one-page society showcase with a split laboratory hero, three alternating activity stories, a BCI process feature, a purple society-facts band, updates, one prominent join section, and a compact contact footer.

## Implementation Evidence

- Local URL: `http://127.0.0.1:4322/`
- Final desktop screenshot: `C:\Users\Joshua Knott\Projects\surreysocieties\output\product-design\neurotech-implementation-desktop-final.png`
- Final mobile screenshot: `C:\Users\Joshua Knott\Projects\surreysocieties\output\product-design\neurotech-implementation-mobile.png`
- Side-by-side full-view comparison: `C:\Users\Joshua Knott\Projects\surreysocieties\output\product-design\neurotech-design-comparison.png`
- Desktop viewport/state: 1440 x 1100, public homepage, full-page capture after scrolling through each reveal region.
- Mobile viewport/state: 390 x 844, public homepage, navigation menu opened and closed, full-page capture after scrolling.
- Implementation capture dimensions: 1425 x 3770 pixels. For comparison it was normalized to the source width at 864 x 2286 pixels, preserving aspect ratio.

## Comparison History and Fixes

- P2: The first full-page desktop capture recorded below-the-fold reveal content before it had entered the viewport, leaving blank regions in the screenshot. Scrolled through the full page to exercise the real reveal states, then recaptured the rendered result.
- P2: The initial implementation was noticeably taller than the selected composition. Removed an extra hero eyebrow and tightened activity rows, facts-band spacing, and join-section spacing while retaining readable campus-site proportions.
- P2: The assistant initially reused the wide logo lockup in its circular control. Replaced it with the new square Neurotech brand avatar so the control is legible and consistent with the refreshed identity.
- Post-fix comparison found no remaining actionable P0, P1, or P2 issues.

## Fidelity Surfaces

- Typography and hierarchy: bold Manrope headings, compact labels, and restrained body copy reproduce the mockup's clear student-society hierarchy without repeating the society name in the hero.
- Layout and rhythm: navigation, split hero, early actions, alternating activity rows, BCI pipeline, facts band, update strip, join callout, and footer follow the selected composition in the same order.
- Color and identity: warm cream, deep forest, Surrey yellow, and the Neurotech purple accent are used consistently. The exact supplied Neurotech logo is used in the header and footer, with the matching new avatar in the assistant.
- Image quality and content: five high-resolution, Neurotech-specific images show EEG fitting, BCI work, a journal talk, campus collaboration, and a signal-to-action equipment pipeline. They avoid generic robot, radio-wave, and glossy synthetic-tech imagery.
- Copy: wording is direct and factual, based on the society's established activities and public links. It avoids invented sponsors, attendance figures, research outcomes, and vague technology slogans.
- Responsive behavior: desktop and mobile have no page-level horizontal overflow. Images recrop intentionally, alternating rows stack cleanly, buttons remain reachable, and the mobile menu closes correctly.
- Accessibility and motion: visible focus states, labelled controls, semantic headings, alt text, adequate contrast, and a reduced-motion fallback are present.

## Focused Region Review

Separate crop files were not needed. The hero, all alternating content rows, BCI pipeline, join treatment, footer, and assistant avatar were inspected at full resolution in the final desktop and mobile captures. Each generated source image was also inspected independently before integration.

## Verification

- Neurotech production build: passed.
- Desktop and mobile browser visual QA: passed.
- Mobile navigation open/close interaction: passed.
- Primary join, Instagram, and contact destinations: verified.
- Browser console errors: none. The only messages are expected Clerk development-key warnings in the local environment.
- `git diff --check`: no whitespace errors; only Windows line-ending notices.

---

# Three-Site One-Page Design QA — 25 August 2026

final result: passed

## Scope

- AI: merged overlapping About and What we do content, centred the hero robot, replaced the announcement with aligned activity formats, enlarged project modals, replaced all four project covers, removed public themes, and replaced every source reference to the legacy AI logo.
- Business: reduced the primary journey to About, Activities, and Join on one homepage.
- Neurotech: reduced the primary journey to About, Activities, and Join on one homepage.
- Public `/about`, `/events`, `/committee`, and `/join` routes now redirect to the relevant homepage section. Admin content-management routes remain intact.

## Browser Evidence

- AI final desktop screenshot: `C:\Users\Joshua Knott\.codex\visualizations\2026\08\25\01a03960-4494-7243-9743-f0ec8beae481\surrey-ai-final-one-page.png`
- Desktop QA: 1440x1000 across AI, Business, and Neurotech.
- Mobile QA: 390x844 across AI, Business, and Neurotech.
- All primary anchors cleared sticky headers; mobile menus closed after selection; no page-level horizontal overflow was present.
- All four AI project dialogs opened at the enlarged viewport size and rendered their interactive content.
- All Neurotech activity images completed with non-zero natural width.
- AI assistant toggle and panel use `/logos/brand/surrey-ai-avatar-light.png`; no legacy AI logo source references remain.

## Verification

- AI, Business, and Neurotech production builds: passed.
- Root TypeScript project check: passed.
- Full Playwright launch suite: 41 passed.
- Redirect responses: verified as HTTP 302 with homepage hash targets.
- `git diff --check`: no whitespace errors; only existing Windows line-ending notices.
- No actionable P0/P1/P2 findings remain.

---

# Previous Surrey AI Brand Redesign Design QA

final result: passed

## Source Visual Truth

- Combined Product Design target: `C:\Users\Joshua Knott\.codex\generated_images\01a03960-4494-7243-9743-f0ec8beae481\exec-3420605b-d3f5-4dbe-8da8-a961b251cc9f.png`
- Brand source: the supplied Surrey Artificial Intelligence Society brand kit using near-black `#111111`, orange `#FF4A00`, and warm white `#FAF8F3`.
- Selected direction: the dark editorial hero, orange humanoid AI image, early event agenda, warm project grid, responsible-AI band, orange join CTA, and official logo lockups.

## Implementation Evidence

- Local URL: `http://127.0.0.1:4321/`
- Desktop screenshot: `C:\Users\Joshua Knott\.codex\visualizations\2026\08\25\01a03960-4494-7243-9743-f0ec8beae481\surrey-ai-redesign-desktop.png`
- Mobile screenshot: `C:\Users\Joshua Knott\.codex\visualizations\2026\08\25\01a03960-4494-7243-9743-f0ec8beae481\surrey-ai-redesign-mobile.png`
- Side-by-side comparison: `C:\Users\Joshua Knott\.codex\visualizations\2026\08\25\01a03960-4494-7243-9743-f0ec8beae481\surrey-ai-design-comparison.png`
- Viewport/state: desktop 1440x1000 and mobile 390x844, public homepage, light mode.

## Findings and Fixes

- P2: The two compact programme labels initially clipped because a higher-specificity grid rule constrained their copy columns. Fixed with an explicit compact-card grid rule and remeasured in the browser.
- P2: Project cards lacked the mockup's visible action treatment. Added a consistent orange `Open project` label while preserving the existing modal interaction.
- P2: The first humanoid hero pass used one 1200px source at every viewport. Added an 828px mobile source and matched Three.js texture selection to the responsive image.
- No actionable P0/P1/P2 findings remain.

## Fidelity Surfaces

- Typography and hierarchy: the heavy, tightly spaced editorial headings and orange emphasis closely follow the selected visual target.
- Layout and rhythm: split hero, overlapping event strip, four-up projects, pathway grid, responsibility band, join CTA, and footer all track the mockup structure.
- Color and identity: the approved palette and official logo/avatar assets are used throughout public navigation, content, footer, favicon, focus states, and controls.
- Image fidelity: the rejected round robot is not used. The hero uses the approved mockup-like humanoid profile and a generated orange/black Neural Beat Lab thumbnail.
- Responsive behavior: no page-level horizontal overflow at 390px; projects intentionally use an accessible horizontal card rail; join and event actions stay visible early.
- Interaction: mobile menu, project dialog, theme toggle, assistant, join link, skip link, reduced-motion mode, and all public routes were verified.

## Verification

- `npm run build` in `apps/ai`: passed.
- AI public launch checks: 14 passed.
- Browser console errors on the final homepage: none.

---

# Neurotech Option 2 Design QA

final result: passed

## Source Visual Truth

- Source mockup: `C:\Users\Josh\.codex\generated_images\019e943f-69a2-7353-a819-f4f5cf7cff19\ig_0bf2fbb41f77150b016a21dc2c7dd881918aa020316134fda3.png`
- Selected direction: Student Discovery Lab, the lighter and more student-friendly option 2.

## Implementation Evidence

- Local URL: `http://localhost:4325/`
- Desktop screenshot: `C:\Users\Josh\Projects\surreysocieties\output\playwright\neurotech-option2-implemented-desktop.png`
- Mobile screenshot: `C:\Users\Josh\Projects\surreysocieties\output\playwright\neurotech-option2-implemented-mobile.png`
- Mobile journey screenshot: `C:\Users\Josh\Projects\surreysocieties\output\playwright\neurotech-option2-implemented-mobile-journey.png`
- Mobile activities screenshot: `C:\Users\Josh\Projects\surreysocieties\output\playwright\neurotech-option2-implemented-mobile-activities.png`
- Full-view comparison: `C:\Users\Josh\Projects\surreysocieties\output\playwright\neurotech-option2-comparison-desktop.png`
- Viewport/state: desktop 1440x1024 and mobile 390x844, public homepage, single public visual mode.

## Findings

- No actionable P0/P1/P2 findings remain.

## Fidelity Surfaces

- Fonts and typography: Fraunces and Inter preserve the mockup's editorial display plus readable body pairing. Desktop headline hierarchy is close; mobile wraps cleanly without one-word lines.
- Spacing and layout rhythm: Hero, journey cards, and activity cards now follow the option 2 structure. Desktop includes the next section hint; mobile stacks without overlap.
- Colors and tokens: Pale mint/off-white surfaces, deep navy text, teal signal accents, and gold CTAs match the selected direction while preserving Neurotech tokens and single-mode behavior.
- Image quality and asset fidelity: New generated hero and activity assets replace the darker/technical imagery. The page now uses real raster assets for the community hero, talks, workshops, projects, and socials.
- Copy and content: Copy is less technical and avoids fake lab, equipment, research outcome, sponsor, or attendance claims.

## Focused Region Comparison

Focused separate crops were not needed after the desktop full-view comparison and mobile section captures: the primary fidelity areas were the hero, journey cards, generated image assets, CTA treatment, and responsive stacking, all visible in the captured evidence.

## Patches Made Since QA

- Replaced the dark/cinematic homepage hero with the selected option 2 light student-discovery structure.
- Generated and wired in five new Neurotech assets for the hero and activity cards.
- Updated first-section copy to be student-friendly and less technical.
- Added responsive CSS for the light nav, hero image treatment, journey cards, and activity cards.
- Tuned desktop hero height/crop and mobile headline sizing after screenshots.

## Follow-up Polish

- P3: If desired, the nav can be extended with a `Focus Areas` anchor to match the generated mockup even more closely, but the current route set remains consistent with the existing site.

---

# Previous Agentic Builder Design QA

Final result: passed

## Reference Direction

Selected Product Design direction:

- Implement the cleaned-up Warm Guided Canvas mockup for the actual Agentic Builder tool.
- Keep the UI light, minimal, polished, accessible, and less technical.
- Remove the Drafting status treatment.
- Use faster Gemini Flash language instead of slow timing copy.
- Keep only two views: Preview and Build steps.
- Keep practical actions: Share, New build, Close.
- Remove the bottom marketing-style quality checklist.

## Checks Run

- `npm run build:ai` passed.
- Opened the AI homepage locally and launched the Agentic Builder project modal.
- Confirmed the tool renders as a light workspace inside the modal.
- Confirmed the legacy modal close button is hidden for this tool so actions do not overlap.
- Confirmed only Preview and Build steps tabs are present.
- Confirmed removed labels are absent: Drafting, Notes, Details.
- Confirmed Share, New build, and Close actions are present.
- Checked browser console errors after opening the modal: none found.

## Notes

- The existing server-side AI boundary is preserved: Gemini keys remain server-side only.
- The Agentic Builder API still depends on local/deployed AI environment configuration being present.
