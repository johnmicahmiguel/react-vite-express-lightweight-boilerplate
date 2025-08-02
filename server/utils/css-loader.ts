import { promises as fs } from 'fs';
import path from 'path';

let cachedCSS: string | null = null;

export async function getBuiltTailwindCSS(): Promise<string> {
  if (cachedCSS) return cachedCSS;
  
  try {
    // In development, try to read from Vite's built assets
    // In production, read from the dist folder
    let cssContent = '';
    
    if (process.env.NODE_ENV === 'production') {
      // Production: read from dist folder
      const distPath = path.resolve('dist');
      const files = await fs.readdir(distPath);
      const cssFile = files.find(file => file.endsWith('.css'));
      
      if (cssFile) {
        cssContent = await fs.readFile(path.join(distPath, cssFile), 'utf-8');
      }
    } else {
      // Development: generate minimal CSS with just the classes we need
      cssContent = generateMinimalTailwindCSS();
    }
    
    cachedCSS = cssContent;
    return cssContent;
    
  } catch (error) {
    console.warn('Could not load built CSS, using fallback:', error);
    // Fallback to minimal CSS
    cachedCSS = generateMinimalTailwindCSS();
    return cachedCSS;
  }
}

function generateMinimalTailwindCSS(): string {
  return `
    /* Tailwind CSS Reset & Base */
    *, ::before, ::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: #e5e7eb; }
    ::before, ::after { --tw-content: ''; }
    html { line-height: 1.5; -webkit-text-size-adjust: 100%; -moz-tab-size: 4; tab-size: 4; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-feature-settings: normal; font-variation-settings: normal; }
    body { margin: 0; line-height: inherit; }
    hr { height: 0; color: inherit; border-top-width: 1px; }
    abbr:where([title]) { text-decoration: underline dotted; }
    h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }
    a { color: inherit; text-decoration: inherit; }
    b, strong { font-weight: bolder; }
    code, kbd, samp, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 1em; }
    small { font-size: 80%; }
    sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }
    sub { bottom: -0.25em; }
    sup { top: -0.5em; }
    table { text-indent: 0; border-color: inherit; border-collapse: collapse; }
    button, input, optgroup, select, textarea { font-family: inherit; font-feature-settings: inherit; font-variation-settings: inherit; font-size: 100%; font-weight: inherit; line-height: inherit; color: inherit; margin: 0; padding: 0; }
    button, select { text-transform: none; }
    button, [type='button'], [type='reset'], [type='submit'] { -webkit-appearance: button; background-color: transparent; background-image: none; }
    :-moz-focusring { outline: auto; }
    :-moz-ui-invalid { box-shadow: none; }
    progress { vertical-align: baseline; }
    ::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto; }
    [type='search'] { -webkit-appearance: textfield; outline-offset: -2px; }
    ::-webkit-search-decoration { -webkit-appearance: none; }
    ::-webkit-file-upload-button { -webkit-appearance: button; font: inherit; }
    summary { display: list-item; }
    blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre { margin: 0; }
    fieldset { margin: 0; padding: 0; }
    legend { padding: 0; }
    ol, ul, menu { list-style: none; margin: 0; padding: 0; }
    dialog { padding: 0; }
    textarea { resize: vertical; }
    input::placeholder, textarea::placeholder { opacity: 1; color: #9ca3af; }
    button, [role="button"] { cursor: pointer; }
    :disabled { cursor: default; }
    img, svg, video, canvas, audio, iframe, embed, object { display: block; vertical-align: middle; }
    img, video { max-width: 100%; height: auto; }
    [hidden] { display: none; }
    
    /* Essential Utilities Used in SSG */
    .min-h-screen { min-height: 100vh; }
    .bg-gray-50 { background-color: rgb(249 250 251); }
    .bg-white { background-color: rgb(255 255 255); }
    .bg-blue-600 { background-color: rgb(37 99 235); }
    .bg-green-600 { background-color: rgb(22 163 74); }
    .bg-blue-100 { background-color: rgb(219 234 254); }
    .text-white { color: rgb(255 255 255); }
    .text-gray-900 { color: rgb(17 24 39); }
    .text-gray-600 { color: rgb(75 85 99); }
    .text-gray-700 { color: rgb(55 65 81); }
    .text-blue-600 { color: rgb(37 99 235); }
    .text-blue-800 { color: rgb(30 64 175); }
    .text-green-600 { color: rgb(22 163 74); }
    .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
    .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
    .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
    .text-2xl { font-size: 1.5rem; line-height: 2rem; }
    .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
    .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
    .font-bold { font-weight: 700; }
    .font-semibold { font-weight: 600; }
    .font-medium { font-weight: 500; }
    .font-extrabold { font-weight: 800; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .mb-2 { margin-bottom: 0.5rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-12 { margin-bottom: 3rem; }
    .mt-6 { margin-top: 1.5rem; }
    .mt-8 { margin-top: 2rem; }
    .mt-10 { margin-top: 2.5rem; }
    .mt-12 { margin-top: 3rem; }
    .mt-16 { margin-top: 4rem; }
    .mt-20 { margin-top: 5rem; }
    .mr-2 { margin-right: 0.5rem; }
    .ml-auto { margin-left: auto; }
    .block { display: block; }
    .inline-block { display: inline-block; }
    .flex { display: flex; }
    .grid { display: grid; }
    .max-w-3xl { max-width: 48rem; }
    .max-w-7xl { max-width: 80rem; }
    .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
    .px-8 { padding-left: 2rem; padding-right: 2rem; }
    .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
    .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
    .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
    .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
    .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
    .p-4 { padding: 1rem; }
    .p-8 { padding: 2rem; }
    .text-center { text-align: center; }
    .items-center { align-items: center; }
    .items-start { align-items: flex-start; }
    .justify-between { justify-content: space-between; }
    .justify-center { justify-content: center; }
    .space-x-4 > :not([hidden]) ~ :not([hidden]) { margin-left: 1rem; }
    .space-x-6 > :not([hidden]) ~ :not([hidden]) { margin-left: 1.5rem; }
    .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem; }
    .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.75rem; }
    .rounded-md { border-radius: 0.375rem; }
    .rounded-lg { border-radius: 0.5rem; }
    .rounded-full { border-radius: 9999px; }
    .border-t { border-top-width: 1px; }
    .border-gray-200 { border-color: rgb(229 231 235); }
    .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
    .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06); }
    .gap-4 { gap: 1rem; }
    .gap-8 { gap: 2rem; }
    .w-16 { width: 4rem; }
    .h-16 { height: 4rem; }
    
    /* Hover states */
    .hover\\:bg-blue-700:hover { background-color: rgb(29 78 216); }
    .hover\\:bg-green-700:hover { background-color: rgb(21 128 61); }
    .hover\\:text-gray-900:hover { color: rgb(17 24 39); }
    .hover\\:text-blue-800:hover { color: rgb(30 64 175); }
    
    /* Responsive utilities */
    @media (min-width: 640px) {
      .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
      .sm\\:text-5xl { font-size: 3rem; line-height: 1; }
    }
    @media (min-width: 768px) {
      .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    }
    @media (min-width: 1024px) {
      .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
    }
  `;
}

// Clear cache when in development
if (process.env.NODE_ENV === 'development') {
  setInterval(() => {
    cachedCSS = null;
  }, 5000); // Refresh every 5 seconds in development
}