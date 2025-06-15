# Theme Build System

This directory contains the base configuration files used to generate the Gruvbox Crisp theme variants, eliminating duplication and ensuring consistency.

## Structure

- `gruvbox-crisp-base.json` - Common tokenColors and semanticTokenColors shared across all variants
- `ui-colors-base.json` - Common UI colors (editor, sidebar, terminal, etc.)
- `variants.json` - Variant-specific configurations (background colors and overrides)

## How it Works

The build script (`scripts/build-themes.js`) combines:
1. Base token colors from `gruvbox-crisp-base.json`
2. Base UI colors from `ui-colors-base.json`
3. Variant-specific background colors from `variants.json`

This generates the complete theme files in the `themes/` directory.

## Building Themes

Run the build command from the project root:
```bash
npm run build
```

## Maintenance Benefits

- **Single source of truth**: Token colors defined once
- **Consistent updates**: Changes to base files apply to all variants
- **Reduced file size**: ~95% reduction in duplicated code
- **Easy to add variants**: Just add a new entry to `variants.json`