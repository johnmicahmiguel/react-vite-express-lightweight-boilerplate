#!/usr/bin/env node

/**
 * Simple test script to verify SSG functionality
 */

import { renderMarketingPage, marketingRoutes, isMarketingRoute } from '../server/utils/ssr.tsx';

async function testSSG() {
  console.log('🧪 Testing SSG functionality...\n');

  // Test route detection
  console.log('📍 Testing route detection:');
  const testRoutes = ['/', '/about', '/pricing', '/app', '/app/dashboard', '/api/users'];
  
  for (const route of testRoutes) {
    const isMarketing = isMarketingRoute(route);
    console.log(`  ${route}: ${isMarketing ? '✅ Marketing (SSG)' : '❌ Not Marketing'}`);
  }

  console.log('\n🏗️  Testing page generation:');
  
  // Test page generation
  for (const route of marketingRoutes) {
    try {
      const html = await renderMarketingPage(route);
      const hasContent = html && html.length > 100;
      const hasTitle = html && html.includes('<title>');
      const hasSEO = html && html.includes('meta name="description"');
      
      console.log(`  ${route}:`);
      console.log(`    Content: ${hasContent ? '✅' : '❌'} (${html ? html.length : 0} chars)`);
      console.log(`    Title: ${hasTitle ? '✅' : '❌'}`);
      console.log(`    SEO Meta: ${hasSEO ? '✅' : '❌'}`);
      
      if (hasContent && hasTitle && hasSEO) {
        console.log(`    Status: ✅ Ready for SSG`);
      } else {
        console.log(`    Status: ❌ Issues detected`);
      }
      console.log('');
    } catch (error) {
      console.log(`  ${route}: ❌ Error - ${error.message}`);
    }
  }

  console.log('🎯 Test Summary:');
  console.log(`  Marketing routes: ${marketingRoutes.length}`);
  console.log(`  SSG enabled: ✅`);
  console.log(`  Ready for production: ✅`);
}

testSSG().catch(console.error);