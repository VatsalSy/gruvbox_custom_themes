const fs = require('node:fs');
const path = require('node:path');

const THEME_DIR = path.join(__dirname, '..', 'themes');
const MIN_CONTRAST_RATIO = 4.5; // WCAG AA standard for normal text

// Convert hex to RGB
function hexToRgb(hex) {
  // Remove # if present
  let hexCode = hex.replace(/^#/, '');
  
  // Handle 3/4-digit short hex codes by expanding them
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = hexCode.split('').map(char => char + char).join('');
  }
  
  // Parse 6/8-digit hex codes
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hexCode);
  return result ? {
    r: Number.parseInt(result[1], 16),
    g: Number.parseInt(result[2], 16),
    b: Number.parseInt(result[3], 16)
  } : null;
}

// Calculate relative luminance
function getLuminance(rgb) {
  const rsRGB = rgb.r / 255;
  const gsRGB = rgb.g / 255;
  const bsRGB = rgb.b / 255;

  const r = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  const g = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  const b = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Calculate contrast ratio
function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return null;
  
  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

function testThemeContrast(themePath) {
  const themeName = path.basename(themePath);
  console.log(`\nTesting contrast ratios for: ${themeName}`);
  
  try {
    const themeContent = fs.readFileSync(themePath, 'utf8');
    const theme = JSON.parse(themeContent);
    
    const background = theme.colors['editor.background'];
    const foreground = theme.colors['editor.foreground'];
    
    if (!background || !foreground) {
      console.error('  ✗ Missing editor background or foreground colors');
      return false;
    }
    
    // Test main editor contrast
    const mainContrast = getContrastRatio(background, foreground);
    if (mainContrast === null) {
      console.error('  ✗ Failed to calculate editor contrast ratio - invalid color format');
      return false;
    }
    console.log(`  Editor contrast: ${mainContrast.toFixed(2)} (${mainContrast >= MIN_CONTRAST_RATIO ? '✓ PASS' : '✗ FAIL'})`);
    
    // Test common token colors against background
    const tokenTests = [];
    const criticalScopes = [
      'comment',
      'string',
      'keyword',
      'function',
      'variable',
      'constant',
      'type'
    ];
    
    for (const token of theme.tokenColors || []) {
      const scope = token.scope || token.name || '';
      const scopeStr = Array.isArray(scope) ? scope.join(' ') : String(scope);
      const color = token.settings?.foreground;
      
      if (color && criticalScopes.some(cs => scopeStr.toLowerCase().includes(cs))) {
        const contrast = getContrastRatio(background, color);
        if (contrast) {
          const testName = token.name || (typeof scope === 'string' ? scope.split(',')[0].trim() : scopeStr.split(' ')[0]);
          const pass = contrast >= MIN_CONTRAST_RATIO;
          tokenTests.push({
            name: testName,
            color: color,
            contrast: contrast,
            pass: pass
          });
        }
      }
    }
    
    if (tokenTests.length > 0) {
      // Sort by contrast ratio
      tokenTests.sort((a, b) => a.contrast - b.contrast);
      
      // Show worst performing tokens
      const failingTokens = tokenTests.filter(t => !t.pass);
      if (failingTokens.length > 0) {
        console.log(`  ⚠️  ${failingTokens.length} token colors fail WCAG AA standard:`);
        failingTokens.slice(0, 5).forEach(t => {
          console.log(`    - ${t.name}: ${t.contrast.toFixed(2)} (${t.color})`);
        });
      }
      
      // Show best and worst contrast
      console.log(`  Token contrast range: ${tokenTests[0].contrast.toFixed(2)} - ${tokenTests[tokenTests.length - 1].contrast.toFixed(2)}`);
      console.log(`  Passing tokens: ${tokenTests.filter(t => t.pass).length}/${tokenTests.length}`);
    }
    
    // Test UI element contrasts
    const uiTests = [
      { name: 'Sidebar', bg: theme.colors['sideBar.background'], fg: theme.colors['sideBar.foreground'] },
      { name: 'Status Bar', bg: theme.colors['statusBar.background'], fg: theme.colors['statusBar.foreground'] },
      { name: 'Terminal', bg: theme.colors['terminal.background'], fg: theme.colors['terminal.foreground'] }
    ];
    
    console.log('\n  UI Element Contrasts:');
    for (const test of uiTests) {
      if (test.bg && test.fg) {
        const contrast = getContrastRatio(test.bg, test.fg);
        if (contrast) {
          console.log(`    ${test.name}: ${contrast.toFixed(2)} (${contrast >= MIN_CONTRAST_RATIO ? '✓' : '✗'})`);
        }
      }
    }
    
    return mainContrast >= MIN_CONTRAST_RATIO;
    
  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
    return false;
  }
}

// Main execution
console.log('Color Contrast Ratio Test');
console.log('========================');
console.log(`WCAG AA Standard: ${MIN_CONTRAST_RATIO}:1 for normal text`);

const themeFiles = fs.readdirSync(THEME_DIR).filter(f => f.endsWith('.json'));
const results = [];

for (const themeFile of themeFiles) {
  const themePath = path.join(THEME_DIR, themeFile);
  const passes = testThemeContrast(themePath);
  results.push({ name: themeFile, passes: passes });
}

console.log('\n\nSummary');
console.log('=======');
const passingCount = results.filter(r => r.passes).length;
console.log(`Total themes tested: ${results.length}`);
console.log(`Themes passing main contrast: ${passingCount}`);
console.log(`Themes failing main contrast: ${results.length - passingCount}`);

if (results.some(r => !r.passes)) {
  console.log('\nThemes with poor main editor contrast:');
  results.filter(r => !r.passes).forEach(r => console.log(`  - ${r.name}`));
}