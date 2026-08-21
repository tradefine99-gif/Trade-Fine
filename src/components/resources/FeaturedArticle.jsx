import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

const FeaturedArticle = ({ article }) => {
  if (!article) return null;

  return (
    <section className="px-6 pb-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <Link
          to={`/resources/${article.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-orange-500/40 transition-colors duration-500"
        >
          <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-5">
              Featured &middot; {article.category}
            </span>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-4 group-hover:text-orange-400 transition-colors">
              {article.title}
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-5 text-gray-500 text-xs font-medium mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {article.readTime}
              </span>
            </div>
            <span className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group-hover:text-orange-500 transition-colors w-fit">
              Read Article
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
