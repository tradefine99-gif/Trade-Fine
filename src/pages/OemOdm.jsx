import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Boxes, Layers, PackageCheck, Tag } from 'lucide-react';
import OemOdmComparison from '../components/oemodm/OemOdmComparison';
import PageBanner3D from '../components/common/PageBanner3D';
import HeroBannerImage from '../components/common/HeroBannerImage';
import oemOdmBanner from '../assets/banners/gallery-banner.webp';
import Seo from '../components/common/Seo';
import JsonLd from '../components/common/JsonLd';
import { buildBreadcrumbSchema } from '../data/structuredData';

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'OEM / ODM', path: '/oem-odm' },
]);

const BANNER_CARDS = [
  { icon: Layers, value: '3', label: 'Manufacturing Paths', color: 'bg-cyan-500' },
  { icon: PackageCheck, value: 'Low', label: 'MOQ Available', color: 'bg-orange-500' },
  { icon: Tag, value: 'Private', label: 'Label Ready', color: 'bg-cyan-500' },
];

export default function OemOdm() {
  return (
    <main className="min-h-screen bg-[#080D16]">
      <Seo
        title="OEM & ODM Sportswear Manufacturing Services"
        description="Compare TradeFine's OEM and ODM sportswear manufacturing paths — bulk production to your designs or private-label development, with low MOQs and full customization."
      />
      <JsonLd data={breadcrumbSchema} />
      <section className="relative pt-40 pb-36 px-6 overflow-hidden">
        <HeroBannerImage image={oemOdmBanner} focalPosition="center 28%" />
        <PageBanner3D cards={BANNER_CARDS} accent="cyan" layout="symmetric" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Boxes size={14} className="text-orange-500" />
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
              OEM · ODM · Private Label
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Three Paths to
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">
              Your Finished Collection
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whatever stage your brand is at — a finished tech pack or just an idea — there's a
            manufacturing route built for it. Low MOQs, fast turnaround.
          </motion.p>
        </div>
      </section>

      <OemOdmComparison />

      <section className="pb-28 px-6">
        <div className="max-w-5xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
          <h3 className="relative z-10 text-white text-3xl md:text-4xl font-black tracking-tight mb-4">
            Not sure which route fits you?
          </h3>
          <p className="relative z-10 text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8">
            Tell us about your brand and volume — our team will recommend the right manufacturing
            path for free.
          </p>
          <Link
            to="/contact"
            className="relative z-10 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-sm uppercase tracking-widest shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Talk to Our Experts
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
