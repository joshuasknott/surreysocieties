import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targets = [
  { app: 'ai', source: 'studentswhiteboardcoding.jpg', prefix: 'studentswhiteboardcoding' },
  { app: 'ai', source: 'studentscodingworkshop.jpg', prefix: 'studentscodingworkshop' },
  { app: 'ai', source: 'studenthackathon.jpg', prefix: 'studenthackathon' },
  { app: 'ai', source: 'machinelearningworkshopstudents.jpg', prefix: 'machinelearningworkshopstudents' },
  
  { app: 'business', source: 'universityspeakerpanel.jpg', prefix: 'universityspeakerpanel' },
  { app: 'business', source: 'youngprofessionalsnetworkingevent.jpg', prefix: 'youngprofessionalsnetworkingevent' },
  { app: 'business', source: 'studentscareerfair.jpg', prefix: 'studentscareerfair' },
  { app: 'business', source: 'studententrepreneurshipworkshop.jpg', prefix: 'studententrepreneurshipworkshop' },
  
  { app: 'neurotech', source: 'eegheadsetdemo.jpg', prefix: 'eegheadsetdemo' },
  { app: 'neurotech', source: 'eegsignalscreen.jpg', prefix: 'eegsignalscreen' },
  { app: 'neurotech', source: 'braincomputerinterfacedemo.jpg', prefix: 'braincomputerinterfacedemo' },
  { app: 'neurotech', source: 'studentselectronicslab.jpg', prefix: 'studentselectronicslab' }
];

const widths = [1920, 1280, 768];

async function optimizeImages() {
  for (const target of targets) {
    const sourcePath = path.join(__dirname, `apps/${target.app}/public/images/stock/${target.source}`);
    const outDir = path.join(__dirname, `apps/${target.app}/public/images/optimized`);
    
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    if (!fs.existsSync(sourcePath)) {
      console.log(`Source not found: ${sourcePath}`);
      continue;
    }

    for (const width of widths) {
      const baseOutPath = path.join(outDir, `${target.prefix}-${width}`);
      
      console.log(`Processing ${target.app} - ${width}px...`);
      
      await sharp(sourcePath)
        .resize(width)
        .webp({ quality: 80 })
        .toFile(`${baseOutPath}.webp`);
        
      await sharp(sourcePath)
        .resize(width)
        .jpeg({ quality: 80 })
        .toFile(`${baseOutPath}.jpg`);
    }
  }
  console.log('Done!');
}

optimizeImages().catch(console.error);
