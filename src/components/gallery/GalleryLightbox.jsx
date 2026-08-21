import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryLightbox = ({ images, activeIndex, onClose, onNavigate }) => {
  const isOpen = activeIndex !== null && activeIndex !== undefined;
  const current = isOpen ? images[activeIndex] : null;

  useEffect(() => {
    const onKey = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, activeIndex, images.length, onClose, onNavigate]);

  // Kept separate from the effect above, keyed only on isOpen: that one
  // re-runs on every arrow-key navigation (activeIndex changes), which
  // would refocus the original trigger mid-browse if this lived there too.
  useEffect(() => {
    if (!isOpen) return undefined;
    const trigger = document.activeElement;
    return () => {
      if (trigger instanceof HTMLElement) trigger.focus();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption || 'Gallery image'}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/50 border border-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={() => onNavigate((activeIndex - 1 + images.length) % images.length)}
            className="absolute left-3 md:left-6 z-20 w-11 h-11 rounded-full bg-black/50 border border-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => onNavigate((activeIndex + 1) % images.length)}
            className="absolute right-3 md:right-6 z-20 w-11 h-11 rounded-full bg-black/50 border border-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          <motion.div
            key={current.id}
            className="relative z-10 max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.7)] max-h-[70vh]">
              {current.mediaType === 'video' ? (
                // The video file itself is only requested once the lightbox
                // actually opens on this item — the grid tile behind it is
                // just the poster image, so browsing the gallery never
                // triggers a video download.
                <video
                  key={current.videoSrc}
                  src={current.videoSrc}
                  poster={current.src}
                  controls
                  playsInline
                  muted
                  autoPlay
                  loop
                  preload="metadata"
                  className="w-full h-full max-h-[70vh] object-contain bg-[#080D16]"
                />
              ) : (
                <img
                  src={current.src}
                  alt={current.caption}
                  className="w-full h-full max-h-[70vh] object-contain bg-[#080D16]"
                />
              )}
            </div>
            <div className="mt-5 text-center">
              <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                {current.category}
              </p>
              <p className="text-white text-sm md:text-base">{current.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryLightbox;
