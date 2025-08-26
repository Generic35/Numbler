# Mathler Game

## Overview

Mathler is a math-based puzzle game similar to Wordle, but with equations instead of words. Players have 6 attempts to guess a mathematical equation that equals a target number. The game provides feedback through colored tiles: green for correct characters in correct positions, yellow for correct characters in wrong positions, and gray for characters not in the equation. This implementation is built as a full-stack TypeScript application with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client is built using React 18 with TypeScript and follows a component-based architecture. The application uses Vite for development and build tooling, providing fast hot module replacement and optimized builds. State management is handled through React's built-in hooks (useState, useEffect) for local component state, with TanStack Query for server state management and caching.

The UI is built with shadcn/ui components, which provide a consistent design system built on top of Radix UI primitives and styled with Tailwind CSS. The component library uses the "new-york" style variant and includes comprehensive UI components like forms, dialogs, toasts, and data display elements.

Routing is implemented using Wouter, a minimalist router that provides client-side navigation without the complexity of larger routing solutions. The application structure follows a clear separation of concerns with dedicated folders for components, pages, hooks, and utilities.

### Backend Architecture
The server is built with Express.js and follows a modular architecture pattern. The main server file sets up middleware for JSON parsing, URL encoding, and request logging. A custom logging system tracks API requests with timing information and response data.

The backend uses a plugin-based registration system for routes through the `registerRoutes` function, allowing for clean separation of different API endpoints. Error handling is centralized with a global error middleware that standardizes error responses.

For development, the server integrates with Vite's middleware to serve the frontend application, while production builds use static file serving with proper build optimization through esbuild.

### Data Storage Solutions
The application implements a flexible storage interface pattern that supports multiple backend implementations. Currently, it includes an in-memory storage implementation (`MemStorage`) for development and testing, but the interface is designed to easily swap in database-backed storage solutions.

Database schema is defined using Drizzle ORM with PostgreSQL support. The schema includes user management with proper UUID primary keys and unique constraints. Drizzle is configured to use PostgreSQL dialect with migrations stored in a dedicated folder, and database credentials are managed through environment variables.

The storage interface follows CRUD patterns with methods for user creation, retrieval by ID, and lookup by username. This abstraction allows for easy testing and future database backend switching without changing business logic.

### Authentication and Authorization
The application is structured to support session-based authentication with PostgreSQL session storage using `connect-pg-simple`. The database connection uses Neon's serverless PostgreSQL driver for scalable cloud database connectivity.

User authentication follows standard patterns with password storage and validation, though specific authentication middleware implementation is prepared but not yet active in the current codebase.

## External Dependencies

### Database and ORM
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support for schema definition, migrations, and query building
- **@neondatabase/serverless**: Serverless PostgreSQL driver optimized for edge environments and serverless deployments
- **drizzle-zod**: Integration between Drizzle ORM and Zod for type-safe schema validation

### Frontend Framework and State Management
- **React 18**: Core frontend framework with modern hooks and concurrent features
- **TanStack Query v5**: Server state management with caching, background updates, and offline support
- **Wouter**: Lightweight client-side routing library for single-page application navigation

### UI and Styling
- **shadcn/ui**: Comprehensive component library built on Radix UI primitives with Tailwind CSS styling
- **Radix UI**: Headless UI components providing accessibility and behavior without styling constraints
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development with design system consistency
- **Lucide React**: Modern icon library with tree-shaking support

### Development and Build Tools
- **Vite**: Fast development server and build tool with hot module replacement and optimized production builds
- **TypeScript**: Static type checking for enhanced developer experience and runtime safety
- **esbuild**: Fast JavaScript bundler used for server-side code compilation

### Game Logic and Utilities
- **mathjs**: Safe mathematical expression evaluation for validating player equations
- **date-fns**: Date manipulation library for handling time-based game features
- **nanoid**: Unique ID generation for session management and game state tracking

### Session and State Management
- **connect-pg-simple**: PostgreSQL-backed session store for Express applications
- **express-session**: Session middleware for maintaining user state across requests (configured but not yet implemented)