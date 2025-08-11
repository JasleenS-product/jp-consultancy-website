#!/bin/bash

# JP Consultancy - Automated Deployment Script
# This script rebuilds the site, updates _site folder, and pushes to git

echo "🚀 JP Consultancy - Automated Deployment Started"
echo "================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in project root directory"
    exit 1
fi

# Ensure we're on the deployment branch
echo "📋 Switching to deployment branch..."
git checkout JP-CONSULTANCY-DEPLOYMENT-READY

# Build the site with Eleventy
echo "🔨 Building site with Eleventy..."
npx @11ty/eleventy

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Check for errors above."
    exit 1
fi

# Copy updated CSS to _site (ensure latest styles)
echo "📄 Copying latest CSS..."
cp src/assets/css/main.css _site/assets/css/main.css

# Add all changes
echo "📦 Adding changes to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    # Commit with timestamp
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "💾 Committing changes..."
    git commit -m "Auto-deploy: Site updated - $TIMESTAMP"
    
    # Push to remote
    echo "⬆️  Pushing to remote repository..."
    git push
    
    echo "✅ Deployment completed successfully!"
    echo "📁 _site folder updated and pushed to JP-CONSULTANCY-DEPLOYMENT-READY branch"
fi

echo "================================================"
echo "🎉 Deployment process finished!"
echo "📂 Ready files are in: _site/"
echo "🌐 Upload _site/ contents to Hostinger public_html/"
