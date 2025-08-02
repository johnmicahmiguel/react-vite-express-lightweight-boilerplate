import fs from "fs";
import path from "path";
import express, { type Express } from "express";
import { type Server } from "http";
import { createServer as createViteServer, type ViteDevServer } from "vite";

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
      const indexTemplate = path.resolve("index.html");
      let template = await fs.promises.readFile(indexTemplate, "utf-8");
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
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

  app.use(express.static(distPath));
  
  app.get('/*', (req, res) => {
    if (req.path.startsWith('/api/')) {
      return res.status(404).json({ message: 'API endpoint not found' });
    }
    
    const indexPath = path.join(distPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send('Application not found');
    }
  });
}