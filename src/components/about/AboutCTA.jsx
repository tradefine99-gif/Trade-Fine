import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageSquare, Check, Globe, Zap, ShieldCheck } from 'lucide-react';

const AboutCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full py-28 overflow-hidden bg-[#080D16]">
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-orange-500/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-cyan-500/15 blur-[120px] rounded-full" />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }}
        />
        
        {/* Lighting Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080D16] via-transparent to-[#080D16]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="relative p-8 md:p-16 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden text-center">
          {/* Inner Glow Decorative Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
              Let's Work Together
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Ready to Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-cyan-400">
              Sportswear Brand?
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
            Whether you're launching a new apparel brand or scaling an established business, 
            TradeFine is ready to become your trusted OEM, ODM, and Private Label manufacturing partner. 
            Let's create premium-quality sportswear together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-400 rounded-xl text-white font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.4)] flex items-center gap-2 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2"
            >
              <span className="relative z-10">Request a Free Quote</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              {/* Button Shine Effect */}
              <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </button>

            <a
              href="https://wa.me/923316131936"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/50 flex items-center gap-2 backdrop-blur-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
            >
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span>Contact Our Team</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
            <div className="flex items-center justify-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                <Check className="w-4 h-4 text-orange-500" />
              </div>
              <span className="text-gray-300 text-[13px] font-semibold uppercase tracking-wider">OEM & ODM</span>
            </div>

            <div className="flex items-center justify-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                <Globe className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-gray-300 text-[13px] font-semibold uppercase tracking-wider">Worldwide Export</span>
            </div>

            <div className="flex items-center justify-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
              </div>
              <span className="text-gray-300 text-[13px] font-semibold uppercase tracking-wider">Premium Quality</span>
            </div>

            <div className="flex items-center justify-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                <Zap className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-gray-300 text-[13px] font-semibold uppercase tracking-wider">Fast Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;