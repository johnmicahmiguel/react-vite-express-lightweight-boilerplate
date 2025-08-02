# React Vite Express Lightweight Boilerplate

A modern, full-stack boilerplate combining **React + Vite** for the frontend and **Express + TypeScript** for the backend with clear domain separation and auto-generated API documentation.

## Features

- **Clear Architecture**: Separated domains for marketing pages (SSG) and authenticated app (CSR)
- **Auto-Generated API Docs**: Swagger/OpenAPI documentation with authentication protection
- **API Versioning**: Built-in API versioning (`/api/v1/`)
- **Modern Stack**: React 18 + Vite + Express + TypeScript
- **Responsive Design**: TailwindCSS for styling
- **Developer Experience**: Hot reload, TypeScript, organized folder structure

## Project Structure

```
├── src/                          # Client-side code
│   ├── app/                      # Authenticated SPA pages (CSR)
│   │   ├── components/           # App-specific components
│   │   ├── hooks/                # App-specific hooks
│   │   ├── pages/                # Protected pages (Dashboard, Profile, Settings)
│   │   ├── store/                # State management
│   │   ├── types/                # App domain types
│   │   ├── utils/                # App utilities
│   │   └── App.tsx               # App router component
│   │
│   ├── marketing/                # Marketing/Public pages (SSG)
│   │   ├── components/           # Marketing components
│   │   ├── pages/                # Public pages (Landing, About, etc.)
│   │   ├── assets/               # Marketing assets
│   │   ├── styles/               # Marketing styles
│   │   └── types/                # Marketing types
│   │
│   ├── shared/                   # Shared across domains
│   │   ├── components/           # Shared UI components
│   │   │   ├── ui/               # Basic components (Button, etc.)
│   │   │   └── layout/           # Layout components
│   │   ├── hooks/                # Shared hooks
│   │   ├── types/                # Shared types
│   │   ├── utils/                # Shared utilities
│   │   └── constants/            # App constants
│   │
│   ├── services/                 # All service integrations
│   │   ├── api/                  # API client
│   │   ├── firebase/             # Firebase integration
│   │   ├── analytics/            # Analytics services
│   │   └── notifications/        # Push notifications
│   │
│   └── styles/                   # Global styles
│
├── server/                       # Server-side code
│   ├── routes/                   # API endpoints
│   │   ├── v1/                   # API version 1
│   │   │   ├── auth.ts           # Authentication routes
│   │   │   ├── users.ts          # User routes
│   │   │   └── index.ts          # V1 route aggregator
│   │   └── index.ts              # Main route handler
│   │
│   ├── services/                 # Third-party integrations
│   │   ├── firebase/             # Firebase Admin SDK
│   │   ├── email/                # Email services
│   │   └── storage/              # File storage
│   │
│   ├── middleware/               # Express middleware
│   │   ├── auth.ts               # Authentication middleware
│   │   └── docsAuth.ts           # Documentation protection
│   │
│   ├── db/                       # Database related
│   │   ├── models/               # Database models
│   │   ├── migrations/           # Database migrations
│   │   └── config.ts             # Database configuration
│   │
│   ├── types/                    # Server-side types
│   ├── utils/                    # Server utilities
│   │   └── swagger.ts            # Swagger configuration
│   ├── index.ts                  # Server entry point
│   └── vite.ts                   # Vite integration
│
├── public/                       # Static assets
├── .env.example                  # Environment variables example
└── package.json                  # Dependencies and scripts
```

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <your-repo>
   cd react-vite-express-lightweight-boilerplate
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5001`

## API Documentation

### Accessing Documentation
Visit `http://localhost:5001/api/documentation` to view the interactive Swagger UI.

**Default Credentials:**
- Username: `admin`
- Password: `docs123`

### Customizing Documentation Access
Set environment variables in your `.env` file:
```env
DOCS_USERNAME=your-username
DOCS_PASSWORD=your-password
```

## API Endpoints

### Current Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/v1/auth/login` | User login |
| POST | `/api/v1/auth/register` | User registration |
| POST | `/api/v1/auth/logout` | User logout |
| GET | `/api/v1/users/profile` | Get user profile |
| PUT | `/api/v1/users/profile` | Update user profile |

### API Versioning
All API endpoints support versioning:
- **Versioned**: `/api/v1/users/profile`
- **Backward Compatible**: `/api/users/profile` (defaults to v1)

## Routing Strategy

### Marketing Routes (SSG)
- `/` - Landing page
- `/about` - About page
- `/pricing` - Pricing page
- All marketing pages are server-side generated for SEO

### App Routes (CSR)
- `/app` - Dashboard (requires authentication)
- `/app/profile` - User profile
- `/app/settings` - App settings
- All app routes are client-side rendered

## Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Adding New API Endpoints
1. Create route file in `server/routes/v1/`
2. Add JSDoc comments for auto-documentation:
   ```typescript
   /**
    * @swagger
    * /your-endpoint:
    *   get:
    *     summary: Your endpoint description
    *     tags: [YourTag]
    *     responses:
    *       200:
    *         description: Success response
    */
   router.get('/your-endpoint', handler);
   ```
3. Export route in `server/routes/v1/index.ts`
4. Documentation updates automatically!

### Adding New Pages

**Marketing Page:**
1. Create component in `src/marketing/pages/`
2. Add route in main `App.tsx`

**App Page:**
1. Create component in `src/app/pages/`
2. Add route in `src/app/App.tsx`

## Authentication

The boilerplate includes placeholder authentication:
- Login/register endpoints ready
- JWT token structure prepared
- Authentication middleware available
- Protected routes structure in place

**Note:** Replace placeholder auth logic with your preferred authentication system (Firebase Auth, Auth0, custom JWT, etc.).

## Architecture Decisions

### Domain Separation
- **Marketing**: SEO-focused, server-side generated pages
- **App**: Interactive, client-side rendered application
- **Shared**: Common components and utilities

### Service Layer
- Centralized service integrations
- Easy to swap implementations
- Clear separation of concerns

### API Design
- RESTful endpoints
- Versioned APIs
- Auto-generated documentation
- Consistent response structure

## Built With

- **Frontend**: React 18, Vite, TypeScript, TailwindCSS
- **Backend**: Express, TypeScript, Node.js
- **Documentation**: Swagger/OpenAPI, swagger-jsdoc, swagger-ui-express
- **Development**: Hot reload, TypeScript compilation, ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add/update documentation
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Deployment

This boilerplate is ready for deployment on:
- **Vercel** (recommended for full-stack)
- **Netlify** (frontend + serverless functions)
- **Railway** (full-stack with database)
- **Heroku** (traditional hosting)

## Next Steps

1. **Database Integration**: Add your preferred database (PostgreSQL, MongoDB, etc.)
2. **Authentication**: Implement real authentication system
3. **Email Service**: Configure email sending (SendGrid, etc.)
4. **File Upload**: Add file storage (AWS S3, Cloudinary)
5. **Testing**: Add unit and integration tests
6. **CI/CD**: Set up automated deployment pipeline

---

**Happy coding!**