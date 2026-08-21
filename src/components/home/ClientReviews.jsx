import React, { useEffect, useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star, ArrowRight, Quote, BadgeCheck, ChevronLeft, ChevronRight, PenLine } from 'lucide-react';
import {
  getPublishedReviews,
  getAverageRating,
  getCountryList,
  REVIEW_CATEGORIES,
} from '../../services/reviewsService';
import ReviewFormModal from './ReviewFormModal';
import { LoadingBlock, ErrorState, EmptyState } from '../common/DataState';

const Stars = ({ rating, size = 16 }) => (
  <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={size}
        className={i < rating ? 'fill-orange-500 text-orange-500' : 'fill-transparent text-white/15'}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <motion.div
    className="group relative flex-shrink-0 w-[85vw] sm:w-[380px] snap-start rounded-3xl bg-white/[0.035] backdrop-blur-xl border border-white/10 p-7 flex flex-col hover:border-orange-500/25 hover:bg-white/[0.06] transition-all duration-500"
    whileHover={{ y: -6 }}
  >
    <div className="flex items-start justify-between mb-5">
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${review.color}`}>
          {review.initials}
        </div>
        <div>
          <p className="text-white font-bold text-base leading-tight">{review.name}</p>
          <p className="text-gray-500 text-[13px]">{review.company}</p>
        </div>
      </div>
      <Quote className="w-6 h-6 text-white/10 flex-shrink-0" />
    </div>

    <Stars rating={review.rating} />

    <p className="text-gray-300 text-[15px] leading-relaxed mt-4 mb-6 flex-grow">
      "{review.text}"
    </p>

    <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[12px]">
      <div className="flex items-center gap-1.5 text-gray-500">
        <span>{review.countryFlag}</span>
        <span>{review.country}</span>
      </div>
      <span className="text-orange-500/80 font-semibold uppercase tracking-wider">{review.product}</span>
    </div>

    <div className="flex items-center justify-between mt-3 text-[11px] text-gray-400">
      {review.verified ? (
        <span className="inline-flex items-center gap-1 text-emerald-400/90 font-semibold uppercase tracking-wider">
          <BadgeCheck className="w-3.5 h-3.5" /> Verified Customer
        </span>
      ) : (
        <span className="text-gray-400 font-semibold uppercase tracking-wider">Customer Review</span>
      )}
      <span>
        {new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
      </span>
    </div>
  </motion.div>
);

const ClientReviews = () => {
  const navigate = useNavigate();
  const scrollerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeCountry, setActiveCountry] = useState('all');
  const [formOpen, setFormOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  const load = async () => {
    setStatus('loading');
    const { reviews: data, error } = await getPublishedReviews();
    if (error) {
      setStatus('error');
      return;
    }
    setReviews(data);
    setStatus('ready');
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard fetch-on-mount pattern; load() is async and safe to call here.
    load();
  }, []);

  const countries = useMemo(() => getCountryList(reviews), [reviews]);
  const average = useMemo(() => getAverageRating(reviews), [reviews]);

  const filtered = useMemo(() => {
    return reviews.filter((r) => {
      const catOk = activeCategory === 'all' || r.category === activeCategory;
      const countryOk = activeCountry === 'all' || r.country === activeCountry;
      return catOk && countryOk;
    });
  }, [reviews, activeCategory, activeCountry]);

  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 24 : 400;
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="py-28 bg-[#080D16] relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="inline-flex px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                Client Reviews
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-xl">
              Trusted by Brands <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">Worldwide</span>
            </h2>
          </div>

          {/* Average Rating Summary */}
          <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-5 backdrop-blur-md w-fit">
            <div className="text-5xl font-black text-white leading-none">{average}</div>
            <div>
              <Stars rating={Math.round(average)} size={18} />
              <p className="text-gray-500 text-[13px] mt-1.5">{reviews.length} verified reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        {status === 'ready' && (
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-2">
            {REVIEW_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-orange-500 border-orange-500 text-white'
                    : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="sm:ml-auto flex items-center gap-2">
            <label htmlFor="review-country-filter" className="sr-only">Filter reviews by country</label>
            <select
              id="review-country-filter"
              value={activeCountry}
              onChange={(e) => setActiveCountry(e.target.value)}
              className="bg-[#0d1521] border border-white/10 rounded-full px-4 py-2 text-[13px] font-semibold text-gray-300 focus:border-orange-500 focus:outline-none cursor-pointer"
            >
              <option value="all">All Countries</option>
              {countries.map((c) => (
                <option key={c.country} value={c.country}>
                  {c.flag} {c.country}
                </option>
              ))}
            </select>
          </div>
        </motion.div>
        )}

        {status === 'loading' && <LoadingBlock label="Loading reviews…" />}
        {status === 'error' && <ErrorState onRetry={load} />}

        {/* Carousel */}
        {status === 'ready' && (filtered.length > 0 ? (
          <div className="relative">
            <div
              ref={scrollerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-1 px-1 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <AnimatePresence>
                {filtered.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </AnimatePresence>
            </div>

            <div className="hidden md:flex items-center justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous reviews"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-orange-500/40 hover:bg-white/5 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next reviews"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-orange-500/40 hover:bg-white/5 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 border border-white/10 rounded-2xl bg-white/[0.02]">
            <p className="text-gray-400">No reviews match these filters yet.</p>
          </div>
        ))}

        {/* Section Footer: CTA */}
        <motion.div
          className="flex flex-col items-center border-t border-white/10 pt-16 mt-16 rounded-3xl gradient-black-orange-radial -mx-6 lg:-mx-12 px-6 lg:px-12 pb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-white font-medium text-xl mb-2">Worked with TradeFine?</p>
          <p className="text-gray-400 text-base mb-8 text-center max-w-md">
            Share your experience — every review is checked by our team before it goes live.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => setFormOpen(true)}
              className="relative group overflow-hidden px-8 py-4 bg-linear-to-r from-orange-600 to-red-600 text-white font-black text-sm uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_20px_50px_rgba(249,115,22,0.4)] hover:-translate-y-1 active:scale-95 flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2"
            >
              <PenLine className="w-4 h-4" />
              Leave a Review
            </button>
            <button
              type="button"
              onClick={() => navigate('/gallery')}
              className="px-8 py-4 border border-white/15 bg-white/[0.03] text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/[0.08] hover:border-orange-500/30 transition-all duration-300 flex items-center gap-2 justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2"
            >
              See Our Work
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <ReviewFormModal
        open={formOpen}
        onClose={() => setFormOpen(false)}
      />
    </section>
  );
};

export default ClientReviews;
