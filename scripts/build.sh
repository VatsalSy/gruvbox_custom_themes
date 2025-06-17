#!/bin/bash

# Gruvbox Crisp Theme Extension Build Script
# This script builds the theme extension and packages it for distribution

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Print colored messages
info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the project root
if [ ! -f "package.json" ]; then
    error "This script must be run from the project root directory"
    exit 1
fi

info "Starting Gruvbox Crisp Theme build process..."

# Step 1: Check dependencies
info "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

NODE_VERSION=$(node --version)
info "Found Node.js $NODE_VERSION"

# Step 2: Install VSCE if not present
info "Checking for VSCE (Visual Studio Code Extension manager)..."
if ! command -v vsce &> /dev/null; then
    info "VSCE not found. Installing @vscode/vsce globally..."
    npm install -g @vscode/vsce
    success "VSCE installed successfully"
else
    VSCE_VERSION=$(vsce --version)
    info "Found VSCE version $VSCE_VERSION"
fi

# Step 3: Clean previous builds
info "Cleaning previous builds..."
if [ -d "themes" ]; then
    rm -rf themes
    info "Removed existing themes directory"
fi

if compgen -G "*.vsix" > /dev/null; then
    rm *.vsix
    info "Removed existing .vsix files"
fi

# Step 4: Generate themes
info "Generating theme files from base configuration..."
npm run build
success "Theme files generated successfully"

# List generated themes
info "Generated themes:"
for theme in themes/*.json; do
    echo "  - $(basename "$theme")"
done

# Step 5: Package extension (optional)
if [ "$1" == "--package" ]; then
    info "Creating VSIX package..."
    vsce package
    
    VSIX_FILE=$(ls *.vsix 2>/dev/null | head -n 1)
    if [ -n "$VSIX_FILE" ]; then
        success "Extension packaged successfully: $VSIX_FILE"
        
        # Show package info
        FILE_SIZE=$(du -h "$VSIX_FILE" | cut -f1)
        info "Package size: $FILE_SIZE"
    fi
else
    info "Skipping packaging step (use --package flag to create .vsix file)"
fi

echo ""
success "Build process completed!"
echo ""
echo "Next steps:"
echo "  - To test locally: Press F5 in VSCode to launch Extension Development Host"
echo "  - To package: Run './scripts/build.sh --package'"
echo "  - To publish: Push a version tag (e.g., v1.2.3) to trigger GitHub Actions"