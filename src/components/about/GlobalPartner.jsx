import React from 'react';
import { 
  Globe, 
  Layers, 
  Package, 
  Clock, 
  ShieldCheck, 
  Navigation, 
  Compass,
  Briefcase,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Award
} from 'lucide-react';

export default function GlobalPresence() {
  return (
    <section className="relative min-h-screen w-full bg-[#080D16] text-white overflow-hidden py-28">
      {/* Self-contained subtle animations for logistics arcs and floating cards */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
        @keyframes float-y-1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-y-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }
        .animate-route-dash {
          stroke-dasharray: 8, 4;
          animation: dash 2.5s linear infinite;
        }
        .animate-float-up {
          animation: float-y-1 6s ease-in-out infinite;
        }
        .animate-float-down {
          animation: float-y-2 6.5s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}} />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Premium high-tech global logistics network visualization */}
          <div className="col-span-12 lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-video sm:aspect-square bg-slate-950/40 backdrop-blur-md rounded-3xl border border-slate-800 p-6 shadow-2xl flex items-center justify-center overflow-visible">
              
              {/* Pulsing base radial gradient */}
              <div className="absolute inset-0 bg-radial from-cyan-500/5 via-transparent to-transparent opacity-50 animate-pulse-glow pointer-events-none rounded-3xl" />

              {/* Tactical Global Map Logistics Simulation */}
              <svg viewBox="0 0 500 350" className="w-full h-full text-slate-800 drop-shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                {/* Simplified subtle abstract grid mesh representing earth coordinates */}
                <path d="M 50,70 Q 250,30 450,70 M 50,150 Q 250,120 450,150 M 50,230 Q 250,210 450,230" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
                <path d="M 50,70 Q 50,200 100,300 M 150,50 Q 200,200 220,300 M 350,50 Q 300,200 280,300 M 450,70 Q 450,200 400,300" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
                
                {/* Active Bezier Logistics Curves (Outgoing routes from South Asia base) */}
                {/* Origin: Sialkot, PK (x: 290, y: 160) */}
                
                {/* Route 1: To North America (x: 80, y: 110) */}
                <path d="M 290,160 Q 185,100 80,110" fill="none" stroke="url(#cyan-grad)" strokeWidth="1.5" className="animate-route-dash" />
                {/* Route 2: To Europe (x: 200, y: 100) */}
                <path d="M 290,160 Q 245,115 200,100" fill="none" stroke="url(#orange-grad)" strokeWidth="1.5" className="animate-route-dash" />
                {/* Route 3: To East Asia (x: 390, y: 120) */}
                <path d="M 290,160 Q 340,130 390,120" fill="none" stroke="url(#cyan-grad)" strokeWidth="1.5" className="animate-route-dash" />
                {/* Route 4: To Oceania/Australia (x: 410, y: 260) */}
                <path d="M 290,160 Q 350,210 410,260" fill="none" stroke="url(#orange-grad)" strokeWidth="1.5" className="animate-route-dash" />

                {/* Nodes & Pulse Rings */}
                {/* Origin Point: Sialkot, Pakistan */}
                <circle cx="290" cy="160" r="5" fill="#f97316" />
                <circle cx="290" cy="160" r="10" fill="none" stroke="#f97316" strokeWidth="1" className="animate-ping" style={{ animationDuration: '3s' }} />

                {/* Global Dest Nodes */}
                <circle cx="80" cy="110" r="3.5" fill="#06b6d4" />
                <circle cx="200" cy="100" r="3.5" fill="#06b6d4" />
                <circle cx="390" cy="120" r="3.5" fill="#06b6d4" />
                <circle cx="410" cy="260" r="3.5" fill="#06b6d4" />

                {/* Custom SVG Gradient Definitions */}
                <defs>
                  <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#080D16" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#080D16" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Glass Card 1: Worldwide Exports */}
              <div className="absolute -top-6 left-2 sm:-left-6 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-3 flex items-center gap-3 shadow-xl animate-float-up hover:border-cyan-500/20 transition-all max-w-[150px] sm:max-w-[190px]">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-none">Worldwide Exports</div>
                  <div className="text-[9px] text-slate-400 mt-1 leading-none">Active supply lanes</div>
                </div>
              </div>

              {/* Floating Glass Card 2: Trusted Manufacturing Partner */}
              <div className="absolute top-10 right-2 sm:-right-8 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-3 flex items-center gap-3 shadow-xl animate-float-down hover:border-orange-500/20 transition-all max-w-[160px] sm:max-w-[200px]">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-none">Trusted Mfg. Partner</div>
                  <div className="text-[9px] text-slate-400 mt-1 leading-none">Consistent outputs</div>
                </div>
              </div>

              {/* Floating Glass Card 3: Fast International Shipping */}
              <div className="absolute -bottom-6 left-2 sm:left-6 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-3 flex items-center gap-3 shadow-xl animate-float-up hover:border-cyan-500/20 transition-all max-w-[160px] sm:max-w-[210px]">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Navigation className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-none">International Shipping</div>
                  <div className="text-[9px] text-slate-400 mt-1 leading-none">Air & Ocean freight logistics</div>
                </div>
              </div>

              {/* Dynamic Sialkot Locator Pin */}
              <div className="absolute top-[48%] left-[58%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-orange-500/10 backdrop-blur-sm border border-orange-500/30 px-2 py-1 rounded-md shadow-lg z-25 pointer-events-none">
                <MapPin className="w-3.5 h-3.5 text-orange-500 animate-bounce" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Manufacturing Base</span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Narrative, Info Cards, and Badge */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-start text-left lg:pl-4">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6 shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              Global Reach
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Manufacturing for Brands <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-450">
                Around the World
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              TradeFine serves international brands through reliable OEM, ODM, and Private Label manufacturing, delivering premium sportswear with consistent quality and dependable worldwide shipping.
            </p>

            {/* Four Premium Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              
              {/* Card 1: Worldwide Shipping */}
              <div className="group p-5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-slate-800/85 hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300 flex flex-col gap-3 items-start shadow-md hover:shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-450 group-hover:scale-105 transition-transform">
                  <Globe className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Worldwide Shipping</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Reliable export solutions for international customers.
                  </p>
                </div>
              </div>

              {/* Card 2: OEM & ODM Support */}
              <div className="group p-5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-slate-800/85 hover:border-orange-500/30 hover:bg-slate-900/60 transition-all duration-300 flex flex-col gap-3 items-start shadow-md hover:shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-450 group-hover:scale-105 transition-transform">
                  <Layers className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">OEM & ODM Support</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Manufacturing tailored to global brand requirements.
                  </p>
                </div>
              </div>

              {/* Card 3: Secure Packaging */}
              <div className="group p-5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-slate-800/85 hover:border-orange-500/30 hover:bg-slate-900/60 transition-all duration-300 flex flex-col gap-3 items-start shadow-md hover:shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-450 group-hover:scale-105 transition-transform">
                  <Package className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Secure Packaging</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Export-ready packaging ensuring product safety.
                  </p>
                </div>
              </div>

              {/* Card 4: On-Time Delivery */}
              <div className="group p-5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-slate-800/85 hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300 flex flex-col gap-3 items-start shadow-md hover:shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-450 group-hover:scale-105 transition-transform">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">On-Time Delivery</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Efficient production planning and timely shipment.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM STATISTICS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-16 border-t border-slate-800/80">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-orange-500/5 border border-orange-500/10 flex items-center justify-center text-orange-450">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-450 group-hover:from-orange-500 group-hover:to-amber-400 transition-colors duration-300">
                10+ Years
              </div>
              <div className="text-xs font-semibold text-slate-450 uppercase tracking-wider mt-1">
                Experience
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center text-cyan-450">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-450 group-hover:from-cyan-400 group-hover:to-blue-400 transition-colors duration-300">
                Worldwide
              </div>
              <div className="text-xs font-semibold text-slate-450 uppercase tracking-wider mt-1">
                Export Network
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-orange-500/5 border border-orange-500/10 flex items-center justify-center text-orange-450">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-450 group-hover:from-orange-500 group-hover:to-amber-400 transition-colors duration-300">
                Premium
              </div>
              <div className="text-xs font-semibold text-slate-450 uppercase tracking-wider mt-1">
                Manufacturing
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center text-cyan-450">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-450 group-hover:from-cyan-400 group-hover:to-blue-400 transition-colors duration-300">
                Trusted
              </div>
              <div className="text-xs font-semibold text-slate-450 uppercase tracking-wider mt-1">
                by Global Brands
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}