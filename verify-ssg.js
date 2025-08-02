// Simple verification script for SSG functionality
const { renderMarketingPage, isMarketingRoute, marketingRoutes } = require('./server/utils/ssr.tsx');

async function verify() {
  console.log('🔍 Verifying SSG setup...\n');
  
  // Test route detection
  console.log('Routes that will be SSG:');
  marketingRoutes.forEach(route => {
    console.log(`  ✅ ${route}`);
  });
  
  console.log('\nRoutes that will be CSR:');
  ['/app', '/app/dashboard', '/app/profile'].forEach(route => {
    const isSSG = isMarketingRoute(route);
    console.log(`  ${isSSG ? '❌' : '✅'} ${route}`);
  });
  
  console.log('\n🏗️  Testing page generation...');
  
  try {
    const html = await renderMarketingPage('/');
    const hasContent = html && html.length > 100;
    const hasTitle = html && html.includes('<title>');
    
    console.log(`  Homepage generation: ${hasContent ? '✅' : '❌'}`);
    console.log(`  SEO meta tags: ${hasTitle ? '✅' : '❌'}`);
    console.log(`  Content length: ${html ? html.length : 0} characters`);
    
    if (hasContent && hasTitle) {
      console.log('\n✅ SSG is working correctly!');
      console.log('\nNext steps:');
      console.log('  1. Run `npm run build` to generate static files');
      console.log('  2. Marketing pages (/, /about, /pricing) will be SSG');
      console.log('  3. App pages (/app/*) will remain CSR');
    } else {
      console.log('\n❌ SSG has issues that need to be fixed');
    }
  } catch (error) {
    console.log(`\n❌ Error testing SSG: ${error.message}`);
  }
}

verify();