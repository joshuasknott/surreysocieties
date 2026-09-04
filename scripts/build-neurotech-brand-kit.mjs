import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const outDir = path.join(root, 'output', 'brand-kits', 'surrey-neurotech-brand-kit');
const sourceDir = path.join(outDir, 'source');
const logoPath = path.join(root, 'apps', 'neurotech', 'public', 'logos', 'neurotech-logo.png');
const lightArtworkSource = 'C:/Users/Joshua Knott/.codex/generated_images/01a03960-4494-7243-9743-f0ec8beae481/exec-58095848-1768-4e96-a606-5b4d32c1d882.png';
const darkArtworkSource = 'C:/Users/Joshua Knott/.codex/generated_images/01a03960-4494-7243-9743-f0ec8beae481/exec-813be294-26d6-4861-8a9a-b3c933d53e43.png';

const palette = {
  ink: '#07162D',
  navy: '#092955',
  deep: '#04142B',
  gold: '#D6B54B',
  goldSoft: '#EFD889',
  slate: '#6F9CA9',
  ivory: '#F7F1E4',
  paper: '#FFFAF0',
  mist: '#DFE8E8',
};

const svg = (width, height, body) => Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    ${body}
  </svg>
`);

const labelStyles = `
  .kicker { font-family: Arial, Helvetica, sans-serif; font-size: 34px; font-weight: 700; letter-spacing: 10px; }
  .name { font-family: Georgia, 'Times New Roman', serif; font-size: 88px; font-weight: 700; letter-spacing: -2px; }
  .society { font-family: Arial, Helvetica, sans-serif; font-size: 34px; font-weight: 700; letter-spacing: 12px; }
