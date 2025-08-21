# Project Rules and Best Practices

This document outlines the coding standards, best practices, and architectural guidelines for the `biz-app` project. Adhering to these rules ensures consistency, maintainability, and scalability across the codebase.

## 1. General Architecture

### 1.1. Monorepo Structure
- The project uses a Turborepo monorepo structure with `apps/` for applications (`web`, `server`) and `packages/` for shared libraries.
- Shared code between apps should be placed in the `packages/` directory.

### 1.2. Modular Architecture
- **Web App (`apps/web`)**: Built with Next.js 15 (App Router). Business logic should be kept in server components or separated into utility functions/services. UI components should be in `src/components`.
- **Server App (`apps/server`)**: Built with Hono.js and tRPC. Business logic should reside in service modules, not in route handlers. Route handlers should only orchestrate calls to services.
- **Shared Code**: Place reusable utilities, types, or components in `packages/`.

## 2. TypeScript

### 2.1. Type Safety
- All code must be written in TypeScript.
- Avoid using `any`. If a type is truly unknown, use `unknown` and perform proper type checking.
- Prefer explicit type annotations for function parameters and return types, especially for public APIs.
- Use Zod for schema validation and type inference.

### 2.2. Naming Conventions
- Use `PascalCase` for types, interfaces, classes, and React components.
- Use `camelCase` for variables, functions, and methods.
- Use `UPPER_CASE` for constants.

## 3. Web App (`apps/web`) - Next.js & React

### 3.1. Component Design

#### 3.1.1. Reusable Components
- Create reusable UI components in `src/components/ui`.
- Use `class-variance-authority` (CVA) for defining component variants.
- Use `tailwind-merge` and `clsx` (via `cn` utility) to merge and conditionally apply Tailwind CSS classes.

#### 3.1.2. Component Structure
- Prefer server components unless client-side interactivity is required.
- Keep components small and focused on a single responsibility.
- Extract hooks for complex component logic.

### 3.2. Styling

#### 3.2.1. Tailwind CSS
- Use Tailwind CSS v4 for all styling.
- **No inline styles**: Avoid using the `style` prop for styling. Use Tailwind classes instead.
- Use the `cn` utility function for conditional and merged class names.
- Leverage Tailwind's design system (spacing, colors, typography) to maintain consistency.

#### 3.2.2. Customization
- Customize the Tailwind theme in `tailwind.config.js` if needed, but prefer using default theme values.

### 3.3. Data Fetching & State Management

#### 3.3.1. Server State
- Use TanStack Query for managing server state.
- Integrate with tRPC for end-to-end type-safe API calls.

#### 3.3.2. Client State
- Use React's built-in `useState` and `useReducer` for simple local component state.
- For complex global client state, consider using Context API or a state management library if necessary.

### 3.4. Routing
- Use Next.js App Router file conventions for defining routes.
- Keep route components lean; extract logic into components or utility functions.

### 3.5. Authentication
- Integrate with Better Auth for authentication flows.
- Use session context provided by Better Auth to manage user state.

## 4. Server App (`apps/server`) - Hono & tRPC

### 4.1. API Design

#### 4.1.1. tRPC Procedures
- Define API endpoints as tRPC procedures in `src/trpc/routers`.
- Use Zod schemas for input validation (`input`).
- Clearly define output types (`output`) using Zod or TypeScript types.
- Use `publicProcedure` for unauthenticated endpoints and `protectedProcedure` for authenticated ones.

#### 4.1.2. Procedure Organization
- Group related procedures into routers.
- Use sub-routers to organize large APIs.

### 4.2. Business Logic
- Encapsulate business logic in service modules located in `src/services`.
- tRPC route handlers should only call service functions and handle the response.

### 4.3. Database Access
- Use Mongoose for database interactions.
- Define models in `src/db/models`.
- Ensure database queries are efficient and use appropriate indexes.

### 4.4. Authentication
- Use Better Auth with the MongoDB adapter.
- Protect routes using tRPC middleware (e.g., `protectedProcedure`).

### 4.5. Error Handling
- Handle errors gracefully and return appropriate HTTP status codes and messages.
- Use tRPC's built-in error handling where possible.

## 5. Testing

### 5.1. Test Coverage
- Write unit tests for business logic and utility functions.
- Write integration tests for tRPC procedures.
- Write end-to-end tests for critical user flows.

### 5.2. Testing Tools
- Use Jest or Vitest for unit and integration tests.
- Use Playwright or Cypress for end-to-end tests.

## 6. Code Quality

### 6.1. Linting & Formatting
- Use ESLint and Prettier to enforce code style and catch potential errors.
- Run linting and formatting checks in CI/CD pipelines.

### 6.2. Type Checking
- Run TypeScript type checking (`bun check-types`) in CI/CD pipelines.

## 7. Documentation

### 7.1. Code Comments
- Add comments to explain complex logic or non-obvious decisions.
- Keep comments up-to-date with code changes.

### 7.2. README Updates
- Update the main `README.md` and relevant documentation when making significant changes.

## 8. Dependencies

### 8.1. Adding New Dependencies
- Only add dependencies that are necessary.
- Prefer well-maintained, popular libraries.
- Check for potential security vulnerabilities before adding a dependency.

## 9. Git Workflow

### 9.1. Commits
- Write clear, concise commit messages.
- Use Conventional Commits format if specified by the team.

### 9.2. Branching
- Follow the branching strategy defined by the team (e.g., Git Flow, GitHub Flow).