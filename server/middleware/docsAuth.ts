import basicAuth from 'express-basic-auth';

// Documentation authentication middleware
export const docsAuthMiddleware = basicAuth({
  users: {
    // Default credentials - change these in production
    'admin': 'docs123',
    'developer': 'dev456'
  },
  challenge: true,
  realm: 'API Documentation',
  unauthorizedResponse: {
    error: 'Access denied to API documentation',
    message: 'Valid credentials required'
  }
});

// Alternative: Use environment variables for credentials
export const docsAuthFromEnv = basicAuth({
  users: {
    [process.env.DOCS_USERNAME || 'admin']: process.env.DOCS_PASSWORD || 'docs123'
  },
  challenge: true,
  realm: 'API Documentation',
  unauthorizedResponse: {
    error: 'Access denied to API documentation', 
    message: 'Valid credentials required'
  }
});