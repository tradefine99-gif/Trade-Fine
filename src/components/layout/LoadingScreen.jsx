import { motion } from 'framer-motion';
import logo from '../../assets/logo/tradefine-logo.png';

const LoadingScreen = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.5 } }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10, duration: 1 } },
    pulsate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-background flex flex-col items-center justify-center z-max overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="exit"
      aria-live="polite"
      aria-label="Loading content"
    >
      <motion.img
        src={logo}
        alt="Trade Fine Logo"
        className="h-24 md:h-32 mb-8"
        variants={logoVariants}
        initial="hidden"
        animate={["visible", "pulsate"]}
      />
      <motion.p
        className="text-white text-xl md:text-2xl font-bold tracking-wide"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Loading the Future of Sportswear...
      </motion.p>
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary opacity-20" style={{ filter: 'blur(80px)' }} />
        <div className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-secondary opacity-20" style={{ filter: 'blur(70px)' }} />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
