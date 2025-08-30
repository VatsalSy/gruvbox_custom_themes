#!/bin/bash
set -e

echo "Running Linting Checks"
echo "====================="
echo ""

# Check if theme files are valid JSON
echo "Checking JSON syntax in theme files..."
for file in themes/*.json; do
  if [ -f "$file" ]; then
    if jq empty "$file" 2>/dev/null; then
      echo "  ✓ $(basename "$file")"
    else
      echo "  ✗ $(basename "$file") - Invalid JSON"
      exit 1
    fi
  fi
done

echo ""
echo "Checking JSON syntax in configuration files..."
for file in package.json theme-base/*.json; do
  if [ -f "$file" ]; then
    if jq empty "$file" 2>/dev/null; then
      echo "  ✓ $file"
    else
      echo "  ✗ $file - Invalid JSON"
      exit 1
    fi
  fi
done

echo ""
echo "All files passed JSON validation!"
