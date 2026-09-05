import React from 'react';
import { 
  Building2, 
  Settings, 
  Users, 
  ShieldCheck, 
  Layers, 
  Award, 
  Globe, 
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
// Real client photo: quality check / folding station on our production floor —
// replaces the previous AI-generated factory render.
import factoryImg from "../../assets/factory-real/quality-check-folding-garments.webp";

export default function ManufacturingExcellence() {
  return (
    <section className="manufacturing-hero-root relative min-h-screen w-full bg-[#080D16] text-white overflow-x-hidden py-28">
      {/* Self-contained subtle float animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(12px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6.5s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .manufacturing-hero-root {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .manufacturing-image-shell {
            width: 100% !important;
            min-width: 0 !important;
            max-width: 100% !important;
            grid-column: 1 / -1 !important;
          }
          .manufacturing-image-shell > .relative {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            aspect-ratio: 4 / 5 !important;
          }
          .manufacturing-mobile-float-cards {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .manufacturing-float-card {
            position: static !important;
            top: auto !important;
            right: auto !important;
            left: auto !important;
            bottom: auto !important;
            transform: none !important;
            width: 100% !important;
            max-width: 220px !important;
            margin: 0.75rem auto 0 !important;
          }
          .manufacturing-copy {
            text-align: center !important;
            align-items: center !important;
            width: 100% !important;
            min-width: 0 !important;
            grid-column: 1 / -1 !important;
          }
          .manufacturing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Soft blurred background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-orange-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 relative">
        <div className="manufacturing-grid grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Side: Premium Factory Image with Floating Badges (45% on desktop) */}
          <div className="col-span-12 lg:col-span-5 relative flex justify-center items-center max-sm:w-full max-sm:mx-auto manufacturing-image-shell">
            {/* Outer wrapper carries NO overflow-hidden — only the image
                frame below does. The two floating badges are positioned
                here as siblings of the frame (not inside it), so their
                negative offsets can hang past the frame's edge without
                being clipped by the frame's own overflow-hidden. This
                was the actual bug: badges used to live *inside* the
                overflow-hidden frame, which cut them off at narrow
                (mobile) widths where the frame itself is narrower than
                the badges' offset + width. Mirrors the working pattern
                already used in AboutHero.jsx. */}
            <div className="relative w-full max-w-[440px]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                {/* Subtle orange/cyan glowing backdrop behind the image borders */}
                <div className="absolute -inset-[1px] bg-gradient-to-tr from-cyan-500/20 to-orange-500/20 rounded-2xl pointer-events-none -z-10" />

                <img
                  src={factoryImg}
                  alt="Real TradeFine quality check — finished garments folded and inspected on our floor"
                  className="w-full h-full object-cover object-[center_25%]"
                />
                {/* Elegant vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-transparent to-transparent opacity-70" />
              </div>

              <div className="manufacturing-mobile-float-cards">

              {/* Floating Badge 1: Top-Right (Square Footage) */}
              <div className="manufacturing-float-card absolute top-6 right-2 sm:-right-4 md:-right-6 bg-slate-950/90 backdrop-blur-md border border-orange-500/30 rounded-xl p-3 flex items-center gap-3 shadow-[0_8px_32px_rgba(249,115,22,0.15)] animate-float-slow max-w-[160px] sm:max-w-[200px]">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 border border-orange-500/20">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-none">purpose-built manufacturing unit</div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Modern Facility</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom-Left (Monthly Capacity) */}
              <div className="manufacturing-float-card absolute bottom-12 left-2 sm:-left-4 md:-left-6 bg-slate-950/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-3 flex items-center gap-3 shadow-[0_8px_32px_rgba(6,182,212,0.15)] animate-float-delayed max-w-[160px] sm:max-w-[200px]">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-none">500K+ Monthly</div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Output Capacity</div>
                </div>
              </div>

              </div>
            </div>
          </div>

          {/* Right Side: Content and Premium Feature Cards (55% on desktop) */}
          <div className="manufacturing-copy col-span-12 lg:col-span-7 flex flex-col items-start text-left lg:pl-6">
            
            {/* Small Orange Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-bold uppercase tracking-widest text-orange-500 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Our Facility
            </div>

            {/* Large Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 max-w-full break-words">
              Built for Precision, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-450">
                Trusted for Quality
              </span>
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl max-sm:text-sm max-sm:leading-relaxed max-sm:break-words">
              Our advanced sportswear production unit couples modern machinery with meticulous apparel craftsmanship. Backed by rigorous international standards, the TradeFine factory executes automated pattern cutting, high-speed stitching, and multi-tier quality assessments to support global athletic brands with dependable B2B wholesale lines.
            </p>

            {/* Four Premium Glassmorphism Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              
              {/* Card 1 */}
              <div className="group relative p-5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-orange-500/20 hover:bg-slate-900/60 transition-all duration-300 flex gap-4 items-start shadow-md hover:shadow-lg">
                <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                    Modern Production Facility
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Automated layout software and high-speed machinery for scalable production lines.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative p-5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/20 hover:bg-slate-900/60 transition-all duration-300 flex gap-4 items-start shadow-md hover:shadow-lg">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-450 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    Skilled Workforce
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Experienced tailors and pattern makers delivering consistent manufacturing precision.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative p-5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/20 hover:bg-slate-900/60 transition-all duration-300 flex gap-4 items-start shadow-md hover:shadow-lg">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-450 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    Quality Inspection
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    AQL standard test models measuring tensile strength, colorfastness, and seams.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative p-5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-slate-800/80 hover:border-orange-500/20 hover:bg-slate-900/60 transition-all duration-300 flex gap-4 items-start shadow-md hover:shadow-lg">
                <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                    Bulk Manufacturing
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Flexible production pipelines structured to support fast-turnaround large volume orders.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Four Animated Statistics at the bottom */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-slate-800/80">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-orange-500/5 flex items-center justify-center text-orange-400 border border-orange-500/10">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-450 group-hover:from-orange-500 group-hover:to-amber-400 transition-all duration-300">
                10+ Years
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
                Industry Experience
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/5 flex items-center justify-center text-cyan-450 border border-cyan-500/10">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-450 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                Worldwide
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
                Export Network
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-orange-500/5 flex items-center justify-center text-orange-400 border border-orange-500/10">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-450 group-hover:from-orange-500 group-hover:to-amber-400 transition-all duration-300">
                OEM • ODM
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
                Sportswear Manufacturing
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/5 flex items-center justify-center text-cyan-450 border border-cyan-500/10">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-450 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                Premium
              </div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">
                Quality Standards
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}