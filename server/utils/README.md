# SSG/CSR Implementation

This directory contains the implementation for Static Site Generation (SSG) for marketing pages and Client-Side Rendering (CSR) for app pages.

## Architecture Overview

### Marketing Pages (SSG)
- **Routes**: `/`, `/about`, `/pricing`
- **Rendering**: Server-side generated static HTML
- **SEO**: Optimized with proper meta tags, titles, and descriptions
- **Caching**: Cached for 1 hour in production
- **Purpose**: SEO optimization, fast loading, better search engine visibility

### App Pages (CSR)
- **Routes**: `/app/*` (e.g., `/app/dashboard`, `/app/profile`, `/app/settings`)
- **Rendering**: Client-side rendered React components
- **SEO**: Marked with `noindex, nofollow` (private app content)
- **Caching**: No cache (dynamic content)
- **Purpose**: Interactive application features, user authentication required

## Files

### `ssr.tsx`
Main SSG implementation containing:
- `marketingRoutes`: Array of routes that should be SSG
- `isMarketingRoute()`: Function to check if a route should be SSG
- `renderMarketingPage()`: Generates static HTML for marketing pages
- `getSEOMetaTags()`: Returns SEO-optimized meta tags for each page
- `getStaticPageContent()`: Returns static HTML content for each page

### `build-ssg.ts`
Build-time script that:
- Pre-generates static HTML files for all marketing routes
- Creates proper directory structure in `dist/`
- Runs automatically during `npm run build`

## Usage

### Development
```bash
# Start development server (SSG works in dev mode)
npm run dev

# Test SSG functionality
npm run test:ssg
```

### Production Build
```bash
# Full build (includes SSG generation)
npm run build

# Build only static pages
npm run build:ssg
```

### Testing
```bash
# Test SSG functionality
npm run test:ssg
```

## How It Works

1. **Development Mode**: 
   - Server dynamically generates SSG content for marketing routes
   - App routes are served as SPA with React Router

2. **Production Mode**:
   - Marketing pages are pre-built as static HTML files
   - Server serves static files first, falls back to dynamic SSG
   - App routes are served as SPA

3. **Route Detection**:
   - `isMarketingRoute()` determines if a route should be SSG
   - Marketing routes get static HTML with SEO optimization
   - App routes get SPA with no-cache headers

## SEO Benefits

Marketing pages include:
- Proper `<title>` tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Structured content for search engines
- Fast loading times (static HTML)

## Performance Benefits

- **Marketing pages**: Instant loading (static HTML)
- **App pages**: Fast client-side navigation after initial load
- **Caching**: Appropriate cache headers for each content type
- **Bundle splitting**: Marketing and app code can be optimized separately

## Adding New Marketing Pages

1. Add the route to `marketingRoutes` array in `ssr.tsx`
2. Add content in `getStaticPageContent()` function
3. Add SEO meta tags in `getSEOMetaTags()` function
4. Add the route to your React Router in `src/App.tsx`
5. Run `npm run build:ssg` to generate the static file

## Adding New App Pages

1. Create the component in `src/app/pages/`
2. Add the route to `src/app/App.tsx`
3. No additional SSG configuration needed (will be CSR automatically)