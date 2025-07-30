# Maxius Landing Page

A modern, responsive landing page built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Inspired by Maxius.io design principles.

## 🚀 Features

- **Modern Design**: Clean, minimal, and startup-friendly design
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for professional interactions
- **TypeScript**: Full type safety and better development experience
- **Component-Based**: Modular architecture with reusable components
- **Performance Optimized**: Fast loading with Next.js optimizations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Features showcase
│   │   ├── About.tsx        # About company
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer
│   └── Navigation.tsx       # Navigation component
└── lib/
    └── utils.ts             # Utility functions
```

## 🎯 Sections

1. **Hero Section**: Eye-catching introduction with animated elements
2. **Features**: Showcase of platform capabilities with interactive cards
3. **About**: Company information, mission, and values
4. **Contact**: Contact form with validation and contact information
5. **Footer**: Comprehensive footer with links and social media

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd landing
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors

The color scheme can be customized in `src/app/globals.css` by modifying the CSS custom properties.

### Content

Update the content in each section component to match your business needs.

### Styling

Modify Tailwind classes or add custom CSS in `globals.css`.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Features

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Components load as needed
- **Minimal Bundle**: Optimized imports and tree shaking

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project and deploy the `out` directory:

```bash
npm run build
npm run export
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, email hello@maxius.io or create an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
