import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Layers, Eye, Sparkles, Boxes } from 'lucide-react';

const ProductCard = ({ product, index = 0, onOpen }) => {
  const comingSoon = !product.image;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, delay: Math.min(index, 8) * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-orange-500/40 hover:shadow-[0_25px_60px_-15px_rgba(249,115,22,0.35)] transition-[border-color,box-shadow] duration-500"
    >
      {/* Image */}
      <button
        type="button"
        onClick={() => onOpen(product)}
        className="relative block w-full aspect-[4/5] overflow-hidden bg-[#0b1221] cursor-pointer"
      >
        {comingSoon ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-white/[0.04] to-transparent">
            <Sparkles className="text-orange-500" size={28} />
            <span className="text-gray-400 text-[11px] font-bold uppercase tracking-widest px-6 text-center">
              Made to Order
            </span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        {/* Layered gradient + glass sheen on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-[#080D16]/10 to-transparent opacity-70" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 border border-white/15 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest text-orange-400">
            <Factory size={10} /> Custom Manufacturing
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 border border-white/15 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest text-cyan-400">
            <Layers size={10} /> OEM / ODM
          </span>
        </div>

        {/* View details overlay button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 text-[#080D16] text-xs font-bold uppercase tracking-widest shadow-xl scale-95 group-hover:scale-100 transition-transform duration-400">
            <Eye size={14} /> View Details
          </span>
        </div>
      </button>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between gap-2 mb-1">
          <p className="text-orange-500 text-[11px] font-bold uppercase tracking-widest">
            {product.subcategory}
          </p>
          <span className="text-gray-500 text-[11px] font-semibold uppercase tracking-wider">
            {product.type}
          </span>
        </div>
        <h3 className="text-white font-bold text-base mb-2 tracking-tight">{product.name}</h3>
        <p className="text-gray-400 text-[13.5px] leading-relaxed mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between gap-3 mb-4 text-[11px] text-gray-400">
          <span className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider">
            <Sparkles size={12} className="text-orange-500" /> Fully Customizable
          </span>
          <span className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider">
            <Boxes size={12} className="text-orange-500" /> MOQ {product.spec.moq.split(' ')[0]}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.customization.slice(0, 3).map((c) => (
            <span
              key={c}
              className="px-2 py-1 rounded-md bg-white/[0.04] border border-white/10 text-gray-300 text-[9px] font-semibold uppercase tracking-wider"
            >
              {c}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(product)}
          className="inline-flex items-center gap-1.5 text-white text-[11px] font-bold uppercase tracking-widest hover:text-orange-500 transition-colors cursor-pointer"
        >
          View Details
          <Eye size={13} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
