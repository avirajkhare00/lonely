#!/bin/bash

# Convert SVG icons to PNG using ImageMagick
echo "Converting SVG icons to PNG..."

# Convert 192x192 icon
convert -background none -size 192x192 ../public/icon-192.svg ../public/icon-192.png
echo "Created icon-192.png"

# Convert 512x512 icon
convert -background none -size 512x512 ../public/icon-512.svg ../public/icon-512.png
echo "Created icon-512.png"

echo "Conversion complete!"
