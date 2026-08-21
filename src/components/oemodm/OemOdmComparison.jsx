import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Factory, PenTool, Tag, Check, ArrowRight } from 'lucide-react';

const PATHS = [
  {
    icon: Factory,
    title: 'OEM Manufacturing',
    tagline: 'Your design, our production',
    points: [
      'You provide tech packs, patterns or reference samples',
      'We handle fabric sourcing, cutting, sewing and finishing',
      'Full quality control on your exact specification',
      'Best for brands with an in-house design team',
    ],
  },
  {
    icon: PenTool,
    title: 'ODM Design Service',
    tagline: 'Full design + manufacturing',
    points: [
      'Our R&D team develops the concept from a brief',
      'Technical patterns, samples and fit approval included',
      'Ideal for new brands or fast seasonal collections',
      'Lower lead time from idea to finished garment',
    ],
  },
  {
    icon: Tag,
    title: 'Private Label',
    tagline: 'Brand it as your own',
    points: [
      'Custom neck labels, hang tags and packaging',
      'Works with either OEM or ODM production',
      'No minimum branding restrictions',
      'Ready for direct retail or wholesale distribution',
    ],
  },
];

const OemOdmComparison = () => {
  return (
    <section className="bg-[#080D16] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PATHS.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                <path.icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-white font-bold text-2xl tracking-tight mb-1">{path.title}</h3>
              <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-6">
                {path.tagline}
              </p>
              <ul className="space-y-3">
                {path.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-white font-bold text-[11px] uppercase tracking-widest hover:text-orange-500 transition-colors"
              >
                Discuss This Route
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OemOdmComparison;
