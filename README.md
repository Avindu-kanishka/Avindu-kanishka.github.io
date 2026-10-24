# Avindu Kanishka — Portfolio

A responsive personal portfolio built with **React 19**, **Vite**, custom CSS, and Lucide icons.

## Tech stack

- React + JavaScript
- Vite build tooling
- Custom responsive CSS
- Lucide icons
- GitHub Actions + GitHub Pages

## Run locally

Install Node.js 24 or a compatible current LTS release, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Create a production build

```bash
npm run build
npm run preview
```

Vite outputs the production website to `dist/`.

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys the site whenever changes are pushed to `main`.

In the repository settings, choose **Settings → Pages → Build and deployment → Source → GitHub Actions**. Once the workflow completes successfully, the portfolio is available at:

**https://avindu-kanishka.github.io/**

## Update content

Edit `src/App.jsx` to change your introduction, skills, social links, project descriptions, and repository URLs. Keep project links accurate and list only technologies you can confidently discuss.
