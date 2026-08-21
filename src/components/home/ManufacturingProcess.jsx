import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  PenTool, 
  Boxes, 
  Factory, 
  ClipboardCheck, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Inquiry & Consultation",
    description: "Submit your design specs or concepts. We discuss MOQs, lead times, and industrial viability.",
    icon: MessageSquare
  },
  {
    number: "02",
    title: "Design & Sampling",
    description: "Our R&D team develops technical patterns and physical samples for your approval.",
    icon: PenTool
  },
  {
    number: "03",
    title: "Material Sourcing",
    description: "We source premium high-performance technical fabrics and trims tailored to your sport.",
    icon: Boxes
  },
  {
    number: "04",
    title: "Production",
    description: "Industrial-scale manufacturing using cutting-edge machinery and precision craftsmanship.",
    icon: Factory
  },
  {
    number: "05",
    title: "Quality Inspection",
    description: "Three-tier quality check process ensuring 100% adherence to global export standards.",
    icon: ClipboardCheck
  },
  {
    number: "06",
    title: "Worldwide Delivery",
    description: "Safe, duty-optimized shipping to over 50 countries via sea, air, or land freight.",
    icon: Globe
  }
];

const ManufacturingProcess = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#080D16] py-28 px-6 relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="mb-24 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">
              Our Process
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
            From Your Idea to <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">Global Delivery</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
            TradeFine manages every stage of sportswear manufacturing. We integrate innovative 
            <strong className="text-white font-medium"> private label solutions</strong> with high-speed industrial 
            lines to ensure transparency and excellence from initial concept to final shipment.
          </p>
        </motion.div>

        {/* Process Flow Grid */}
        <div className="relative group">
          
          {/* Horizontal Connection Line (Desktop only) */}
          <div className="absolute top-[4.5rem] left-0 w-full h-[2px] bg-white/10 hidden lg:block overflow-hidden">
             <motion.div 
               className="w-full h-full bg-linear-to-r from-orange-500 to-transparent"
               initial={{ x: "-100%" }}
               whileInView={{ x: 0 }}
               transition={{ duration: 1.2, ease: "easeInOut" }}
               viewport={{ once: true }}
             />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative flex flex-col group/card h-full"
              >
                {/* Step Circle & Number */}
                <motion.div 
                  className="relative mb-8 z-20"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#0d1521] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover/card:border-orange-500/50 group-hover/card:shadow-[0_0_20px_-5px_rgba(249,115,22,0.4)] overflow-hidden">
                    <span className="text-white font-bold group-hover/card:scale-110 transition-transform">{step.number}</span>
                    <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  </div>
                </motion.div>

                {/* Info Card */}
                <motion.div 
                  className="flex-grow p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-4 hover:bg-white/[0.06] hover:border-orange-500/20 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)] relative overflow-hidden group/content"
                  whileHover={{ y: -16 }}
                >
                  
                  {/* Subtle Card Glow Effect */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 blur-2xl opacity-0 group-hover/content:opacity-100 transition-opacity" />

                  <motion.div whileHover={{ scale: 1.15 }}>
                    <step.icon className="w-10 h-10 text-orange-500 mb-6 transition-colors group-hover/card:text-orange-400 duration-500" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-base leading-relaxed group-hover/card:text-gray-300 transition-colors">
                    {step.description}
                  </p>

                  {/* Desktop Only Navigation Link Indicator */}
                  <motion.div 
                    className="absolute bottom-6 right-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 hidden lg:block"
                    whileHover={{ x: 4 }}
                  >
                     <ArrowRight className="w-5 h-5 text-orange-500" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Area */}
        <motion.div 
          className="mt-20 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            onClick={() => navigate('/contact')}
            className="cursor-pointer relative group flex items-center gap-3 px-10 py-5 bg-linear-to-br from-orange-600 to-orange-400 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.4)] hover:-translate-y-1 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Manufacturing Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <div className="mt-8 flex items-center gap-6">
            <span className="text-gray-400 text-[11px] uppercase font-bold tracking-widest border-r border-white/10 pr-6">Direct Sourcing</span>
            <span className="text-gray-400 text-[11px] uppercase font-bold tracking-widest border-r border-white/10 pr-6">High Quality</span>
            <span className="text-gray-400 text-[11px] uppercase font-bold tracking-widest">Rapid Response</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ManufacturingProcess;