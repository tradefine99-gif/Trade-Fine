import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shirt,
  Palette,
  Grid3x3,
  Printer,
  Scissors,
  Tag,
  BadgeCheck,
  Bookmark,
  PackageCheck,
  Gem,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CHIPS = [
  { label: 'Fabric', icon: Shirt, detail: 'Choose from 100+ fabric bases, blends and weights.' },
  { label: 'Color', icon: Palette, detail: 'Any Pantone or brand color, matched and lab-dipped.' },
  { label: 'Pattern', icon: Grid3x3, detail: 'Custom cut-and-sew patterns or your own tech pack.' },
  { label: 'Printing', icon: Printer, detail: 'Sublimation, DTF and DTG printing methods.' },
  { label: 'Embroidery', icon: Scissors, detail: 'Flat, 3D puff and chenille embroidery.' },
  { label: 'Labels', icon: Tag, detail: 'Woven, printed or heat-transfer main labels.' },
  { label: 'Neck Tags', icon: BadgeCheck, detail: 'Custom neck tags built to your brand guidelines.' },
  { label: 'Hang Tags', icon: Bookmark, detail: 'Branded hang tags, swing tickets and barcodes.' },
  { label: 'Packaging', icon: PackageCheck, detail: 'Polybags, boxes or custom branded packaging.' },
  { label: 'Accessories', icon: Gem, detail: 'Caps, bags, socks and finishing accessories.' },
];

const CustomizationSection = () => {
  const [active, setActive] = useState(CHIPS[0].label);
  const activeChip = CHIPS.find((c) => c.label === active);

  return (
    <section className="relative bg-[#080D16] py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.span
            className="inline-block text-orange-500 text-xs font-bold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Customization, Built In
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            You imagine it —
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">
              we manufacture it.
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Every piece in our range is a starting point, not a fixed SKU. Select an option below
            to see how deep the customization goes.
          </motion.p>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CHIPS.map((chip) => (
            <button
              key={chip.label}
              type="button"
              onClick={() => setActive(chip.label)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                active === chip.label
                  ? 'bg-orange-500 border-orange-500 text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)]'
                  : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-white hover:border-orange-500/40'
              }`}
            >
              <chip.icon size={14} />
              {chip.label}
            </button>
          ))}
        </div>

        {/* Active detail panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
        >
          <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
            {activeChip && <activeChip.icon size={28} className="text-orange-500" />}
          </div>
          <div className="flex-1">
            <h3 className="text-white text-2xl font-bold tracking-tight mb-2">{active}</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {activeChip?.detail}
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-xs font-bold uppercase tracking-widest border border-white/15 bg-white/[0.03] hover:border-orange-500/40 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            Discuss This Option
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomizationSection;
