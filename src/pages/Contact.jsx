import React from 'react';
import { motion } from 'framer-motion';
import { Headset, Clock, ShieldCheck, Globe } from 'lucide-react';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import PageBanner3D from '../components/common/PageBanner3D';
import HeroBannerImage from '../components/common/HeroBannerImage';
import contactBanner from '../assets/banners/contact-banner.webp';
// Real client footage: quilting a padded panel on the production floor —
// fills what was previously an empty gradient placeholder box.
import industrialPrecisionImage from '../assets/factory-real/sewing-quilted-padding-blue.webp';
import TrustStampBadge from '../components/contact/TrustStampBadge';
import Seo from '../components/common/Seo';
import JsonLd from '../components/common/JsonLd';
import { buildBreadcrumbSchema } from '../data/structuredData';

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
]);

const TRUST = [
  { icon: Clock, label: '24h Response', sub: 'Fast Professional Consultation' },
  { icon: ShieldCheck, label: 'Non-Disclosure', sub: 'Strict Project Confidentiality' },
  { icon: Globe, label: 'Worldwide', sub: 'Seamless Customs & Export' },
  { icon: Headset, label: 'Client Support', sub: 'Direct Manufacturing Expert' },
];

const BANNER_CARDS = [
  { icon: Clock, value: '24h', label: 'Response Time', color: 'bg-orange-500' },
  { icon: Globe, value: 'Global', label: 'Export & Logistics', color: 'bg-cyan-500' },
  { icon: Headset, value: 'Direct', label: 'Expert Support', color: 'bg-orange-500' },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#080D16]">
      <Seo
        title="Contact TradeFine — Request a Sportswear Manufacturing Quote"
        description="Get in touch with TradeFine's Sialkot team for custom sportswear manufacturing quotes. WhatsApp, phone or the form below — typical response within 24 hours."
      />
      <JsonLd data={breadcrumbSchema} />
      <section className="relative pt-40 pb-36 px-6 overflow-hidden">
        <HeroBannerImage image={contactBanner} />
        <PageBanner3D cards={BANNER_CARDS} accent="orange" layout="symmetric" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-orange-500 text-xs font-black uppercase tracking-widest">
              Contact &amp; Request Quote
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's Manufacture Your
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">
              Next Collection
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            "Direct OEM/ODM solutions for brands scaling global sportswear operations."
          </motion.p>
        </div>
      </section>

      <section className="bg-[#080D16] pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
              <div className="aspect-[16/11] rounded-3xl overflow-hidden border border-white/10 bg-[#080D16] relative">
                <img
                  src={industrialPrecisionImage}
                  alt="Real TradeFine sewing operator quilting a padded panel on the production floor"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-black/10" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-2xl font-bold uppercase italic tracking-tight">
                    Industrial Precision
                  </h3>
                  <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mt-1">
                    Sialkot Facility
                  </p>
                </div>
              </div>
              <TrustStampBadge />
              <ContactInfo />
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>

          {/* Trust row */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-white/10">
            {TRUST.map((trust) => (
              <div key={trust.label} className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <trust.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-black uppercase tracking-tighter text-sm">
                    {trust.label}
                  </span>
                  <span className="text-gray-400 text-[11px] font-bold uppercase">
                    {trust.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
