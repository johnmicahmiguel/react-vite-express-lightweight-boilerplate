import fs from "fs";
import path from "path";
import express, { type Express } from "express";
import { type Server } from "http";
import { createServer as createViteServer, type ViteDevServer } from "vite";
import { renderMarketingPage, isMarketingRoute } from "./utils/ssr";

export const log = (msg: string) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${msg}`);
};

export async function setupVite(app: Express, server: Server): Promise<ViteDevServer> {
  const vite = await createViteServer({
    server: { 
      middlewareMode: true,
      hmr: { server }
    },
    appType: 'custom',
    root: process.cwd(),
  });
  
  app.use(vite.middlewares);
  
  app.get("/*", async (req, res, next) => {
    const url = req.originalUrl;
    
    // Skip API routes
    if (url.startsWith('/api/')) {
      return next();
    }
    
    try {
      // Check if this is a marketing route that should be SSG
      if (isMarketingRoute(url)) {
        const staticHtml = await renderMarketingPage(url);
        if (staticHtml) {
          res.status(200).set({ 
            "Content-Type": "text/html",
            "Cache-Control": "public, max-age=3600" // Cache for 1 hour
          }).end(staticHtml);
          return;
        }
      }
      
      // For app routes (/app/*) or fallback, serve the SPA
      const indexTemplate = path.resolve("index.html");
      let template = await fs.promises.readFile(indexTemplate, "utf-8");
      
      // Add CSR-specific meta tags for app routes
      if (url.startsWith('/app')) {
        template = template.replace(
          '<head>',
          `<head>
            <meta name="robots" content="noindex, nofollow">
            <title>Dashboard - BusinessConnect</title>`
        );
      }
      
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 
        "Content-Type": "text/html",
        "Cache-Control": url.startsWith('/app') ? "no-cache" : "public, max-age=300"
      }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
  
  return vite;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve("dist");
  
  if (!fs.existsSync(distPath)) {
    throw new Error(`Could not find the build directory at ${distPath}.`);
  }

  // Handle root path specifically before static middleware
  app.get('/', async (req, res) => {
    console.log(`[DEBUG] Serving root path: "/"`);
    const landingPath = path.join(distPath, 'landing.html');
    console.log(`[DEBUG] Looking for landing file: ${landingPath}`);
    console.log(`[DEBUG] File exists: ${fs.existsSync(landingPath)}`);
    
    if (fs.existsSync(landingPath)) {
      console.log(`[DEBUG] Serving landing.html`);
      const html = await fs.promises.readFile(landingPath, 'utf-8');
      res.status(200).set({ 
        "Content-Type": "text/html",
        "Cache-Control": "public, max-age=3600" // Cache for 1 hour
      }).send(html);
      return;
    }
    
    // Fallback to dynamic SSG if static file doesn't exist
    console.log(`[DEBUG] Landing file not found, generating dynamically`);
    const staticHtml = await renderMarketingPage('/');
    if (staticHtml) {
      res.status(200).set({ 
        "Content-Type": "text/html",
        "Cache-Control": "public, max-age=3600"
      }).send(staticHtml);
      return;
    }
    
    // If all else fails, serve the SPA
    console.log(`[DEBUG] Falling back to SPA for root`);
    const indexPath = path.join(distPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      const html = await fs.promises.readFile(indexPath, 'utf-8');
      res.status(200).set({
        "Content-Type": "text/html",
        "Cache-Control": "public, max-age=300"
      }).send(html);
    } else {
      res.status(404).send('Application not found');
    }
  });

  // Configure static middleware to serve index.html for subdirectories but not for root
  app.use(express.static(distPath, {
    index: false // Disable automatic index.html serving for root
  }));
  
  // Add specific handler for subdirectory index.html files (for About and Pricing)
  app.get('/about/', async (req, res) => {
    const aboutPath = path.join(distPath, 'about', 'index.html');
    if (fs.existsSync(aboutPath)) {
      const html = await fs.promises.readFile(aboutPath, 'utf-8');
      res.status(200).set({ 
        "Content-Type": "text/html",
        "Cache-Control": "public, max-age=3600"
      }).send(html);
      return;
    }
    res.status(404).send('Page not found');
  });

  app.get('/pricing/', async (req, res) => {
    const pricingPath = path.join(distPath, 'pricing', 'index.html');
    if (fs.existsSync(pricingPath)) {
      const html = await fs.promises.readFile(pricingPath, 'utf-8');
      res.status(200).set({ 
        "Content-Type": "text/html",
        "Cache-Control": "public, max-age=3600"
      }).send(html);
      return;
    }
    res.status(404).send('Page not found');
  });
  
  app.get('/*', async (req, res) => {
    console.log(`[DEBUG] Request path: "${req.path}"`);
    console.log(`[DEBUG] Is marketing route: ${isMarketingRoute(req.path)}`);
    console.log(`[DEBUG] Path starts with /app: ${req.path.startsWith('/app')}`);
    
    if (req.path.startsWith('/api/')) {
      return res.status(404).json({ message: 'API endpoint not found' });
    }
    
    // Check if this is a marketing route that should be SSG
    const isMarketing = isMarketingRoute(req.path);
    console.log(`[DEBUG] Is marketing: ${isMarketing}`);
    
    if (isMarketing) {
      console.log(`[DEBUG] Serving marketing route: ${req.path}`);
      // Try to serve pre-built static file first
      const staticFilePath = path.join(distPath, req.path, 'index.html');
      
      if (fs.existsSync(staticFilePath)) {
        console.log(`[DEBUG] Serving static file: ${staticFilePath}`);
        // Read the file content and send it
        const html = await fs.promises.readFile(staticFilePath, 'utf-8');
        res.status(200).set({ 
          "Content-Type": "text/html",
          "Cache-Control": "public, max-age=3600" // Cache for 1 hour
        }).send(html);
        return;
      }
      
      // Fallback to dynamic SSG if static file doesn't exist
      console.log(`[DEBUG] Static file not found, generating dynamically`);
      const staticHtml = await renderMarketingPage(req.path);
      if (staticHtml) {
        res.status(200).set({ 
          "Content-Type": "text/html",
          "Cache-Control": "public, max-age=3600"
        }).send(staticHtml);
        return;
      }
    }
    
    // For app routes (/app/*) or fallback, serve the built SPA index.html
    console.log(`[DEBUG] Serving SPA for path: ${req.path}`);
    const indexPath = path.join(distPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      // Read the built index.html file (which has correct asset paths)
      let html = await fs.promises.readFile(indexPath, 'utf-8');
      
      // Add CSR-specific meta tags for app routes
      if (req.path.startsWith('/app')) {
        html = html.replace(
          '<head>',
          `<head>
            <meta name="robots" content="noindex, nofollow">
            <title>Dashboard - BusinessConnect</title>`
        );
      }
      
      console.log(`[DEBUG] Sending SPA HTML for: ${req.path}`);
      res.status(200).set({
        "Content-Type": "text/html",
        "Cache-Control": req.path.startsWith('/app') ? "no-cache" : "public, max-age=300"
      }).send(html);
    } else {
      console.log(`[DEBUG] SPA index.html not found`);
      res.status(404).send('Application not found');
    }
  });
}