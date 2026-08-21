import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Award, Globe, ShieldCheck } from 'lucide-react';
// Real client photo: a sewing operator stitching a live garment on our floor —
// replaces the previous AI-generated factory render.
import factoryImage from '../../assets/factory-real/sewing-operator-khaki-garment.webp';

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-[#080D16] text-white overflow-hidden flex items-center py-28">
      {/* Floating animation keyframes embedded directly */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 6s ease-in-out infinite;
        }
      `}} />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* Decorative Blurred Gradient Background Circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-6 backdrop-blur-sm shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              About TradeFine
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-6">
              10+ Years of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-cyan-500">
                Manufacturing Excellence
              </span>
            </h1>

            {/* Paragraph Text */}
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              TradeFine is a trusted global sportswear manufacturer specializing in OEM, ODM, Private Label, and premium custom apparel production. For more than a decade, we have partnered with brands worldwide to deliver high-quality manufacturing solutions with reliability, precision, and innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-white font-semibold rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              >
                Explore Products
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Side Column (Premium Image with Floating Statistics Cards) */}
          <div className="col-span-12 lg:col-span-5 relative flex justify-center items-center">
            {/* Wrapper with subtle custom floating animation */}
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] animate-float-slow group">
              
              {/* Decorative Glowing Backdrop Box */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-3xl opacity-20 blur-xl transition duration-500 group-hover:opacity-30" />

              {/* Main Image Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <img
                  src={factoryImage}
                  alt="Real TradeFine sewing operator stitching a garment on our production floor"
                  className="w-full h-full object-cover object-[center_20%] transform transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-transparent to-transparent opacity-60" />
              </div>

              {/* Top Card: Experience */}
              <div className="absolute -top-6 -left-8 md:-left-12 lg:-left-6 xl:-left-10 bg-slate-900/90 backdrop-blur-md border border-orange-500/30 rounded-2xl p-4 flex items-center gap-4 shadow-[0_8px_32px_rgba(249,115,22,0.15)] animate-float-medium max-w-xs transition-colors hover:border-orange-500/50">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 border border-orange-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white leading-none">10+</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">Years Experience</div>
                </div>
              </div>

              {/* Middle Card: Exports */}
              <div className="absolute top-1/2 -right-8 md:-right-12 lg:-right-6 xl:-right-10 transform -translate-y-1/2 bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-4 flex items-center gap-4 shadow-[0_8px_32px_rgba(6,182,212,0.15)] animate-float-fast max-w-xs transition-colors hover:border-cyan-500/50">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white leading-none">Worldwide</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1.5">Exports</div>
                </div>
              </div>

              {/* Bottom Card: OEM / ODM Services */}
              <div className="absolute -bottom-6 left-8 md:left-12 lg:left-6 xl:left-10 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-4 flex items-center gap-4 shadow-[0_8px_32px_rgba(255,255,255,0.05)] animate-float-slow max-w-xs transition-colors hover:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-300 shrink-0 border border-slate-750">
                  <ShieldCheck className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <div className="text-md font-bold text-white leading-tight">OEM • ODM</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-0.5">Private Label</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}