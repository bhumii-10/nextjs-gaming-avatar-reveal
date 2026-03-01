'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import MissionsSection from '../../components/MissionsSection';

export default function MissionsPage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-cyan-400 font-light uppercase tracking-widest hover:text-cyan-300 transition">
            AEGIS-7
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="/" className="text-gray-400 hover:text-cyan-400 transition">Home</Link>
            <Link href="/specs" className="text-gray-400 hover:text-cyan-400 transition">Specifications</Link>
            <Link href="/capabilities" className="text-gray-400 hover:text-cyan-400 transition">Capabilities</Link>
            <Link href="/missions" className="text-cyan-400">Missions</Link>
            <Link href="/gallery" className="text-gray-400 hover:text-cyan-400 transition">Gallery</Link>
          </div>
        </div>
      </nav>

      <MissionsSection />
    </div>
  );
}
