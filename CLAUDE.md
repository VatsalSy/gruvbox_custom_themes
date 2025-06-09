# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- Package extension: `npx @vscode/vsce package`
- Install VSCE if not present: `npm install -g @vscode/vsce`
- Publish: Push to main branch (GitHub Action handles VSCode Marketplace and Open VSX Registry)
- Debug theme: F5 in VSCode to launch Extension Development Host

## Architecture Overview
This is a VSCode theme extension that provides four Gruvbox-based color themes:
1. **Gruvbox Crisp (High Contrast, with TeX)** - Hard dark background (#1d2021)
2. **Gruvbox Crisp (Medium, with TeX)** - Medium dark background (#282828)
3. **Gruvbox Crisp (Soft, with TeX)** - Soft dark background (#32302f)
4. **Gruvbox Crisp Anysphere Blend** - Cursor Dark Anysphere-inspired colors with Gruvbox token organization

## Theme File Structure
Theme JSON files in `themes/` directory follow this organization:
1. **tokenColors**: Syntax highlighting rules with TextMate scopes
   - General/global tokens (comments, constants, keywords, etc.)
   - Language-specific scopes (Python, JavaScript, LaTeX, etc.)
2. **colors**: UI element colors (editor, sidebar, terminal, etc.)
3. **semanticTokenColors**: Modern semantic highlighting

## Development Guidelines
- JSON formatting: 2-space indentation
- Use descriptive comments to delineate sections in theme files
- Theme naming convention: "Gruvbox Crisp ([Contrast Level], [Special Feature])"
- Color declarations should reference Gruvbox palette names in comments
- When adding new theme variants, maintain consistent token coloring patterns across all themes
- Test theme modifications across multiple languages, especially LaTeX support
- Increment version in package.json for all changes before pushing

## Color Palettes
### Traditional Gruvbox Colors:
- Background variants: #1d2021 (hard), #282828 (medium), #32302f (soft)
- Foreground: #ebdbb2
- Red: #fb4934, Green: #b8bb26, Yellow: #fabd2f
- Blue: #83a598, Purple: #d3869b, Aqua: #8ec07c, Orange: #fe8019

### Anysphere Blend Colors:
- Background: #1a1a1a (editor), #141414 (sidebar)
- Red: #BF616A, Green: #A3BE8C, Yellow: #EBCB8B
- Blue: #88C0D0, Purple: #A35DB0, Magenta: #B48EAD