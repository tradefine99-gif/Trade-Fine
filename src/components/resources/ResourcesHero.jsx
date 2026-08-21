import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Lightbulb, Clock } from 'lucide-react';
import PageBanner3D from '../common/PageBanner3D';
import HeroBannerImage from '../common/HeroBannerImage';
import resourcesBanner from '../../assets/banners/resources-banner.webp';

const BANNER_CARDS = [
  { icon: FileText, value: '5+', label: 'In-Depth Guides', color: 'bg-orange-500' },
  { icon: Lightbulb, value: 'Expert', label: 'Manufacturing Tips', color: 'bg-cyan-500' },
  { icon: Clock, value: 'Free', label: 'To Read & Share', color: 'bg-orange-500' },
];

const ResourcesHero = () => {
  return (
    <section className="relative pt-40 pb-36 px-6 overflow-hidden">
      <HeroBannerImage image={resourcesBanner} />
      <PageBanner3D cards={BANNER_CARDS} accent="orange" layout="symmetric" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BookOpen size={14} className="text-orange-500" />
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
            Resources &amp; Insights
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Knowledge From the
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">
            Production Floor
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Fabric guides, printing methods, MOQs, export logistics and everything else brands ask
          us before their first production run.
        </motion.p>
      </div>
    </section>
  );
};

export default ResourcesHero;
