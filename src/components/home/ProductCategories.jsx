import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import sportswearImg from "../../assets/banners/hero.jpg";
import fitnesswearImg from "../../assets/banners/Gym wear banner.jpg";
import casualwearImg from "../../assets/banners/Casual wear banner.jpg";

const ProductCategories = () => {
  const navigate = useNavigate();
  const categories = [
    {
      title: "Sportswear",
      image: sportswearImg,
      description: "Professional teamwear, jerseys, tracksuits and athletic apparel.",
      link: "/products?category=sports-wear",
    },
    {
      title: "Fitness Wear",
      image: fitnesswearImg,
      description: "Gym wear, yoga wear, leggings and training apparel.",
      link: "/products?category=gym-wear",
    },
    {
      title: "Casual Wear",
      image: casualwearImg,
      description: "Premium hoodies, t-shirts, sweatshirts and lifestyle clothing.",
      link: "/products?category=casual-wear",
    },
  ];

  return (
    <section className="py-28 bg-[#080D16] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
              Product Categories
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 uppercase tracking-tight leading-tight max-w-4xl">
            Manufacturing Every Category <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">
              of Performance Apparel
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
            TradeFine manufactures premium sportswear, fitness wear and casual apparel 
            with complete OEM and ODM customization for global brands.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <motion.div 
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => navigate(item.link)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate(item.link); } }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative h-[500px] lg:h-[600px] overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-orange-500/50 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.25)] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-4"
            >
              {/* Image Layer */}
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#080D16] via-[#080D16]/40 to-transparent opacity-80" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                <motion.div 
                  className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl transition-all duration-500 group-hover:translate-y-[-12px] group-hover:bg-white/10 group-hover:border-orange-500/30 group-hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.2)]"
                  whileHover={{ y: -12 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-base mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <motion.span 
                    className="inline-flex items-center gap-2 text-white font-bold text-[11px] uppercase tracking-widest transition-all group-hover:gap-4 group-hover:text-orange-500"
                    whileHover={{ gap: "1rem" }}
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </motion.div>
              </div>

              {/* Decorative Ring Border */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-orange-500/20 transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;