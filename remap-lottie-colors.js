const fs = require('fs');
const path = require('path');

// Theme colors (converted from hex to RGB 0-1 format)
const THEME_COLORS = {
  goldGlow: [1, 0.843, 0], // #ffd700
  royalGlow: [0.231, 0.51, 0.973], // #3b82f6  
  obsidian: [0.05, 0.05, 0.08], // #0d0d14
};

// Color palettes to remap from (approximate ranges)
const COLOR_PALETTES = {
  cyan: [0.122, 0.862, 0.968], // Original cyan
  orange: [0.976, 0.39, 0.344], // Orange/red chat bubbles
  purple: [0.162, 0.073, 0.407], // Purple/dark
  lightPurple: [0.678, 0.694, 0.873], // Light purple
  white: [1, 1, 1], // White text
  gray: [0.8, 0.777, 0.913], // Gray/light
};

// Remap strategy: cycle through theme colors
let colorIndex = 0;
const themeColorValues = [
  THEME_COLORS.goldGlow,
  THEME_COLORS.royalGlow,
  THEME_COLORS.obsidian,
];

function remapColor(rgbArray) {
  if (!Array.isArray(rgbArray) || rgbArray.length < 3) {
    return rgbArray;
  }

  const [r, g, b, alpha] = rgbArray;
  const a = alpha !== undefined ? alpha : 1;
  
  // Get next theme color (cycle through)
  const newColor = themeColorValues[colorIndex % themeColorValues.length];
  colorIndex++;
  
  return [...newColor, a];
}

function traverseAndRemap(obj, depth = 0) {
  if (depth > 100) return obj; // Prevent infinite recursion
  
  if (Array.isArray(obj)) {
    return obj.map((item, idx) => {
      // Check if this looks like a color array [r, g, b, a]
      if (Array.isArray(item) && 
          item.length >= 3 && item.length <= 4 &&
          typeof item[0] === 'number' &&
          item[0] >= 0 && item[0] <= 1 &&
          item[1] >= 0 && item[1] <= 1 &&
          item[2] >= 0 && item[2] <= 1) {
        return remapColor(item);
      }
      return traverseAndRemap(item, depth + 1);
    });
  }

  if (typeof obj === 'object' && obj !== null) {
    const remapped = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        remapped[key] = traverseAndRemap(obj[key], depth + 1);
      }
    }
    return remapped;
  }

  return obj;
}

async function main() {
  const inputPath = path.join(__dirname, 'public/animations/hero-ai-demo.json');
  const outputPath = path.join(__dirname, 'public/animations/hero-ai-demo-themed.json');

  try {
    console.log('Reading Lottie JSON...');
    const jsonData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
    
    console.log('Remapping colors to theme palette...');
    // Reset counter for consistent remapping
    colorIndex = 0;
    const remappedData = traverseAndRemap(jsonData);
    
    console.log('Writing remapped JSON...');
    fs.writeFileSync(outputPath, JSON.stringify(remappedData));
    
    console.log(`✓ Successfully created ${outputPath}`);
    console.log(`Theme colors used:`);
    console.log(`  - Gold Glow: [${THEME_COLORS.goldGlow}]`);
    console.log(`  - Royal Glow: [${THEME_COLORS.royalGlow}]`);
    console.log(`  - Obsidian: [${THEME_COLORS.obsidian}]`);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
