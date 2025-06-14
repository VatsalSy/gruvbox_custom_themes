const fs = require('node:fs');
const path = require('node:path');

// Accept directory path as command-line argument, default to 'themes/'
const themeDir = process.argv[2] || 'themes';
const THEME_DIR = path.isAbsolute(themeDir) ? themeDir : path.join(__dirname, '..', themeDir);
const REQUIRED_SECTIONS = ['colors', 'tokenColors'];
const REQUIRED_UI_COLORS = [
  'editor.background',
  'editor.foreground',
  'sideBar.background',
  'terminal.background',
  'statusBar.background'
];

function validateTheme(themePath) {
  const themeName = path.basename(themePath);
  console.log(`\nValidating: ${themeName}`);
  
  try {
    const themeContent = fs.readFileSync(themePath, 'utf8');
    const theme = JSON.parse(themeContent);
    
    // Check required sections
    for (const section of REQUIRED_SECTIONS) {
      if (!theme[section]) {
        throw new Error(`Missing required section: ${section}`);
      }
    }
    
    // Check for required UI colors
    const missingColors = REQUIRED_UI_COLORS.filter(color => !theme.colors[color]);
    if (missingColors.length > 0) {
      console.warn(`  Warning: Missing UI colors: ${missingColors.join(', ')}`);
    }
    
    // Validate color format (should be hex)
    const colorRegex = /^#[0-9a-f]{6}([0-9a-f]{2})?$/i;
    const invalidColors = [];
    
    // Check UI colors
    for (const [key, value] of Object.entries(theme.colors || {})) {
      if (typeof value === 'string' && !colorRegex.test(value)) {
        invalidColors.push(`colors.${key}: ${value}`);
      }
    }
    
    // Check token colors
    for (const token of theme.tokenColors || []) {
      if (token.settings?.foreground && !colorRegex.test(token.settings.foreground)) {
        invalidColors.push(`token "${token.name || token.scope}": ${token.settings.foreground}`);
      }
    }
    
    if (invalidColors.length > 0) {
      console.warn(`  Warning: Invalid color format in ${invalidColors.length} places`);
      if (invalidColors.length <= 5) {
        invalidColors.forEach(c => console.warn(`    - ${c}`));
      }
    }
    
    // Check for consistency in hex case
    const allColors = [];
    for (const value of Object.values(theme.colors || {})) {
      if (typeof value === 'string' && colorRegex.test(value)) {
        allColors.push(value);
      }
    }
    for (const token of theme.tokenColors || []) {
      if (token.settings?.foreground && colorRegex.test(token.settings.foreground)) {
        allColors.push(token.settings.foreground);
      }
    }
    
    const hasUppercase = allColors.some(c => /[A-F]/.test(c));
    const hasLowercase = allColors.some(c => /[a-f]/.test(c));
    
    if (hasUppercase) {
      console.warn('  Warning: Uppercase hex colors found (all hex colors must be lowercase)');
    }
    
    // Count token rules
    console.log(`  ✓ Token color rules: ${theme.tokenColors?.length || 0}`);
    console.log(`  ✓ UI color definitions: ${Object.keys(theme.colors || {}).length}`);
    
    return true;
  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
    return false;
  }
}

// Main execution
console.log('Theme Validation Test');
console.log('====================');

const themeFiles = fs.readdirSync(THEME_DIR).filter(f => f.endsWith('.json'));
const results = [];

for (const themeFile of themeFiles) {
  const themePath = path.join(THEME_DIR, themeFile);
  const isValid = validateTheme(themePath);
  results.push({ name: themeFile, valid: isValid });
}

console.log('\n\nSummary');
console.log('=======');
const validCount = results.filter(r => r.valid).length;
console.log(`Total themes: ${results.length}`);
console.log(`Valid themes: ${validCount}`);
console.log(`Invalid themes: ${results.length - validCount}`);

if (results.some(r => !r.valid)) {
  console.log('\nFailed themes:');
  results.filter(r => !r.valid).forEach(r => console.log(`  - ${r.name}`));
  process.exit(1);
}

console.log('\n✅ All themes are valid!');