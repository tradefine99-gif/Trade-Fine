import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera, Expand, Sparkles, X } from 'lucide-react';

// Presentation views generated from the single source photo. Each is clearly
// labeled "Reference Preview" so nothing here misleads a buyer into thinking
// these are separate photographs — they're CSS-generated crops/mirrors of the
// one real product photo, used the way a design team would sketch alternate
// angles before real tech-pack photography exists.
const GENERATED_VIEWS = [
  { key: 'front', label: 'Front View', kind: 'plain', transform: 'none', origin: 'center' },
  { key: 'back', label: 'Back View', kind: 'reference', transform: 'scaleX(-1)', origin: 'center' },
  { key: 'side', label: 'Side View', kind: 'reference', transform: 'scaleX(-1) skewY(-2deg) scale(1.02)', origin: 'center' },
  { key: 'detail', label: 'Detail Zoom', kind: 'zoom', transform: 'scale(1.7)', origin: '50% 30%' },
  { key: 'fabric', label: 'Fabric Texture', kind: 'zoom', transform: 'scale(2.6)', origin: '65% 55%' },
  { key: 'logo', label: 'Logo Placement', kind: 'zoom', transform: 'scale(2.1)', origin: '50% 20%' },
  { key: 'stitching', label: 'Stitching Detail', kind: 'zoom', transform: 'scale(2.3)', origin: '20% 80%' },
];

const ProductViewer = ({ product }) => {
  // Real client-supplied photos of this exact product (image_type
  // 'showcase' in product_images), added on top of the generated
  // presentation views — never replacing the primary image.
  const realPhotos = useMemo(
    () =>
      (product.images || [])
        .filter((img) => img.type === 'showcase' && img.url)
        .map((img, i) => ({
          key: `real-${i}`,
          label: img.alt || 'Real Client Photo',
          kind: 'real',
          src: img.url,
        })),
    [product.images]
  );

  const VIEWS = useMemo(() => [...realPhotos, ...GENERATED_VIEWS], [realPhotos]);

  const [activeKey, setActiveKey] = useState(VIEWS[0]?.key || 'front');
  const [hoverZoom, setHoverZoom] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const active = VIEWS.find((v) => v.key === activeKey) || VIEWS[0];
  const comingSoon = !product.image;
  const activeSrc = active.kind === 'real' ? active.src : product.image;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setZoomPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  if (comingSoon) {
    return (
      <div className="aspect-[4/5] rounded-2xl border border-dashed border-white/15 bg-white/[0.02] flex flex-col items-center justify-center gap-3 text-center px-6">
        <Sparkles className="text-orange-500" size={30} />
        <p className="text-white font-bold text-sm">No sample photographed yet</p>
        <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
          This style is manufactured entirely to specification. Share a sketch or reference and
          we'll produce your sample.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div
        className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#080D16] border border-white/10 cursor-zoom-in group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHoverZoom(true)}
        onMouseLeave={() => setHoverZoom(false)}
        onClick={() => setLightboxOpen(true)}
      >
        <img
          src={activeSrc}
          alt={`${product.name} — ${active.label}`}
          className="w-full h-full object-cover transition-transform duration-300 ease-out"
          style={
            active.kind === 'real'
              ? undefined
              : {
                  transform:
                    active.kind === 'zoom'
                      ? `scale(${hoverZoom ? 2.2 : 1.5})`
                      : hoverZoom
                      ? `${active.transform === 'none' ? '' : active.transform} scale(1.08)`
                      : active.transform,
                  transformOrigin: active.kind === 'zoom' ? `${zoomPos.x}% ${zoomPos.y}%` : active.origin,
                }
          }
        />
        <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/50 border border-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white">
          {active.label}
        </span>
        {active.kind === 'reference' && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-orange-500/90 text-[9px] font-bold uppercase tracking-widest text-white">
            Reference Preview
          </span>
        )}
        {active.kind === 'real' && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 text-[9px] font-bold uppercase tracking-widest text-white">
            <Camera size={10} />
            Real Client Photo
          </span>
        )}
        <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 border border-white/15 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Expand size={13} />
        </span>
      </div>

      {/* Thumbnail switcher */}
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mt-4">
        {VIEWS.map((v) => (
          <button
            key={v.key}
            type="button"
            onClick={() => setActiveKey(v.key)}
            className={`relative aspect-square rounded-lg overflow-hidden border transition-all cursor-pointer ${
              activeKey === v.key
                ? 'border-orange-500 shadow-[0_0_0_2px_rgba(249,115,22,0.3)]'
                : 'border-white/10 hover:border-white/30'
            }`}
          >
            <img
              src={v.kind === 'real' ? v.src : product.image}
              alt={v.label}
              className="w-full h-full object-cover"
              style={v.kind === 'real' ? undefined : { transform: v.transform, transformOrigin: v.origin }}
            />
            {v.kind === 'real' && (
              <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-500 border border-white/40 flex items-center justify-center">
                <Camera size={7} className="text-white" />
              </span>
            )}
            <span className="absolute inset-x-0 bottom-0 py-0.5 bg-black/60 text-[6.5px] text-center text-white uppercase tracking-widest font-bold leading-tight">
              {v.label}
            </span>
          </button>
        ))}
      </div>
      <p className="text-gray-500 text-[11px] leading-relaxed mt-3">
        {realPhotos.length > 0
          ? 'Photos marked "Real Client Photo" are actual production photography from a completed order. Back, side and close-up views are generated presentation references from the primary photo, not separate photographs.'
          : "Back, side and close-up views are generated presentation references from the front photo — not separate photographs. Real fabric swatches and sample photography follow once your project begins."}
      </p>

      {/* Click-to-enlarge lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[130] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-black/50 border border-white/15 flex items-center justify-center text-white hover:bg-orange-500 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <motion.img
              src={activeSrc}
              alt={product.name}
              className="relative z-10 max-w-3xl max-h-[85vh] w-auto h-auto rounded-2xl border border-white/10 object-contain"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductViewer;
