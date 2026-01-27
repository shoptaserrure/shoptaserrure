## Project Summary
A professional locksmith service website (ShopTaSerrure) for Paris & Île-de-France, focusing on SEO, performance, and clear pricing transparency.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (Icons)
- Framer Motion (Animations)

## Architecture
- `src/app`: Routes and pages
- `src/components/sections`: Reusable page sections (Hero, Services, Contact, etc.)
- `src/components/ui`: Low-level UI components
- `src/lib/seo`: SEO-specific data and utilities (locations, etc.)

## User Preferences
- Follow "PATCH SAFE" approach: minimize modifications to existing design.
- Use `mailto` for contact form functionality (shoptaserrure@gmail.com).
- Optimize for performance (LCP, mobile) using `next/image` and removing redundant font imports.

## Project Guidelines
- SEO-focused: maintain internal linking via intervention zones.
- No comments unless requested.
- Use functional components.

## Common Patterns
- Mailto form submission with encoded URI components.
- Hero sections with optimized background images using `priority`.
