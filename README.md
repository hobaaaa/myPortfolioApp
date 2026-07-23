# DG Digital Portfolio Website

Modern, dark themed portfolio and service website for `DG Digital`.

Built with `Next.js`, `TypeScript`, `Tailwind CSS`, and `Framer Motion`.

## Overview

This project is a custom portfolio / agency-style website focused on:

- premium dark UI presentation
- service-based landing structure
- project showcase pages
- responsive layout
- lightweight motion and transition details

The site is structured as a marketing website rather than a dashboard or app product.

## Tech Stack

- `Next.js 15`
- `React 19`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `Sanity Studio` as a standalone sibling app

## Project Structure

```txt
app/           App Router pages
components/    Reusable UI sections and layout blocks
data/          Static content for services, projects, and values
public/        Images and brand assets
sanity/        Sanity client, queries, and helpers
scripts/       Local development helper scripts
```

## Sanity Setup

The frontend app is connected to the standalone Studio in the sibling folder:

```txt
../studio-dg-digital
```

This app reads from:

- project: `rw7lkf1r`
- dataset: `production`

Public Sanity environment variables are stored in `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=rw7lkf1r
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-03
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3333
```

The current integration surfaces Studio `post` documents at:

- `/yazilar`
- `/yazilar/[slug]`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Note for Windows PowerShell:

- `npm run dev` may fail depending on local `ExecutionPolicy`
- `npm run dev` works across Windows, macOS, and Linux

## Available Scripts

```bash
npm run dev
npm run dev:raw
npm run build
npm run start
```

### Why `dev` uses a custom launcher

The default dev command runs through:

```txt
scripts/dev.mjs
```

This helper exists to reduce local `.next` corruption issues by:

- checking whether port `3000` is already in use
- preventing duplicate dev sessions
- cleaning stale `.next` output before startup

If you explicitly want the raw Next.js command, use:

```bash
npm run dev:raw
```

## Content Editing

Most visible site content is managed from the `data/` directory:

- `data/projects.ts`
- `data/services.ts`
- `data/values.ts`

Main page sections are composed from reusable components under `components/`.

## Branding

Brand assets currently include:

- `public/logo-dg.svg`
- generated showcase images under `public/images/`

If the final brand package becomes available later, the logo and image system can be replaced without changing the page structure.

## Build Verification

Production build:

```bash
npm run build
```

## Deployment

This project is suitable for static-style or server-rendered deployment on platforms that support Next.js, such as:

- Vercel
- Netlify with Next.js support
- custom Node hosting

## Repository

GitHub repository:

`https://github.com/hobaaaa/myPortfolioApp`

