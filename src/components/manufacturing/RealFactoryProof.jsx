import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

import sublimationPoster from '../../assets/factory-real/sublimation-printing-poster.webp';
import embroideryPoster from '../../assets/factory-real/embroidery-machine-poster.webp';
import fabricRoll from '../../assets/factory-real/fabric-roll-feeding.webp';
import sewingOperator from '../../assets/factory-real/sewing-operator-stitching.webp';
import sewingPaddingPoster from '../../assets/factory-real/sewing-padding-production-poster.webp';
import screenPrintingPoster from '../../assets/factory-real/screen-printing-production-poster.webp';
import screenPrintDetail from '../../assets/factory-real/screen-printing-red-ink-pull.webp';
import packagingBoxes from '../../assets/factory-real/packaging-boxes-stacked.webp';

/**
 * A single video tile that only attaches its `src` (and therefore only
 * triggers a network request) once it scrolls into the viewport. Before
 * that it renders nothing but the poster image, so the section is as
 * cheap as a static image grid until the visitor actually reaches it.
 */
function LazyClip({ src, poster, label }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-[#0b1220] group"
    >
      {inView ? (
        <video
          src={src}
          poster={poster}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          className="w-full h-full object-cover"
        />
      ) : (
        <img src={poster} alt={label} loading="lazy" className="w-full h-full object-cover" />
      )}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-xs md:text-sm font-semibold">{label}</p>
      </div>
    </div>
  );
}

const RealFactoryProof = () => {
  return (
    <section className="bg-[#080D16] pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ShieldCheck size={14} className="text-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">
            Straight From Our Floor
          </span>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
          Real Production, Not Stock Photos
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-10">
          Footage and photographs taken directly on our production floor — sewing, embroidery,
          screen printing, sublimation and packaging on live client orders.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <LazyClip
            src="/videos/sublimation-printing.mp4"
            poster={sublimationPoster}
            label="Sublimation printing in progress"
          />
          <LazyClip
            src="/videos/embroidery-machine.mp4"
            poster={embroideryPoster}
            label="Tajima embroidery machine at work"
          />
          <LazyClip
            src="/videos/sewing-padding-production.mp4"
            poster={sewingPaddingPoster}
            label="Sewing operator quilting a padded panel"
          />
          <LazyClip
            src="/videos/screen-printing-production.mp4"
            poster={screenPrintingPoster}
            label="Screen printing a custom design"
          />
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
            <img
              src={fabricRoll}
              alt="Fabric roll being fed for cutting"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
            <img
              src={sewingOperator}
              alt="Sewing operator stitching a finished piece"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
            <img
              src={screenPrintDetail}
              alt="Screen printing ink pull detail on a finished garment"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
            <img
              src={packagingBoxes}
              alt="Finished goods boxed and stacked for dispatch"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealFactoryProof;
