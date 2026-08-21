import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  PenTool,
  Boxes,
  Factory,
  ClipboardCheck,
  Globe,
} from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Inquiry & Consultation',
    description:
      'Submit your design specs, tech pack, or even a rough concept. We discuss MOQs, lead times, fabric options and budget.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Design & Sampling',
    description:
      'Our R&D team develops technical patterns and produces a physical sample for your approval before bulk production begins.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Material Sourcing',
    description:
      'We source performance-grade fabrics, trims and hardware tailored to your sport, climate and price point.',
    icon: Boxes,
  },
  {
    number: '04',
    title: 'Production & Decoration',
    description:
      'Cutting, sewing, printing and embroidery run in-house on industrial-scale lines with dedicated quality checkpoints at every stage.',
    icon: Factory,
  },
  {
    number: '05',
    title: 'Quality Inspection',
    description:
      'A three-tier inspection process — inline, pre-final and pre-shipment — ensures every unit meets export-grade standards.',
    icon: ClipboardCheck,
  },
  {
    number: '06',
    title: 'Packing & Worldwide Delivery',
    description:
      'Custom packaging, labeling and duty-optimized shipping to over 50 countries via sea, air or land freight.',
    icon: Globe,
  },
];

const ProcessTimeline = () => {
  return (
    <section className="bg-[#080D16] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-white mb-20 tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          From Your Idea to Global Delivery
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-7 top-2 bottom-2 w-px bg-linear-to-b from-orange-500/60 via-white/10 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative flex gap-6 sm:gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-xl bg-[#0b1221] border border-orange-500/30 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-orange-500 font-black text-sm tracking-widest">
                      {step.number}
                    </span>
                    <h3 className="text-white font-bold text-xl tracking-tight">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
