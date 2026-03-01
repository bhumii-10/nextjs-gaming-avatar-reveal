'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: '⚡',
      title: 'Real-Time Processing',
      desc: 'Quantum-level data processing with zero latency response times',
      details: 'Advanced quantum computing enables instantaneous decision-making across all combat parameters simultaneously.'
    },
    {
      icon: '🔐',
      title: 'Secure Architecture',
      desc: 'Military-grade encryption with adaptive threat detection',
      details: 'Multi-layered security protocols with self-healing firewalls that evolve to counter emerging threats.'
    },
    {
      icon: '🧠',
      title: 'Adaptive Learning',
      desc: 'Self-evolving neural architecture that improves with each deployment',
      details: 'Proprietary machine learning algorithms that enhance tactical decisions based on real-world battlefield experience.'
    },
    {
      icon: '🎯',
      title: 'Precision Targeting',
      desc: 'Multi-spectrum analysis with predictive engagement matrices',
      details: 'Advanced sensory arrays combined with predictive algorithms for unparalleled targeting accuracy.'
    },
    {
      icon: '⚔️',
      title: 'Combat Ready',
      desc: 'Fully integrated tactical systems for immediate deployment',
      details: 'Comprehensive weapon systems integration ensuring seamless operational capability in any scenario.'
    },
    {
      icon: '🛡️',
      title: 'Defensive Systems',
      desc: 'Autonomous shield generation with damage mitigation protocols',
      details: 'Kinetic barriers and adaptive plating that self-repair and redistribute impact forces intelligently.'
    },
  ];

  return (
    <div className="pt-24 px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-7xl font-light uppercase tracking-tighter mb-4 glow-cyan-strong">
          Advanced Capabilities
        </h1>
        <p className="text-gray-400 text-lg mb-16">Cutting-edge tactical systems and tactical superiority</p>

        <div className="space-y-8 mb-20">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="p-8 border border-cyan-500/30 rounded-lg hover:border-cyan-500/60 transition-all bg-gradient-to-r from-cyan-500/5 to-transparent"
              >
                <div className="flex gap-6 mb-4">
                  <div className="text-5xl">{cap.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light uppercase tracking-wide mb-2 text-cyan-300">
                      {cap.title}
                    </h3>
                    <p className="text-gray-400">{cap.desc}</p>
                  </div>
                </div>
                <p className="text-gray-500 ml-14 pl-0 mt-4 border-l border-cyan-500/20 pl-4">
                  {cap.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparative Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light uppercase tracking-wide mb-8 text-cyan-300">Capability Matrix vs Predecessors</h2>
          <div className="overflow-x-auto border border-cyan-500/30 rounded-lg">
            <table className="w-full">
              <thead className="bg-cyan-500/10 border-b border-cyan-500/30">
                <tr>
                  <th className="px-6 py-4 text-left text-cyan-400 font-light uppercase tracking-widest">Feature</th>
                  <th className="px-6 py-4 text-left text-cyan-400 font-light uppercase tracking-widest">AEGIS-6</th>
                  <th className="px-6 py-4 text-left text-cyan-400 font-light uppercase tracking-widest">AEGIS-7</th>
                  <th className="px-6 py-4 text-left text-cyan-400 font-light uppercase tracking-widest">Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cyan-500/10">
                {[
                  { feature: 'Response Time', prev: '2.5ms', current: '0.3ms', improve: '800%' },
                  { feature: 'Memory Capacity', prev: '1.2 PB', current: '2.5 PB', improve: '208%' },
                  { feature: 'Combat Duration', prev: '48 Hours', current: '72+ Hours', improve: '50%' },
                  { feature: 'Target Accuracy', prev: '97%', current: '99.97%', improve: '297bps' },
                  { feature: 'Energy Efficiency', prev: '94.2%', current: '99.7%', improve: '555%' },
                  { feature: 'Self-Healing', prev: 'Manual Repair', current: 'Autonomous', improve: 'Automatic' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-cyan-500/5 transition-colors">
                    <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-700">{row.prev}</td>
                    <td className="px-6 py-4 text-cyan-400">{row.current}</td>
                    <td className="px-6 py-4 text-green-400 font-light">{row.improve}</td>
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
          className="text-center py-12 flex gap-4 justify-center"
        >
          <Link
            href="/missions"
            className="inline-block px-8 py-4 border border-cyan-500 text-cyan-400 font-light uppercase tracking-widest hover:bg-cyan-500/10 transition-all glow-cyan"
          >
            View Missions
          </Link>
          <Link
            href="/"
            className="inline-block px-8 py-4 border border-gray-500 text-gray-400 font-light uppercase tracking-widest hover:border-cyan-500 hover:text-cyan-400 transition-all"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}