# JP Consultancy - Deployment Guide for Hostinger

## 🚀 Deployment Steps for Hostinger

### 1. Files to Upload
Upload the entire `_site` folder contents to your Hostinger public_html directory.

### 2. Required Files Structure
```
public_html/
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── icons/
├── about/
├── contact/
├── home/
├── service-details/
├── blogs/
├── projects/
├── admin/
├── index.html
├── projects.html
├── blogs.html
└── other files...
```

### 3. Hostinger Upload Instructions

#### Method 1: File Manager (Recommended)
1. Login to Hostinger Control Panel
2. Go to "File Manager"
3. Navigate to `public_html` folder
4. Delete any existing files (if fresh install)
5. Upload all contents from `_site` folder
6. Extract if uploaded as zip

#### Method 2: FTP Upload
1. Use FTP client (FileZilla, etc.)
2. Connect using Hostinger FTP credentials
3. Upload all `_site` contents to `public_html`

### 4. Domain Configuration
- **Main domain**: Points to index.html (homepage)
- **Subpages**: 
  - `/about/` → about/index.html
  - `/contact/` → contact/index.html
  - `/home/` → home/index.html
  - `/projects.html` → projects.html
  - `/blogs.html` → blogs.html

### 5. SSL Certificate
- Enable SSL certificate in Hostinger panel
- Force HTTPS redirects for security

### 6. Performance Optimization
- Enable Gzip compression in Hostinger
- Use Hostinger's CDN if available
- Optimize images if needed

### 7. Testing After Deployment
Test these URLs after deployment:
- Homepage: `https://yourdomain.com`
- About: `https://yourdomain.com/about/`
- Contact: `https://yourdomain.com/contact/`
- Projects: `https://yourdomain.com/projects.html`
- Services: `https://yourdomain.com/service-details/hospital-planning/`

### 8. Contact Form Setup (Optional)
The contact form currently uses basic HTML. For functionality:
1. Set up PHP contact form handler
2. Configure email settings in Hostinger
3. Update form action in contact/index.html

## 📁 Deployment Package Ready
All files in `_site` folder are production-ready and optimized for hosting.

## 🔧 Technical Details
- **Framework**: Static HTML/CSS/JS (11ty generated)
- **CSS Version**: v32.0.0 (latest)
- **Browser Support**: Modern browsers
- **Mobile Responsive**: Yes
- **SEO Optimized**: Yes

## 📞 Support
For deployment issues, contact the development team.
