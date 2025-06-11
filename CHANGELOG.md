# Changelog

All notable changes to the Gruvbox Crisp Color Theme Collection will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.8] - 2025-01-06

### Added
- Theme validation tests (`test/validate-themes.js`) to ensure JSON correctness
- Color contrast ratio tests (`test/test-contrast.js`) for WCAG AA accessibility compliance
- Changelog section to README
- *.vsix to .gitignore

### Changed
- Standardized theme file organization and color definitions
- All themes now have consistent token color rule counts (127-133 rules)

### Fixed
- Standardized all hex color values to lowercase across all themes
- Color typo #FB4834 → #fb4934 in purple themes
- Unified theme naming: "Durham Blend" → "Anysphere Blend" for consistency
- Updated documentation to clarify LaTeX support is available in all theme variants

### Removed
- VSIX files from repository (now built only during release)

## [1.1.7] - 2024-12-17

### Fixed
- Removed all JSON comments from theme files for strict JSON compliance
- Updated repository URLs in package.json to match actual repository name
- README download badge to use dynamic latest release link
- Fully implemented medium and soft theme variants with complete token definitions

## [1.1.6] - 2024-12-17

### Fixed
- Text selection visibility in high contrast purple theme

### Changed
- Improved overall contrast and readability

## [1.1.5] - Previous Release

### Added
- Initial release of Gruvbox Crisp theme collection
- Five theme variants:
  - Gruvbox Crisp (High Contrast, with TeX)
  - Gruvbox Crisp (Medium, with TeX)
  - Gruvbox Crisp (Soft, with TeX)
  - Gruvbox Crisp Anysphere Blend
  - Gruvbox Crisp Anysphere Blend (High Contrast)
- Comprehensive LaTeX/TeX support with specialized syntax highlighting
- Enhanced syntax highlighting for multiple languages
- Semantic token coloring support