import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ManufacturingHero from '../components/manufacturing/ManufacturingHero';
import ServicesGrid from '../components/manufacturing/ServicesGrid';
import ProcessTimeline from '../components/manufacturing/ProcessTimeline';
import RealFactoryProof from '../components/manufacturing/RealFactoryProof';
import RealFactoryGalleryStrip from '../components/manufacturing/RealFactoryGalleryStrip';
import Seo from '../components/common/Seo';
import JsonLd from '../components/common/JsonLd';
import { buildBreadcrumbSchema } from '../data/structuredData';

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Manufacturing', path: '/manufacturing' },
]);

export default function Manufacturing() {
  return (
    <main className="min-h-screen bg-[#080D16]">
      <Seo
        title="Sportswear Manufacturing Process — Factory, Fabric & QC"
        description="See how TradeFine manufactures custom sportswear: real factory production, fabric sourcing, printing and embroidery, quality control and packaging, start to finish."
      />
      <JsonLd data={breadcrumbSchema} />
      <ManufacturingHero />
      <RealFactoryProof />
      <RealFactoryGalleryStrip />
      <ServicesGrid />
      <ProcessTimeline />

      {/* Closing CTA */}
      <section className="bg-[#080D16] pb-28 px-6">
        <div className="max-w-5xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
          <h3 className="relative z-10 text-white text-3xl md:text-4xl font-black tracking-tight mb-4">
            Ready to put your production in motion?
          </h3>
          <p className="relative z-10 text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8">
            Tell us your fabric, quantity and timeline — we'll get back with a detailed
            manufacturing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="relative z-10 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-sm uppercase tracking-widest shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </main>
  );
}
