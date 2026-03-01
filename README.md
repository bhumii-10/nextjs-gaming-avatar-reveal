# AEGIS-7 Tactical Avatar - Premium Scrollytelling Landing Page

A world-class, Awwwards-level scrollytelling experience built with Next.js 14, Framer Motion, and Canvas API. Experience the Aegis-7 Avatar through a meticulously crafted scroll-linked 189-frame animation sequence.

## 🎯 Features

- **Scroll-Linked Canvas Animation**: Smooth 189-frame sequence driven by scroll progress with Framer Motion spring physics
- **Professional Preloading**: Neural Link establishment screen with real-time progress tracking
- **Scrollytelling Beats**: Four narrative chapters synchronized with scroll position
- **Luxury Typography**: Minimalist design with tight tracking, uppercase headers
- **Cyan Accents**: Data-readout styling with glowing text and custom scrollbar
- **Responsive Design**: Full avatar visible on all screen sizes with intelligent scaling
- **Performance Optimized**: Efficient canvas rendering, proper cleanup, and memory management
- **Mobile Friendly**: Touch-optimized with intelligent containment logic

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3+
- **Animation**: Framer Motion 10+
- **Rendering**: HTML5 Canvas API
- **Language**: TypeScript
- **Type Safety**: Full TypeScript support

## 📦 Installation & Setup

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Organize Frame Assets

Create a `/public/frames/` directory and place all avatar frames there:

```
public/
└── frames/
    ├── ezgif-frame-001.jpg
    ├── ezgif-frame-002.jpg
    ├── ...
    └── ezgif-frame-189.jpg
```

The frames must be named with zero-padded numbers: `ezgif-frame-XXX.jpg` (001-189).

**Quick Setup** (Windows):
```batch
mkdir public\frames
xcopy "path\to\frames\*.jpg" public\frames\
```

**Quick Setup** (macOS/Linux):
```bash
mkdir -p public/frames
cp path/to/frames/*.jpg public/frames/
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### 4. Build for Production

```bash
npm run build
npm start
```

## 🎨 Visual Direction

- **Background**: Hex `#050505` - Pure void
- **Primary Accent**: Cyan-500 (`#06b6d4`) - Data readout and interactive elements
- **Typography**: SF Pro Display / Inter, uppercase, negative letter-spacing
- **Custom Scrollbar**: Dark with cyan hover state and glow effect

## 📜 Scrollytelling Beats

The page features four synchronized narrative beats:

### Beat A: 0–20%
- **Title**: AEGIS-7
- **Subtitle**: Next-Generation Tactical Interface
- **Visual**: Clean character reveal

### Beat B: 25–45%
- **Title**: NEURAL SKELETON
- **Subtitle**: Revealing the carbon-fiber skeletal struts and integrated circuitry
- **Visual**: Internal architecture illumination

### Beat C: 50–70%
- **Title**: ENERGY FLUX
- **Subtitle**: Visualizing the arrested mid-air fluid dynamics of the nano-coolant system
- **Visual**: Liquid core and manifold glow

### Beat D: 75–95%
- **Title**: INITIATE PROTOCOL
- **Subtitle**: Secure the asset for deployment
- **Visual**: Final formation with glowing holographic shield

## 🚀 Performance Optimizations

- **Spring Physics**: Framer Motion's `useSpring` (stiffness: 100, damping: 30) eliminates visible jitter
- **Efficient Preloading**: All 189 frames preload before interaction with progress tracking
- **Canvas Optimization**: 
  - Proper context cleanup
  - Efficient image rendering with `crisp-edges`
  - Automatic canvas resizing on window resize
- **Memory Management**:
  - Scroll listeners properly unsubscribed on unmount
  - Image references cleaned up
  - No memory leaks from canvas retaining graphics

## 📱 Responsive Design

The canvas uses "contain" fit logic to ensure:
- Full avatar visible on all screen sizes
- Aspect ratio maintained
- Intelligent scaling based on viewport dimensions
- 90% of viewport utilized (10% padding)

## 🎮 Controls

- **Scroll**: Advance through the frame sequence and narrative beats
- **Hover**: Custom scrollbar highlights with cyan glow
- **Responsive**: Works on desktop, tablet, and mobile

## 🔧 Project Structure

```
/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles & custom scrollbar
├── components/
│   └── TacticalCanvas.tsx   # Canvas engine & scroll animation
├── public/
│   └── frames/              # Avatar frame sequence (189 JPEGs)
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies & scripts
```

## 🎯 Canvas Engine Details

### Frame Preloading
- Loads all 189 frames sequentially with progress tracking
- Shows "Neural Link Establishing" status message
- Professional progress bar with cyan glow effect
- Validates frame loading and handles errors gracefully

### Scroll Mapping
- Maps `scrollYProgress` (0-1) to frame index (0-188)
- Uses Framer Motion `useSpring` for smooth interpolation
- Eliminates frame-skipping jitter
- Smooth 60fps rendering

### Responsive Rendering
- Canvas automatically scales to fit viewport
- Maintains image aspect ratio
- Intelligently chooses between width/height fitting
- Handles window resize events

## 💡 Customization

### Change Frame Count
Edit `TacticalCanvas.tsx`:
```typescript
const TOTAL_FRAMES = 189; // Change this value
```

### Adjust Spring Physics
Modify the spring config in `TacticalCanvas.tsx`:
```typescript
const frameIndex = useSpring(
  useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]),
  {
    stiffness: 100,  // Higher = snappier
    damping: 30,     // Higher = less bouncy
  }
);
```

### Modify Scrollytelling Beats
Edit the `SCROLLYTELL_BEATS` array in `TacticalCanvas.tsx` to adjust timing and text.

### Custom Colors
Update `tailwind.config.ts` or modify `app/globals.css` for different accent colors.

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Static Export

Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  // ... rest of config
};
```

Then: `npm run build` generates `/out` directory for static hosting.

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Android 90+

## 🐛 Troubleshooting

### Frames Not Loading
- Verify frames are in `/public/frames/`
- Check filename format: `ezgif-frame-XXX.jpg` (zero-padded)
- Check browser console for CORS or 404 errors
- Ensure frames are optimized JPEGs (compress if necessary)

### Jittery Animation
- Check system resources (close heavy apps)
- Adjust spring stiffness/damping in `TacticalCanvas.tsx`
- Verify scroll event handler isn't causing bottlenecks

### Memory Issues
- Reduce frame resolution if needed
- Check DevTools Performance tab for memory leaks
- Verify canvas context is being cleaned up

## 📝 License

© 2026 AEGIS-7 Project. All rights reserved.

## 🤝 Contributing

Contributions welcome! Please follow these guidelines:
- Maintain TypeScript strict mode
- Keep performance optimizations in mind
- Test on multiple devices/browsers
- Document any changes to the canvas engine

---

Built with ❤️ by world-class creative developers.
