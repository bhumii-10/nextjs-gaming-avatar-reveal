'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function GallerySection() {
  return (
    <div className="pt-24 px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-7xl font-light uppercase tracking-tighter mb-4 glow-cyan-strong">
          Experience Gallery
        </h1>
        <p className="text-gray-400 text-lg mb-16">Interactive resources and tactical demonstrations</p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: '📊',
              title: 'Real-Time Analytics',
              desc: 'Live performance monitoring and tactical data visualization',
              items: [
                '• Combat Efficiency Dashboard',
                '• Threat Assessment Matrix',
                '• Deployment Status Tracker',
                '• Resource Allocation Monitor'
              ]
            },
            {
              icon: '🎮',
              title: 'Interactive Simulator',
              desc: 'Hands-on tactical interface and combat scenario training',
              items: [
                '• Virtual Combat Scenarios',
                '• Weapon System Controls',
                '• Defensive Protocols Demo',
                '• Emergency Procedures'
              ]
            },
            {
              icon: '📚',
              title: 'Complete Documentation',
              desc: 'Technical guides and deployment procedures',
              items: [
                '• System Architecture Guide',
                '• Operation Manual (Complete)',
                '• Maintenance Protocols',
                '• Emergency Response Playbook'
              ]
            },
          ].map((gallery, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="border border-cyan-500/30 rounded-lg p-8 cursor-pointer hover:border-cyan-500/60 transition-all bg-gradient-to-br from-cyan-500/5 to-transparent"
            >
              <div className="text-5xl mb-4">{gallery.icon}</div>
              <h3 className="text-xl font-light uppercase tracking-wide mb-2 text-cyan-300">{gallery.title}</h3>
              <p className="text-gray-400 mb-6">{gallery.desc}</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {gallery.items.map((item, j) => (
                  <li key={j} className="font-light">{item}</li>
                ))}
              </ul>
              <button className="mt-6 w-full py-3 border border-cyan-500/50 text-cyan-400 font-light uppercase tracking-widest text-xs rounded hover:bg-cyan-500/10 transition-all">
                Access {gallery.title}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Media Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light uppercase tracking-wide mb-8 text-cyan-300">Media Archive</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                type: 'Video',
                title: 'AEGIS-7 System Overview',
                description: '12:47 • Complete walkthrough of all major systems and capabilities',
                date: '2026.02.20'
              },
              {
                type: 'Video',
                title: 'Tactical Deployment Training',
                description: '18:32 • Advanced training module for field operatives',
                date: '2026.02.18'
              },
              {
                type: 'Document',
                title: 'Technical Specification Manual',
                description: 'PDF • 247 pages • Complete system documentation',
                date: '2026.02.15'
              },
              {
                type: 'Document',
                title: 'Operation Protocols Handbook',
                description: 'PDF • 156 pages • Standard operating procedures',
                date: '2026.02.12'
              },
            ].map((media, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-light uppercase tracking-widest border border-cyan-500/30 text-cyan-400 rounded">
                    {media.type}
                  </span>
                  <span className="text-xs text-gray-500">{media.date}</span>
                </div>
                <h4 className="text-lg font-light uppercase tracking-wide mb-2 text-white group-hover:text-cyan-300 transition">
                  {media.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4">{media.description}</p>
                <button className="text-cyan-400 text-sm font-light uppercase tracking-widest hover:text-cyan-300 transition">
                  {media.type === 'Video' ? '▶ Play Video' : '⬇ Download PDF'}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border border-cyan-500/30 rounded-lg p-8 mb-20 bg-gradient-to-r from-cyan-500/5 to-transparent"
        >
          <h2 className="text-2xl font-light uppercase tracking-wide mb-6 text-cyan-300">Quick Access</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Deployment Calculator', icon: '🧮' },
              { label: 'Resource Estimator', icon: '📈' },
              { label: 'Risk Assessment Tool', icon: '⚠️' },
              { label: 'Performance Monitor', icon: '📊' },
              { label: 'System Status Check', icon: '✓' },
              { label: 'Support Portal', icon: '🆘' },
            ].map((link, i) => (
              <motion.button
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 px-4 py-3 border border-cyan-500/20 rounded text-left hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group"
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-sm font-light text-gray-300 group-hover:text-cyan-300 transition">{link.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
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