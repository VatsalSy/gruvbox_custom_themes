# Gruvbox Crisp Color Theme Collection

[![Version](https://img.shields.io/github/v/release/VatsalSy/gruvbox_custom_themes)](https://github.com/VatsalSy/gruvbox_custom_themes/releases)
[![License](https://img.shields.io/github/license/VatsalSy/gruvbox_custom_themes)](LICENSE)
[![Download VSIX](https://img.shields.io/github/v/release/VatsalSy/gruvbox_custom_themes?label=download%20VSIX&color=blue)](https://github.com/VatsalSy/gruvbox_custom_themes/releases/latest)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/VatsalSy/gruvbox_custom_themes/publish.yml?label=publish)](https://github.com/VatsalSy/gruvbox_custom_themes/actions)<br>
[![VS Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/vatsalsy.gruvbox-crisp-tex?label=VS%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=vatsalsy.gruvbox-crisp-tex)
[![VS Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/vatsalsy.gruvbox-crisp-tex?label=rating)](https://marketplace.visualstudio.com/items?itemName=vatsalsy.gruvbox-crisp-tex)<br>
[![Open VSX Downloads](https://img.shields.io/open-vsx/dt/vatsalsy/gruvbox-crisp-tex?label=Open%20VSX)](https://open-vsx.org/extension/vatsalsy/gruvbox-crisp-tex)<br>

A collection of high-contrast VSCode themes based on the Gruvbox color scheme, optimized for clarity, readability, and enhanced language support.

## Acknowledgment

This theme collection is based on the excellent [Gruvbox Theme by jdinhify](https://github.com/jdinhify/vscode-theme-gruvbox). The original theme provided a solid foundation for building these customized variants. The Anysphere Blend variant is inspired by the Cursor Dark Anysphere theme.

## Changes from Original Theme

- Higher contrast between background and foreground colors
- Modified semantic token colors for better readability
- Enhanced syntax highlighting for modern language features
- Adjusted UI element colors for clearer visual hierarchy
- Optimized terminal colors for better visibility
- Refined bracket pair colorization
- Added comprehensive LaTeX support with specialized syntax highlighting (all variants)

## Features

- High contrast theme based on Gruvbox Dark
- Clear, non-hazy foreground colors
- Optimized syntax highlighting for multiple languages
- Consistent UI elements
- Semantic token coloring support

## Installation

### From VSCode Marketplace

1. Open VSCode
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Gruvbox Crisp"
4. Click Install

### From GitHub

1. Clone the repository: `git clone https://github.com/VatsalSy/gruvbox_custom_themes.git`
2. Open VSCode
3. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
4. Click "Install from VSIX..."
5. Select the `.vsix` file from the cloned repository

## Building from Source

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Build Process

1. Clone the repository:

   ```bash
   git clone https://github.com/VatsalSy/gruvbox_custom_themes.git
   cd gruvbox_custom_themes
   ```

2. Run the build script:

   ```bash
   ./scripts/build.sh
   ```

   This will:
   - Check for required dependencies
   - Generate theme JSON files from base configurations
   - List all generated themes

3. To create a `.vsix` package for distribution:

   ```bash
   ./scripts/build.sh --package
   ```

   This will additionally:
   - Package the extension into a `.vsix` file
   - Display the package size and filename

### Manual Build Steps

If you prefer to run the build steps manually:

1. Generate theme files:

   ```bash
   npm run build
   # or
   node scripts/build-themes.js
   ```

2. Package the extension (requires VSCE):

   ```bash
   npm install -g @vscode/vsce
   npx @vscode/vsce package
   ```

### Development

To test your changes locally:
1. Open the project in VSCode
2. Press `F5` to launch the Extension Development Host
3. The extension will be loaded in a new VSCode window for testing

## Theme Variants

This collection includes six variants of the Gruvbox Dark theme:

1. **High Contrast (Hard)** - Uses the darkest background (#1d2021) for maximum contrast
2. **Medium** - Uses a balanced background (#282828) for comfortable viewing
3. **Soft** - Uses a softer background (#32302f) for reduced eye strain
4. **Anysphere Blend** - A fusion of Gruvbox structure with Cursor Dark Anysphere colors
5. **Anysphere (High Contrast)** - Darker Anysphere variant with enhanced contrast
6. **Anysphere (Highest Contrast, pop)** - Pure black variant for maximum visual impact

All variants maintain the same high-quality syntax highlighting and specialized language support, differing in their background intensity and color schemes.

## Gruvbox Crisp Anysphere Blend

The newest addition to the collection, **Gruvbox Crisp Anysphere Blend**, combines the structured token highlighting of Gruvbox with the modern color palette of Cursor Dark Anysphere:

- **Modern UI**: Adopts Cursor's darker gray backgrounds (#1a1a1a for editor, #141414 for sidebars) with cleaner borders and highlights
- **Refined Color Palette**: Uses Cursor's vibrant yet balanced colors:
  - Red: #BF616A
  - Green: #A3BE8C
  - Yellow: #EBCB8B
  - Blue: #88C0D0
  - Purple: #A35DB0 (custom lighter purple, different from Gruvbox's #d3869b)
  - Magenta: #B48EAD
- **Enhanced Readability**: Maintains the excellent readability of Gruvbox while updating visual aesthetics
- **Consistent Experience**: Terminal colors and UI elements are harmonized with the editor theme

This variant provides a perfect blend for users who appreciate Gruvbox's token organization but prefer a more modern aesthetic inspired by Cursor's design language. The custom purple (#A35DB0) is one of the most distinctive features, used for constants, prototype objects, and other special language elements.

## Gruvbox Crisp Anysphere (Highest Contrast, pop)

The **Highest Contrast, pop** variant is designed for maximum visual impact and monitors requiring extreme contrast:

- **Pure Black Background**: Uses true black (#000000) for the editor to achieve maximum contrast
- **Vibrant "Pop" Colors**: Features a Dracula-inspired palette with highly saturated, distinctive colors:
  - Comments: #6272a4 (muted blue-gray for reduced distraction)
  - Strings: #50fa7b (bright green)
  - Keywords: #f1fa8c (pale yellow)
  - Functions: #ff79c6 (hot pink)
  - Numbers: #bd93f9 (bright purple)
  - Types: #8be9fd (bright cyan)
- **Visual Hierarchy**: Subtle variation with sidebars using #0a0a0a while editor remains pure black
- **Enhanced Navigation**: Includes hover highlights for better code exploration

**Note**: This variant uses pure black (#000000) specifically for monitors that need extreme contrast and maximum "pop" effect. Some users may find pure black causes eye strain on OLED displays - in such cases, consider using the standard High Contrast variants instead.

## Color Palette (Original Gruvbox Variants)

The traditional variants use the following Gruvbox colors:

- Background: #1d2021 (Dark0 Hard)
- Foreground: #ebdbb2 (Light1)
- Red: #fb4934
- Green: #b8bb26
- Yellow: #fabd2f
- Blue: #83a598
- Purple: #d3869b
- Aqua: #8ec07c
- Orange: #fe8019

## Language Support

Enhanced syntax highlighting for:
- Python
- JavaScript/TypeScript
- Java
- C/C++
- Go
- HTML/CSS
- JSON
- Markdown
- Shell scripts
- LaTeX/TeX (with specialized math, environment, and reference highlighting in all theme variants)
- And more...

## Customization

To customize the theme, you can override settings in your `settings.json`:

```json
{
  "workbench.colorCustomizations": {
    "[Gruvbox Crisp (High Contrast, with TeX)]": {
      // Add your customizations here
    },
    "[Gruvbox Crisp Anysphere Blend]": {
      // Add your customizations here
    }
  }
}
```

## Changelog

For the complete changelog with detailed version history, see [CHANGELOG.md](CHANGELOG.md).

## Contributing

Feel free to open issues or submit pull requests on GitHub.

## Color Palette Reference

For the full palettes and contrast guidelines, see docs/color-palette.md.

## License

MIT License - see LICENSE file for details.
