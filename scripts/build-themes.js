const fs = require('node:fs');
const path = require('node:path');

const THEME_BASE_DIR = path.join(__dirname, '..', 'theme-base');
const THEMES_DIR = path.join(__dirname, '..', 'themes');
const PACKAGE_JSON_PATH = path.join(__dirname, '..', 'package.json');

const baseTokens = JSON.parse(fs.readFileSync(path.join(THEME_BASE_DIR, 'gruvbox-crisp-base.json'), 'utf8'));
const variants = JSON.parse(fs.readFileSync(path.join(THEME_BASE_DIR, 'variants.json'), 'utf8'));
const baseUIColors = JSON.parse(fs.readFileSync(path.join(THEME_BASE_DIR, 'ui-colors-base.json'), 'utf8'));
const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));

function generateTheme(variantConfig) {
  const theme = {
    $schema: "https://raw.githubusercontent.com/microsoft/vscode/master/extensions/theme-colorful-defaults/schemas/color-theme.schema.json",
    name: variantConfig.name,
    type: variantConfig.type,
    tokenColors: baseTokens.tokenColors,
    colors: {},
    semanticTokenColors: baseTokens.semanticTokenColors
  };

  const backgroundColors = {
    "widget.shadow": variantConfig.background,
    "dropdown.background": variantConfig.background,
    "scrollbar.shadow": variantConfig.background,
    "badge.foreground": variantConfig.background,
    "sideBar.background": variantConfig.background,
    "sideBarSectionHeader.background": variantConfig.background,
    "activityBar.background": variantConfig.background,
    "editorGroupHeader.noTabsBackground": variantConfig.background,
    "editorGroupHeader.tabsBackground": variantConfig.background,
    "tab.inactiveBackground": variantConfig.background,
    "editor.background": variantConfig.background,
    "editorHoverWidget.background": variantConfig.background,
    "editorOverviewRuler.border": variantConfig.background,
    "editorGutter.background": variantConfig.background,
    "editorWidget.background": variantConfig.background,
    "editorSuggestWidget.background": variantConfig.background,
    "statusBar.background": variantConfig.background,
    "statusBar.debuggingForeground": variantConfig.background,
    "terminal.background": variantConfig.background,
    "titleBar.activeBackground": variantConfig.background,
    "titleBar.inactiveBackground": variantConfig.background,
    "panel.background": variantConfig.background,
    "debugToolBar.background": variantConfig.background
  };

  const transparentBackgroundColors = variantConfig.backgroundTransparent ? {
    "editorBracketMatch.border": variantConfig.backgroundTransparent,
    "merge.border": variantConfig.backgroundTransparent,
    "statusBar.debuggingBorder": variantConfig.backgroundTransparent,
    "statusBar.noFolderBorder": variantConfig.backgroundTransparent
  } : {};

  theme.colors = {
    ...baseUIColors,
    ...backgroundColors,
    ...transparentBackgroundColors
  };

  const additionalColors = variantConfig.additionalColors || {};
  theme.colors = { ...theme.colors, ...additionalColors };

  return theme;
}

function validateThemeFiles() {
  const declaredThemes = packageJson.contributes.themes;
  const generatedFiles = new Set();
  const errors = [];

  // Check all variants have fileName property
  for (const [variantKey, variantConfig] of Object.entries(variants)) {
    if (!variantConfig.fileName) {
      errors.push(`Variant "${variantKey}" is missing required "fileName" property`);
    } else {
      generatedFiles.add(variantConfig.fileName);
    }
  }

  // Check all declared themes in package.json will be generated
  for (const theme of declaredThemes) {
    const fileName = path.basename(theme.path);
    if (!generatedFiles.has(fileName)) {
      errors.push(`Theme file "${theme.path}" is declared in package.json but no variant generates "${fileName}"`);
    }
  }

  // Check all generated files are declared in package.json
  const declaredFileNames = new Set(declaredThemes.map(t => path.basename(t.path)));
  for (const fileName of generatedFiles) {
    if (!declaredFileNames.has(fileName)) {
      errors.push(`Variant generates "${fileName}" but it's not declared in package.json`);
    }
  }

  if (errors.length > 0) {
    console.error('Theme validation failed:');
    errors.forEach(error => console.error(`  - ${error}`));
    process.exit(1);
  }

  console.log('Theme validation passed: all variants match package.json declarations');
}

function buildThemes() {
  // Validate before building
  validateThemeFiles();

  if (!fs.existsSync(THEMES_DIR)) {
    fs.mkdirSync(THEMES_DIR, { recursive: true });
  }

  for (const [variantKey, variantConfig] of Object.entries(variants)) {
    const theme = generateTheme(variantConfig);
    const outputPath = path.join(THEMES_DIR, variantConfig.fileName);
    
    fs.writeFileSync(outputPath, JSON.stringify(theme, null, 2));
    console.log(`Generated: ${outputPath}`);
  }
}

if (require.main === module) {
  buildThemes();
  console.log('Theme generation complete!');
}