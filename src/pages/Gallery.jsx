import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Images, Factory, Cog, Palette, ShieldCheck, PackageCheck, Globe2 } from 'lucide-react';
import GalleryGrid from '../components/gallery/GalleryGrid';
import PageBanner3D from '../components/common/PageBanner3D';
import HeroBannerImage from '../components/common/HeroBannerImage';
import galleryBanner from '../assets/banners/gallery-banner.webp';
import Seo from '../components/common/Seo';
import JsonLd from '../components/common/JsonLd';
import { buildBreadcrumbSchema } from '../data/structuredData';

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
]);

const JOURNEY = [
  { icon: Factory, label: 'Factory' },
  { icon: Cog, label: 'Production' },
  { icon: Palette, label: 'Printing & Embroidery' },
  { icon: ShieldCheck, label: 'Quality Check' },
  { icon: PackageCheck, label: 'Packaging' },
  { icon: Globe2, label: 'Global Delivery' },
];

const BANNER_CARDS = [
  { icon: Images, value: '9', label: 'Photo Categories', color: 'bg-orange-500' },
  { icon: Factory, value: 'Real', label: 'Factory Photos', color: 'bg-cyan-500' },
  { icon: ShieldCheck, value: 'Every', label: 'Production Stage', color: 'bg-orange-500' },
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-[#080D16]">
      <Seo
        title="Factory & Product Gallery — Real Manufacturing Photos"
        description="Real photos from TradeFine's Sialkot factory floor: production, printing, embroidery, quality control and finished sportswear, straight from the manufacturing line."
      />
      <JsonLd data={breadcrumbSchema} />
      <section className="relative pt-40 pb-36 px-6 overflow-hidden">
        <HeroBannerImage image={galleryBanner} />
        <PageBanner3D cards={BANNER_CARDS} accent="orange" layout="symmetric" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Images size={14} className="text-orange-500" />
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
              Gallery
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Craftsmanship,
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">
              On the Production Floor
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A look at the categories, fabrics and finishes that leave our facility every month —
            each one built to a client's exact specification.
          </motion.p>
        </div>
      </section>

      {/* Journey strip */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 md:py-6">
            {JOURNEY.map((step, index) => (
              <React.Fragment key={step.label}>
                <div className="flex items-center gap-2 px-3 py-1.5">
                  <step.icon size={15} className="text-orange-500" />
                  <span className="text-white text-[11px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                    {step.label}
                  </span>
                </div>
                {index < JOURNEY.length - 1 && (
                  <span className="hidden md:block text-gray-600 mx-1">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <GalleryGrid />

      <section className="pb-28 px-6">
        <div className="max-w-5xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />
          <h3 className="relative z-10 text-white text-3xl md:text-4xl font-black tracking-tight mb-4">
            Like what you see?
          </h3>
          <p className="relative z-10 text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8">
            Every piece here can be reproduced in your own colors, fabrics and branding.
          </p>
          <Link
            to="/contact"
            className="relative z-10 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-sm uppercase tracking-widest shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Custom Pricing
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
