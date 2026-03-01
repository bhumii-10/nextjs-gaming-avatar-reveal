'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SpecsSection() {
  return (
    <div className="pt-24 px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-7xl font-light uppercase tracking-tighter mb-4 glow-cyan-strong">
          Technical Specifications
        </h1>
        <p className="text-gray-400 text-lg mb-16">Complete system architecture and performance metrics</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Core Systems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="border border-cyan-500/30 rounded-lg p-8"
          >
            <h3 className="text-2xl font-light uppercase tracking-wide mb-6 text-cyan-300">Core Systems</h3>
            <div className="space-y-4">
              {[
                { label: 'Processor Architecture', value: '1.2 THz Quantum Core' },
                { label: 'Neural Response Time', value: '0.3ms Average' },
                { label: 'Memory Configuration', value: '2.5 PB Neural Storage' },
                { label: 'Processing Threads', value: '64,000+ Parallel' },
                { label: 'Clock Speed', value: '12 GHz Base / 24 GHz Boost' },
              ].map((spec, i) => (
                <div key={i} className="border-b border-cyan-500/10 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-cyan-400 font-light text-sm">{spec.label}</p>
                  <p className="text-gray-300 mt-1">{spec.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border border-cyan-500/30 rounded-lg p-8"
          >
            <h3 className="text-2xl font-light uppercase tracking-wide mb-6 text-cyan-300">Performance Metrics</h3>
            <div className="space-y-4">
              {[
                { label: 'Battle Duration', value: '72+ Hours Continuous' },
                { label: 'Energy Efficiency', value: '99.7% Core Efficiency' },
                { label: 'Threat Response', value: 'Sub-millisecond' },
                { label: 'Reliability Rating', value: '99.99% Uptime' },
                { label: 'Combat Readiness', value: '100% Deployable' },
              ].map((metric, i) => (
                <div key={i} className="border-b border-cyan-500/10 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-cyan-400 font-light text-sm">{metric.label}</p>
                  <p className="text-gray-300 mt-1">{metric.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Detailed Specs Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light uppercase tracking-wide mb-8 text-cyan-300">System Matrix</h2>
          <div className="overflow-x-auto border border-cyan-500/30 rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-cyan-500/10 border-b border-cyan-500/30">
                <tr>
                  <th className="px-6 py-4 text-left text-cyan-400 font-light uppercase tracking-widest">Component</th>
                  <th className="px-6 py-4 text-left text-cyan-400 font-light uppercase tracking-widest">Specification</th>
                  <th className="px-6 py-4 text-left text-cyan-400 font-light uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-left text-cyan-400 font-light uppercase tracking-widest">Integrity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-500/10">
                {[
                  { comp: 'Armor Plating', spec: 'Class-X Reinforced Titanium', status: '✓ Intact', integrity: '100%' },
                  { comp: 'Skeletal Frame', spec: 'Carbon-Fiber Composite', status: '✓ Optimal', integrity: '100%' },
                  { comp: 'Neural Matrix', spec: 'Quantum Processing Core', status: '✓ Active', integrity: '100%' },
                  { comp: 'Coolant System', spec: 'Nano-fluid Circulation', status: '✓ Flowing', integrity: '100%' },
                  { comp: 'Power Reactor', spec: 'Quantum Fusion Cell', status: '✓ Stable', integrity: '100%' },
                  { comp: 'Weapon Systems', spec: 'Multi-spectrum Arsenal', status: '✓ Armed', integrity: '100%' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-cyan-500/5 transition-colors">
                    <td className="px-6 py-4 text-gray-300">{row.comp}</td>
                    <td className="px-6 py-4 text-gray-400 font-mono text-xs">{row.spec}</td>
                    <td className="px-6 py-4 text-cyan-400">{row.status}</td>
                    <td className="px-6 py-4 text-green-400">{row.integrity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center py-12"
        >
          <Link
            href="/"
            className="inline-block px-8 py-4 border border-cyan-500 text-cyan-400 font-light uppercase tracking-widest hover:bg-cyan-500/10 transition-all glow-cyan"
          >
            Return to Experience
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
