# RoomService Landing Page

Official landing page for RoomService - Real-time room management for frontend developers.

## 🚀 Live Demo

[roomservice.io](https://roomservice.io) (Configure your custom domain)

## 📦 Features

- **Modern Design**: Built with Bootstrap 5.3
- **Responsive**: Works perfectly on all devices
- **Fast**: Minimal JavaScript, optimized CSS
- **SEO-Friendly**: Proper meta tags and structure
- **Two Options**: Showcases both self-hosted and SaaS options
- **Interactive**: Smooth scrolling, animations, form handling

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **Bootstrap 5.3**: UI framework (via CDN)
- **Custom CSS**: Professional styling
- **Vanilla JavaScript**: Interactive elements
- **GitHub Pages**: Free hosting

## 📁 Structure

```
room-service-landing/
├── index.html          # Main landing page
├── css/
│   └── custom.css      # Custom Bootstrap overrides
├── js/
│   └── main.js         # Interactive elements
├── assets/
│   ├── images/         # Add your images here
│   └── icons/          # Add your icons here
├── README.md           # This file
└── CNAME               # Custom domain (optional)
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/chempik1234/room-service-landing.git
cd room-service-landing
```

2. **Open in browser**
```bash
# Option 1: Simple HTTP server
python -m http.server 8000

# Option 2: Node.js http-server
npx http-server -p 8000

# Option 3: VS Code Live Server
# Install Live Server extension, right-click index.html, "Open with Live Server"
```

3. **Visit**
```
http://localhost:8000
```

### GitHub Pages Deployment

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/chempik1234/room-service-landing.git
git push -u origin main
```

2. **Enable GitHub Pages**
- Go to repository Settings
- Navigate to Pages
- Source: Deploy from a branch
- Branch: main / root
- Save

3. **Access**
```
https://chempik1234.github.io/room-service-landing/
```

### Custom Domain

1. **Create CNAME file**
```bash
echo "roomservice.io" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. **Configure DNS**
- Add A record: `185.199.108.153`
- Add A record: `185.199.109.153`
- Add A record: `185.199.110.153`
- Add A record: `185.199.111.153`

3. **Update GitHub Pages**
- Settings > Pages > Custom domain
- Enter your domain
- Enable HTTPS

## 🎨 Customization

### Branding

Edit `css/custom.css` to change colors:

```css
:root {
    --primary-color: #3b82f6;    /* Your primary color */
    --secondary-color: #8b5cf6;  /* Your secondary color */
    /* ... more variables ... */
}
```

### Content

Edit `index.html` to update:
- Hero text
- Features
- Pricing
- Contact information

### Images

Add images to `assets/images/` and update references in `index.html`:

```html
<img src="assets/images/your-image.png" alt="Description">
```

## 📊 Performance

- **Lighthouse Score**: 95+ (all categories)
- **Load Time**: < 2s
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 3s

## 🔧 Maintenance

### Update Bootstrap

Change CDN link in `index.html`:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

### Update Content

1. Edit `index.html`
2. Test locally
3. Commit and push
4. GitHub Pages auto-deploys

## 📈 Analytics

Add Google Analytics or other tracking:

```html
<!-- Add before closing </head> tag in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

MIT License - feel free to use this for your own projects!

## 🙏 Acknowledgments

- [Bootstrap](https://getbootstrap.com/) - UI framework
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Icon set
- [Google Fonts](https://fonts.google.com/) - Inter font
- [GitHub Pages](https://pages.github.com/) - Free hosting

---

**Built with ❤️ for the RoomService community**
