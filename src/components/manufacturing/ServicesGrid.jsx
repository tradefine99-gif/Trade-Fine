import React from 'react';
import { motion } from 'framer-motion';
import {
  Factory,
  PenTool,
  BadgeCheck,
  Layers,
  Droplet,
  Palette,
  Scissors,
  Gem,
  PenSquare,
} from 'lucide-react';

const SERVICES = [
  {
    slug: 'oem-manufacturing',
    title: 'OEM Manufacturing',
    icon: Factory,
    description:
      "You bring the design specs, we handle full-scale production — from pattern to finished, packed garment.",
  },
  {
    slug: 'odm-manufacturing',
    title: 'ODM Manufacturing',
    icon: PenTool,
    description:
      'No design yet? Our in-house R&D team develops the concept, patterns and samples from scratch.',
  },
  {
    slug: 'private-label',
    title: 'Private Label',
    icon: BadgeCheck,
    description: 'Launch under your own brand name with custom labels, tags, and packaging.',
  },
  {
    slug: 'dtf-printing',
    title: 'DTF Printing',
    icon: Layers,
    description: 'Durable, vibrant direct-to-film transfers that hold up to heavy wash cycles.',
  },
  {
    slug: 'dtg-printing',
    title: 'DTG Printing',
    icon: Droplet,
    description: 'Photo-realistic direct-to-garment printing for detailed, multi-color designs.',
  },
  {
    slug: 'sublimation-printing',
    title: 'Sublimation Printing',
    icon: Palette,
    description: 'Full all-over prints with high-definition inks that never crack or peel.',
  },
  {
    slug: 'embroidery',
    title: 'Embroidery',
    icon: Scissors,
    description: 'Precision-stitched logos and branding for a premium, tactile finish.',
  },
  {
    slug: 'stone-placement',
    title: 'Stone Placement',
    icon: Gem,
    description: 'Rhinestone and stud detailing applied with industrial-grade accuracy.',
  },
  {
    slug: 'logo-development',
    title: 'Logo Development',
    icon: PenSquare,
    description: 'From concept sketches to production-ready brand marks and tech packs.',
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-[#080D16] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-white mb-16 tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Everything Under One Roof
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              id={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:-translate-y-2 hover:bg-white/[0.06] hover:border-orange-500/40 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.2)] transition-all duration-500 scroll-mt-24"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-orange-500/10 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
