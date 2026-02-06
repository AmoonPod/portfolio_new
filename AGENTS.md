# AGENTS.md

This document provides instructions for AI agents operating in this repository.

## 1. Environment & Commands

### Build & Verification
- **Build**: `npm run build` (Next.js build)
- **Lint**: `npm run lint` (ESLint configuration)
- **Test**: No test runner is currently configured in `package.json`.
  - *Instruction*: Do not attempt to run `npm test` or `jest` unless you have explicitly added the configuration.
- **Dev Server**: `npm run dev` (Turbopack enabled)

### Dependencies
- **Framework**: Next.js 16 (App Router), React 19
- **Styling**: Tailwind CSS, Tailwind Merge, CLSx, Tailwind Animate
- **UI Components**: Radix UI primitives, Lucide React icons, Framer Motion
- **Content**: MDX with `next-mdx-remote`, `rehype`, `remark`

## 2. Code Style & Conventions

### General
- **Language**: TypeScript (Strict mode enabled in `tsconfig.json`).
- **Path Aliases**: Use `@/` to import from `./src/` (e.g., `import { Button } from "@/components/ui/button"`).
- **Formatting**:
  - Indentation: 2 spaces.
  - Quotes: Double quotes `"` for strings and JSX attributes.
  - Semicolons: Always use semicolons.
- **Comments**: Use clear, uppercase section comments in JSX (e.g., `{/* HERO SECTION */}`).

### Components
- **Structure**: Use Functional Components (`export default function ComponentName() { ... }`).
- **Naming**: PascalCase for component files and function names (e.g., `HomePage`, `ServiceContactForm`).
- **Props**: Define prop types explicitly (interfaces or inline types).
- **Styling**: Use Tailwind utility classes directly in `className`.
  - Use `cn()` utility (from `lib/utils` or similar) for conditional class merging.

### Metadata & SEO
- **Location**: Metadata is defined in `layout.tsx` or `page.tsx` using the `Metadata` type from `next`.
- **JSON-LD**: Use `<script type="application/ld+json" ... />` for structured data.

## 3. Blog Content Strategy
- **Guidelines**: Strict content generation rules are defined in `AI_BLOG_GUIDELINES.md`.
- **Format**: Blog posts are MDX files located in `src/content/blog/`.
- **Frontmatter**: Must include `title`, `excerpt`, `date`, `author` (name, picture), `tags`, `published`.
- **Images**: Place blog images in `public/blog/`.

## 4. Project Structure
- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Reusable UI components.
  - `src/components/ui/`: Shadcn/Radix UI primitive components.
  - `src/components/home/`: Page-specific sections.
- `src/content/`: MDX content files.
- `src/data/`: Static data files (e.g., `resume.tsx` for global site data).
- `src/lib/`: Utility functions (e.g., `blog.ts` for content fetching).
- `public/`: Static assets (images, fonts).
