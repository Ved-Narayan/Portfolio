# Ved Narayan Munipalli - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Frontend Developer and Software Engineer. Built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations, dark/light mode toggle, and an elegant design inspired by contemporary web aesthetics.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with sophisticated animations
- **Responsive Layout**: Optimized for all device sizes and screen resolutions
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: GPU-accelerated animations with proper performance optimization
- **Interactive Elements**: Hover effects, floating particles, and dynamic cursor
- **Accessibility**: Keyboard navigation and screen reader support
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── ui/                  # shadcn/ui components
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── resume.pdf           # Resume file
├── tailwind.config.ts       # Tailwind configuration
├── next.config.mjs          # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Design Features

### Navigation
- **Side Navigation**: Fixed sidebar with smooth hover effects
- **Smooth Scrolling**: Animated transitions between sections
- **Active States**: Visual indicators for current section

### Sections
1. **Intro**: Hero section with animated typography
2. **Work Experience**: Professional experience with timeline
3. **Projects**: Featured projects with interactive cards
4. **About**: Personal information and technical skills
5. **Contact**: Contact information with hover effects

### Interactive Elements
- **Custom Cursor**: Follows mouse movement with smooth transitions
- **Floating Particles**: Animated background elements
- **Skill Grid**: Interactive skill showcase with hover effects
- **Theme Toggle**: Smooth dark/light mode switching

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ved-Narayan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Performance Optimizations

- **GPU Acceleration**: Using CSS transforms and will-change properties
- **Optimized Animations**: Reduced animation elements for better performance
- **Event Throttling**: Proper throttling for mouse and scroll events
- **Memory Management**: Cleanup of animation frames and event listeners
- **Hydration Safe**: Eliminated random values to prevent hydration mismatches

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full-featured experience with all animations
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Optimized navigation and simplified animations

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

### Content
Update personal information in `app/page.tsx`:
- Name and title
- Work experience
- Projects
- Skills
- Contact information

### Animations
Animation timing and effects can be modified in the CSS section of `app/page.tsx`.

## 📄 Resume

The resume is available as a downloadable PDF. Replace `public/resume.pdf` with your own resume file.

## 🔗 Links

- **GitHub**: [https://github.com/Ved-Narayan](https://github.com/Ved-Narayan)
- **LinkedIn**: [https://www.linkedin.com/in/ved-narayan/](https://www.linkedin.com/in/ved-narayan/)
- **Email**: vednarayan1980@gmail.com

## 📞 Contact

Ved Narayan Munipalli - vednarayan1980@gmail.com

Project Link: [https://github.com/Ved-Narayan/portfolio](https://github.com/Ved-Narayan/portfolio)

---

⭐ If you found this project helpful, please give it a star!
```

