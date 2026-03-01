# 🎮 AEGIS-7 Tactical Avatar – Scroll-Driven Landing Experience

## 🎥 Preview

> (Add your preview.gif inside the `public` folder and uncomment the line below)

<!-- ![Avatar Preview](public/preview.gif) -->

A scroll-linked tactical avatar reveal built with **Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and the HTML5 Canvas API**.

This project explores high-performance frame-based animation, scrollytelling techniques, and modern UI motion systems in a gaming-style interface.

> Developed as a frontend learning project focused on animation systems, rendering performance, and interaction design.

---

## 🚀 Overview

The landing page presents a cinematic, scroll-controlled avatar sequence composed of **189 preloaded frames**, rendered via Canvas and synchronized to scroll progress using Framer Motion.

The experience combines:

- Scroll-driven frame interpolation
- Canvas rendering optimizations
- Narrative section transitions
- Responsive scaling logic
- Tactical UI styling with cyan accent highlights

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Rendering:** HTML5 Canvas API
- **Package Manager:** npm

---

## ✨ Core Features

- Scroll-mapped 189-frame avatar animation
- Smooth spring-interpolated transitions
- Frame preloading with progress tracking
- Scroll-synchronized narrative beats
- Responsive canvas scaling (contain fit logic)
- Memory-safe cleanup of listeners and animation hooks
- Mobile and desktop compatible

---

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── TacticalCanvas.tsx
├── public/
│   └── frames/
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ▶️ Running Locally

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Add animation frames

Place frame images inside:

```
public/frames/
```

Format:

```
ezgif-frame-001.jpg
ezgif-frame-002.jpg
...
ezgif-frame-189.jpg
```

Zero-padded numbering is required.

### 3️⃣ Start development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🎬 Scroll Animation System

The canvas engine:

- Maps `scrollYProgress` (0 → 1) to frame index (0 → 188)
- Uses Framer Motion’s `useSpring` for smooth interpolation
- Prevents frame-skipping and jitter
- Automatically resizes canvas on viewport changes
- Cleans up scroll listeners on component unmount

---

## 🎨 Visual Direction

- Background: `#050505`
- Primary Accent: Cyan (`#06b6d4`)
- Minimal uppercase typography
- Tactical data-readout aesthetic
- Custom scrollbar styling

---

## 📱 Responsive Behavior

- Maintains avatar aspect ratio
- Uses contain scaling logic
- Adapts to viewport width and height
- Ensures full avatar visibility across devices

---

## 🧠 Key Learnings

- Scroll-linked animation architecture
- Frame preloading strategies
- Canvas rendering performance considerations
- Motion smoothing with spring physics
- React cleanup patterns for performance safety
- Structuring reusable animation components

---

## 📚 Reference

This project was created by referring to an online tutorial and expanding upon it to better understand scroll-based animation systems.

---

## ⚠️ Disclaimer

This project is created strictly for **educational and portfolio purposes**.

It is not intended for commercial distribution.

---

## 👤 Author

**Bhumi Chotaliya**  
GitHub: https://github.com/bhumii-10

---

⭐ If you found this project interesting, feel free to explore the code.
