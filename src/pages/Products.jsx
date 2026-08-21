import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductsHero from '../components/products/ProductsHero';
import ProductsGrid from '../components/products/ProductsGrid';
import CustomizationSection from '../components/products/CustomizationSection';
import Seo from '../components/common/Seo';
import JsonLd from '../components/common/JsonLd';
import { buildBreadcrumbSchema } from '../data/structuredData';

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
]);

export default function Products() {
  const [searchParams] = useSearchParams();
  // Remounting ProductsGrid whenever the ?category= param changes (e.g. from
  // a Home page category card) gives it a clean initial state for the new
  // category without any imperative ref/effect syncing inside the component.
  const categoryKey = searchParams.get('category') || 'all';

  return (
    <main className="min-h-screen bg-[#080D16]">
      <Seo
        title="Custom Sportswear Products — Teamwear, Gym Wear & Casualwear"
        description="Browse TradeFine's manufacturable product range: team sportswear, gym and fitness wear, casualwear and accessories, fully customizable to your specs, fabric and branding."
      />
      <JsonLd data={breadcrumbSchema} />
      <ProductsHero />
      <ProductsGrid key={categoryKey} />
      <CustomizationSection />

      {/* Closing CTA */}
      <section className="bg-[#080D16] pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-white text-3xl md:text-4xl font-black tracking-tight mb-3">
                Don't see exactly what you need?
              </h3>
              <p className="text-gray-400 text-base md:text-lg max-w-xl">
                Every category above is fully customizable. Send us your tech pack, sketch or
                reference image and our team will manufacture it to spec.
              </p>
            </div>
            <Link
              to="/contact"
              className="relative z-10 flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-sm uppercase tracking-widest shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk to Our Experts
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
