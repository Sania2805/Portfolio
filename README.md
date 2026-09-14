# Sania Ghosh — Scrapbook Portfolio

A React + Vite personal portfolio built as a cozy digital scrapbook: torn
paper, washi tape, polaroid frames, handwritten notes, on a dark navy
board. Plain CSS only — no Tailwind/Bootstrap/UI kits.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Replacing placeholder content

Everything here is meant to be edited — nothing is hard-coded into the
components.

| What | Where |
| --- | --- |
| Your illustration | `public/images/profile-illustration.png` |
| Project screenshots | `public/images/projects/*.png` |
| Resume PDF | `public/resume.pdf` |
| Projects, tags, links | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Certifications | `src/data/certifications.js` |
| Hackathons | `src/data/hackathons.js` |
| Journey timeline | `src/data/journey.js` |
| Contact links / coding stats | `src/data/profile.js` |

Just drop a same-named image file into `public/images/...` and the page
will pick it up automatically — until then, a tasteful placeholder frame
is shown so nothing breaks.

The GitHub/Live Demo URLs in `src/data/projects.js` are placeholders —
swap them for your real repo and deployment links.

## Structure

```
src/
  components/   reusable bits: Navbar, ScrapCard, PolaroidFrame, doodle icons
  sections/     one file per page section (Hero, About, Projects, ...)
  data/         editable content — no need to touch components to update copy
  styles.css    all styling, organized by section
```

## Notes

- The theme toggle (moon/sun icon in the nav) softens the navy tones for a
  dimmer variant — it's a nice-to-have, not a full light mode, to keep the
  scrapbook feeling intact either way.
- Fonts are loaded from Google Fonts (Poppins + Caveat/Patrick Hand) via a
  `<link>` in `index.html`, so an internet connection is needed the first
  time a visitor loads the site.
- Motion respects `prefers-reduced-motion`.
