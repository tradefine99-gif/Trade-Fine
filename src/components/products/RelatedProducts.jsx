import React from 'react';
import { Eye } from 'lucide-react';
import { getRelatedProducts } from '../../services/productsService';

const RelatedProducts = ({ product, allProducts, onSelect }) => {
  const related = getRelatedProducts(allProducts ?? [], product);
  if (related.length === 0) return null;

  return (
    <div>
      <h3 className="text-white text-xl md:text-2xl font-black tracking-tight mb-6">
        You May Also Need
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {related.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item)}
            className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer"
          >
            <div className="relative aspect-square overflow-hidden bg-[#080D16]">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#080D16] text-[10px] font-bold uppercase tracking-widest">
                  <Eye size={12} /> View Details
                </span>
              </div>
            </div>
            <div className="p-3">
              <p className="text-white text-[13px] font-bold truncate">{item.name}</p>
              <p className="text-gray-500 text-[11px] uppercase tracking-wider">{item.subcategory}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
