#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderMarketingPage, marketingRoutes } from './ssr';

/**
 * Build script to pre-generate static marketing pages for SSG
 * This runs during the build process to create static HTML files
 */
async function buildStaticPages() {
  const distPath = path.resolve('dist');
  
  // Ensure dist directory exists
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  console.log('🚀 Building static marketing pages...');

  for (const route of marketingRoutes) {
    try {
      const html = await renderMarketingPage(route);
      
      if (html) {
        // Determine the file path for the route
        let filePath: string;
        if (route === '/') {
          // Save landing page as landing.html to avoid overwriting SPA's index.html
          filePath = path.join(distPath, 'landing.html');
        } else {
          // Create directory for the route and add index.html
          const routeDir = path.join(distPath, route);
          fs.mkdirSync(routeDir, { recursive: true });
          filePath = path.join(routeDir, 'index.html');
        }

        // Write the static HTML file
        await fs.promises.writeFile(filePath, html, 'utf-8');
        console.log(`✅ Generated: ${route} -> ${path.relative(process.cwd(), filePath)}`);
      } else {
        console.log(`⚠️  Skipped: ${route} (no content generated)`);
      }
    } catch (error) {
      console.error(`❌ Error generating ${route}:`, error);
    }
  }

  console.log('✨ Static page generation complete!');
}

// Run the build if this script is executed directly
// ES module equivalent of require.main === module
const isMainModule = process.argv[1] === fileURLToPath(import.meta.url);
if (isMainModule) {
  buildStaticPages().catch(console.error);
}

export { buildStaticPages };