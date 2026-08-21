import React from 'react';
import { motion } from 'framer-motion';
import {
  PenTool,
  MessagesSquare,
  FlaskConical,
  ThumbsUp,
  Factory,
  ShieldCheck,
  PackageCheck,
  Globe2,
} from 'lucide-react';

const STEPS = [
  { icon: PenTool, title: 'Share Your Design', text: 'Send a sketch, tech pack or reference image.' },
  { icon: MessagesSquare, title: 'Consultation & Fabric Selection', text: 'We advise on fabric, construction and pricing.' },
  { icon: FlaskConical, title: 'Sample Development', text: 'A physical sample is produced for your review.' },
  { icon: ThumbsUp, title: 'Customer Approval', text: 'Adjustments are made until the sample is signed off.' },
  { icon: Factory, title: 'Bulk Manufacturing', text: 'Full production begins to your confirmed spec.' },
  { icon: ShieldCheck, title: 'Quality Inspection', text: 'Inline and final checks across the full order.' },
  { icon: PackageCheck, title: 'Packaging', text: 'Private label, polybag or custom carton packing.' },
  { icon: Globe2, title: 'Worldwide Delivery', text: 'Shipped by air or sea to your destination.' },
];

const ProcessTimeline = () => {
  return (
    <div>
      <h3 className="text-white text-xl md:text-2xl font-black tracking-tight mb-8">
        Manufacturing Process
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
            className="relative rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                <step.icon size={15} className="text-orange-500" />
              </div>
            </div>
            <p className="text-white text-sm font-bold leading-snug mb-1">{step.title}</p>
            <p className="text-gray-500 text-xs leading-snug">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
