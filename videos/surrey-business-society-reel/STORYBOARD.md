# Storyboard

**Format:** 1080x1920 portrait
**Audio:** conversational TTS voiceover + restrained warm electronic underscore + light interface SFX
**VO direction:** confident UK student-community tone; calm, useful, not salesy; leave small pauses after the hook and before the CTA
**Style basis:** DESIGN.md, captured homepage screenshots, and local Business site assets

## Global Direction

This is a sharp vertical society reel, not a corporate explainer. The viewer should feel that business becomes clearer through real student-facing moments: direction, enterprise, networking, practical skills, events, and useful conversations. Motion should be editorial and confident: vertical pushes, line draws, numbered blocks, image crops, and gold CTA flashes.

Use the site's actual palette and typography. Avoid fake metrics and invented event claims. The video should feel like a polished extension of the homepage, with the core thesis "Make business feel less abstract" carrying the whole piece.

## Asset Audit

| Asset | Type | Assign to Beat | Role |
| --- | --- | --- | --- |
| `capture/assets/images/sbs-logo.png` | Logo | 1, 5 | Brand mark opener and CTA close |
| `capture/assets/images/business-home-direction.png` | Hero image | 1 | Full-bleed visual for direction and abstraction becoming concrete |
| `capture/assets/images/business-events-programme.png` | Hero image | 4 | Events, useful conversations, practical next steps |
| `capture/assets/images/business-join-membership.png` | Supporting image | 5 | Soft background texture behind join CTA |
| `capture/screenshots/scroll-065.png` | Screenshot | 3 | Real site proof of Careers, Enterprise, Networking, Skills |
| `capture/screenshots/scroll-100.png` | Screenshot | 4, 5 | Real join band and practice section reference |

## Beat 1 - Hook: Abstract To Direction (0.00-2.80s)

**VO:** "Make business feel less abstract."

**Concept:** We open inside the homepage world, cropped tall from the desk/map/compass scene. The camera feels like it is finding a route across a map: business is not a vague concept, it is something you can point at and act on.

**Visual:** Full-bleed `business-home-direction.png` in a vertical crop, dark ink overlay, subtle gold compass-like path drawing, SBS logo top-left, small "University of Surrey" label, and the large Playfair line "Make business feel less abstract." The word "abstract" resolves with a gold underline.

**Mood:** Editorial, grounded, polished student-professional.

**Animation choreography:** image slow pushes in; logo settles from scale; label tracks in; headline words cascade upward; gold path draws across the lower third; underline fills under "abstract."

**Transition:** Vertical push into Beat 2, using a gold rule as the wipe edge.

**Depth layers:** BG hero crop and ink overlay; MG headline and drawn route; FG logo and small label.

**SFX:** soft paper slide, small gold tick on underline.

## Beat 2 - Why Join: Clarity And Confidence (2.80-7.20s)

**VO:** "Careers, enterprise, networking, and practical skills become clearer"

**Concept:** The message becomes practical. The scene switches from atmosphere to organized paper: three crisp reasons appear as numbered notes with thin dividers.

**Visual:** Warm paper background `#F5F0E7`. Large Playfair heading "Clearer direction." Three numbered blocks: "Careers", "Enterprise", "Practical skills." A muted DM Sans line says "Useful practice, not vague advice." Gold numbers and burgundy micro-accent.

**Mood:** Helpful, clear, not flashy.

**Animation choreography:** paper field slides up; heading rises and sharpens; dividers draw top-to-bottom; three blocks cascade in with different x offsets; gold numbers count on from 00 to 03.

**Transition:** Push slide upward; dividers stretch into the next section's column rules.

**Depth layers:** BG paper texture; MG blocks and rules; FG gold numbers.

**SFX:** three soft ticks for the numbered blocks.

## Beat 3 - Community: Same Questions (7.20-10.40s)

**VO:** "when you're around people asking the same questions."

**Concept:** The homepage's dark focus section becomes a moving proof panel. We show the actual society pillars while making them feel alive and social.

**Visual:** Ink background `#071A2D`. A tilted, cropped `scroll-065.png` panel floats as a real-site proof layer. Four gold chips orbit into place: Careers, Enterprise, Networking, Skills. A small caption reads "Four practical routes into momentum."

**Mood:** Credible, sharp, opportunity-led.

**Animation choreography:** screenshot panel rotates gently into perspective; four chips slide in from different edges; thin rules draw between them; words subtly pulse as each is spoken/seen.

**Transition:** Blur-through into Beat 4, as the screenshot panel becomes the practice image crop.

**Depth layers:** BG ink with faint oversized ghost words; MG site screenshot panel; FG gold chips and rules.

**SFX:** low whoosh, four quick marker taps.

## Beat 4 - Events: Useful Conversations (10.40-13.90s)

**VO:** "Come to events. Swap useful conversations. Build confidence."

**Concept:** This is the most human beat. The practice image shows charts, handshake, microphone, lanyards, and desk objects: business as conversations and action, not a boardroom fantasy.

**Visual:** Full-bleed vertical crop of `business-events-programme.png` with dark overlay. Three short phrases land in sequence: "Events", "Useful conversations", "Confidence". A small gold line connects them like an agenda.

**Mood:** Active, student-friendly, practical.

**Animation choreography:** image pans horizontally; phrase one stamps in; phrase two slides in with a drawn connector; phrase three scales in with a restrained gold glow; small icon-like line details draw around the words.

**Transition:** Burgundy color dip into final CTA.

**Depth layers:** BG practice image; MG phrase stack; FG connector path and gold ticks.

**SFX:** three clean agenda ticks, then a warm dip.

## Beat 5 - CTA: Join (13.90-17.00s)

**VO:** "Leave with a next step you can actually use. Join Surrey Business Society."

**Concept:** The reel resolves into the site CTA band. We do not over-explain; we give the viewer one clear next action.

**Visual:** Burgundy background `#861F35` with subtle cropped `business-join-membership.png` texture at low opacity. SBS logo centered above the line "Join Surrey Business Society." Supporting line: "Find your next useful conversation." Gold button-style block: "JOIN THE SOCIETY."

**Mood:** Direct, warm, confident.

**Animation choreography:** burgundy field expands from center; logo fades up; CTA line rises in Playfair; supporting line appears in DM Sans; gold button locks into place with a subtle glow; final frame holds cleanly for readability.

**Transition:** Final gentle fade to ink.

**Depth layers:** BG burgundy/image texture; MG CTA typography; FG gold button and logo.

**SFX:** resolved chord, soft button lock.

## Production Architecture

```
surrey-business-society-reel/
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
│   │   ├── images/
│   │   └── fonts/
│   └── extracted/
└── compositions/
    └── business-reel.html
```
