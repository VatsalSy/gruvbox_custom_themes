# Gruvbox Crisp Color Theme Collection

[![Version](https://img.shields.io/github/v/release/vatsalsy/gruvbox_custom_themes)](https://github.com/vatsalsy/gruvbox_custom_themes/releases)
[![License](https://img.shields.io/github/license/vatsalsy/gruvbox_custom_themes)](LICENSE)
[![Download VSIX](https://img.shields.io/github/v/release/vatsalsy/gruvbox_custom_themes?label=download%20VSIX&color=blue)](https://github.com/VatsalSy/gruvbox_custom_themes/releases/latest)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/vatsalsy/gruvbox_custom_themes/publish.yml?label=publish)](https://github.com/vatsalsy/gruvbox_custom_themes/actions)<br>
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
- Added comprehensive LaTeX support with specialized syntax highlighting

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

1. Clone the repository: `git clone https://github.com/vatsalsy/gruvbox_custom_themes.git`
2. Open VSCode
3. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
4. Click "Install from VSIX..."
5. Select the `.vsix` file from the cloned repository

## Theme Variants

This collection includes four variants of the Gruvbox Dark theme:

1. **High Contrast (Hard)** - Uses the darkest background (#1d2021) for maximum contrast
2. **Medium** - Uses a balanced background (#282828) for comfortable viewing
3. **Soft** - Uses a softer background (#32302f) for reduced eye strain
4. **Anysphere Blend** - A fusion of Gruvbox structure with Cursor Dark Anysphere colors

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
- LaTeX (with specialized math, environment, and reference highlighting)
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

## Contributing

Feel free to open issues or submit pull requests on GitHub.

## License

MIT License - see LICENSE file for details.
