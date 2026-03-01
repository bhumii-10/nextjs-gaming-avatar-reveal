'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MissionsSection() {
  const missions = [
    {
      code: 'SILENT-STRIKE',
      name: 'Operation Silent Strike',
      date: '2026.02.15',
      status: '✓ Success',
      location: 'Northern Sector Alpha',
      details: 'Primary objective secured with precision strike. Zero civilian casualties. Enemy stronghold eliminated.',
      impact: 'Strategic advantage gained over hostile faction',
      rating: '★★★★★'
    },
    {
      code: 'IRON-SHIELD',
      name: 'Operation Iron Shield',
      date: '2026.02.14',
      status: '✓ Success',
      location: 'Coastal Defense Line',
      details: 'Defensive perimeter maintained through 47 threat encounters. All incursion attempts repelled.',
      impact: '2,400 square kilometer zone secured',
      rating: '★★★★★'
    },
    {
      code: 'DARK-PHOENIX',
      name: 'Operation Dark Phoenix',
      date: '2026.02.12',
      status: '✓ Success',
      location: 'Underground Complex',
      details: 'Enemy stronghold destroyed in coordinated strike. High-value intelligence assets recovered.',
      impact: 'Tactical advantage: 6-week intelligence lead established',
      rating: '★★★★★'
    },
    {
      code: 'VIPER-PROTOCOL',
      name: 'Operation Viper Protocol',
      date: '2026.02.10',
      status: '✓ Success',
      location: 'Deep Infiltration',
      details: 'Successful infiltration of secure facility. Critical intelligence secured without triggering alarms.',
      impact: 'Classified data recovered: 847 terabytes',
      rating: '★★★★★'
    },
    {
      code: 'PHOENIX-RISE',
      name: 'Operation Phoenix Rise',
      date: '2026.02.08',
      status: '✓ Success',
      location: 'Mountain Range System',
      details: 'Rescue operation executed flawlessly. All assets retrieved, no losses sustained.',
      impact: '156 personnel safely extracted',
      rating: '★★★★★'
    },
    {
      code: 'SHADOW-NET',
      name: 'Operation Shadow Net',
      date: '2026.02.05',
      status: '✓ Success',
      location: 'Communications Hub',
      details: 'Network infiltration and data extraction completed without detection or system compromise.',
      impact: '3.2 million encrypted communications intercepted',
      rating: '★★★★★'
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
          Mission Records
        </h1>
        <p className="text-gray-400 text-lg mb-16">Classified deployment history and tactical achievements</p>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { label: 'Total Missions', value: '247' },
            { label: 'Success Rate', value: '100%' },
            { label: 'Casualties Prevented', value: '12,400+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border border-cyan-500/30 rounded-lg p-6 text-center"
            >
              <p className="text-cyan-400 font-light text-sm uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-4xl font-light text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Cards */}
        <div className="space-y-6 mb-20">
          {missions.map((mission, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="border border-cyan-500/30 rounded-lg p-8 hover:border-cyan-500/60 transition-all bg-gradient-to-r from-cyan-500/5 to-transparent group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-cyan-500/70">{mission.code}</span>
                    <span className="text-cyan-400 glow-cyan font-light">{mission.status}</span>
                  </div>
                  <h3 className="text-2xl font-light uppercase tracking-wide text-white">{mission.name}</h3>
                </div>
                <span className="text-2xl text-yellow-500">{mission.rating}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="text-cyan-400 font-light text-sm uppercase tracking-widest mb-1">Date</p>
                  <p className="text-gray-300">{mission.date}</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-light text-sm uppercase tracking-widest mb-1">Location</p>
                  <p className="text-gray-300">{mission.location}</p>
                </div>
              </div>

              <div className="border-t border-cyan-500/10 pt-4">
                <p className="text-gray-400 mb-4">{mission.details}</p>
                <p className="text-cyan-400/70 text-sm font-light"><span className="text-cyan-400">Impact:</span> {mission.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="border border-cyan-500/30 rounded-lg p-8 mb-20"
        >
          <h2 className="text-2xl font-light uppercase tracking-wide mb-6 text-cyan-300">Campaign Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Targets Eliminated', value: '847' },
              { label: 'Territory Secured', value: '28.4K sq km' },
              { label: 'Intelligence Gathered', value: '3.2M files' },
              { label: 'Uptime During Ops', value: '99.97%' },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-cyan-400 font-light text-xs uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-2xl font-light text-gray-300">{item.value}</p>
              </div>
            ))}
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
            href="/gallery"
            className="inline-block px-8 py-4 border border-cyan-500 text-cyan-400 font-light uppercase tracking-widest hover:bg-cyan-500/10 transition-all glow-cyan"
          >
            View Gallery
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