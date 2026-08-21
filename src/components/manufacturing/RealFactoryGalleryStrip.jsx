import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, ArrowUpRight } from 'lucide-react';
import { getGalleryItems } from '../../services/galleryService';
import { LoadingGrid, ErrorState } from '../common/DataState';

// This strip surfaces the newest real-photo batch pulled dynamically from
// Supabase (gallery_items), identified by caption rather than a hardcoded
// import list — so adding/removing rows in the database is reflected here
// automatically, with zero code changes. Keeping it caption-keyed (instead
// of e.g. "everything in these categories") means it never accidentally
// swallows the older stills RealFactoryProof already displays above it.
const STRIP_CAPTIONS = new Set([
  'Folded garments staged for packing, stairwell view',
  'Folded garments bagged ahead of cartoning',
  'Polybagged garments, ready for cartons',
  'Folded hoodies stacked for packing',
  'Poly-wrapped bundles ready for export',
  'Bagged padded shorts, finished inventory',
  'Football shoulder pad sets, stacked for shipment',
  'Sewing operator assembling padded panels at the table',
]);

/**
 * A single tile with a premium 3D tilt-on-hover effect: the card rotates
 * slightly toward the cursor, lifts with a soft shadow, and a diagonal
 * light sweep + caption slide in. Pure CSS transforms driven by mouse
 * position, no extra libraries beyond framer-motion (already a
 * dependency throughout this codebase).
 */
function TiltCard({ item, index }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -10, ry: px * 12 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
      style={{ perspective: 900 }}
    >
      <div
        onMouseMove={handleMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          setTilt({ rx: 0, ry: 0 });
        }}
        className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#0b1220] cursor-pointer will-change-transform"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${hovering ? 1.045 : 1})`,
          transition: hovering ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
          boxShadow: hovering
            ? '0 24px 60px -12px rgba(249,115,22,0.35), 0 8px 24px -8px rgba(0,0,0,0.6)'
            : '0 4px 14px -6px rgba(0,0,0,0.4)',
        }}
      >
        <img
          src={item.src}
          alt={item.caption}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Diagonal light sweep */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.16) 45%, transparent 60%)',
            transform: hovering ? 'translateX(0%)' : 'translateX(-120%)',
            transition: 'transform 0.7s ease-out, opacity 0.5s ease',
          }}
        />

        {/* Base gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Real photo badge */}
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 text-[9px] font-bold uppercase tracking-widest text-white shadow-lg">
          <Camera size={10} />
          Real Photo
        </span>

        {/* Orange glow ring on hover */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-orange-500/50 transition-all duration-500 pointer-events-none" />

        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-orange-400 text-[9px] font-bold uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {item.category}
          </p>
          <p className="text-white text-xs md:text-sm font-semibold leading-snug">{item.caption}</p>
        </div>
      </div>
    </motion.div>
  );
}

const RealFactoryGalleryStrip = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error | empty

  const load = async () => {
    setStatus('loading');
    const { items: all, error } = await getGalleryItems();
    if (error) {
      setStatus('error');
      return;
    }
    const filtered = all.filter((i) => STRIP_CAPTIONS.has(i.caption) && i.mediaType === 'image');
    setItems(filtered);
    setStatus(filtered.length > 0 ? 'ready' : 'empty');
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard fetch-on-mount pattern; load() is async and safe to call here.
    load();
  }, []);

  if (status === 'empty') return null;

  return (
    <section className="bg-[#080D16] pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Camera size={14} className="text-purple-400" />
              <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">
                Latest From the Floor
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
              Finishing, Quality Checks &amp; Dispatch
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl">
              The last mile of every order — folding, bagging, boxing and staging for export,
              photographed straight off our floor.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-xs uppercase tracking-widest border border-white/15 bg-white/[0.03] hover:border-orange-500/40 hover:bg-white/[0.06] transition-all shrink-0"
          >
            View Full Gallery
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {status === 'loading' && <LoadingGrid count={8} />}
        {status === 'error' && <ErrorState onRetry={load} />}

        {status === 'ready' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {items.map((item, i) => (
              <TiltCard key={item.id} item={item} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RealFactoryGalleryStrip;
