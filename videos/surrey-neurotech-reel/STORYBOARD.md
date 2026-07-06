# Storyboard

**Format:** 1080x1920 portrait
**Audio:** Local Kokoro voiceover, light electronic underscore direction only, no MP4 render until approved
**VO direction:** Clear, warm student-society narrator. Curious and measured, with short pauses after the opener and before the final CTA.
**Style basis:** DESIGN.md, captured local homepage, and copied local site assets in `capture/assets/site-images/`

## Global Direction

The reel should feel like entering a student-led science signal atlas: glowing neural networks, warm gold editorial type, and real student activity imagery. The pacing should be confident but not intimidating; the science is shown as an invitation. Every beat combines at least one captured or local site image with structured type, signal lines, and small human details.

Motion should build from quiet curiosity to community momentum. Use cyan line drawing, gold rule reveals, kinetic words, floating image tiles, and subtle brain-image parallax. Keep the palette exact: deep navy, warm ivory, gold, cyan, and pale blue-white.

## Asset Audit

| Asset | Type | Assign to Beat | Role |
| --- | --- | --- | --- |
| `capture/assets/site-images/neurotech-logo.png` | Logo | Beat 1, Beat 5 | Brand mark opener and final seal |
| `capture/assets/site-images/neurotech-home-neural-hero.png` | Hero image | Beat 1, Beat 2 | Neural-brain world, slow parallax and signal glow |
| `capture/assets/site-images/neurotech-talks-thumb.png` | Student image | Beat 3 | Talks card, human learning moment |
| `capture/assets/site-images/neurotech-workshops-thumb.png` | Student image | Beat 3 | Workshop card, collaboration moment |
| `capture/assets/site-images/neurotech-projects-thumb.png` | Student image | Beat 4 | Projects and responsible innovation |
| `capture/assets/site-images/neurotech-socials-thumb.png` | Student image | Beat 3 | Socials/community warmth |
| `capture/assets/site-images/neurotech-join-hero.png` | Hero image | Beat 5 | Final join atmosphere behind CTA |
| `capture/assets/svgs/logo-aafc5fe8.svg` | SVG icon | Beat 2 | Brain icon marker |
| `capture/assets/svgs/logo-c2e15276.svg` | SVG icon | Beat 2 | Ethics icon marker |
| `capture/assets/svgs/logo-94fb249a.svg` | SVG icon | Beat 2 | Scale/ethics visual support |
| `capture/screenshots/scroll-000.png` | Screenshot | Beat 1 | Optional texture reference for hero composition |

## BEAT 1 - HOOK (0.00-2.05s)

**VO cue:** "Neurotech, for good."

**Concept:** The video opens inside the neural atlas, not on a plain title card. The brain image fills the vertical frame like a luminous map; the society name and logo feel present but not institutional. The opener is a calm thesis: this is future-facing technology with a moral centre.

**Visual description:** Deep navy fills the frame. The neural-brain hero sits oversized on the right and lower half, slowly drifting as gold and cyan signal arcs draw across it. The Neurotech logo appears small at the top, then the words "Neurotech, for good." assemble in large Fraunces type. A gold rule draws under the phrase, while a cyan pulse dot travels along a path.

**Mood direction:** Scientific title sequence, warm editorial university society, not a lab manual.

**Assets:** `neurotech-home-neural-hero.png`, `neurotech-logo.png`

**Techniques:** SVG path drawing, per-word kinetic typography, Canvas 2D signal particles.

**Animation choreography:** Brain image DRIFTS slowly. Logo SETTLES from small scale. "Neurotech" RISES into place; "for good." GLOWS in gold. Signal path DRAWS across the frame.

**Transition:** Blur crossfade into Beat 2, 0.45s, `sine.inOut`.

**Depth layers:** BG dark navy and radial glows; MG neural hero image and signal path; FG logo and headline.

**SFX cues:** Soft low pad, single clean chime as "for good." lands.

## BEAT 2 - FIELDS MEET (2.05-6.35s)

**VO cue:** "At Surrey, neuroscience meets A I, brain-computer interfaces, and ethics."

**Concept:** Neurotech becomes a constellation of disciplines. The viewer sees that the society is not only for one course or one kind of student; it is where science, computing, design, and ethics meet.

**Visual description:** Six circular markers form a vertical signal track inspired by the homepage pathway row. Labels appear around the markers: Neuroscience, A I, B C I, Ethics, Design, and Psychology. Cyan connectors draw between them, and small icon tiles orbit gently. The brain image remains faint in the background as a common map.

**Mood direction:** Accessible scientific diagram, like a museum exhibit brought to life.

**Assets:** `neurotech-home-neural-hero.png`, captured SVG icon set.

