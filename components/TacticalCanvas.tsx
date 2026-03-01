'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// sections for post-animation content

interface ScrollytellBeat {
  startPercent: number;
  endPercent: number;
  title: string;
  subtitle: string;
}

const SCROLLYTELL_BEATS: ScrollytellBeat[] = [
  {
    startPercent: 75,
    endPercent: 95,
    title: 'INITIATE PROTOCOL',
    subtitle: 'Secure the asset for deployment',
  },
];

const TOTAL_FRAMES = 189;
const FRAME_BASE_PATH = '/frames/';

export default function TacticalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedFrames, setLoadedFrames] = useState<(HTMLImageElement | null)[]>([]);
  const [currentBeat, setCurrentBeat] = useState<ScrollytellBeat | null>(null);
  const [canvasVisible, setCanvasVisible] = useState(true);

  const { scrollYProgress } = useScroll();
  const frameIndex = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]),
    {
      stiffness: 100,
      damping: 30,
    }
  );

  // Incremental frame loader with retries + concurrency
  useEffect(() => {
    const totalFrames = TOTAL_FRAMES;
    const initialLoad = Math.min(60, totalFrames);
    const concurrency = 12;
    const maxRetries = 3;

    // initialize frames array with nulls
    const frames: (HTMLImageElement | null)[] = new Array(totalFrames).fill(null);
    setLoadedFrames(frames);

    let loadedCount = 0;
    let failedCount = 0;

    console.log(`🔄 Starting incremental load up to ${totalFrames} frames from: ${FRAME_BASE_PATH}`);

    const loadFrameAt = (i: number, attempt = 0): Promise<void> => {
      return new Promise((resolve) => {
        const paddedNum = String(i + 1).padStart(3, '0');
        const framePath = `${FRAME_BASE_PATH}ezgif-frame-${paddedNum}.jpg`;
        const img = new Image();
        img.crossOrigin = 'anonymous';

        let timedOut = false;
        const timer = window.setTimeout(() => {
          timedOut = true;
          img.src = '';
          if (attempt < maxRetries) {
            console.warn(`⏱️ Timeout loading frame ${i + 1}, retry ${attempt + 1}`);
            resolve(loadFrameAt(i, attempt + 1));
          } else {
            failedCount++;
            // setLoadProgress(Math.min(100, ((loadedCount + failedCount) / totalFrames) * 100));
            console.error(`✗ Failed to load frame ${i + 1} after ${maxRetries} attempts`);
            resolve();
          }
        }, 10000);

        img.onload = () => {
          if (timedOut) return resolve();
          window.clearTimeout(timer);
          frames[i] = img;
          loadedCount++;
          // update state array reference to trigger re-render
          setLoadedFrames((prev) => {
            const copy = prev.slice();
            copy[i] = img;
            return copy;
          });
          // setLoadProgress(Math.min(100, ((loadedCount + failedCount) / totalFrames) * 100));
          resolve();
        };

        img.onerror = () => {
          if (timedOut) return resolve();
          window.clearTimeout(timer);
          if (attempt < maxRetries) {
            console.warn(`⚠️ Error loading frame ${i + 1}, retry ${attempt + 1}`);
            resolve(loadFrameAt(i, attempt + 1));
          } else {
            failedCount++;
            // setLoadProgress(Math.min(100, ((loadedCount + failedCount) / totalFrames) * 100));
            console.error(`✗ Failed to load frame ${i + 1} after ${maxRetries} attempts`);
            resolve();
          }
        };

        // start loading
        img.src = framePath;
      });
    };

    // load initial chunk
    const startInitial = async () => {
      const promises: Promise<void>[] = [];
      for (let i = 0; i < initialLoad; i++) promises.push(loadFrameAt(i));
      await Promise.all(promises);
    };

    // background queue loader
    const startBackground = async () => {
      const queue: number[] = [];
      for (let i = initialLoad; i < totalFrames; i++) queue.push(i);

      const worker = async () => {
        while (queue.length > 0) {
          const idx = queue.shift();
          if (idx === undefined) break;
          await loadFrameAt(idx);
        }
      };

      const workers: Promise<void>[] = [];
      for (let w = 0; w < concurrency; w++) workers.push(worker());
      await Promise.all(workers);
      console.log(`✅ Background loading complete: ${loadedCount} loaded, ${failedCount} failed`);
      // loading UI removed, nothing else to do
    };

    startInitial();
    startBackground();

    return () => {
      // noop cleanup
    };
  }, []);

  // Handle frame rendering on scroll
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || loadedFrames.length === 0) return;

    const unsubscribe = frameIndex.on('change', (value) => {
      const frameIdx = Math.round(value);
      const clampedIdx = Math.max(0, Math.min(frameIdx, loadedFrames.length - 1));
      
      if (loadedFrames[clampedIdx]) {
        renderFrame(canvas, loadedFrames, clampedIdx);
        if (frameIdx % 30 === 0) {
          console.log(`📍 Frame: ${clampedIdx + 1}/${loadedFrames.length}`);
        }
      }

      // Update current beat based on scroll progress
      const progress = scrollYProgress.get() * 100;
      const beat = SCROLLYTELL_BEATS.find((b) => progress >= b.startPercent && progress <= b.endPercent);
      setCurrentBeat(beat || null);

      // Hide canvas when the animation has reached the final frame
      // or when scroll progress is at the very end. This ensures the
      // About/footer content underneath becomes visible as a normal page.
      const lastFrameReached = clampedIdx >= (TOTAL_FRAMES - 1);
      if (lastFrameReached || progress >= 99.5) {
        setCanvasVisible(false);
      } else {
        setCanvasVisible(true);
      }
    });

    return () => unsubscribe();
  }, [frameIndex, loadedFrames, scrollYProgress]);

  // Handle canvas resizing
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && loadedFrames.length > 0) {
        const firstLoaded = loadedFrames.find((f) => f !== null) as HTMLImageElement | undefined;
        if (firstLoaded) {
          resizeCanvas(canvasRef.current, firstLoaded);
          renderFrame(canvasRef.current, loadedFrames, Math.round(frameIndex.get()));
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [loadedFrames, frameIndex]);

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <span className="text-cyan-400 font-light uppercase tracking-widest">AEGIS-7</span>
          <div className="flex gap-8 text-sm">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition">Home</Link>
            <Link href="/specs" className="text-gray-400 hover:text-cyan-400 transition">Specifications</Link>
            <Link href="/capabilities" className="text-gray-400 hover:text-cyan-400 transition">Capabilities</Link>
            <Link href="/missions" className="text-gray-400 hover:text-cyan-400 transition">Missions</Link>
            <Link href="/gallery" className="text-gray-400 hover:text-cyan-400 transition">Gallery</Link>
          </div>
        </div>
      </nav>


      {/* Main Scroll Container */}
      <motion.div ref={containerRef} className="relative bg-[#050505]">
        {/* Scroll Spacer - height scaled to frames */}
        <div style={{ height: `${TOTAL_FRAMES * 4}vh` }}>
          {/* Sticky Canvas Container - MUST stay on top with high z-index */}
          <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#050505] z-20 transition-opacity duration-500 ${
            canvasVisible ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none'
          }`}> 
            <canvas
              ref={canvasRef}
              className="w-full h-full" // expand to full viewport; scaling handled via resizeCanvas
              style={{
                imageRendering: 'pixelated', // use pixelated for crisp HD visuals
              }}
            />
          </div>

          {/* Text Overlays */}
          {SCROLLYTELL_BEATS.map((beat, index) => (
            <motion.div
              key={index}
              className="absolute left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none z-10"
              style={{
                top: `${(beat.startPercent / 100) * 400}vh`,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-lg"
              >
                <h2 className="text-6xl font-light tracking-tighter uppercase text-white glow-cyan-strong mb-4">
                  {beat.title}
                </h2>
                <p className="text-lg tracking-wide text-gray-400">
                  {beat.subtitle}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* About section shown after animation */}
        <div className="w-full bg-[#050505] text-white py-20 flex items-center justify-center">
          <div className="text-center max-w-xl">
            <h3 className="text-2xl text-cyan-400 font-light mb-4">About AEGIS-7</h3>
            <p className="text-gray-400">
              AEGIS-7 Tactical Avatar represents the pinnacle of adaptive combat AI. Designed
              to integrate seamlessly with human operators and autonomous systems, it provides
              real-time strategic analysis, environmental awareness, and responsive decision‑making.
              This platform was engineered for mission-critical environments where precision,
              reliability, and situational insight are non‑negotiable.
            </p>
          </div>
        </div>

        {/* Footer for landing page */}
        <footer className="w-full bg-[#050505] text-gray-500 text-center py-8">
          <p>&copy; {new Date().getFullYear()} AEGIS-7 Tactical Avatar. All rights reserved.</p>
        </footer>
      </motion.div>

      {/* Current Beat Indicator (Fixed) */}

      {/* Current Beat Indicator (Fixed) */}
      {currentBeat && (
        <motion.div
          className="fixed bottom-8 left-8 z-40 hidden md:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <div className="text-xs uppercase tracking-widest text-cyan-500 glow-cyan">
            {currentBeat.title}
          </div>
          <div className="text-xs text-gray-600 mt-1">
            {SCROLLYTELL_BEATS.indexOf(currentBeat) + 1} / {SCROLLYTELL_BEATS.length}
          </div>
        </motion.div>
      )}

      {/* Progress Indicator (Fixed) */}
      <motion.div
        className="fixed top-8 right-8 z-40 text-right"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [0, 1]) }}
      >
        <div className="text-xs uppercase tracking-widest text-gray-600">
          Scroll Progress
        </div>
        <motion.div
          className="text-sm text-cyan-500 glow-cyan mt-1"
          style={{
            opacity: useTransform(scrollYProgress, [0, 1], [0.3, 1]),
          }}
        >
          {useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`)}
        </motion.div>
      </motion.div>
    </>
  );
}

