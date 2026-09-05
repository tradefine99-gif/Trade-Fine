import React from 'react';
import { Target, Eye, ShieldCheck, Quote } from 'lucide-react';

const MissionVision = () => {
  const coreValues = [
    "Quality",
    "Integrity",
    "Innovation",
    "Reliability",
    "Customer Focus",
    "Continuous Improvement"
  ];

  return (
    <section className="relative bg-[#080D16] py-28 px-6 overflow-hidden font-sans">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-xs font-bold tracking-widest uppercase mb-6">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            Driven by Quality.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-cyan-400">
              Inspired by Innovation.
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            TradeFine stands at the intersection of craftsmanship and technology. Our commitment 
            to excellence drives us to deliver superior sportswear solutions that foster 
            long-term growth and success for global athletic brands.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Mission Card */}
          <div className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-white/[0.05]">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center mb-6 shadow-lg shadow-orange-900/20 group-hover:scale-110 transition-transform duration-500">
              <Target className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To manufacture premium-quality sportswear that helps brands grow through 
              reliable OEM, ODM, and Private Label solutions, maintaining the highest 
              standards of technical precision.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-white/[0.05]">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-cyan-900/20 group-hover:scale-110 transition-transform duration-500">
              <Eye className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To become a globally recognized sportswear manufacturing partner known 
              for disruptive innovation, sustainable quality, and unwavering customer trust 
              in an evolving athletic landscape.
            </p>
          </div>

          {/* Core Values Card */}
          <div className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/[0.05]">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-400 flex items-center justify-center mb-6 shadow-lg shadow-white/5 group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
            <div className="flex flex-wrap gap-2">
              {coreValues.map((value) => (
                <span 
                  key={value}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-orange-500/50 hover:text-white"
                >
                  • {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlighted Quote Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 -left-6 opacity-20">
            <Quote className="text-orange-500 w-20 h-20 rotate-180" />
          </div>
          <div className="p-10 md:p-14 rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md text-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed italic">
              "We don't simply manufacture garments—we help brands build their identity 
              through quality, consistency, and long-term partnerships."
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-orange-500/50" />
              <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">
                TradeFine Leadership
              </span>
              <div className="h-[1px] w-12 bg-orange-500/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;