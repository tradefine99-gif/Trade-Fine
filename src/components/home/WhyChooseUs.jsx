import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Award, 
  Settings, 
  Zap, 
  Globe, 
  Timer, 
  Tag, 
  ChevronRight 
} from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Award,
    title: "Premium Quality",
    description: "Strict quality control protocols and high-grade functional fabrics ensure your brand delivers retail-quality performance apparel."
  },
  {
    id: 2,
    icon: Settings,
    title: "OEM & ODM Expertise",
    description: "Whether you have technical packs or just a vision, our R&D team provides complete design-to-delivery manufacturing solutions."
  },
  {
    id: 3,
    icon: Zap,
    title: "Low MOQ",
    description: "Support for emerging brands with flexible Minimum Order Quantities, allowing you to test markets without high inventory risk."
  },
  {
    id: 4,
    icon: Globe,
    title: "Worldwide Shipping",
    description: "Comprehensive export logistics serving global brands across USA, Europe, and UAE with duty-optimized shipping routes."
  },
  {
    id: 5,
    icon: Timer,
    title: "Fast Production",
    description: "Streamlined manufacturing lines ensure rapid turnaround times and on-time delivery for seasonal sportswear drops."
  },
  {
    id: 6,
    icon: Tag,
    title: "Private Label",
    description: "Full customization including custom logos, woven labels, heat-transfer neck tags, and branded packaging solutions."
  }
];

const WhyChooseUs = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#080D16] py-28 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">
              Why Choose TradeFine
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Why Global Sportswear <br className="hidden md:block" /> Brands Choose Us
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
            TradeFine specializes in premium <strong className="text-white font-medium">OEM & ODM sportswear manufacturing</strong>. We bridge the gap between high-performance technical requirements and scalable production with a focus on durability, aesthetics, and global logistics.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-4 hover:border-orange-500/40 hover:bg-white/10 hover:shadow-[0_0_50px_-15px_rgba(249,115,22,0.3)] overflow-hidden"
            >
              {/* Card Accent Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Icon Box */}
                <motion.div 
                  className="inline-flex items-center justify-center p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-8 transition-all duration-500 group-hover:scale-125 group-hover:bg-orange-500 group-hover:shadow-lg group-hover:shadow-orange-500/20"
                  whileHover={{ scale: 1.15 }}
                >
                  <feature.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-500" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-0 left-0 w-24 h-1 bg-linear-to-r from-orange-500 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Area */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            onClick={() => navigate('/contact')}
            className="cursor-pointer group relative px-10 py-5 bg-linear-to-r from-orange-600 to-red-600 text-white font-bold text-sm uppercase tracking-widest rounded-sm shadow-xl shadow-orange-900/20 transition-all duration-300 hover:shadow-orange-600/40 hover:-translate-y-1 flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Manufacturing Quote
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            
            {/* Gloss Reflection Overlay */}
            <span className="absolute top-0 left-0 w-full h-full bg-white/10 -skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></span>
          </motion.button>
          
          <span className="mt-6 text-gray-500 text-xs font-semibold uppercase tracking-tighter">
            Response Time: Typically Within 24 Business Hours
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;