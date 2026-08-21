import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingKeywords = () => {
  // Kept intentionally short (max ~18 chars) so every phrase is guaranteed
  // to fit on a single line at every breakpoint down to 320px — longer
  // phrases here previously wrapped to two lines and visually overlapped
  // the heading line below it.
  const keywords = [
    "OEM Manufacturing",
    "ODM Manufacturing",
    "Private Label",
    "Global Export",
    "Bulk Manufacturing",
    "Sports Jerseys",
    "Compression Wear",
    "Corporate Apparel",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length);
    }, 3500); // 3.5 seconds per keyword

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    enter: { opacity: 0, y: 20 },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="relative h-[1.05em] leading-none overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          variants={containerVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 inline-block whitespace-nowrap text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300 font-semibold"
        >
          {keywords[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingKeywords;
