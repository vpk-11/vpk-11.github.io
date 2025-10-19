# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Redux, and SCSS. Features vibrant Google-inspired color scheme with seamless dark/light mode transitions.

## 🚀 Features

- **Fully Responsive** - Works perfectly on all screen sizes
- **Dark/Light Mode** - Auto-detects system preference with manual toggle
- **Dynamic Accent Colors** - Each section has its own vibrant Google color with smooth transitions
- **Smooth Scrolling** - Seamless navigation between sections
- **Mobile-Friendly** - Hamburger menu for mobile devices
- **TypeScript** - Type-safe code throughout
- **Modular Architecture** - Easy to update via JSON files
- **Material Design Principles** - Following Google's design guidelines

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. **Create Vite project:**
```bash
npm create vite@latest portfolio -- --template react-ts
cd portfolio
```
2. **React Compiler**
  The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

3. **Install dependencies:**
```bash
npm install
npm install redux react-redux @reduxjs/toolkit
npm install sass
npm install lucide-react
```

4. **Project Structure:**
Create the following folder structure:
```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Experience/
│   ├── Skills/
│   ├── Projects/
│   ├── Education/
│   └── Contact/
├── data/
│   ├── profile.json
│   ├── experiences.json
│   ├── projects.json
│   ├── skills.json
│   └── education.json
├── store/
├── styles/
├── App.tsx
└── main.tsx
```

5. **Add files:**
- Copy the React component code to `src/App.tsx`
- Copy the SCSS code to `src/styles.scss`
- Copy all JSON files to `src/data/` folder

6. **Update your data:**
Edit the JSON files in `src/data/` with your personal information:
- `profile.json` - Name, bio, contact links
- `experiences.json` - Work experience
- `projects.json` - Your projects
- `skills.json` - Technical skills
- `education.json` - Education background

## 🎨 Color Scheme

### Light Mode
- Red: `#EA4335`
- Blue: `#4285F4`
- Yellow: `#FBBC04`
- Green: `#34A853`

### Dark Mode
- Red: `#FF6B6B`
- Blue: `#4D9FFF`
- Yellow: `#FFD93D`
- Green: `#6BCF7F`

## 🎯 Section Colors

- **Hero** - Red
- **Experience** - Blue
- **Skills** - Yellow
- **Projects** - Green
- **Education** - Blue
- **Contact** - Red

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `< 1024px`
- Desktop: `> 1024px`

## 🚀 Development

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📤 Deployment to GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Update `package.json`:**
Add these scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/portfolio"
}
```

3. **Update `vite.config.ts`:**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/' // Your repo name
})
```

4. **Deploy:**
```bash
npm run deploy
```

## 🎨 Customization

### Changing Colors
Edit the color variables in `styles.scss`:
```scss
$red-light: #EA4335;
$blue-light: #4285F4;
// etc...
```

### Adding Sections
1. Create a new component in `src/components/`
2. Add the section to `App.tsx`
3. Create corresponding JSON data file
4. Update navbar items

### Modifying Animations
Edit transition variables in `styles.scss`:
```scss
$transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

## 🔧 Troubleshooting

**Styles not loading?**
- Make sure `styles.scss` is imported in `App.tsx`
- Check that SASS is installed: `npm install sass`

**Icons not showing?**
- Verify lucide-react is installed: `npm install lucide-react`

**Dark mode not working?**
- Check browser compatibility for `prefers-color-scheme`
- Clear browser cache

## 📝 TODO

- [ ] Fix the accent colors for each Section

## 📄 License

MIT License - Feel free to use this for your own portfolio!

## 🙏 Acknowledgments

- Material Design by Google
- Color inspiration from Google's brand colors
- Icons from Lucide React

---

**Built with ❤️**