**Techniques:** SVG path drawing, CSS 3D marker tilt, kinetic labels.

**Animation choreography:** Connector line DRAWS downward. Markers BLOOM one by one. Labels SLIDE from alternating sides. Small icon tiles FLOAT at different depths.

**Transition:** Velocity-matched upward into Beat 3, 0.33s `power2.in` / `power2.out`.

**Depth layers:** BG faint neural image; MG signal track; FG discipline labels and icon rings.

**SFX cues:** Soft data ticks as each marker lands.

## BEAT 3 - COMMUNITY IN MOTION (6.35-9.65s)

**VO cue:** "We learn through talks, workshops, projects, and socials."

**Concept:** The reel turns human. Science becomes rooms, tables, conversation, and shared making. The beat should feel approachable: this is something you can walk into.

**Visual description:** Four activity cards cascade vertically, each with a real site image thumbnail and a compact label: Talks, Workshops, Projects, Socials. The cards use the site's activity-ledger style, but in a portrait-friendly stack. Small numbered circles and cyan arrows echo the homepage.

**Mood direction:** Student discovery, warm and social, carefully structured.

**Assets:** `neurotech-talks-thumb.png`, `neurotech-workshops-thumb.png`, `neurotech-projects-thumb.png`, `neurotech-socials-thumb.png`

**Techniques:** CSS 3D transforms, image Ken Burns motion, counter/number reveal.

**Animation choreography:** Cards CASCADE in with staggered depth. Images PAN slowly. Number circles COUNT in from 01 to 04. Cyan arrows NUDGE forward.

**Transition:** Blur crossfade into Beat 4, 0.45s, `sine.inOut`.

**Depth layers:** BG pale wash with cyan glow; MG card stack; FG labels, numbers, and arrows.

**SFX cues:** Warm paper-like ticks as cards arrive.

## BEAT 4 - OPEN AND RESPONSIBLE (9.65-17.25s)

**VO cue:** "No specialist background needed, just curiosity and care. Build responsible ideas with people who are exploring the future of the brain."

**Concept:** This is the values beat. It needs to make inclusion and ethics feel strong, not soft. The visual centers responsible innovation as an active practice with people, not a footnote.

**Visual description:** A large project image appears inside a bordered panel. Around it, three route cards animate in: Open to all students, Responsible innovation, Neurotech for good. Gold and cyan lines connect the cards to the image like a responsible-design map. A warm gold highlight sweeps under the phrase "curiosity and care."

**Mood direction:** Human-centred science, reflective but optimistic.

**Assets:** `neurotech-projects-thumb.png`, `neurotech-home-neural-hero.png`

**Techniques:** SVG connectors, marker highlight sweep, layered image compositing.

**Animation choreography:** Project image TILTS into place. Value cards SLIDE in from different edges. Connector lines DRAW and LOCK. Highlight SWEEPS under key words.

**Transition:** Gentle focus pull into Beat 5, 0.55s, `power1.inOut`.

**Depth layers:** BG deep navy with faint neural texture; MG project image and connector map; FG value cards and highlighted copy.

**SFX cues:** Lower pad opens up, subtle shimmer on the highlight.

## BEAT 5 - CTA (17.25-20.00s)

**VO cue:** "Join Surrey Neurotech Society."

**Concept:** The final beat should feel like an invitation, not a hard sell. The society mark, student imagery, and exact CTA resolve the video with warmth and clarity.

**Visual description:** The join hero image fills the background under a navy overlay. The logo sits above a large Fraunces CTA: "Join Surrey Neurotech Society." Below it, three small chips read Talks, Workshops, Projects + Socials. A gold button-like bar reads "Neurotech, for good." as a closing echo.

**Mood direction:** Inspiring student invitation, intelligent and open.

**Assets:** `neurotech-join-hero.png`, `neurotech-logo.png`

**Techniques:** Per-word typography, image Ken Burns motion, glow pulse.

**Animation choreography:** Background SLOW-ZOOMS. Logo BREATHES with a subtle gold glow. CTA WORDS LAND one by one. Chips CASCADE upward. Final gold bar FILLS left to right.

**Transition:** Final fade to deep navy in the last 0.45s only.

**Depth layers:** BG join hero image; MG navy overlay and glow; FG logo, CTA, chips, closing bar.

**SFX cues:** Resolve to a warm final chord.

## Production Architecture

```text
project/
├── index.html
├── DESIGN.md
├── SCRIPT.md
├── STORYBOARD.md
├── narration.txt
├── narration.wav
├── transcript.json
├── capture/
│   ├── screenshots/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── svgs/
│   │   └── site-images/
│   └── extracted/
└── snapshots/
```
