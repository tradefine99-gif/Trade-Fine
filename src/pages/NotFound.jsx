import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowRight, MessageCircle, Search } from "lucide-react";
import Seo from "../components/common/Seo";

/* ------------------------------------------------------------------ */
/*  JerseyIllustration                                                */
/*  A hand-built SVG "lost jersey on a hanger" scene — the 404 print  */
/*  number sits where a squad number would, a dashed seam trails off  */
/*  unfinished, and a needle + thread loops through it, tying the     */
/*  page directly to TradeFine's own manufacturing story instead of   */
/*  a generic stock illustration.                                     */
/* ------------------------------------------------------------------ */
const JerseyIllustration = () => {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <motion.div
      className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] mx-auto"
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* soft glow behind the illustration */}
      <div className="absolute inset-0 bg-orange-500/15 blur-[90px] rounded-full" />

      <motion.div
        className="relative w-full h-full"
        animate={
          prefersReducedMotion
            ? {}
            : { rotate: [-1.5, 1.5, -1.5], y: [0, -10, 0] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50% 8%" }}
      >
        <svg
          viewBox="0 0 420 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
        >
          <defs>
            <linearGradient id="jerseyBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a2130" />
              <stop offset="100%" stopColor="#0d121c" />
            </linearGradient>
            <linearGradient id="numberGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="55%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="hookGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>

          {/* hanger */}
          <path
            d="M210 26 C210 14, 222 8, 232 16"
            stroke="url(#hookGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M120 66 L210 30 L300 66"
            stroke="url(#hookGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="210" cy="30" r="3.5" fill="#94a3b8" />

          {/* jersey silhouette (sleeveless V-neck, on-brand for teamwear) */}
          <path
            d="M120 66
               L156 50
               C170 72, 250 72, 264 50
               L300 66
               L326 118
               L296 138
               L282 108
               L282 344
               C282 356, 272 366, 260 366
               L160 366
               C148 366, 138 356, 138 344
               L138 108
               L124 138
               L94 118
               Z"
            fill="url(#jerseyBody)"
            stroke="#f97316"
            strokeOpacity="0.35"
            strokeWidth="2"
          />

          {/* v-neck collar trim */}
          <path
            d="M156 50 C170 72, 250 72, 264 50"
            stroke="#f97316"
            strokeWidth="3"
            strokeOpacity="0.7"
            fill="none"
          />

          {/* side piping */}
          <path d="M138 108 L138 344" stroke="#22d3ee" strokeOpacity="0.3" strokeWidth="2" />
          <path d="M282 108 L282 344" stroke="#22d3ee" strokeOpacity="0.3" strokeWidth="2" />

          {/* 404 squad number, embroidered look */}
          <text
            x="210"
            y="248"
            textAnchor="middle"
            fontFamily="'Space Grotesk', sans-serif"
            fontWeight="700"
            fontSize="108"
            fill="url(#numberGrad)"
            stroke="#080D16"
            strokeWidth="2"
          >
            404
          </text>

          {/* dashed unfinished seam trailing off the hem */}
          <motion.path
            d="M160 366 C 130 392, 90 392, 56 420"
            stroke="#f97316"
            strokeWidth="2.5"
            strokeDasharray="6 7"
            strokeLinecap="round"
            fill="none"
            animate={prefersReducedMotion ? {} : { strokeDashoffset: [0, -26] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />

          {/* needle at the end of the thread */}
          <motion.g
            animate={prefersReducedMotion ? {} : { y: [0, 6, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "56px 420px" }}
          >
            <line x1="44" y1="432" x2="68" y2="408" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
            <circle cx="66" cy="410" r="3" fill="none" stroke="#cbd5e1" strokeWidth="2" />
          </motion.g>

          {/* small hanging size tag, bottom right — a nod to the QC/tag detail shots on the site */}
          <motion.g
            animate={prefersReducedMotion ? {} : { rotate: [-4, 4, -4] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "300px 300px" }}
          >
            <line x1="300" y1="300" x2="308" y2="316" stroke="#64748b" strokeWidth="1.5" />
            <rect x="298" y="316" width="34" height="22" rx="4" fill="#151c29" stroke="#f97316" strokeOpacity="0.5" />
            <text x="315" y="331" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#f97316" fontWeight="600">
              N/A
            </text>
          </motion.g>
        </svg>
      </motion.div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Floating ambient particles (small stitched dashes / dots) drifting */
/*  upward in the background, echoing the fabric/thread motif.         */
/* ------------------------------------------------------------------ */
const FloatingParticles = () => {
  const particles = [
    { left: "8%", size: 4, duration: 9, delay: 0, color: "bg-orange-500/50" },
    { left: "18%", size: 3, duration: 12, delay: 1.5, color: "bg-cyan-400/40" },
    { left: "28%", size: 5, duration: 10, delay: 0.4, color: "bg-orange-400/40" },
    { left: "42%", size: 3, duration: 13, delay: 2.2, color: "bg-white/30" },
    { left: "58%", size: 4, duration: 8.5, delay: 0.8, color: "bg-cyan-400/40" },
    { left: "70%", size: 3, duration: 11, delay: 1.1, color: "bg-orange-500/50" },
    { left: "82%", size: 5, duration: 9.5, delay: 2.6, color: "bg-white/25" },
    { left: "92%", size: 3, duration: 12.5, delay: 0.2, color: "bg-cyan-400/35" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute bottom-0 rounded-full ${p.color}`}
          style={{ left: p.left, width: p.size, height: p.size }}
          animate={{ y: ["0vh", "-100vh"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function NotFound() {
  return (
    <main className="relative min-h-[100vh] flex items-center justify-center bg-[#080D16] px-6 py-32 overflow-hidden">
      <Seo title="Page Not Found" description="This page doesn't exist or may have moved." noindex />
      {/* Background grid, matching the rest of the site's secondary-page treatment */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_35%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute -top-32 left-1/4 w-[550px] h-[550px] bg-orange-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* diagonal light sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
        <div className="absolute -inset-y-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 animate-[sweep_8s_ease-in-out_infinite]" />
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sweep {
          0% { transform: translateX(-120%) skewX(-12deg); }
          50%, 100% { transform: translateX(420%) skewX(-12deg); }
        }
      `}} />

      <FloatingParticles />

      <motion.div
        className="relative z-10 max-w-3xl w-full text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Eyebrow badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Search size={14} className="text-orange-500" />
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
            Error 404 · Off The Production Line
          </span>
        </motion.div>

        <JerseyIllustration />

        <motion.h1
          className="text-white text-3xl md:text-5xl font-black mt-10 mb-5 tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          This Page Didn&apos;t Make It
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-cyan-400">
            Through Quality Control
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          The link you followed may be broken, moved, or discontinued.
          Let&apos;s get you back to exploring TradeFine&apos;s sportswear
          manufacturing, OEM &amp; ODM services.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm uppercase tracking-widest bg-gradient-to-r from-orange-600 to-orange-400 hover:shadow-[0_10px_36px_rgba(255,107,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <Home className="w-4 h-4" />
            Back to Home
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm uppercase tracking-widest border border-white/15 bg-white/[0.04] backdrop-blur-md hover:border-orange-400/40 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            Explore Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-sm uppercase tracking-widest border border-white/15 bg-white/[0.04] backdrop-blur-md hover:border-orange-500/40 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
