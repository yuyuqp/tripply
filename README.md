# Tripply

Tripply is a prototype travel planning and itinerary generation platform that highlights two differentiators:

- **Personalization** with multiple travel profiles (dietary needs, pace, and preferences).
- **Logistics** monitoring for weather, traffic, delays, crowding, and nearby events.

## Demo URLs

Use the shareable URLs below to jump to specific prototype screens:

- Landing: `/?screen=landing`
- Dashboard prompt: `/?screen=dashboard`
- Travel profiles: `/?screen=profiles`
- Logistics command center: `/?screen=logistics`
- Itinerary preview: `/?screen=itinerary`

## Deployment

The GitHub Actions workflow at `.github/workflows/deploy-pages.yml` builds the Vite app and deploys it to GitHub Pages on every push to `main`, setting `VITE_BASE` to the repository name for the Pages base path. Ensure GitHub Pages is configured to use GitHub Actions as the source.

## Development

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.
