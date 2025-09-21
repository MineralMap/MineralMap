# 🏛️ Mineral Map

> **Interactive Museum Web Application for Calvin University**
>
> **By: Sam Visser, Alim Darmenov, and Peter Brink**

A modern, professional web application for exploring the Calvin University Mineral Museum's collection. Built with Astro, React, TypeScript, and Tailwind CSS with a custom DaisyUI theme.

## Features

- **Professional UI/UX** - Custom "museum" theme with brand-consistent design
- **Responsive Design** - Optimized for all devices and screen sizes
- **Interactive Search** - Filter and search through mineral collections
- **Guided Tours** - Interactive timeline-based museum tours
- **Accessibility** - WCAG compliant with full keyboard navigation
- **Theme System** - Easy theme switching with seamless branding updates
- **Developer Experience** - ESLint, Prettier, TypeScript, and Git hooks

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd MineralMap

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the application.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.astro # Main navigation component
│   ├── Footer.astro     # Site footer
│   ├── Hero.astro       # Hero section component
│   └── MineralCard.astro # Mineral display card
├── layouts/             # Page layouts
│   └── BaseLayout.astro # Main layout template
├── pages/               # Route pages
│   ├── index.astro      # Homepage
│   ├── minerals.astro   # Mineral collection
│   ├── guided-tour.astro # Interactive tour
│   ├── about.astro      # About page
│   └── help.astro       # Help & FAQ
└── styles/              # Global styles
    └── global.css       # Tailwind + custom styles
```

## Design System

### Brand Colors

- **Primary**: Maroon (`#8A142B`) - Navigation, headers, buttons
- **Secondary**: Gold (`#EFCD02`) - Accents, hover states
- **Neutral**: White (`#FFFFFF`) - Backgrounds, cards
- **Text**: Dark Gray (`#2E2E2E`) - Body text
- **Background**: Light Gray (`#F5F5F5`) - Secondary backgrounds

### Typography

- **Headings**: Montserrat (Maroon)
- **Body**: Roboto (Dark Gray)

### Theme Configuration

The custom "museum" theme is configured in `tailwind.config.mjs` and can be easily updated when final branding is provided.

## Development

### Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run format          # Format with Prettier
npm run format:check    # Check formatting
npm run check           # Type check with TypeScript

# Git Hooks
npm run prepare         # Setup Husky git hooks
```

### Code Standards

- **ESLint** - Code linting with Astro and TypeScript rules
- **Prettier** - Code formatting with Astro plugin
- **TypeScript** - Type safety and better developer experience
- **Husky** - Git hooks for pre-commit linting and formatting
- **Lint-staged** - Run linters on staged files only

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Use the `BaseLayout` for consistent structure
3. Import and use existing components
4. Update navigation in `src/components/Navigation.astro`

### Customizing Themes

To update the color scheme when final branding is available:

1. Update colors in `tailwind.config.mjs` under the `museum` theme
2. Modify CSS custom properties in `src/styles/global.css`
3. The entire application will automatically use the new colors

## Architecture

### Tech Stack

- **Framework**: Astro 4.x
- **UI Library**: React 18
- **Styling**: Tailwind CSS + DaisyUI
- **Language**: TypeScript
- **Build Tool**: Vite
- **Package Manager**: npm

### Key Dependencies

- `@astrojs/react` - React integration
- `@astrojs/tailwind` - Tailwind CSS integration
- `daisyui` - UI component library
- `lucide-react` - Icon library
- `clsx` & `tailwind-merge` - Utility libraries

## Content Management

### Adding Minerals

Update the minerals array in `src/pages/minerals.astro` with:

```javascript
{
  name: 'Mineral Name',
  info: 'Description...',
  category: 'Mineral Category',
  image: '/path/to/image.jpg' // optional
}
```

### Adding Videos

Place video files in `public/videos/` and reference them in the relevant pages.

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Calvin University Mineral Museum
- DaisyUI for the component library
- Astro team for the framework
- All contributors and maintainers
