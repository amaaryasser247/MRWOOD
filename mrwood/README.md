# MRWOOD — صناعة الأخشاب | Wood Manufacturing

A portfolio / digital showroom website. No prices, no cart, no checkout —
photography, projects and a direct line to WhatsApp.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
```

Stack: React 18, Vite 6, Tailwind CSS 4, React Router 6, Framer Motion, Lucide.

## Adding the real photos

Save the photo into `src/assets/images/...` at the exact path written in the
data file. That's the whole process — the loader resolves it automatically and
the generated placeholder disappears.

```
data:  image: "doors/modern/mr-001.jpg"
file:  src/assets/images/doors/modern/mr-001.jpg
```

See `src/assets/images/README.md` for the full list of paths and sizes.

## Editing content

| What                                    | File                  |
| --------------------------------------- | --------------------- |
| Phone, WhatsApp, address, hours, socials | `src/data/site.js`    |
| Doors and categories                     | `src/data/doors.js`   |
| Projects and their galleries             | `src/data/projects.js`|

No JSX duplication — add an object to the array and the page renders it.

## Structure

```
src/
  components/   Navbar Hero SectionTitle PageHeader DoorCard DoorGallery
                ImageLightbox ProjectCard ProjectGallery AboutSection
                ContactSection CTASection Footer Img Reveal
  pages/        Home Doors Projects ProjectDetail About Contact NotFound
  data/         site.js doors.js projects.js
  assets/images/  hero/ doors/ projects/ about/   ← real photos go here
  lib/          placeholder.js (generated stand-in artwork)
```

## Notes

- Routing uses `HashRouter` so deep links work on any static host with no
  server config. Switch to `BrowserRouter` in `src/App.jsx` if your host
  supports SPA fallback (Netlify, Vercel).
- The contact form is front-end only: it opens WhatsApp with the message
  pre-filled. Replace `handleSubmit` in `ContactSection.jsx` with a `fetch()`
  when you have a backend.
- `npm run build:single` produces one self-contained HTML file in
  `dist-single/` — handy for sending a preview to someone.
- Colours and fonts are tokens at the top of `src/index.css`.
