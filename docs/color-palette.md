# Gruvbox Crisp Color Palette Documentation

## Traditional Gruvbox Colors

### Background Colors
| Color | Hex | Name | Usage |
|-------|-----|------|--------|
| ![#1d2021](https://via.placeholder.com/15/1d2021/000000?text=+) | `#1d2021` | Dark0 Hard | High contrast background |
| ![#282828](https://via.placeholder.com/15/282828/000000?text=+) | `#282828` | Dark0 | Medium contrast background |
| ![#32302f](https://via.placeholder.com/15/32302f/000000?text=+) | `#32302f` | Dark0 Soft | Soft contrast background |
| ![#3c3836](https://via.placeholder.com/15/3c3836/000000?text=+) | `#3c3836` | Dark1 | UI elements |
| ![#504945](https://via.placeholder.com/15/504945/000000?text=+) | `#504945` | Dark2 | Selection background |
| ![#665c54](https://via.placeholder.com/15/665c54/000000?text=+) | `#665c54` | Dark3 | Inactive elements |
| ![#7c6f64](https://via.placeholder.com/15/7c6f64/000000?text=+) | `#7c6f64` | Dark4 | Comments |

### Foreground Colors
| Color | Hex | Name | Usage |
|-------|-----|------|--------|
| ![#ebdbb2](https://via.placeholder.com/15/ebdbb2/000000?text=+) | `#ebdbb2` | Light1 | Primary text |
| ![#d5c4a1](https://via.placeholder.com/15/d5c4a1/000000?text=+) | `#d5c4a1` | Light2 | Secondary text |
| ![#bdae93](https://via.placeholder.com/15/bdae93/000000?text=+) | `#bdae93` | Light3 | Tertiary text |
| ![#a89984](https://via.placeholder.com/15/a89984/000000?text=+) | `#a89984` | Light4 | Inactive text |

### Accent Colors
| Color | Hex | Name | Usage |
|-------|-----|------|--------|
| ![#fb4934](https://via.placeholder.com/15/fb4934/000000?text=+) | `#fb4934` | Bright Red | Errors, deletions |
| ![#b8bb26](https://via.placeholder.com/15/b8bb26/000000?text=+) | `#b8bb26` | Bright Green | Success, additions |
| ![#fabd2f](https://via.placeholder.com/15/fabd2f/000000?text=+) | `#fabd2f` | Bright Yellow | Warnings, functions |
| ![#83a598](https://via.placeholder.com/15/83a598/000000?text=+) | `#83a598` | Bright Blue | Info, types |
| ![#d3869b](https://via.placeholder.com/15/d3869b/000000?text=+) | `#d3869b` | Bright Purple | Constants |
| ![#8ec07c](https://via.placeholder.com/15/8ec07c/000000?text=+) | `#8ec07c` | Bright Aqua | Strings |
| ![#fe8019](https://via.placeholder.com/15/fe8019/000000?text=+) | `#fe8019` | Bright Orange | Numbers |

## Anysphere Blend Colors

### Background Colors
| Color | Hex | Name | Usage |
|-------|-----|------|--------|
| ![#0a0a0a](https://via.placeholder.com/15/0a0a0a/000000?text=+) | `#0a0a0a` | Ultra-Dark | High contrast variant |
| ![#141414](https://via.placeholder.com/15/141414/000000?text=+) | `#141414` | Sidebar | Sidebar background |
| ![#1a1a1a](https://via.placeholder.com/15/1a1a1a/000000?text=+) | `#1a1a1a` | Editor | Main editor background |
| ![#292929](https://via.placeholder.com/15/292929/000000?text=+) | `#292929` | Hover | Hover states |
| ![#363636](https://via.placeholder.com/15/363636/000000?text=+) | `#363636` | Selection | Selection background |

### Foreground Colors
| Color | Hex | Name | Usage |
|-------|-----|------|--------|
| ![#d8dee9](https://via.placeholder.com/15/d8dee9/000000?text=+) | `#d8dee9` | Primary | Main text color |
| ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) | `#ffffff` | Bright | Emphasized text |
| ![#cccccc](https://via.placeholder.com/15/cccccc/000000?text=+) | `#cccccc` | Medium | Secondary text |
| ![#6d6d6d](https://via.placeholder.com/15/6d6d6d/000000?text=+) | `#6d6d6d` | Comments | Comment text |

### Accent Colors
| Color | Hex | Name | Usage |
|-------|-----|------|--------|
| ![#bf616a](https://via.placeholder.com/15/bf616a/000000?text=+) | `#bf616a` | Red | Errors, keywords |
| ![#a3be8c](https://via.placeholder.com/15/a3be8c/000000?text=+) | `#a3be8c` | Green | Strings |
| ![#ebcb8b](https://via.placeholder.com/15/ebcb8b/000000?text=+) | `#ebcb8b` | Yellow | Functions |
| ![#88c0d0](https://via.placeholder.com/15/88c0d0/000000?text=+) | `#88c0d0` | Blue | Types |
| ![#a35db0](https://via.placeholder.com/15/a35db0/000000?text=+) | `#a35db0` | Purple | Constants |
| ![#b48ead](https://via.placeholder.com/15/b48ead/000000?text=+) | `#b48ead` | Magenta | Special |
| ![#fe8019](https://via.placeholder.com/15/fe8019/000000?text=+) | `#fe8019` | Orange | Numbers |

## Usage Guidelines

### Contrast Ratios
All color combinations are tested to meet WCAG AA standards:
- Normal text: 4.5:1 minimum contrast ratio
- Large text: 3:1 minimum contrast ratio

### Theme Selection
- **High Contrast**: Best for bright environments or users who prefer maximum clarity
- **Medium**: Balanced for everyday use
- **Soft**: Reduced eye strain for long coding sessions
- **Anysphere Blend**: Modern aesthetic with excellent readability

### Customization
To override any color in your VSCode settings:

```json
{
  "workbench.colorCustomizations": {
    "[Gruvbox Crisp (High Contrast, with TeX)]": {
      "editor.background": "#1d2021",
      "editor.foreground": "#ebdbb2"
    }
  }
}
```