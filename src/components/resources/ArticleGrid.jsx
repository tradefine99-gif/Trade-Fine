import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowUpRight, Calendar, Clock, ChevronLeft, ChevronRight, SearchX } from 'lucide-react';
import { CATEGORIES } from '../../services/articlesService';

const PAGE_SIZE = 6;

const ArticleGrid = ({ articles }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = activeCategory === 'All' || a.category === activeCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [articles, activeCategory, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  return (
    <section className="bg-[#080D16] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Search + Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-3">
            {['All', ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={activeCategory === cat}
                onClick={() => handleCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2 ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)]'
                    : 'bg-white/[0.03] text-gray-400 border border-white/10 hover:text-white hover:border-orange-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72 flex-shrink-0">
            <label htmlFor="article-search" className="sr-only">Search articles</label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              id="article-search"
              type="text"
              value={query}
              onChange={handleQuery}
              placeholder="Search articles..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-full py-3 pl-11 pr-4 text-white text-sm placeholder:text-gray-500 focus:border-orange-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Results */}
        {paged.length === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center text-center py-24 border border-white/10 rounded-2xl bg-white/[0.02]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <SearchX className="w-10 h-10 text-gray-600 mb-4" />
            <p className="text-white font-bold text-lg mb-1">No articles found</p>
            <p className="text-gray-500 text-sm">
              Try a different search term or category filter.
            </p>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + query + page}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {paged.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                <Link
                  to={`/resources/${article.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-orange-500/40 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.2)] hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500 text-[11px] font-bold uppercase tracking-widest mb-3">
                      {article.category}
                    </span>
                    <h3 className="text-white font-bold text-xl leading-snug mb-2 group-hover:text-orange-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-5 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-gray-500 text-[12px] font-medium">
                      <span className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {article.readTime}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="text-white group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </div>
                  </div>
                </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Pagination */}
        {filtered.length > PAGE_SIZE && (
          <div className="flex items-center justify-center gap-2 mt-14">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-orange-500/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all cursor-pointer ${
                  page === p
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-400 border border-white/10 hover:text-white hover:border-orange-500/40'
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-orange-500/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleGrid;
