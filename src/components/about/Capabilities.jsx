import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  PenTool, 
  Tag, 
  Paintbrush, 
  Printer, 
  Sparkles, 
  Boxes, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

const CAPABILITIES_DATA = [
  {
    id: 1,
    title: "OEM Manufacturing",
    desc: "Transform your detailed designs into high-grade sportswear with strict dimensional consistency and premium technical fabric selection.",
    icon: Cpu,
    accent: "from-orange-500 to-red-500"
  },
  {
    id: 2,
    title: "ODM Development",
    desc: "Leverage our expert pattern designers and catalog templates to build customized activewear lines from conceptual blueprints.",
    icon: PenTool,
    accent: "from-cyan-450 to-blue-500"
  },
  {
    id: 3,
    title: "Private Label",
    desc: "Seamless brand integration utilizing premium neck tags, customized woven labels, polybags, and tailored hardware accessories.",
    icon: Tag,
    accent: "from-orange-500 to-amber-500"
  },
  {
    id: 4,
    title: "Sublimation Printing",
    desc: "Vibrant, fade-resistant, full-bleed digital printing using premium eco-friendly inks optimized for performance activewear fibers.",
    icon: Paintbrush,
    accent: "from-cyan-400 to-teal-500"
  },
  {
    id: 5,
    title: "DTF & DTG Printing",
    desc: "Direct-to-Film and Direct-to-Garment printing yielding highly elastic, crack-resistant transfers suited for high-stress training apparel.",
    icon: Printer,
    accent: "from-orange-500 to-pink-500"
  },
  {
    id: 6,
    title: "Embroidery & Logos",
    desc: "Meticulous high-density 3D embroidery, raised silicone prints, and heat-seal reflective branding elements for elite athletic wear.",
    icon: Sparkles,
    accent: "from-cyan-450 to-indigo-500"
  },
  {
    id: 7,
    title: "Bulk Production",
    desc: "Scalable industrial sewing setups configured to handle high-volume B2B manufacturing contracts within dependable delivery schedules.",
    icon: Boxes,
    accent: "from-orange-500 to-amber-600"
  },
  {
    id: 8,
    title: "Worldwide Export",
    desc: "Comprehensive export logistics, professional packing, customs document processing, and container freight management to global ports.",
    icon: Globe,
    accent: "from-cyan-400 to-emerald-500"
  }
];

export default function Capabilities() {
  return (
    <section className="relative min-h-screen w-full bg-[#080D16] text-white overflow-hidden py-28">
      {/* Self-contained slow hover shift animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .hover-float:hover {
          animation: float-gentle 4s ease-in-out infinite;
        }
      `}} />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Floating Blurred Ambient Gradients */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/5 to-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 relative">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-bold uppercase tracking-widest text-orange-500 mb-6 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            What We Offer
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
            Complete Manufacturing Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-cyan-500">
              Global Apparel Brands
            </span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            TradeFine delivers robust end-to-end B2B manufacturing capabilities, outputting advanced performance wear built from modern, technically tailored fabrics. We govern every stage of production with industrial-grade machinery and strict quality parameters.
          </p>
        </div>

        {/* EIGHT PREMIUM CAPABILITY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CAPABILITIES_DATA.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="relative p-[1px] rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900 hover:from-orange-500/30 hover:to-cyan-500/30 transition-all duration-500 group hover:shadow-2xl"
              >
                {/* Inside card wrapper (glassmorphism panel) */}
                <div className="bg-[#0b1221]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 h-full flex flex-col items-start text-left hover:bg-[#0c1629] transition-colors duration-500 hover-float relative overflow-hidden">
                  
                  {/* Subtle inner spotlight on card hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                  {/* Icon with colored back-gradient */}
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors duration-300 relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-10 blur-sm rounded-xl transition-all duration-300`} />
                    <IconComponent className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title and description */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-cyan-450 transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM PREMIUM CTA BANNER */}
        <div className="mt-24 lg:mt-32 relative rounded-3xl p-[1px] bg-gradient-to-r from-orange-500/20 via-slate-800 to-cyan-500/20">
          <div className="relative bg-[#0b1221]/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden shadow-2xl">
            
            {/* Ambient background glow inside the banner */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/5 to-cyan-500/5 opacity-40 blur-xl pointer-events-none rounded-3xl" />

            {/* Left/Main Column - Texts */}
            <div className="flex-1 text-center lg:text-left z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">
                Need Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">Unique?</span>
              </h3>
              <p className="text-slate-450 text-sm sm:text-base leading-relaxed max-w-3xl">
                Every product is manufactured according to your exact requirements including fabric composition, GSM weight, Pantone colors, custom sizing, logos, tailored printing methods, retail-ready packaging and custom branded trims.
              </p>
            </div>

            {/* Right Column - CTA Button */}
            <div className="z-10 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-sm rounded-xl shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Request Custom Quote
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}