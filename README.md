# JP Consultancy Website

A modern, responsive healthcare consultancy website built with Eleventy (11ty) and optimized for performance and SEO.

## 🚀 Features

- **Modern Design**: Clean, professional healthcare-focused design
- **SEO Optimized**: Comprehensive meta tags, structured data, and performance optimization
- **Responsive**: Mobile-first design that works on all devices
- **Fast Loading**: Optimized images, lazy loading, and performance monitoring
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Blog System**: Integrated blog with categories and newsletter signup

## 📁 Project Structure

```
Jpconsultation/
├── src/                          # Source files
│   ├── _includes/
│   │   └── layouts/              # Nunjucks templates
│   ├── assets/
│   │   ├── css/                  # Stylesheets
│   │   ├── js/                   # JavaScript files
│   │   ├── images/               # Image assets
│   │   └── icons/                # SVG icons
│   ├── service-details/          # Service pages
│   ├── about.md                  # About page
│   ├── contact.md                # Contact page
│   ├── projects.md               # Projects page
│   ├── blogs.md                  # Blog page
│   ├── home.md                   # Homepage content
│   └── splash.njk                # Splash screen
├── _site/                        # Generated static site
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 🛠️ Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Commands
```bash
# Start development server with live reload
npm start

# Build for production
npm run build

# Clean build directory
rm -rf _site && npm start
```

## 📱 Pages Structure

### Main Pages
- **Splash Screen** (`/`) - Landing page with logo and redirect
- **Homepage** (`/home`) - Main content with hero carousel
- **About** (`/about`) - Company information and team
- **Projects** (`/projects`) - Portfolio of completed projects
- **Blogs** (`/blogs`) - Industry insights and articles
- **Contact** (`/contact`) - Contact information and form

### Service Pages
- Hospital Planning & Design (`/service-details/hospital-planning`)
- Hospital Equipment Planning (`/service-details/equipment`)
- NABH & JCI Accreditation (`/service-details/quality`)
- Hospital Staff Training (`/service-details/training`)
- Hospital Operations (`/service-details/operations`)
- Medical Tourism (`/service-details/tourism`)

## 🎨 Design System

### Colors
- **Primary**: #1F5FFF (Blue)
- **Secondary**: #3B82F6 (Light Blue)
- **Text Dark**: #1F2937
- **Text Light**: #6B7280
- **Background**: #FFFFFF
- **Light Background**: #F9FAFB

### Typography
- **Headings**: Belleza
- **Body**: IBM Plex Sans
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- Responsive grid system
- Card-based layouts
- Gradient backgrounds
- Smooth animations
- Interactive hover effects

## 📊 SEO Optimization

### Meta Tags
- Dynamic titles and descriptions for each page
- Open Graph tags for social media
- Twitter Card support
- Canonical URLs
- Structured data markup

### Keywords by Page
- **Homepage**: healthcare consultancy india, hospital consultants
- **Hospital Planning**: hospital planning, design services
- **Equipment**: medical device consulting, equipment planning
- **Accreditation**: NABH accreditation, JCI consulting
- **Tourism**: medical tourism india, wellness tourism
- **Operations**: hospital operations consulting
- **Training**: hospital staff training, patient safety

## ⚡ Performance Features

### Image Optimization
- Lazy loading for all images
- Responsive image sizing
- WebP format support
- Error handling for missing images

### Loading Performance
- Critical CSS inlining
- JavaScript optimization
- Resource preloading
- Performance monitoring

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation
- Screen reader support

## 🚀 Deployment Guide

### Hostinger Deployment

1. **Build the site**:
   ```bash
   npm run build
   # or
   npx eleventy
   ```

2. **Upload files**:
   - Upload contents of `_site` folder to Hostinger's `public_html` directory
   - Ensure all assets are uploaded correctly

3. **Domain Configuration**:
   - Point domain to `www.jpconsultancy.in`
   - Update canonical URLs in `base.njk` if needed

### Alternative Hosting Options

#### Netlify (Recommended)
1. Connect GitHub repository to Netlify
2. Build command: `npx eleventy`
3. Publish directory: `_site`
4. Auto-deploy on git push

#### Vercel
1. Import project from Git
2. Framework preset: Other
3. Build command: `npx eleventy`
4. Output directory: `_site`

## 📝 Content Management

### Adding New Blog Posts
1. Edit `src/blogs.md`
2. Add new article to the articles grid
3. Include proper meta information
4. Rebuild and deploy

### Updating Service Pages
1. Edit respective `.md` file in `src/service-details/`
2. Update YAML front matter for content
3. Rebuild and deploy

### Adding New Images
1. Add images to `src/assets/images/`
2. Use descriptive filenames
3. Optimize images before adding
4. Update references in content files

## 🔧 Maintenance

### Regular Tasks
- Update dependencies monthly
- Check for broken links
- Monitor performance metrics
- Update content regularly
- Review SEO performance

### Performance Monitoring
- Google PageSpeed Insights
- Core Web Vitals
- GTmetrix analysis
- Lighthouse audits

## 📞 Support

For technical support or questions about the website:
- **Email**: jpconsultancy@gmail.com
- **Phone**: +91 98196 55543

## 📄 License

This project is proprietary to JP Consultancy. All rights reserved.

---

**Built with ❤️ for JP Consultancy** 