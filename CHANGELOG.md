# Changelog

All notable changes to the Gruvbox Crisp Color Theme Collection will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2025-09-05

### Added

- New theme variant: **Gruvbox Crisp Anysphere (Highest Contrast, pop)**
  - Pure black background (`#000000`) with bright near‑white foreground (`#ffffff`)
  - Purple‑forward accents (focus/links `#bd93f9`, buttons/cursor `#9b4fa0`)
  - Vibrant “pop” syntax palette (functions `#ff79c6`, keywords `#f1fa8c`, strings `#50fa7b`, numbers `#bd93f9`, types `#8be9fd`)
  - Readability improvements for comments/inlay hints using blue‑gray `#6272a4`
  - Terminal ANSI palette aligned to Ghostty/tmux pop scheme

### Notes

- This release adds features without removing or changing existing variants; it is a minor version bump per SemVer.

## [1.2.0] - 2025-01-06

### Added

- Two new Anysphere Blend theme variants:
  - Gruvbox Crisp Anysphere Blend (standard)
  - Gruvbox Crisp Anysphere (High Contrast)
- Automated theme generation system from base configuration files
- Comprehensive test suite for theme validation and color contrast testing
- Build scripts for theme generation and quality assurance
- Consolidated color palette documentation

### Changed

- Complete theme architecture overhaul with base configuration system
- Improved build system with automated theme variant generation
- Enhanced documentation with consolidated theme information
- All themes now generated from unified base configuration for consistency

### Fixed

- Semantic token color definitions across all theme variants
- Theme file structure and organization consistency
- Color palette standardization across all variants

## [1.1.8] - 2025-01-06

### Added

- Theme validation tests (`test/validate-themes.js`) to ensure JSON correctness
- Color contrast ratio tests (`test/test-contrast.js`) for WCAG AA accessibility compliance
- Changelog section to README
- *.vsix to .gitignore

### Changed

- Standardized theme file organization and color definitions
- All themes now have consistent token color rule counts (127–133 rules)

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
