import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ResourcesHero from '../components/resources/ResourcesHero';
import FeaturedArticle from '../components/resources/FeaturedArticle';
import ArticleGrid from '../components/resources/ArticleGrid';
import { getArticles } from '../services/articlesService';
import { LoadingBlock, ErrorState, EmptyState } from '../components/common/DataState';
import Seo from '../components/common/Seo';
import JsonLd from '../components/common/JsonLd';
import { buildBreadcrumbSchema } from '../data/structuredData';

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Resources', path: '/resources' },
]);

export default function Resources() {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  const load = async () => {
    setStatus('loading');
    const { articles: data, error } = await getArticles();
    if (error) {
      setStatus('error');
      return;
    }
    setArticles(data);
    setStatus('ready');
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard fetch-on-mount pattern; load() is async and safe to call here.
    load();
  }, []);

  const featured = articles.find((a) => a.featured) || articles[0];
  const rest = featured ? articles.filter((a) => a.slug !== featured.slug) : [];

  return (
    <main className="min-h-screen bg-[#080D16]">
      <Seo
        title="Sportswear Manufacturing Resources & Guides"
        description="Guides on OEM vs private label, sublimation vs screen printing vs embroidery, fabric selection and choosing a sportswear manufacturer — from TradeFine's production team."
      />
      <JsonLd data={breadcrumbSchema} />
      <ResourcesHero />

      {status === 'loading' && (
        <div className="px-6"><LoadingBlock label="Loading articles…" /></div>
      )}

      {status === 'error' && (
        <div className="max-w-5xl mx-auto px-6 pb-24"><ErrorState onRetry={load} /></div>
      )}

      {status === 'ready' && articles.length === 0 && (
        <div className="max-w-5xl mx-auto px-6 pb-24">
          <EmptyState
            title="No articles published yet"
            message="Check back soon — new manufacturing guides and resources are on the way."
          />
        </div>
      )}

      {status === 'ready' && featured && (
        <>
          <FeaturedArticle article={featured} />
          <ArticleGrid articles={rest} />
        </>
      )}

      {/* Closing CTA */}
      <section className="bg-[#080D16] pb-28 px-6">
        <div className="max-w-5xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
          <h3 className="relative z-10 text-white text-3xl md:text-4xl font-black tracking-tight mb-4">
            Still have questions about your project?
          </h3>
          <p className="relative z-10 text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8">
            Our team can walk you through fabric, MOQ and timeline specifics for your exact
            product.
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
