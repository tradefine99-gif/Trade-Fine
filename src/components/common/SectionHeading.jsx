import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ pretitle, title, subtitle, className = '', pretitleClassName = '', titleClassName = '', subtitleClassName = '', ...props }) => {
  const textRevealVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const charVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { ease: [0.2, 0.8, 0.2, 1], duration: 0.8 } },
  };

  return (
    <motion.div
      className={`text-center mb-12 lg:mb-16 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={textRevealVariants}
      {...props}
    >
      {pretitle && (
        <motion.p
          className={`text-primary text-lg md:text-xl font-semibold mb-2 uppercase tracking-wider translateZ-20 ${pretitleClassName}`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          {pretitle}
        </motion.p>
      )}
      {title && (
        <motion.h2
          className={`text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-shadow-soft translateZ-50 ${titleClassName}`}
          variants={textRevealVariants}
        >
          {title.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-2">
              {word.split("").map((char, j) => (
                <motion.span key={j} variants={charVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          className={`text-white/[0.7] max-w-3xl mx-auto text-lg md:text-xl leading-relaxed translateZ-20 ${subtitleClassName}`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
