# Theme Development Guide

## Build Commands
- Package extension: `npx @vscode/vsce package`
- Publish to VSCode Marketplace and Open VSX Registry: use the github action. Simply push to main.

## Code Style Guidelines
- JSON formatting: 2-space indentation
- Theme file organization:
  - Token colors (general/global)
  - Language-specific scopes
  - UI colors
  - Semantic token colors
- Use descriptive comments to delineate sections
- Theme naming convention: "Gruvbox Crisp ([Contrast Level], [Special Feature])"
- Color declarations should reference Gruvbox palette names in comments
- New theme variants should maintain consistent token coloring patterns

## Workflow
- Theme modifications should be tested in multiple languages
- Update README.md when adding new theme variants
- Increment version in package.json for all changes
- VSCode theme debugging: F5 to launch Extension Development Host

## Color Consistency
- Maintain contrast ratios for accessibility
- Keep semantic token colors aligned with basic token colors
- Terminal colors should match editor theme colors