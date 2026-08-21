import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Factory, 
  PenTool, 
  Shirt, 
  BadgeCheck, 
  Palette, 
  Sparkles, 
  ArrowRight, 
  ChevronRight 
} from 'lucide-react';

const ManufacturingServices = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "OEM Manufacturing",
      icon: Factory,
      description: "Customer designs, our manufacturing expertise. We turn your tech packs into market-ready products.",
      accent: "hover:border-orange-500/50 hover:shadow-orange-500/10",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10",
      link: "/manufacturing"
    },
    {
      id: 2,
      title: "ODM Manufacturing",
      icon: PenTool,
      description: "Complete design and manufacturing solution. Leverage our R&D team to build your collection.",
      accent: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-500/10",
      link: "/manufacturing"
    },
    {
      id: 3,
      title: "Custom Sportswear",
      icon: Shirt,
      description: "Performance apparel for every sport. Specialized fabrics for professional and amateur athletes.",
      accent: "hover:border-orange-500/50 hover:shadow-orange-500/10",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10",
      link: "/products"
    },
    {
      id: 4,
      title: "Private Label",
      icon: BadgeCheck,
      description: "Launch products under your own brand. Certified production lines ready for your branding.",
      accent: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-500/10",
      link: "/oem-odm"
    },
    {
      id: 5,
      title: "Sublimation Printing",
      icon: Palette,
      description: "High-quality vibrant full-print garments using high-definition Italian inks.",
      accent: "hover:border-orange-500/50 hover:shadow-orange-500/10",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10",
      link: "/manufacturing"
    },
    {
      id: 6,
      title: "Embroidery & DTF",
      icon: Sparkles,
      description: "Premium branding and decoration services for a professional high-end finish.",
      accent: "hover:border-cyan-500/50 hover:shadow-cyan-500/10",
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-500/10",
      link: "/manufacturing"
    }
  ];

  return (
    <section id="services" className="py-28 gradient-black-orange-radial relative overflow-hidden scroll-mt-20">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <motion.div 
            className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
              Our Manufacturing Services
            </span>
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Premium Sportswear <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-cyan-500">
              Manufacturing Solutions
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            TradeFine provides complete OEM and ODM sportswear manufacturing for brands worldwide 
            with strict quality control, industrial expertise, and competitive low MOQ.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              role="button"
              tabIndex={0}
              onClick={() => navigate(service.link)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate(service.link); } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`group p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 cursor-pointer
              hover:-translate-y-3 hover:bg-white/[0.08] hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2 ${service.accent} overflow-hidden relative`}
            >
              {/* Premium gradient accent */}
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card content */}
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-125 group-hover:shadow-lg ${service.iconBg}`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor} transition-all duration-500`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-[11px] uppercase tracking-widest group-hover:text-orange-500 transition-all duration-300 group-hover:gap-3">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button 
            onClick={() => navigate('/manufacturing')}
            className="relative cursor-pointer group overflow-hidden px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-orange-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button Background with v4 Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-orange-400 group-hover:from-cyan-600 group-hover:to-cyan-400 transition-all duration-500" />
            
            {/* Button Content */}
            <span className="relative flex items-center gap-3 text-white">
              Explore Manufacturing Process
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ManufacturingServices;