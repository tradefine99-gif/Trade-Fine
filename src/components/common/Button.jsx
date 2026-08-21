import { useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * TradeFine CTA Button — single source of truth for the site's button
 * design system (fixes the "inconsistent gradients" issue flagged in
 * review). Every hand-rolled CTA across pages/components now uses these
 * same tokens directly in-place; this component exists so any *new*
 * button can just import it instead of re-inventing the gradient again.
 *
 * Hierarchy:
 *  - primary              Filled orange gradient. For the one true action
 *                          on a screen: Request a Quote, Contact Us, Start
 *                          Your Order.
 *  - secondary             Outlined/glass, no fill. For "View Products",
 *                          "View Manufacturing", "Learn More" — supporting
 *                          actions that shouldn't compete with primary.
 *  - secondary-onlight     Same as secondary, tuned for light-background
 *                          sections (dark text/border instead of white).
 *  - tertiary              Text-only link with an animated arrow. For
 *                          "Read More", "View Details", "Explore".
 *
 * Shared tokens: rounded-xl radius, 300ms ease transition, -translate-y
 * lift on hover, orange focus ring (inherited from global focus-visible
 * styles in index.css). Kept deliberately mono-color (no rainbow/hue
 * shift) so it reads as premium rather than "colorful for its own sake".
 */
const Button = ({ children, onClick, variant = 'primary', className = '', href, ...props }) => {
  const buttonRef = useRef(null);
  const isMagnetic = props['data-magnetic'];

  const handleMouseMove = (e) => {
    if (!isMagnetic || !buttonRef.current) return;
    const button = buttonRef.current;
    const { left, top, width, height } = button.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.3;
    const y = (e.clientY - (top + height / 2)) * 0.3;
    button.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!isMagnetic || !buttonRef.current) return;
    buttonRef.current.style.transform = '';
  };

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-sm rounded-xl overflow-hidden transition-all duration-300 ease-in-out transform-gpu";

  let variantStyles;
  switch (variant) {
    case 'primary':
      variantStyles =
        "bg-gradient-to-r from-orange-600 to-orange-400 text-white shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)]";
      break;
    case 'secondary':
      variantStyles =
        "border border-white/15 bg-white/[0.04] backdrop-blur-md text-white hover:border-orange-500/40 hover:bg-white/[0.08]";
      break;
    case 'secondary-onlight':
      variantStyles =
        "border border-black/15 bg-black/[0.03] text-[#0b0f19] hover:border-orange-500/50 hover:bg-orange-500/[0.06]";
      break;
    case 'tertiary':
      variantStyles =
        "px-0 py-0 rounded-none bg-transparent text-white font-semibold hover:text-orange-400 shadow-none";
      break;
    default:
      variantStyles =
        "bg-gradient-to-r from-orange-600 to-orange-400 text-white shadow-[0_4px_20px_rgba(255,107,0,0.32)] hover:shadow-[0_8px_30px_rgba(255,107,0,0.5)]";
  }

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={buttonRef}
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: variant === 'tertiary' ? 0 : -2 }}
      whileTap={{ scale: variant === 'tertiary' ? 1 : 0.97 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Tag>
  );
};

export default Button;
