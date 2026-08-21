import React from "react";
import { motion } from "framer-motion";
import { ScanLine, BadgeCheck } from "lucide-react";

/**
 * IndustrialPrecisionVisual
 * --------------------------
 * Replaces the previous empty "Industrial Precision" placeholder box in the
 * Request Quote section with a technical garment blueprint scene: a jersey
 * spec sketch with measurement callouts, a blueprint grid, a slow scanning
 * quality-inspection line, and a rotating QC seal.
 *
 * Pure SVG/CSS — no new image assets, so it stays fast to load and scales
 * crisply at any size, and reuses the same orange/cyan language as the rest
 * of the site instead of introducing a new visual motif.
 */
const IndustrialPrecisionVisual = () => {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="absolute inset-0">
      {/* blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-orange-500/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-transparent to-transparent" />

      {/* corner crop marks, technical-drawing style */}
      {[
        "top-5 left-5 border-t border-l",
        "top-5 right-5 border-t border-r",
        "bottom-5 left-5 border-b border-l",
        "bottom-5 right-5 border-b border-r",
      ].map((pos, i) => (
        <div key={i} className={`absolute w-6 h-6 ${pos} border-orange-500/40`} />
      ))}

      {/* rotating QC seal, top right */}
      <motion.div
        className="absolute top-7 right-7 flex items-center gap-1.5 text-cyan-400/70"
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <BadgeCheck size={16} />
      </motion.div>

      {/* garment technical sketch */}
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-full h-full -translate-y-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="iqGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.6" />
          </linearGradient>
          <clipPath id="iqClip">
            <rect x="0" y="0" width="400" height="300" />
          </clipPath>
        </defs>

        <g clipPath="url(#iqClip)">
          {/* jersey technical outline, centered */}
          <path
            d="M148 66
               L172 54
               C182 70, 218 70, 228 54
               L252 66
               L268 98
               L248 110
               L238 90
               L238 224
               C238 232, 232 238, 224 238
               L176 238
               C168 238, 162 232, 162 224
               L162 90
               L152 110
               L132 98
               Z"
            stroke="url(#iqGlow)"
            strokeWidth="1.6"
            fill="rgba(255,255,255,0.02)"
          />
          {/* collar + side seams, dashed technical lines */}
          <path d="M172 54 C182 70, 218 70, 228 54" stroke="#22d3ee" strokeOpacity="0.6" strokeWidth="1.2" />
          <path d="M162 90 L162 224" stroke="#f97316" strokeOpacity="0.45" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M238 90 L238 224" stroke="#f97316" strokeOpacity="0.45" strokeWidth="1" strokeDasharray="3 3" />

          {/* measurement callouts */}
          <line x1="90" y1="90" x2="90" y2="224" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="1" />
          <line x1="86" y1="90" x2="94" y2="90" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="1" />
          <line x1="86" y1="224" x2="94" y2="224" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="1" />
          <text x="70" y="160" fontSize="9" fill="#94a3b8" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 70 160)">
            BODY 68CM
          </text>

          <line x1="162" y1="234" x2="238" y2="234" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="1" />
          <text x="200" y="248" fontSize="9" fill="#94a3b8" fontFamily="monospace" textAnchor="middle">
            CHEST 54CM
          </text>

          {/* pulsing measurement points */}
          {[
            [162, 90], [238, 90], [162, 224], [238, 224], [200, 62],
          ].map(([x, y], i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="2.6"
              fill="#f97316"
              animate={prefersReducedMotion ? {} : { opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
            />
          ))}

          {/* fabric spec tag, right side */}
          <rect x="288" y="150" width="86" height="54" rx="4" stroke="#22d3ee" strokeOpacity="0.35" strokeWidth="1" fill="rgba(34,211,238,0.03)" />
          <text x="298" y="166" fontSize="8" fill="#22d3ee" fontFamily="monospace">FABRIC</text>
          <text x="298" y="178" fontSize="7.5" fill="#94a3b8" fontFamily="monospace">180GSM PIQUE</text>
          <text x="298" y="190" fontSize="7.5" fill="#94a3b8" fontFamily="monospace">TOL ±0.5CM</text>
        </g>
      </svg>

      {/* scanning inspection line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_12px_2px_rgba(34,211,238,0.5)]"
        animate={prefersReducedMotion ? {} : { top: ["8%", "88%", "8%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute top-7 left-7 flex items-center gap-1.5 text-orange-400/80">
        <ScanLine size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">QC Scan Active</span>
      </div>

      {/* bottom scrim for guaranteed legibility under the title overlay */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080D16] via-[#080D16]/80 to-transparent" />
    </div>
  );
};

export default IndustrialPrecisionVisual;
