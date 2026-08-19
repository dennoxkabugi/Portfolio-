# Dudley — Portfolio

A React + Vite portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to Render, Vercel, Netlify, or GitHub Pages.

## Before you publish

- Update the placeholder email, GitHub, and Upwork links in `src/components/Contact.jsx`.
- Swap in real project screenshots if you'd rather not use the abstract browser mockup in `src/components/Projects.jsx`.
- The coursework list in `src/components/Coursework.jsx` reflects the current CSC/MAT cycle — update it each semester.

## Structure

```
src/
  components/
    Nav.jsx          navigation bar
    Hero.jsx          intro + signature graph visual
    NetworkGraph.jsx  animated SVG diagram (signature element)
    About.jsx
    Skills.jsx
    Projects.jsx       Career Compass + side projects
    Coursework.jsx     current semester timeline
    Contact.jsx
  index.css          design tokens + global styles
  App.jsx
  main.jsx
```
