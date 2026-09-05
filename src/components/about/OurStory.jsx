import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Globe, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';

const STATS_CARDS = [
  {
    id: 1,
    title: "10+",
    subtitle: "Years Experience",
    description: "Over a decade of manufacturing high-performance gear for leading activewear brands.",
    icon: Award,
    gradient: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-500/20 hover:border-orange-500/45",
    shadow: "hover:shadow-orange-500/10",
    textGlow: "group-hover:from-orange-400 group-hover:to-amber-300",
    iconColor: "text-orange-400"
  },
  {
    id: 2,
    title: "Worldwide",
    subtitle: "Exports",
    description: "Reliable international supply chain networks delivering to brands across 40+ countries.",
    icon: Globe,
    gradient: "from-cyan-500/10 to-blue-500/5",
    border: "border-cyan-500/20 hover:border-cyan-500/45",
    shadow: "hover:shadow-cyan-500/10",
    textGlow: "group-hover:from-cyan-400 group-hover:to-blue-300",
    iconColor: "text-cyan-400"
  },
  {
    id: 3,
    title: "OEM / ODM",
    subtitle: "Manufacturing",
    description: "Flexible private-label services, custom pattern development, and high-capacity production.",
    icon: Layers,
    gradient: "from-orange-500/10 to-cyan-500/5",
    border: "border-slate-800 hover:border-cyan-500/35",
    shadow: "hover:shadow-cyan-500/10",
    textGlow: "group-hover:from-orange-400 group-hover:to-cyan-400",
    iconColor: "text-orange-400"
  },
  {
    id: 4,
    title: "Quality",
    subtitle: "Guaranteed",
    description: "Strict AQL standards, advanced fabric stress-testing, and zero-defect quality control.",
    icon: ShieldCheck,
    gradient: "from-cyan-500/10 to-orange-500/5",
    border: "border-slate-800 hover:border-orange-500/35",
    shadow: "hover:shadow-orange-500/10",
    textGlow: "group-hover:from-cyan-400 group-hover:to-orange-400",
    iconColor: "text-cyan-400"
  }
];

export default function CompanyStory() {
  return (
    <section className="relative min-h-screen w-full bg-[#080D16] text-white overflow-hidden flex items-center py-28">
      {/* Dynamic drifting animation keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.15); }
        }
        @keyframes float-slow-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.2); }
        }
        .animate-drift-1 {
          animation: float-slow-1 20s ease-in-out infinite;
        }
        .animate-drift-2 {
          animation: float-slow-2 24s ease-in-out infinite;
        }
        @media (max-width: 640px) {
          .our-story-grid,
          .our-story-copy,
          .our-story-cards,
          .our-story-card {
            width: 100%;
            min-width: 0;
          }
          .our-story-grid {
            grid-template-columns: minmax(0, 1fr);
          }
          .our-story-copy,
          .our-story-cards {
            grid-column: 1 / -1;
          }
          .our-story-copy {
            align-items: stretch;
          }
          .our-story-copy h2,
          .our-story-copy p,
          .our-story-card h3,
          .our-story-card h4,
          .our-story-card-description {
            min-width: 0;
            max-width: 100%;
            overflow-wrap: anywhere;
            word-break: normal;
          }
          .our-story-button {
            width: 100%;
            max-width: 100%;
          }
        }
      `}} />

      {/* Faint grid overlay matching the home page design language */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Floating Blurred Accent Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none animate-drift-1" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-drift-2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10">
        <div className="our-story-grid grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Side (40%) */}
          <div className="our-story-copy col-span-12 lg:col-span-5 flex flex-col items-start text-left">
            {/* Small Elegant Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-bold uppercase tracking-widest text-orange-500 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Our Heritage
            </div>

            {/* Premium Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
              Crafting World-Class <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400">
                Sportswear Since 2014
              </span>
            </h2>

            {/* Narrative Story Details */}
            <div className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                TradeFine brings over 10 years of manufacturing experience, establishing itself as a premier partner for high-growth athletic apparel labels. We specialize in custom OEM, ODM, and Private Label production, taking concepts from raw design layouts to retail-ready, technical activewear lines.
              </p>
              <p>
                Serving dynamic brands worldwide, we oversee robust bulk manufacturing operations and global exports with an emphasis on reliable logistical execution. By centering our philosophy on strict quality benchmarks and long-term strategic relationships rather than one-time transactions, we ensure our production standards consistently meet elite expectations.
              </p>
            </div>

            {/* Secondary CTA — "Learn more" tier, so it stays outlined rather than
                competing with the page's primary gradient CTAs (design-system Phase 2) */}
            <Link
              to="/manufacturing"
              className="our-story-button inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-white/15 bg-white/[0.04] backdrop-blur-md text-white font-bold text-sm rounded-xl hover:border-orange-500/40 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-0.5 group mt-8"
            >
              Learn About Our Process
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right Side (60%) */}
          <div className="our-story-cards col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {STATS_CARDS.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.id}
                    className={`our-story-card relative group p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border ${card.border} transition-all duration-500 hover:-translate-y-2 ${card.shadow} overflow-hidden`}
                  >
                    {/* Hover Glow Accent */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Icon with gradient background */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} border border-white/5 flex items-center justify-center ${card.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Card Content & Text Animations */}
                    <h3 className={`text-3xl font-extrabold text-white mb-1.5 tracking-tight transition-all duration-500 bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent ${card.textGlow}`}>
                      {card.title}
                    </h3>
                    <h4 className="text-xs font-semibold tracking-wider text-slate-300 uppercase mb-3.5">
                      {card.subtitle}
                    </h4>
                    <p className="our-story-card-description text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}