// Helper function to resize canvas to fit container - HD optimized
function resizeCanvas(canvas: HTMLCanvasElement, refImage: HTMLImageElement) {
  const windowAspect = window.innerWidth / window.innerHeight;
  const imageAspect = refImage.width / refImage.height;
  const dpr = window.devicePixelRatio || 1; // Device pixel ratio for HD displays

  let width, height;

  if (windowAspect > imageAspect) {
    // Window is wider - fit height
    height = Math.min(window.innerHeight * 0.9, refImage.height);
    width = (height * refImage.width) / refImage.height;
  } else {
    // Window is taller - fit width
    width = Math.min(window.innerWidth * 0.9, refImage.width);
    height = (width * refImage.height) / refImage.width;
  }

  // Apply device pixel ratio for HD rendering
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  
  // Scale canvas back down for display
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
}

// Helper function to render frame on canvas - HD optimized
function renderFrame(
  canvas: HTMLCanvasElement,
  frames: (HTMLImageElement | null)[],
  frameIdx: number
) {
  const total = frames.length;
  if (frameIdx < 0) frameIdx = 0;
  if (frameIdx >= total) frameIdx = total - 1;

  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) {
    console.error('❌ Failed to get 2D context');
    return;
  }

  // If the desired frame is not loaded yet, find nearest available
  let frame = frames[frameIdx];
  if (!frame) {
    let offset = 1;
    while (offset < total) {
      const before = frameIdx - offset;
      const after = frameIdx + offset;
      if (before >= 0 && frames[before]) {
        frame = frames[before];
        break;
      }
      if (after < total && frames[after]) {
        frame = frames[after];
        break;
      }
      offset++;
    }
  }

  if (!frame) {
    // nothing loaded yet
    // clear canvas to avoid showing stale data
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  // verify dimensions
  if (!frame.width || !frame.height) {
    console.warn(`❌ Frame has no dimensions: ${frame}`);
    return;
  }

  try {
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    ctx.drawImage(frame, 0, 0, w, h);
  } catch (e) {
    console.error(`❌ Error rendering frame ${frameIdx}:`, e);
  }
}
