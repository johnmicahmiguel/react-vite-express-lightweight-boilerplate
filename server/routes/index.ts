import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import v1Routes from './v1';
import { swaggerSpec } from '../utils/swagger';
import { docsAuthFromEnv } from '../middleware/docsAuth';

const router = Router();

// Health check endpoint (keep existing)
router.get('/health', (_req, res) => {
  res.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Protected API Documentation
router.use('/documentation', docsAuthFromEnv, swaggerUi.serve);
router.get('/documentation', swaggerUi.setup(swaggerSpec));

// API versioning
router.use('/v1', v1Routes);

export default router;