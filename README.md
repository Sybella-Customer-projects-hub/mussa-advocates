# Moussa Advocates

The public website for Moussa Advocates, a Rwandan legal practice.

## Stack

- React 18
- TypeScript
- Vite
- Lucide React for interface icons
- Plain CSS in `src/index.css`

## Project structure

```text
src/
  components/   Shared layout, navigation, content and controls
  data/         Site content and shared TypeScript types
  pages/        Route-level page views
  sections/     Homepage sections
  App.tsx       Small client-side page router and shared state
  index.css     Site-wide visual system and responsive styles
```

The app intentionally uses a small state-based router rather than adding routing
infrastructure for a compact brochure website. Articles and service views are
separate page states, and the browser title changes when an article is opened.

## Local development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Content and contact details

Shared services, articles, image references and page types live in
`src/data/siteContent.ts`. Contact links are kept in the relevant contact,
footer and legal-help components so they are easy to verify before handover.

The legal-help flow creates a message for the selected matter and offers
WhatsApp, email and phone actions. Replace the placeholder phone number and
email address with the firm's confirmed details before launch.

## Deployment

Run `npm run build` and serve the generated `dist/` directory with the hosting
provider's static-site configuration.
