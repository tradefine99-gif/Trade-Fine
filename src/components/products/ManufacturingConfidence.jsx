import React from 'react';
import { motion } from 'framer-motion';
import {
  Factory,
  Layers,
  Gem,
  ShieldCheck,
  Globe2,
  Boxes,
  Zap,
  Truck,
} from 'lucide-react';

const REASONS = [
  { icon: Factory, label: 'Fully Customized Manufacturing', text: 'Every unit built to your spec, not pulled from stock.' },
  { icon: Layers, label: 'OEM & ODM Services', text: 'Bring your own design or develop one with our team.' },
  { icon: Gem, label: 'Premium Quality Fabrics', text: 'Sourced and tested fabric bases across every category.' },
  { icon: ShieldCheck, label: 'Strict Quality Inspection', text: 'Multi-stage inline and pre-shipment quality checks.' },
  { icon: Globe2, label: 'Global Export Standards', text: 'Packed and documented for worldwide compliance.' },
  { icon: Boxes, label: 'Low MOQ Available', text: 'Accessible order minimums for growing brands.' },
  { icon: Zap, label: 'Fast Sample Development', text: 'Rapid turnaround from tech pack to approved sample.' },
  { icon: Truck, label: 'Worldwide Shipping', text: 'Air and sea freight options to any destination.' },
];

const ManufacturingConfidence = () => {
  return (
    <div>
      <h3 className="text-white text-xl md:text-2xl font-black tracking-tight mb-6">
        Why Choose This Product?
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {REASONS.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-orange-500/40 hover:bg-white/[0.05] transition-colors duration-300"
          >
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3">
              <r.icon size={16} className="text-orange-500" />
            </div>
            <p className="text-white text-xs font-bold leading-snug mb-1">{r.label}</p>
            <p className="text-gray-500 text-[11px] leading-snug">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ManufacturingConfidence;
