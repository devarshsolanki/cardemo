This is a [Next.js](https://nextjs.org) project - **Techtaxi** - A premium car rental platform with animated scroll effects and booking functionality.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router pages and components
- `app/components/` - React components (CarScrollAnimation, BookingModal, etc.)
- `app/context/` - React Context for state management
- `public/` - Static assets
- `app/globals.css` - Global styles with Tailwind CSS

## Technologies Used

- **Next.js 16.1** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **PostCSS** - CSS processing

## Building & Deployment

### Local Build

```bash
npm run build
npm run start
```

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy with one click

**Important:** The project is fully optimized for Vercel deployment. All necessary configuration files are included:
- `vercel.json` - Vercel-specific settings
- `next.config.ts` - Next.js configuration
- `.vercelignore` - Files to exclude from Vercel deployment

### Troubleshooting Deployment

If you see a default Next.js page after deployment:

1. **Clear Vercel cache**: Go to Vercel project settings → Deployments → Clear cache
2. **Check build logs**: Review the build logs in Vercel dashboard for any errors
3. **Verify branch**: Ensure you're deploying from the correct branch
4. **Rebuild manually**: Trigger a manual redeploy from Vercel dashboard

### Environment Variables

Currently, no environment variables are required. If you add features that need them, create a `.env.local` file locally and configure them in Vercel dashboard.

## Lint & Type Checking

```bash
npm run lint
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

