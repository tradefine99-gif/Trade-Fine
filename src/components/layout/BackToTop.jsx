import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            fixed bottom-6 right-6 lg:bottom-9 lg:right-9 z-50
            w-12 h-12 lg:w-14 lg:h-14 rounded-full
            flex items-center justify-center
            text-white shadow-[0_10px_36px_rgba(249,115,22,0.45)]
            border border-white/10 backdrop-blur-md
            group
          "
          style={{
            background:
              "linear-gradient(135deg, #f97316 0%, #ea580c 55%, #0b1221 130%)",
          }}
        >
          <span className="absolute inset-0 rounded-full bg-orange-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <ArrowUp className="relative z-10 w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
