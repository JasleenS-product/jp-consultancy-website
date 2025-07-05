# JP Consultancy Website

A modern, responsive static website for JP Consultancy, built with Eleventy (11ty) and Netlify CMS. Features include a hero carousel, animated statistics, testimonials slider, external blog links, and a contact form integrated with Netlify Forms.

## Tech Stack
- [Eleventy (11ty)](https://www.11ty.dev/)
- [Netlify CMS](https://www.netlifycms.org/)
- HTML5, CSS3, JavaScript (Vanilla)
- Netlify Forms (for contact form email integration)

## Color Palette
- **Primary:** #1F5FFF
- **Secondary:** #04CE78
- **Accent:** #B2B1B1

## Logo
Place your SVG logo in `assets/images/JP CONSULTANCY SVG.svg` and reference it in your layouts.

## Project Structure
```
/ (root)
├── src/
│   ├── index.md
│   ├── about.md
│   ├── services.md
│   ├── projects.md
│   ├── blogs.md
│   ├── contact.md
│   ├── service-details/
│   │   ├── hospital-planning.md
│   │   ├── quality.md
│   │   ├── training.md
│   │   ├── operations.md
│   │   ├── equipment.md
│   │   └── tourism.md
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   └── _includes/ (HTML templates)
├── css/style.css
├── js/script.js
├── admin/config.yml (Netlify CMS config)
├── .eleventy.js (Eleventy config)
├── netlify.toml (Netlify build config)
└── README.md
```

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local server:
   ```bash
   npx eleventy --serve
   ```
3. Access Netlify CMS at `/admin` after running locally or deploying.

## Deployment
- Deploy to [Netlify](https://www.netlify.com/) for best results (supports static sites and Netlify CMS out of the box).
- Add your site to Netlify, connect your repo, and set the build command to `npx eleventy` and publish directory to `_site`.

## Netlify Forms
- The contact form is set up to use Netlify Forms for email delivery. No backend needed.

## Customization
- Update color palette in `css/style.css`.
- Replace placeholder images in `assets/images/`.
- Edit content via Netlify CMS or directly in markdown files.

## License
MIT 