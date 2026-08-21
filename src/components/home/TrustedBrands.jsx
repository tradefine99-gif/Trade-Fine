import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Globe, 
  Layers, 
  ClipboardCheck, 
  ArrowRight,
  Medal,
  Activity,
  Zap,
  Target,
  Package,
  Globe2,
  RefreshCcw,
  Maximize,
  Anchor,
  Circle
} from 'lucide-react';

const brands = [
  { 
    name: "European Sports Brand", 
    sub: "Premium Teamwear",
    icon: Zap 
  },
  { 
    name: "USA Fitness Brand", 
    sub: "Private Label",
    icon: Activity 
  },
  { 
    name: "Global Retail Chain", 
    sub: "Bulk Manufacturing",
    icon: Globe2 
  },
  { 
    name: "Middle East Distributor", 
    sub: "Wholesale Partner",
    icon: RefreshCcw 
  },
  { 
    name: "UK Activewear Brand", 
    sub: "Custom Apparel",
    icon: Target 
  },
  { 
    name: "International Buyer", 
    sub: "Long-term Partner",
    icon: Circle 
  },
  { 
    name: "OEM Manufacturing Client", 
    sub: "Technical Wear",
    icon: Package 
  },
  { 
    name: "Private Label Partner", 
    sub: "Global Expansion",
    icon: Medal 
  }
];

const certifications = [
  {
    icon: ShieldCheck,
    title: "ISO Certified",
    description: "Compliant with ISO 9001:2015 quality management systems for international exports."
  },
  {
    icon: Layers,
    title: "OEKO-TEX Standard",
    description: "Our technical fabrics are certified for human-ecological safety and high-grade quality."
  },
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description: "Established logistics network delivering to major ports across USA, Europe, and UAE."
  },
  {
    icon: ClipboardCheck,
    title: "Quality Assurance",
    description: "Rigorous 3-stage inspection process for every single garment manufactured at TradeFine."
  }
];

const stats = [
  { value: "150+", label: "Global Clients" },
  { value: "30+", label: "Countries Served" },
  { value: "500K+", label: "Products Manufactured" },
  { value: "98%", label: "Client Satisfaction" }
];

const TrustedBrands = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#080D16] py-28 px-6 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto lg:px-12 relative z-10">
        
        {/* CENTERED HEADER SECTION */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8 transition-all duration-300">
            <Activity className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
              Global Trust
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase">
            Trusted by Brands <br className="hidden md:block" /> Around the World
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            TradeFine proudly manufactures premium sportswear, fitness apparel and private label collections for businesses worldwide while maintaining international quality standards through direct OEM/ODM partnerships.
          </p>
        </motion.div>

        {/* LOGO GRID WITH PREMIUM PLACEHOLDERS */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group flex flex-col items-center justify-center p-8 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-500 hover:border-orange-500/40 hover:-translate-y-3 hover:bg-white/[0.06] hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)] relative overflow-hidden"
            >
              {/* Animated Light Reflection */}
              <div className="absolute inset-0 bg-linear-to-tr from-orange-500/0 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Circular Logo Icon */}
              <motion.div 
                className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10 bg-white/5 mb-4 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-500"
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <brand.icon className="w-6 h-6 text-white group-hover:text-orange-500 transition-colors" />
              </motion.div>

              {/* Brand Text Content */}
              <div className="text-center">
                <span className="block text-white font-bold text-base md:text-lg tracking-tight mb-1">
                  {brand.name}
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-gray-500 group-hover:text-orange-500 transition-colors">
                  {brand.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CERTIFICATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {certifications.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 group"
            >
              <motion.div 
                className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/20 transition-all group-hover:bg-orange-500 group-hover:border-transparent"
                whileHover={{ scale: 1.15 }}
              >
                <item.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-white font-bold text-xl mb-4 group-hover:text-orange-500 transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed group-hover:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* STATISTICS SECTION */}
        <div className="relative -mx-6 lg:-mx-12 px-6 lg:px-12 gradient-black-orange-radial rounded-3xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-y border-white/10 mb-20">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-4xl md:text-6xl font-black text-white mb-2 transition-transform duration-500 tracking-tighter"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-orange-500 font-serif mr-1">.</span>{stat.value}
                </motion.div>
                <p className="text-gray-500 font-bold uppercase tracking-[0.25em] text-[11px] sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA BUTTON */}
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="cursor-pointer group relative overflow-hidden rounded-full py-5 px-10 bg-linear-to-r from-orange-500 to-red-600 text-white font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-2xl shadow-orange-900/30 hover:shadow-orange-500/50 hover:-translate-y-1 flex items-center space-x-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2"
          >
            <span className="relative z-10">Become Our Next Success Story</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 skew-x-12 transition-transform duration-700 pointer-events-none opacity-0 group-hover:opacity-10" />
          </button>
          
          <div className="mt-12 flex items-center space-x-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="h-px w-20 bg-white/20 hidden md:block" />
             <Medal className="w-8 h-8 text-white" />
             <Maximize className="w-8 h-8 text-white" />
             <Anchor className="w-8 h-8 text-white" />
             <div className="h-px w-20 bg-white/20 hidden md:block" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedBrands;