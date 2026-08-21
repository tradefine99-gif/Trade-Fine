import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shirt,
  Palette,
  Grid3x3,
  Scissors,
  Waves,
  Printer,
  Gem,
  MapPin,
  Tag,
  Package,
} from 'lucide-react';

const COLOR_SWATCHES = [
  { name: 'Original', filter: 'none' },
  { name: 'Team Navy', filter: 'hue-rotate(180deg) saturate(1.3)' },
  { name: 'Crimson', filter: 'hue-rotate(320deg) saturate(1.6)' },
  { name: 'Forest', filter: 'hue-rotate(90deg) saturate(1.2)' },
  { name: 'Sunset', filter: 'hue-rotate(30deg) saturate(1.5)' },
  { name: 'Charcoal', filter: 'grayscale(0.7) brightness(0.8)' },
];

const OPTIONS = [
  {
    key: 'fabric',
    label: 'Fabric',
    icon: Shirt,
    detail: 'Choose from 100+ fabric bases, blends and weights for this style.',
  },
  {
    key: 'color',
    label: 'Color',
    icon: Palette,
    detail: 'Preview a colorway below, then confirm any Pantone or brand match with our team.',
  },
  { key: 'pattern', label: 'Pattern', icon: Grid3x3, detail: 'Custom cut-and-sew patterns or your own tech pack.' },
  { key: 'collar', label: 'Collar Style', icon: Waves, detail: 'Crew, V-neck, polo collar or custom collar builds.' },
  { key: 'sleeve', label: 'Sleeve Style', icon: Scissors, detail: 'Short, long, raglan or sleeveless cuts available.' },
  { key: 'printing', label: 'Printing Method', icon: Printer, detail: 'Sublimation, DTF, DTG, screen or reflective printing.' },
  { key: 'embroidery', label: 'Embroidery', icon: Scissors, detail: 'Flat, 3D puff and chenille embroidery.' },
  { key: 'stone', label: 'Stone Placement', icon: Gem, detail: 'Rhinestone and stud placement for team or fashion pieces.' },
  { key: 'logo', label: 'Logo Position', icon: MapPin, detail: 'Chest, sleeve, back or all-over logo placement.' },
  { key: 'labels', label: 'Labels', icon: Tag, detail: 'Woven, printed or heat-transfer main and care labels.' },
  { key: 'packaging', label: 'Packaging', icon: Package, detail: 'Polybags, boxes or fully custom branded packaging.' },
];

const CustomizationPreview = ({ product }) => {
  const [active, setActive] = useState('fabric');
  const [swatch, setSwatch] = useState(COLOR_SWATCHES[0]);
  const activeOption = OPTIONS.find((o) => o.key === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {OPTIONS.map((opt) => (
          <button
            key={opt.key}
            type="button"
            onClick={() => setActive(opt.key)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all cursor-pointer ${
              active === opt.key
                ? 'bg-orange-500 border-orange-500 text-white'
                : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-white hover:border-orange-500/40'
            }`}
          >
            <opt.icon size={12} />
            {opt.label}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col md:flex-row gap-6 items-center"
      >
        {product.image && (
          <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 bg-[#080D16]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-[filter] duration-300"
              style={{ filter: active === 'color' ? swatch.filter : 'none' }}
            />
          </div>
        )}
        <div className="flex-1">
          <h4 className="text-white font-bold text-base mb-1.5">{activeOption?.label}</h4>
          <p className="text-gray-400 text-base leading-relaxed mb-3">{activeOption?.detail}</p>

          {active === 'color' && (
            <div className="flex flex-wrap gap-2">
              {COLOR_SWATCHES.map((s) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setSwatch(s)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                    swatch.name === s.name
                      ? 'border-orange-500 text-white bg-orange-500/10'
                      : 'border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CustomizationPreview;
