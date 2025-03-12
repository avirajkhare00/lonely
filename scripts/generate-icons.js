// This script can be used to convert SVG icons to PNG format
// You would need to install sharp: npm install sharp
// Then run: node scripts/generate-icons.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateIcons() {
  const sizes = [192, 512];
  
  for (const size of sizes) {
    try {
      // Read the SVG file
      const svgBuffer = fs.readFileSync(path.join(__dirname, `../public/icon-${size}.svg`));
      
      // Convert SVG to PNG
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(__dirname, `../public/icon-${size}.png`));
      
      console.log(`Generated icon-${size}.png`);
    } catch (error) {
      console.error(`Error generating icon-${size}.png:`, error);
    }
  }
}

generateIcons().catch(console.error);
