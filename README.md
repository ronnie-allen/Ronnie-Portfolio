# 🚀 Ronnie A Jeffrey's Portfolio

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.10.5-0055FF.svg)](https://www.framer.com/motion/)

A modern, fully-responsive portfolio website showcasing my skills as a Full-Stack Developer & AI Enthusiast. Built with cutting-edge technologies and featuring stunning animations and interactive elements.

![Portfolio Preview](./public/RA-Profile.png)

## ✨ Features

### 🏠 Core Sections
- **Hero**: Eye-catching introduction with animated typewriter effect
- **About**: Personal journey and passion for AI & development
- **Experience**: Interactive timeline showcasing education, internships, and training
- **Technologies**: Unique skill showcase with categorized competencies
- **Projects**: Featured projects (expandable section for future additions)
- **Blog**: Integration with Medium articles (dynamic content display)
- **Statistics**: Real-time GitHub stats and social media metrics
- **Contact**: Functional contact form with EmailJS integration

### 🎨 Design Features
- 🌙 **Dark Theme**: Consistent dark aesthetic with gradient accents
- 🎭 **Smooth Animations**: Powered by Framer Motion for engaging UX
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Performance Optimized**: Fast loading with lazy loading and optimized assets
- 🎯 **Accessibility**: Screen reader friendly with proper ARIA labels

### 🔧 Technical Features
- 📊 **Live GitHub Integration**: Displays real-time repository stats
- 📧 **Functional Contact Form**: EmailJS-powered contact with validation
- 📝 **Form Validation**: Client-side validation with error handling
- 🎨 **Progressive Web App Ready**: Service worker ready for PWA deployment
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support

## 🛠️ Tech Stack

### Frontend
- **React 19.0.0** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 6.2.0** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework

### Animations & Interactions
- **Framer Motion** - Production-ready motion library
- **React Typewriter** - Animated text effects
- **Lucide React** - Beautiful & consistent icons

### Forms & Validation
- **React Hook Form** - Performant forms with easy validation
- **EmailJS** - Contact form email delivery

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ronnie-allen/Ronnie-Portfolio.git
   cd ronnie-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (optional for contact form)**
   - Create a free account at [EmailJS](https://www.emailjs.com/)
   - Replace the placeholder keys in `src/sections/Contact.tsx`:


4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173`

## 📜 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Build & Deployment
```bash
npm run build        # Creates optimized build in /dist
npm run preview      # Test production build locally
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
├── sections/           # Main page sections
│   ├── About.tsx       # About section
│   ├── Blog.tsx        # Blog integration
│   ├── Contact.tsx     # Contact form & info
│   ├── Experience.tsx  # Timeline component
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Landing section
│   ├── Navbar.tsx      # Navigation component
│   ├── Projects.tsx    # Projects showcase
│   ├── StatsAndSocial.tsx # GitHub stats & social media
│   └── TechCarousel.tsx    # Technologies grid
├── assets/            # Images and media
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## 🎨 Customization

### Colors
The portfolio uses a dark theme with red and cyan accents:
- Primary: Red (#EF4444)
- Secondary: Cyan (#06B6D4)
- Background: Gradient from gray-900 to black

### Adding New Sections
1. Create a new component in `src/sections/`
2. Import and add to `App.tsx`
3. Update `src/sections/Navbar.tsx` for navigation links

### Modifying Content
- Personal info: Update components in `src/sections/`
- Social links: Modify `src/sections/StatsAndSocial.tsx`
- Projects: Edit `src/sections/Projects.tsx`
- Resume: Replace `public/RonnieAJeffrey_CV.pdf`

## 🚀 Deployment

### Using Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy with automatic builds on push
3. Custom domain support included

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting service
```

### Environment Variables
Create `.env.local` for sensitive data:
```bash
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Ronnie A Jeffrey**
- 📧 Email: ronnieallen2005@gmail.com
- 🔗 LinkedIn: [ronnie-a-jeffrey](https://www.linkedin.com/in/ronnie-a-jeffrey-0901b22bb/)
- 🐙 GitHub: [ronnie-allen](https://github.com/ronnie-allen)
- 🌐 Portfolio: [ronnie-allen.github.io](https://ronnie-allen.github.io/Ronnie-Portfolio)

---

⭐ **Star this repo if you found it helpful!**
