import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'React Vite Express API',
      version: '1.0.0',
      description: 'Auto-generated API documentation',
    },
    servers: [
      {
        url: '/api/v1',
        description: 'API v1',
      },
    ],
  },
  apis: ['./server/routes/v1/*.ts'], // Path to the API routes
};

export const swaggerSpec = swaggerJsdoc(options);