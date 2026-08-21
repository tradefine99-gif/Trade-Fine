import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getCategories, getProducts } from '../../services/productsService';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { LoadingGrid, ErrorState } from '../common/DataState';
import Seo from '../common/Seo';
import JsonLd from '../common/JsonLd';
import { buildProductSchema } from '../../data/structuredData';
import { SITE_URL } from '../../lib/seoConfig';

const ProductsGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategoryRaw = searchParams.get('category');
  const urlProductSlug = searchParams.get('product');

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSub, setActiveSub] = useState('All');
  const [openProduct, setOpenProduct] = useState(null);

  const load = async () => {
    setStatus('loading');
    const [{ categories: cats, error: catError }, { products: prods, error: prodError }] =
      await Promise.all([getCategories(), getProducts()]);

    if (catError || prodError) {
      setStatus('error');
      return;
    }

    setCategories(cats);
    setProducts(prods);
    setActiveCategory(cats.some((c) => c.id === urlCategoryRaw) ? urlCategoryRaw : 'All');
    setActiveSub('All');
    // Deep-link support: /products?product=some-slug opens that product's
    // modal directly on load, so individual products have a real,
    // shareable, bookmarkable URL (and something concrete for Product
    // structured data to describe) even though there's no dedicated
    // /products/:slug route.
    if (urlProductSlug) {
      const match = prods.find((p) => p.id === urlProductSlug);
      if (match) setOpenProduct(match);
    }
    setStatus('ready');
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard fetch-on-mount pattern; load() is async and safe to call here.
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keeps the URL in sync whenever a product modal opens/closes, using
  // replace (not push) so opening/closing products doesn't spam browser
  // history — this mirrors the existing ?category= pattern already used
  // on this page.
  const openProductAndSync = (product) => {
    setOpenProduct(product);
    const next = new URLSearchParams(searchParams);
    if (product) {
      next.set('product', product.id);
    } else {
      next.delete('product');
    }
    setSearchParams(next, { replace: true });
  };

  const currentCategory = categories.find((c) => c.id === activeCategory);

  const items = useMemo(() => {
    let list = products;
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory);
      if (activeSub !== 'All') {
        list = list.filter((p) => p.subcategory === activeSub);
      }
    }
    return list;
  }, [products, activeCategory, activeSub]);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    setActiveSub('All');
  };

  if (status === 'loading') {
    return (
      <section className="bg-[#080D16] py-4 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <LoadingGrid count={8} />
        </div>
      </section>
    );
  }

  if (status === 'error') {
    return (
      <section className="bg-[#080D16] py-4 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ErrorState onRetry={load} />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#080D16] py-4 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-6 border-b border-white/10 pb-8">
          <button
            onClick={() => handleCategoryClick('All')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              activeCategory === 'All'
                ? 'bg-orange-500 text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)]'
                : 'bg-white/[0.03] text-gray-400 border border-white/10 hover:text-white hover:border-orange-500/40'
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-orange-500 text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)]'
                  : 'bg-white/[0.03] text-gray-400 border border-white/10 hover:text-white hover:border-orange-500/40'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category tagline + Subcategory chips */}
        {currentCategory && (
          <div className="mb-10">
            <p className="text-gray-500 text-sm mb-4">{currentCategory.tagline}</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveSub('All')}
                className={`px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeSub === 'All'
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-gray-500 border border-white/5 hover:text-white'
                }`}
              >
                All
              </button>
              {currentCategory.subcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSub(sub)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeSub === sub
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'text-gray-500 border border-white/5 hover:text-white'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeSub}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index} onOpen={openProductAndSync} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state — Custom Accessories has no live SKUs yet */}
        {items.length === 0 && (
          <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-12 md:p-16 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
              <Sparkles className="text-orange-500" size={26} />
            </div>
            <h3 className="text-white text-2xl font-bold tracking-tight mb-3">
              Made to order, not off the shelf
            </h3>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8">
              Caps, bags, socks, gloves and other accessories are manufactured entirely to
              specification — send us your requirement and we'll scope fabric, trims and pricing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Request Custom Accessories
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>

      {openProduct && (
        <>
          <Seo
            title={`${openProduct.name} — Custom Manufacturing`}
            description={
              openProduct.description
                ? openProduct.description.slice(0, 155)
                : `${openProduct.name}, manufactured to spec by TradeFine. Request a quote for custom fabric, colors and branding.`
            }
            image={openProduct.image || undefined}
          />
          <JsonLd
            data={buildProductSchema(
              openProduct,
              `${SITE_URL}/products?product=${openProduct.id}`
            )}
          />
        </>
      )}

      <ProductDetailModal
        product={openProduct}
        allProducts={products}
        onClose={() => openProductAndSync(null)}
        onSelectProduct={openProductAndSync}
      />
    </section>
  );
};

export default ProductsGrid;
