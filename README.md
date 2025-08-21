# biz-app

This project was created with a modern TypeScript stack that combines Next.js, Hono, tRPC, and more.

## Features

- **TypeScript** - For type safety and improved developer experience
- **Next.js 15** - Full-stack React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS for rapid UI development
- **React 19** - Modern UI library
- **Hono** - Lightweight, performant server framework
- **tRPC** - End-to-end type-safe APIs
- **Bun** - Runtime environment and package manager
- **Mongoose** - MongoDB object modeling for Node.js
- **MongoDB** - Document database
- **Better Auth** - Authentication system
- **Turborepo** - Optimized monorepo build system
- **TanStack Query** - Server state management

## Getting Started

First, install the dependencies:

```bash
bun install
```

## Environment Setup

1. Copy the example environment files:
   ```bash
   cp apps/server/.env.example apps/server/.env
   cp apps/web/.env.example apps/web/.env
   ```

2. Update the environment variables in both files according to your setup.

## Database Setup

This project uses MongoDB with Mongoose.

1. Make sure you have MongoDB set up (local or cloud instance).
2. Update your `apps/server/.env` file with your MongoDB connection URI.

## Running the Application

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the web application.
The API is running at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
biz-app/
├── apps/
│   ├── web/         # Frontend application (Next.js 15)
│   └── server/      # Backend API (Hono + tRPC)
├── packages/        # Shared libraries/modules
```

## Available Scripts

- `bun dev`: Start all applications in development mode
- `bun build`: Build all applications
- `bun check-types`: Check TypeScript types across all apps
- `bun dev:web`: Start only the web application
- `bun dev:server`: Start only the server
- `bun db:push`: Push schema changes to database (if using a schema-based database)
- `bun db:studio`: Open database studio UI (if available)
