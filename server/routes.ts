import type { Express } from "express";
import { createServer, type Server } from "http";
import apiRoutes from "./routes/index";

export async function registerRoutes(app: Express): Promise<Server> {
  // Register all API routes
  app.use("/api", apiRoutes);

  const httpServer = createServer(app);
  return httpServer;
}