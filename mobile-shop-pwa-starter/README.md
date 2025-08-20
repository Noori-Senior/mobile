# Mobile Shop – PWA Starter (Next.js + Tailwind)

Deployed to Vercel from day one. Edit entirely in the cloud (GitHub Web, StackBlitz, CodeSandbox).

## Quick Deploy (no local install)

1. Create an empty GitHub repo.
2. Upload these files (or drag-drop the zipped folder and extract in the GitHub web UI).
3. Go to Vercel → **New Project** → Import your GitHub repo → Deploy.
4. You get a live URL instantly. Every push redeploys.

## Dev in the Cloud
- **StackBlitz**: Open your repo URL in stackblitz.com (works in browser).
- **GitHub Web Editor**: Press `.` in your repo to edit.
- **Codespaces/Replit** also work if available.

## Roadmap
- [ ] Replace sample products with real data
- [ ] Add Supabase (free) for Auth & DB
- [ ] Add product pages & cart
- [ ] Add checkout provider (Stripe test mode)
- [ ] Add offline support via service worker

## Scripts
- `npm run dev` – dev server
- `npm run build` – production build
- `npm start` – run production

## PWA
This includes a manifest and icons so it can be *installed* on mobile. Offline caching can be added later with a service worker.
