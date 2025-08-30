#!/bin/bash
set -e

echo "Running Theme Tests"
echo "=================="
echo ""

echo "1. Running contrast tests..."
node test/test-contrast.js

echo ""
echo "2. Running theme validation..."
node test/validate-themes.js

echo ""
echo "Test suite complete!"
