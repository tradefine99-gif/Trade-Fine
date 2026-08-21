import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Expand, Play } from 'lucide-react';
import { getGalleryItems, GALLERY_CATEGORIES } from '../../services/galleryService';
import GalleryLightbox from './GalleryLightbox';
import { LoadingGrid, ErrorState, EmptyState } from '../common/DataState';

// Varies the column span of a handful of tiles per category so the masonry
// grid reads as an intentional layout rather than a repeating pattern.
const SPAN_PATTERN = ['tall', 'normal', 'normal', 'wide', 'normal', 'tall', 'normal'];

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  const load = async () => {
    setStatus('loading');
    const { items, error } = await getGalleryItems();
    if (error) {
      setStatus('error');
      return;
    }
    setAllImages(items);
    setStatus('ready');
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard fetch-on-mount pattern; load() is async and safe to call here.
    load();
  }, []);

  const images = useMemo(() => {
    const base =
      activeCategory === 'All'
        ? allImages
        : allImages.filter((img) => img.category === activeCategory);
    return base.map((img, i) => ({ ...img, span: SPAN_PATTERN[i % SPAN_PATTERN.length] }));
  }, [activeCategory, allImages]);

  return (
    <section className="bg-[#080D16] pb-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-14 border-b border-white/10 pb-8">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              activeCategory === 'All'
                ? 'bg-orange-500 text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)]'
                : 'bg-white/[0.03] text-gray-400 border border-white/10 hover:text-white hover:border-orange-500/40'
            }`}
          >
            All
          </button>
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)]'
                  : 'bg-white/[0.03] text-gray-400 border border-white/10 hover:text-white hover:border-orange-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        {status === 'loading' && <LoadingGrid count={9} />}

        {status === 'error' && <ErrorState onRetry={load} />}

        {status === 'ready' && images.length === 0 && (
          <EmptyState
            title="No photos in this category yet"
            message="Check back soon, or browse another category above."
          />
        )}

        {status === 'ready' && images.length > 0 && (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((item, index) => (
            <motion.button
              type="button"
              key={item.id}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
              className={`group relative block w-full text-left break-inside-avoid rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/40 transition-colors duration-500 cursor-zoom-in ${
                item.span === 'tall' ? 'aspect-[3/4]' : item.span === 'wide' ? 'aspect-[16/10]' : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className={`w-full transition-transform duration-700 group-hover:scale-105 ${
                  item.span === 'tall' || item.span === 'wide' ? 'h-full object-cover' : 'h-auto object-cover'
                }`}
              />
              {item.mediaType === 'video' && (
                <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Play size={14} fill="currentColor" />
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-orange-400 text-[9px] font-bold uppercase tracking-widest mb-1">
                  {item.category}
                </p>
                <p className="text-white text-xs leading-snug">{item.caption}</p>
              </div>
              <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 border border-white/15 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <Expand size={13} />
              </span>
            </motion.button>
          ))}
        </div>
        )}
      </div>

      <GalleryLightbox
        images={images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
};

export default GalleryGrid;
