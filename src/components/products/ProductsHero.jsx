import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Boxes, ShieldCheck, PackageCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner3D from '../common/PageBanner3D';
import HeroBannerImage from '../common/HeroBannerImage';
import productsBanner from '../../assets/banners/products-page-banner.webp';

const BANNER_CARDS = [
  { icon: Boxes, value: '6', label: 'Categories', color: 'bg-orange-500' },
  { icon: PackageCheck, value: 'Low', label: 'MOQ Available', color: 'bg-cyan-500' },
  { icon: ShieldCheck, value: 'OEM/ODM', label: 'Fully Custom', color: 'bg-orange-500' },
];

const ProductsHero = () => {
  return (
    <section className="relative bg-[#080D16] pt-40 pb-24 px-6 overflow-hidden">
      <HeroBannerImage image={productsBanner} />
      <PageBanner3D cards={BANNER_CARDS} accent="orange" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Layers size={14} className="text-orange-500" />
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
            Our Product Range
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-4xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Manufactured for
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">
            Every Category of Sport
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Every item below is a starting reference, not a fixed catalog piece. Fabric, color, size
          range, logo placement, printing method and packaging are all built around your brand's
          specification.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-sm uppercase tracking-widest shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsHero;
