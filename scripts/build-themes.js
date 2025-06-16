const fs = require('node:fs');
const path = require('node:path');

const THEME_BASE_DIR = path.join(__dirname, '..', 'theme-base');
const THEMES_DIR = path.join(__dirname, '..', 'themes');

const baseTokens = JSON.parse(fs.readFileSync(path.join(THEME_BASE_DIR, 'gruvbox-crisp-base.json'), 'utf8'));
const variants = JSON.parse(fs.readFileSync(path.join(THEME_BASE_DIR, 'variants.json'), 'utf8'));
const baseUIColors = JSON.parse(fs.readFileSync(path.join(THEME_BASE_DIR, 'ui-colors-base.json'), 'utf8'));

function generateTheme(variantKey, variantConfig) {
  const theme = {
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

function buildThemes() {
  if (!fs.existsSync(THEMES_DIR)) {
    fs.mkdirSync(THEMES_DIR, { recursive: true });
  }

  for (const [variantKey, variantConfig] of Object.entries(variants)) {
    const theme = generateTheme(variantKey, variantConfig);
    const outputPath = path.join(THEMES_DIR, `${variantKey}.json`);
    
    fs.writeFileSync(outputPath, JSON.stringify(theme, null, 2));
    console.log(`Generated: ${outputPath}`);
  }
}

if (require.main === module) {
  buildThemes();
  console.log('Theme generation complete!');
}