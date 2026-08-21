import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Clock, ShieldCheck, Layers } from 'lucide-react';
import PageBanner3D from '../common/PageBanner3D';
import HeroBannerImage from '../common/HeroBannerImage';
// Real client footage: a sublimation calendar press feeding striped fabric —
// replaces the previous AI-generated factory render.
import manufacturingBanner from '../../assets/factory-real/sublimation-calendar-press-stripes.webp';

const BANNER_CARDS = [
  { icon: Clock, value: '10+', label: 'Years Experience', color: 'bg-orange-500' },
  { icon: Layers, value: 'Full', label: 'Package Production', color: 'bg-cyan-500' },
  { icon: ShieldCheck, value: 'ISO', label: 'Certified Quality', color: 'bg-orange-500' },
];

const ManufacturingHero = () => {
  return (
    <section className="relative bg-[#080D16] pt-40 pb-36 px-6 overflow-hidden">
      <HeroBannerImage image={manufacturingBanner} />
      <PageBanner3D cards={BANNER_CARDS} accent="orange" layout="symmetric" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Factory size={14} className="text-orange-500" />
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
            Manufacturing Process
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Full-Scale Production,
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">
            Built Around Your Brand
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From first consultation to worldwide delivery, every stage of production is managed
          in-house — OEM, ODM and private label, with full decoration capability under one roof.
        </motion.p>
      </div>
    </section>
  );
};

export default ManufacturingHero;
