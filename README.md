## Getting Started

First, let's create the project:

```bash
npx create-next-app@latest name-of-app
```
#### Then Follow the prompts:

**TypeScript:** Yes or No (your choice)

**ESLint:** Yes

**Tailwind CSS:** Optional (we can add it later if needed)

**src directory:** Yes

**App Router:** Yes

#### Run the application
```bash
cd myscan-app-website
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

#### Structure of the project 

```plaintext
src/
├── app/
│   ├── layout.tsx            # Global layout with Navbar
│   ├── page.tsx              # Home page with Hero + Features
│   ├── page.module.css       # Layout-level styles
│   └── components/
│       ├── HeroSection/
│       │   ├── HeroSection.tsx
│       │   ├── HeroSection.module.css
│       │   └── index.ts
│       ├── FeatureSection/
│       │   ├── FeatureSection.tsx
│       │   ├── FeatureSection.module.css
│       │   └── index.ts
│       ├── FeatureImageBlock/
│       │   ├── FeatureImageBlock.tsx
│       │   ├── FeatureImageBlock.module.css
│       │   └── index.ts
│       ├── FeatureContentBlock/
│       │   ├── FeatureContentBlock.tsx
│       │   ├── FeatureContentBlock.module.css
│       │   └── index.ts
│       └── Navbar/
│           ├── Navbar.tsx
│           ├── Navbar.module.css
│           └── index.ts
├── globals.css               # Global styles and resets

```

#### Using i8 

```bash
npm install next-i18next
```
