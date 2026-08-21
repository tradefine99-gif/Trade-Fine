import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * HeroBannerImage
 * ----------------
 * Drops one of the client-provided page-banner photos into a secondary-page
 * hero as a full-bleed cinematic backdrop, sitting *behind* the existing
 * PageBanner3D grid/orb/floating-card layer so both compose together.
 *
 * Treatment (kept subtle, on-brand, not "cheesy"):
 *  - slow continuous Ken-Burns zoom + scroll-linked parallax drift
 *  - soft fade-in on mount
 *  - dark luxury gradient wash (matches the Home hero's own overlay recipe)
 *    so text always stays legible over any photo
 *  - a single warm orange lighting bloom, consistent with the rest of the site
 *  - a hairline glass sheen for the "premium corporate" feel
 *
 * Non-interactive and decorative only (aria-hidden), so it never affects
 * layout, tab order or existing content.
 */
const HeroBannerImage = ({ image, focalPosition = 'center 30%' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const fade = useTransform(scrollYProgress, [0, 1], [0.34, 0.12]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.img
        src={image}
        alt=""
        loading="eager"
        fetchpriority="high"
        decoding="async"
        style={{ y, objectPosition: focalPosition }}
        initial={{ scale: 1.14, opacity: 0 }}
        animate={{ scale: 1.04, opacity: 1 }}
        transition={{
          opacity: { duration: 1.4, ease: 'easeOut' },
          scale: { duration: 22, ease: 'linear' },
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* dark luxury wash for legibility */}
      <motion.div
        className="absolute inset-0 bg-[#080D16]"
        style={{ opacity: fade }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080D16] via-[#080D16]/78 to-[#080D16]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080D16] via-[#080D16]/50 to-[#080D16]/85" />

      {/* orange lighting accent */}
      <div className="absolute -top-16 left-[20%] w-[560px] h-[560px] bg-orange-600/15 blur-[160px] rounded-full" />

      {/* hairline glass sheen */}
      <div className="absolute inset-0 backdrop-blur-[1.5px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
    </div>
  );
};

export default HeroBannerImage;
