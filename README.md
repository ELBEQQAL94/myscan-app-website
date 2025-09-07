# MyScan - Product Scanner App Website

A modern, responsive website for MyScan, a mobile app that helps users scan products and understand their health impact through AI-powered ingredient analysis.

## Quick Start

### Prerequisites

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:ELBEQQAL94/myscan-app-website.git
   cd myscan-app-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
myscan-app-website/
├── public/                     # Static assets
│   ├── images/                # App screenshots and photos
│   ├── badges/                # App store badges
│   └── logo*.svg              # Logo variations
├── src/
│   ├── app/                   # Next.js app router pages
│   │   ├── page.tsx           # Home page
│   │   ├── contact/           # Contact page
│   │   ├── features/          # Features page
│   │   ├── how-it-works/      # How it works page
│   │   ├── pricing/           # Pricing page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   └── components/            # React components
│       ├── Hero/              # Hero section
│       ├── Features/          # Features components
│       ├── HowItWorks/        # How it works components
│       ├── Premium/           # Pricing components
│       ├── Navbar/            # Navigation
│       └── Footer/            # Footer
├── package.json               # Dependencies and scripts
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.11
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Pages Overview

### Home Page (`/`)
- Hero section with app download links
- Features overview
- How it works preview
- Call-to-action footer

### Features Page (`/features`)
- Detailed feature descriptions
- Interactive feature cards
- App screenshots

### How It Works Page (`/how-it-works`)
- 5-step process explanation
- Interactive step indicators
- App mockups for each step

### Pricing Page (`/pricing`)
- Subscription plans
- Feature comparisons
- Why choose MyScan Pro section

### Contact Page (`/contact`)
- Contact form
- Professional layout
- Two-column design

## Key Features

- **Responsive Design**: Works on all devices
- **Modern UI**: Clean, professional design
- **Fast Loading**: Optimized images and code
- **SEO Ready**: Proper meta tags and structure
- **Accessibility**: WCAG compliant

## Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/Navbar/Navbar.tsx`

### Modifying Styles
- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind classes
- Custom CSS: Add to `globals.css`

### Updating Content
- Text content: Edit component files directly
- Images: Replace files in `public/images/`
- App store links: Update in Hero and Footer components

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically
