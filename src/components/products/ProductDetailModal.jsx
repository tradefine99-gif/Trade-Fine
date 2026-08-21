import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight, MessageCircle, Mail, ChevronRight } from 'lucide-react';
import ProductViewer from './ProductViewer';
import ProductSpecs from './ProductSpecs';
import CustomizationPreview from './CustomizationPreview';
import ManufacturingConfidence from './ManufacturingConfidence';
import ProcessTimeline from './ProcessTimeline';
import TrustBadges from './TrustBadges';
import RelatedProducts from './RelatedProducts';

const WHATSAPP_URL = 'https://wa.me/923316131936';
const EMAIL_ADDRESS = 'tradfine99@gmail.com';

const Section = ({ title, children }) => (
  <div className="pt-10 border-t border-white/10">
    {title && (
      <h3 className="text-white text-xl md:text-2xl font-black tracking-tight mb-6">{title}</h3>
    )}
    {children}
  </div>
);

const ProductDetailModal = ({ product, allProducts, onClose, onSelectProduct }) => {
  // Lock body scroll while open, always restore on unmount/close.
  useEffect(() => {
    if (!product) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [product, onClose]);

  // Separate from the effect above on purpose: this one keys on whether
  // the modal is open at all (not on *which* product), so switching
  // between related products while the modal stays open doesn't yank
  // focus back to the original trigger card mid-browse — only a real
  // close does.
  const isOpen = Boolean(product);
  useEffect(() => {
    if (!isOpen) return undefined;
    const trigger = document.activeElement;
    return () => {
      if (trigger instanceof HTMLElement) trigger.focus();
    };
  }, [isOpen]);

  const handleSelect = (next) => {
    onSelectProduct(next);
    // Scroll the modal body back to top for the newly selected product.
    const el = document.getElementById('product-detail-scroll');
    if (el) el.scrollTop = 0;
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-detail-title"
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

        <motion.div
          id="product-detail-scroll"
          key={product.id}
          className="relative z-10 w-full h-full sm:h-auto sm:max-w-5xl sm:max-h-[92vh] overflow-y-auto sm:rounded-3xl border border-white/10 bg-[#0b1221] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            onClick={onClose}
            className="fixed sm:absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/15 backdrop-blur-md flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-colors cursor-pointer"
            aria-label="Close product details"
          >
            <X size={18} />
          </button>

          <div className="p-6 md:p-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-500 mb-6">
              <span>{product.category?.replace('-', ' ')}</span>
              <ChevronRight size={12} />
              <span className="text-orange-500">{product.subcategory}</span>
            </div>

            {/* Viewer + Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <ProductViewer product={product} />

              <div className="flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {(product.badges ?? []).map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] font-bold uppercase tracking-widest"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-1">
                  {product.type}
                </p>
                <h2 id="product-detail-title" className="text-white text-2xl md:text-3xl font-black tracking-tight mb-3">
                  {product.name}
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {(product.customization ?? []).map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white text-[11px] font-semibold"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <ProductSpecs product={product} />

                <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Request a Quote
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-xs uppercase tracking-widest border border-white/15 bg-white/[0.03] hover:border-orange-500/40 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    Customize This Product
                  </Link>
                </div>
              </div>
            </div>

            {/* Customization Preview */}
            <Section title="Customize This Style">
              <CustomizationPreview product={product} />
            </Section>

            {/* Manufacturing Confidence */}
            <Section>
              <ManufacturingConfidence />
            </Section>

            {/* Process Timeline */}
            <Section>
              <ProcessTimeline />
            </Section>

            {/* Trust Indicators */}
            <Section title="Trust Indicators">
              <TrustBadges />
            </Section>

            {/* Related Products */}
            <Section>
              <RelatedProducts product={product} allProducts={allProducts} onSelect={handleSelect} />
            </Section>

            {/* Final Inquiry CTA */}
            <Section>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-60 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
                <h3 className="relative z-10 text-white text-2xl md:text-3xl font-black tracking-tight mb-3">
                  Ready to Manufacture Your Custom Sportswear?
                </h3>
                <p className="relative z-10 text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8">
                  Talk to our team about fabric, customization and pricing for {product.name.toLowerCase()}.
                </p>
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
                  >
                    Request a Quote
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-green-400 font-bold text-xs uppercase tracking-widest border border-green-500/30 bg-green-500/[0.06] hover:bg-green-500/[0.12] transition-all w-full sm:w-auto cursor-pointer"
                  >
                    <MessageCircle size={14} />
                    WhatsApp Us
                  </a>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-xs uppercase tracking-widest border border-white/15 bg-white/[0.03] hover:border-orange-500/40 hover:bg-white/[0.06] transition-all w-full sm:w-auto cursor-pointer"
                  >
                    <Mail size={14} />
                    Email Us
                  </a>
                </div>
              </div>
            </Section>
          </div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailModal;