`;

function wordmarkSvg(width, height, { x = 0, y = 0, color = palette.ink, accent = palette.gold, align = 'start', scale = 1 } = {}) {
  const anchor = align === 'middle' ? 'middle' : 'start';
  const transform = `translate(${x} ${y}) scale(${scale})`;
  return svg(width, height, `
    <style>${labelStyles}</style>
    <g transform="${transform}" text-anchor="${anchor}">
      <text class="kicker" x="0" y="36" fill="${accent}">SURREY</text>
      <text class="name" x="0" y="130" fill="${color}">Neurotech</text>
      <text class="society" x="0" y="184" fill="${color}">SOCIETY</text>
    </g>
  `);
}

async function logo(size) {
  return sharp(logoPath).resize(size, size, { fit: 'contain' }).png().toBuffer();
}

async function artwork(source, width, height, { opacity = 1, position = 'attention' } = {}) {
  return sharp(source)
    .resize(width, height, { fit: 'cover', position })
    .ensureAlpha(opacity)
    .png()
    .toBuffer();
}

async function canvas(width, height, background, layers, filename) {
  await sharp({ create: { width, height, channels: 4, background } })
    .composite(layers)
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(path.join(outDir, filename));
}

async function makePrimaryLockups() {
  const mark = await logo(470);
  const lightArt = await artwork(lightArtworkSource, 1800, 1000, { opacity: 0.23, position: 'right top' });
  const darkArt = await artwork(darkArtworkSource, 1800, 1000, { opacity: 0.58, position: 'left bottom' });

  await canvas(1800, 640, { r: 0, g: 0, b: 0, alpha: 0 }, [
    { input: mark, left: 70, top: 85 },
    { input: wordmarkSvg(1800, 640, { x: 610, y: 205, color: palette.ink, accent: palette.gold, scale: 1.34 }) },
  ], '01-logo-primary-transparent.png');

  await canvas(1800, 1000, palette.ivory, [
    { input: lightArt, left: 0, top: 0 },
    { input: svg(1800, 1000, `<rect x="64" y="64" width="1672" height="872" rx="8" fill="none" stroke="${palette.ink}" stroke-opacity="0.14"/>`) },
    { input: mark, left: 145, top: 265 },
    { input: wordmarkSvg(1800, 1000, { x: 675, y: 370, color: palette.ink, accent: palette.gold, scale: 1.55 }) },
  ], '02-logo-primary-light.png');

  await canvas(1800, 1000, palette.deep, [
    { input: darkArt, left: 0, top: 0 },
    { input: svg(1800, 1000, `<circle cx="380" cy="500" r="272" fill="${palette.ivory}"/><rect x="64" y="64" width="1672" height="872" rx="8" fill="none" stroke="${palette.gold}" stroke-opacity="0.38"/>`) },
    { input: mark, left: 145, top: 265 },
    { input: wordmarkSvg(1800, 1000, { x: 675, y: 370, color: palette.ivory, accent: palette.goldSoft, scale: 1.55 }) },
  ], '03-logo-primary-dark.png');
}

async function makeStackedAndMarks() {
  const mark = await logo(550);
  await canvas(1080, 1080, palette.ivory, [
    { input: svg(1080, 1080, `<circle cx="540" cy="380" r="300" fill="${palette.paper}" stroke="${palette.gold}" stroke-width="3" stroke-opacity="0.55"/>`) },
    { input: mark, left: 265, top: 105 },
    { input: wordmarkSvg(1080, 1080, { x: 540, y: 755, color: palette.ink, accent: palette.gold, align: 'middle', scale: 1 }) },
  ], '04-logo-stacked-light.png');

  await sharp(logoPath).png({ compressionLevel: 9 }).toFile(path.join(outDir, '05-mark-neurotech-transparent.png'));
}

async function makeAvatars() {
  const mark = await logo(760);
  const lightArt = await artwork(lightArtworkSource, 1080, 1080, { opacity: 0.13, position: 'right top' });
  const darkArt = await artwork(darkArtworkSource, 1080, 1080, { opacity: 0.6, position: 'left bottom' });

  await canvas(1080, 1080, palette.ivory, [
    { input: lightArt, left: 0, top: 0 },
    { input: svg(1080, 1080, `<circle cx="540" cy="540" r="414" fill="${palette.paper}" stroke="${palette.gold}" stroke-width="5"/>`) },
    { input: mark, left: 160, top: 160 },
  ], '06-avatar-light-square.png');

  await canvas(1080, 1080, palette.deep, [
    { input: darkArt, left: 0, top: 0 },
    { input: svg(1080, 1080, `<circle cx="540" cy="540" r="414" fill="${palette.ivory}" stroke="${palette.gold}" stroke-width="5"/>`) },
    { input: mark, left: 160, top: 160 },
  ], '07-avatar-dark-square.png');
}

async function makeHeaders() {
  const mark = await logo(278);
  const lightArt = await artwork(lightArtworkSource, 1584, 396, { opacity: 0.28, position: 'right top' });
  const darkArt = await artwork(darkArtworkSource, 1584, 396, { opacity: 0.72, position: 'left bottom' });

  await canvas(1584, 396, palette.ivory, [
    { input: lightArt, left: 0, top: 0 },
    { input: svg(1584, 396, `<circle cx="215" cy="198" r="154" fill="${palette.paper}" stroke="${palette.gold}" stroke-width="2"/><path d="M 470 304 H 1450" stroke="${palette.gold}" stroke-width="3"/>`) },
    { input: mark, left: 76, top: 59 },
    { input: wordmarkSvg(1584, 396, { x: 465, y: 85, color: palette.ink, accent: palette.gold, scale: 0.92 }) },
  ], '08-header-wide-light.png');

  await canvas(1584, 396, palette.deep, [
    { input: darkArt, left: 0, top: 0 },
    { input: svg(1584, 396, `<circle cx="215" cy="198" r="154" fill="${palette.ivory}" stroke="${palette.gold}" stroke-width="2"/><path d="M 470 304 H 1450" stroke="${palette.gold}" stroke-width="3"/>`) },
    { input: mark, left: 76, top: 59 },
    { input: wordmarkSvg(1584, 396, { x: 465, y: 85, color: palette.ivory, accent: palette.goldSoft, scale: 0.92 }) },
  ], '09-header-wide-dark.png');
}

function miniWordmarkSvg(width, height, { color, accent, x, y }) {
  return svg(width, height, `
    <style>
      .mini-kicker { font-family: Arial, Helvetica, sans-serif; font-size: 22px; font-weight: 700; letter-spacing: 7px; }
      .mini-name { font-family: Georgia, 'Times New Roman', serif; font-size: 43px; font-weight: 700; }
    </style>
    <g transform="translate(${x} ${y})">
      <text class="mini-kicker" x="0" y="0" fill="${accent}">SURREY</text>
      <text class="mini-name" x="0" y="53" fill="${color}">Neurotech Society</text>
    </g>
  `);
}

async function makeSocialTemplates() {
  const smallMark = await logo(150);
  const lightSquareArt = await artwork(lightArtworkSource, 1080, 1080, { opacity: 0.33, position: 'right bottom' });
  const darkPortraitArt = await artwork(darkArtworkSource, 1080, 1350, { opacity: 0.68, position: 'left bottom' });
  const lightStoryArt = await artwork(lightArtworkSource, 1080, 1920, { opacity: 0.38, position: 'right bottom' });

  await canvas(1080, 1080, palette.ivory, [
    { input: lightSquareArt, left: 0, top: 0 },
    { input: svg(1080, 1080, `<rect x="54" y="54" width="972" height="972" rx="8" fill="none" stroke="${palette.ink}" stroke-opacity="0.18"/><path d="M 84 267 H 996" stroke="${palette.gold}" stroke-width="3"/><rect x="84" y="312" width="720" height="590" rx="4" fill="${palette.ivory}" fill-opacity="0.72"/>`) },
    { input: smallMark, left: 84, top: 85 },
    { input: miniWordmarkSvg(1080, 1080, { color: palette.ink, accent: palette.gold, x: 270, y: 125 }) },
  ], '10-social-square-template.png');

  await canvas(1080, 1350, palette.deep, [
    { input: darkPortraitArt, left: 0, top: 0 },
    { input: svg(1080, 1350, `<circle cx="160" cy="170" r="104" fill="${palette.ivory}"/><rect x="64" y="64" width="952" height="1222" rx="8" fill="none" stroke="${palette.gold}" stroke-opacity="0.55"/><rect x="100" y="360" width="780" height="650" rx="4" fill="${palette.deep}" fill-opacity="0.74"/>`) },
    { input: smallMark, left: 85, top: 95 },
    { input: miniWordmarkSvg(1080, 1350, { color: palette.ivory, accent: palette.goldSoft, x: 300, y: 135 }) },
  ], '11-social-portrait-template.png');

  await canvas(1080, 1920, palette.ivory, [
    { input: lightStoryArt, left: 0, top: 0 },
    { input: svg(1080, 1920, `<rect x="54" y="82" width="972" height="1756" rx="8" fill="none" stroke="${palette.ink}" stroke-opacity="0.18"/><path d="M 84 295 H 996" stroke="${palette.gold}" stroke-width="3"/><rect x="84" y="365" width="760" height="900" rx="4" fill="${palette.ivory}" fill-opacity="0.78"/>`) },
    { input: smallMark, left: 84, top: 105 },
    { input: miniWordmarkSvg(1080, 1920, { color: palette.ink, accent: palette.gold, x: 270, y: 145 }) },
  ], '12-story-template.png');
}

async function makeOverview() {
  const files = [
    '02-logo-primary-light.png',
    '03-logo-primary-dark.png',
    '06-avatar-light-square.png',
    '07-avatar-dark-square.png',
    '08-header-wide-light.png',
    '09-header-wide-dark.png',
    '10-social-square-template.png',
    '11-social-portrait-template.png',
    '12-story-template.png',
  ];
  const placements = [
    [70, 210, 650, 360], [770, 210, 650, 360],
    [70, 620, 310, 310], [420, 620, 310, 310],
    [770, 620, 650, 163], [770, 824, 650, 163],
    [70, 1020, 310, 310], [420, 1020, 310, 388], [770, 1020, 250, 444],
  ];
  const layers = [{
    input: svg(1500, 1540, `
      <style>
        .title { font-family: Georgia, 'Times New Roman', serif; font-size: 64px; font-weight: 700; }
        .meta { font-family: Arial, Helvetica, sans-serif; font-size: 20px; font-weight: 700; letter-spacing: 6px; }
      </style>
      <text class="meta" x="70" y="76" fill="${palette.gold}">SURREY NEUROTECH SOCIETY</text>
      <text class="title" x="70" y="150" fill="${palette.ink}">Brand asset kit</text>
      <path d="M 70 178 H 1430" stroke="${palette.gold}" stroke-width="3"/>
    `),
  }];
  for (let i = 0; i < files.length; i += 1) {
    const [left, top, width, height] = placements[i];
    const thumb = await sharp(path.join(outDir, files[i]))
      .resize(width, height, { fit: 'contain', background: palette.paper })
      .png()
      .toBuffer();
    layers.push({ input: thumb, left, top });
  }
  await canvas(1500, 1540, palette.paper, layers, '13-brand-kit-overview.png');
}

async function main() {
  await fs.mkdir(sourceDir, { recursive: true });
  await fs.copyFile(logoPath, path.join(sourceDir, 'original-logo-unchanged.webp'));
  await fs.copyFile(lightArtworkSource, path.join(sourceDir, 'supporting-artwork-light.png'));
  await fs.copyFile(darkArtworkSource, path.join(sourceDir, 'supporting-artwork-dark.png'));
  await makePrimaryLockups();
  await makeStackedAndMarks();
  await makeAvatars();
  await makeHeaders();
  await makeSocialTemplates();
  await makeOverview();
  console.log(`Neurotech brand kit written to ${outDir}`);
}

await main();
