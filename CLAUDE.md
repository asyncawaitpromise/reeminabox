# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based photography portfolio website built with Vite, featuring a fine art print shop interface. The site is branded as "Reem Totry Photography" / "reeminabox" and includes portfolio galleries, about page, contact form, and mobile-optimized components.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm host` - Start dev server with host access on port 8080 (for external device testing)
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build
- `pnpm tbuild` - Build and create tar archive in dist/o.tar for deployment

## Architecture

### Tech Stack
- **Frontend**: React 18 with JSX
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS + DaisyUI components
- **Icons**: React Feather
- **Styling Library**: Styled Components (available but minimal usage)
- **Backend**: PocketBase integration
- **Build Tool**: Vite with TypeScript support

### Project Structure
- `src/App.jsx` - Main app component with routing setup
- `src/routes/` - Page components (Homepage, Portfolio, About, Contact)
- `src/components/` - Reusable UI components including mobile-specific variants
- `public/` - Static assets and deployment config (nginx.conf, captain-definition)

### Key Components
- **Header**: Fixed navigation with mobile hamburger menu
- **Footer**: Site footer component
- **Mobile-specific**: Dedicated mobile components for bulk actions, file upload, photo cards, and sticker customization
- **ScrollToTop**: Route change scroll behavior component

### Styling Approach
- Uses Tailwind CSS with DaisyUI plugin for pre-built components
- Mobile-first responsive design
- Clean, minimalist photography portfolio aesthetic
- Fixed header with transparent overlays on hero sections

### Deployment
- Configured for containerized deployment with nginx
- Captain definition file for platform deployment
- Build process creates tarball for easy deployment transfer