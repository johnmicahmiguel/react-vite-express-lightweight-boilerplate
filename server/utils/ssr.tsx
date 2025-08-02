import { renderToString } from 'react-dom/server';
import { getBuiltTailwindCSS } from './css-loader';
// Import existing marketing page components
import Landing from '../../src/marketing/pages/Landing';
import About from '../../src/marketing/pages/About';
import Pricing from '../../src/marketing/pages/Pricing';

// Marketing page routes mapping using imported components
const marketingPages = {
  '/': Landing,
  '/about': About,
  '/pricing': Pricing,
};

// Export the array of marketing routes for SSG
export const marketingRoutes = Object.keys(marketingPages);

// Generate static HTML for a marketing page
export async function renderMarketingPage(url: string): Promise<string> {
  const PageComponent = marketingPages[url as keyof typeof marketingPages];
  
  if (!PageComponent) {
    return '';
  }

  const html = renderToString(<PageComponent />);
  const tailwindCSS = await getBuiltTailwindCSS();

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${getPageTitle(url)}</title>
    <meta name="description" content="${getPageDescription(url)}" />
    <meta property="og:title" content="${getPageTitle(url)}" />
    <meta property="og:description" content="${getPageDescription(url)}" />
    <meta property="og:type" content="website" />
    <style>
      ${tailwindCSS}
    </style>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
      // Add simple analytics tracking for static pages
      console.log('Marketing page loaded:', '${url}');
    </script>
  </body>
</html>`;
}

function getPageTitle(url: string): string {
  const titles = {
    '/': 'React Vite Express Boilerplate',
    '/about': 'About - React Vite Express Boilerplate',
    '/pricing': 'Pricing - React Vite Express Boilerplate',
  };
  return titles[url as keyof typeof titles] || 'React Vite Express Boilerplate';
}

function getPageDescription(url: string): string {
  const descriptions = {
    '/': 'A modern, full-stack boilerplate combining React + Vite for the frontend and Express + TypeScript for the backend.',
    '/about': 'Learn about our modern full-stack boilerplate with clear domain separation and auto-generated API documentation.',
    '/pricing': 'Simple, transparent pricing for our full-stack development platform.',
  };
  return descriptions[url as keyof typeof descriptions] || 'React Vite Express Boilerplate';
}

export const isMarketingRoute = (url: string): boolean => {
  return url in marketingPages;
};