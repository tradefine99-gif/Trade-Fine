import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageBanner3D
 * ------------
 * A reusable, animated hero-background layer used across every secondary
 * page (Products, Manufacturing, OEM/ODM, Gallery, Resources, Contact,
 * Privacy, Terms). It extends the same glassmorphism "floating stat card"
 * language already established on the Home hero's floating stats strip,
 * rather than introducing a new, generic 3D-cube motif — so the whole site
 * reads as one consistent design system.
 *
 * Layers (back to front):
 *  1. Faint technical grid (matches AboutHero's existing grid treatment)
 *  2. Two soft gradient orbs (orange + cyan, on-brand)
 *  3. A slow diagonal light-sweep shimmer
 *  4. 2-3 floating glass cards, each gently drifting and tilting in real
 *     3D (rotateX/rotateY via CSS perspective), on independent easing
 *     loops so the motion feels organic rather than mechanical
 *
 * All motion is subtle, non-interactive (pointer-events-none), hidden on
 * small screens where there isn't room, and respects prefers-reduced-motion
 * by simply not animating (the cards still render, just static).
 */

const floatTransition = (duration, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
});

const FloatingCard = ({ icon: Icon, value, label, color, className, duration, delay, tiltX, tiltY }) => {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.div
      className={`absolute backdrop-blur-xl bg-white/[0.06] border border-white/15 px-5 py-4 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] flex items-center gap-3 pointer-events-none ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 20 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : {
              opacity: 1,
              y: [0, -14, 0],
              rotateX: [0, tiltX, 0],
              rotateY: [0, tiltY, 0],
            }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0.6 }
          : floatTransition(duration, delay)
      }
    >
      <div className={`p-2 ${color} rounded-lg flex-shrink-0`}>
        <Icon className="text-white w-5 h-5" />
      </div>
      <div>
        <p className="text-white font-black text-base leading-none whitespace-nowrap">{value}</p>
        <p className="text-gray-300 text-[11px] uppercase tracking-widest mt-1 whitespace-nowrap">{label}</p>
      </div>
    </motion.div>
  );
};

const POSITIONS = {
  // Left-aligned hero text (e.g. Products): stack cards down the right side,
  // clear of the text column which only occupies the left ~55% of the section.
  stacked: [
    'top-6 right-[6%] lg:right-[10%]',
    'top-[38%] right-[1%] lg:right-[2%]',
    'bottom-8 right-[14%] lg:right-[18%]',
  ],
  // Centered hero text (e.g. Manufacturing, Contact): the text column spans
  // nearly the full section width, so cards are docked in a row along the
  // very bottom edge — clear of the text at any viewport — mirroring the
  // Home hero's own bottom-docked floating stats strip.
  symmetric: [
    'bottom-6 left-[3%] xl:left-[6%]',
    'bottom-6 left-1/2 -translate-x-1/2',
    'bottom-6 right-[3%] xl:right-[6%]',
  ],
};

export default function PageBanner3D({ cards = [], accent = 'orange', layout = 'stacked' }) {
  const orbFrom = accent === 'cyan' ? 'from-cyan-500/10' : 'from-orange-500/10';
  const positions = POSITIONS[layout] || POSITIONS.stacked;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* 1. Technical grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />

      {/* 2. Gradient orbs */}
      <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b ${orbFrom} to-transparent rounded-full blur-[140px]`} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-cyan-500/10 to-transparent rounded-full blur-[140px]" />

      {/* 3. Slow diagonal light sweep */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'linear-gradient(115deg, transparent 30%, rgba(249,115,22,0.06) 45%, rgba(6,182,212,0.05) 55%, transparent 70%)',
          backgroundSize: '200% 200%',
        }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }}
      />

      {/* 4. Floating 3D glass cards (desktop only — no room on mobile) */}
      {cards.length > 0 && (
        <div
          className="hidden lg:block absolute inset-0"
          style={{ perspective: '1200px' }}
        >
          {cards.slice(0, 3).map((card, i) => (
            <FloatingCard
              key={card.label}
              icon={card.icon}
              value={card.value}
              label={card.label}
              color={card.color}
              className={positions[i % positions.length]}
              duration={6 + i * 1.5}
              delay={i * 0.6}
              tiltX={i % 2 === 0 ? 6 : -6}
              tiltY={i % 2 === 0 ? -8 : 8}
            />
          ))}
        </div>
      )}
    </div>
  );
}
