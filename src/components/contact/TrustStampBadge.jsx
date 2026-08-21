import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BadgeCheck, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import stampFront from '../../assets/trust/trade-fine-official-stamp-front.webp';
import stampImprint from '../../assets/trust/trade-fine-stamp-imprint-crop.webp';
import stampLetterhead from '../../assets/trust/trade-fine-letterhead-stamp-crop.webp';

const STAMP_PHOTOS = [
  { src: stampFront, alt: 'TradeFine official company stamp' },
  { src: stampImprint, alt: 'TradeFine stamp imprint on company letterhead' },
  { src: stampLetterhead, alt: 'TradeFine stamp imprint, letterhead close-up' },
];

/**
 * Real photos of TradeFine's official company stamp — a small, honest trust
 * signal for a B2B buyer doing due diligence, sitting next to the contact
 * details it backs up. No certifications or registration numbers are
 * claimed here, only what the photos actually show. Each thumbnail opens
 * a full-size lightbox on click so a buyer can actually inspect the stamp,
 * with left/right navigation between all three real photos.
 */
const TrustStampBadge = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const openAt = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const step = (delta) => setActiveIndex((i) => (i + delta + STAMP_PHOTOS.length) % STAMP_PHOTOS.length);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/10 rounded-2xl"
      >
        <div className="flex -space-x-3 shrink-0">
          {STAMP_PHOTOS.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => openAt(i)}
              className="group relative w-16 h-16 rounded-xl overflow-hidden border-2 border-[#080D16] bg-white cursor-zoom-in transition-transform duration-300 hover:scale-105 hover:z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label={`Enlarge: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <Expand
                  size={14}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </span>
            </button>
          ))}
        </div>
        <div>
          <p className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 uppercase font-bold tracking-widest mb-1">
            <BadgeCheck className="w-3.5 h-3.5 text-orange-500" />
            Official Business Stamp
          </p>
          <p className="text-white text-sm font-medium leading-relaxed">
            Trade Fine — Proprietor. Used on our commercial documents and correspondence.
          </p>
          <p className="text-gray-500 text-[11px] mt-1">Tap a photo to view full size.</p>
        </div>
      </motion.div>

      {/* Click-to-enlarge lightbox with left/right navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[130] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            <button
              type="button"
              onClick={close}
              className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-black/50 border border-white/15 flex items-center justify-center text-white hover:bg-orange-500 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {STAMP_PHOTOS.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="absolute left-4 sm:left-8 z-10 w-11 h-11 rounded-full bg-black/50 border border-white/15 flex items-center justify-center text-white hover:bg-orange-500 transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="absolute right-4 sm:right-8 z-10 w-11 h-11 rounded-full bg-black/50 border border-white/15 flex items-center justify-center text-white hover:bg-orange-500 transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <motion.div
              key={activeIndex}
              className="relative z-10 flex flex-col items-center gap-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={STAMP_PHOTOS[activeIndex].src}
                alt={STAMP_PHOTOS[activeIndex].alt}
                className="max-w-md w-full max-h-[70vh] h-auto rounded-2xl border border-white/10 object-contain bg-white"
              />
              <p className="text-gray-400 text-xs sm:text-sm text-center max-w-md">
                {STAMP_PHOTOS[activeIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TrustStampBadge;
