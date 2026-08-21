import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

import { trustBadges, floatingStats } from '../../data/heroData';
// Real client footage: a TAJIMA embroidery head stitching a live multi-color
// design on our production floor — replaces the previous AI-generated
// factory render so the very first thing a visitor sees is authentic.
import heroImage from '../../assets/factory-real/tajima-embroidery-colorful.webp';
import RotatingKeywords from './RotatingKeywords';

const MotionLink = motion.create(Link);

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] lg:min-h-[calc(100svh_-_76px)] w-full bg-[#080D16] overflow-hidden flex items-center">
      {/* Full-Bleed Cinematic Background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Real TradeFine production floor — TAJIMA embroidery machine stitching a live multi-color design"
          className="w-full h-full object-cover object-[75%_45%]"
          loading="eager"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
        />
        {/* Cinematic Overlays for legibility + brand depth */}
        <div className="absolute inset-0 bg-linear-to-r from-[#080D16] from-10% via-[#080D16]/92 via-55% to-[#080D16]/55" />
        <div className="absolute inset-0 bg-linear-to-t from-[#080D16] via-transparent to-[#080D16]/55" />
        <div className="absolute inset-0 bg-black/20" />
        {/* Premium black-to-orange accent glow (n8n-inspired), kept subtle */}
        <div className="absolute inset-0 gradient-black-orange-radial mix-blend-overlay opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-24 pb-16 lg:pt-16 lg:pb-16">
        <div className="max-w-2xl flex flex-col space-y-5">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm w-fit"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">
              Premium OEM & ODM Manufacturer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[0.98] tracking-tight"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.45)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="block">Custom Sportswear</span>
            <RotatingKeywords />
            <span className="block">for Global Brands</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            TradeFine delivers world-class{' '}
            <strong className="text-white font-semibold">OEM Sportswear Manufacturing</strong>{' '}
            and <strong className="text-white font-semibold">ODM Manufacturing</strong> services.
            We specialize in private label fitness wear and high-volume bulk production for the
            world's most demanding athletic labels.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <MotionLink
              to="/contact"
              className="cursor-pointer px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center group shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)]"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              Request Quote
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MotionLink>
            <MotionLink
              to="/products"
              className="cursor-pointer px-10 py-4 border border-white/30 hover:border-orange-400 text-white hover:text-orange-400 font-bold rounded-xl bg-white/5 backdrop-blur-sm hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center group hover:-translate-y-1"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Products
            </MotionLink>
          </motion.div>

          {/* Trust Badges Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.id}
                className="flex flex-col space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <badge.icon className="text-cyan-400 w-6 h-6" />
                <div>
                  <p className="text-white text-sm font-bold tracking-tight">{badge.label}</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">{badge.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Stats Strip — docked over the bottom of the cinematic image */}
      <motion.div
        className="hidden lg:flex absolute bottom-10 right-6 xl:right-12 z-10 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        {floatingStats.map((stat) => (
          <motion.div
            key={stat.id}
            className="backdrop-blur-xl bg-white/[0.06] border border-white/15 px-5 py-4 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] flex items-center gap-3 transition-all duration-500 hover:bg-white/10 hover:-translate-y-1"
            whileHover={{ scale: 1.04 }}
          >
            <div className={`p-2 ${stat.color} rounded-lg flex-shrink-0`}>
              <stat.icon className="text-white w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-black text-base leading-none whitespace-nowrap">
                {stat.value}
              </p>
              <p className="text-gray-300 text-[10px] uppercase tracking-widest mt-1 whitespace-nowrap">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Stats Strip */}
      <motion.div
        className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 w-[88%] z-10 backdrop-blur-xl bg-white/10 border border-white/20 p-4 rounded-xl flex items-center justify-around shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="text-center">
          <p className="text-white font-bold">10+ Yrs</p>
          <p className="text-gray-300 text-[8px] uppercase">Exp</p>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="text-center">
          <p className="text-white font-bold">50+ Cnt</p>
          <p className="text-gray-300 text-[8px] uppercase">Global</p>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="text-center">
          <p className="text-white font-bold">1M+ Pcs</p>
          <p className="text-gray-300 text-[8px] uppercase">Output</p>
        </div>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { duration: 1, delay: 1.4 }, y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
