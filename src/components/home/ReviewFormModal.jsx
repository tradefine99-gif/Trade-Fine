import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Upload, CheckCircle2, Clock } from 'lucide-react';
import { getCategories } from '../../services/productsService';
import { submitReview } from '../../services/reviewsService';

const initialForm = {
  name: '',
  company: '',
  country: '',
  email: '',
  rating: 0,
  product: '',
  message: '',
};

const ReviewFormModal = ({ open, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [hoverRating, setHoverRating] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  const [productOptions, setProductOptions] = useState([]);

  useEffect(() => {
    getCategories().then(({ categories }) => setProductOptions(categories.map((c) => c.name)));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file for your logo/photo.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be smaller than 5MB.');
      return;
    }
    setError('');
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const removePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const resetAndClose = () => {
    setForm(initialForm);
    setPhoto(null);
    setPhotoPreview(null);
    setStatus('idle');
    setError('');
    onClose();
  };

  // Escape-to-close + body scroll lock + focus return — same pattern
  // already used by ProductDetailModal and GalleryLightbox; this modal
  // was missing all three. Declared after resetAndClose (not before) so
  // the effect doesn't reference it ahead of its declaration.
  useEffect(() => {
    if (!open) return undefined;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') resetAndClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      if (trigger instanceof HTMLElement) trigger.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- resetAndClose is stable per render cycle; re-running this on every keystroke-driven form state change would re-lock/re-focus unnecessarily
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.company || !form.country || !form.email) {
      setError('Please fill in your name, company, country, and email.');
      return;
    }
    if (form.rating === 0) {
      setError('Please select a star rating.');
      return;
    }
    if (!form.product) {
      setError('Please select the product you purchased.');
      return;
    }
    if (!form.message || form.message.trim().length < 10) {
      setError('Please share a few words about your experience (at least 10 characters).');
      return;
    }
    setError('');
    setStatus('submitting');
    const result = await submitReview({
      name: form.name,
      company: form.company,
      country: form.country,
      email: form.email,
      rating: form.rating,
      product: form.product,
      message: form.message,
      photoFile: photo,
    });
    if (!result.success) {
      setError(result.error);
      setStatus('idle');
      return;
    }
    setStatus('success');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={resetAndClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-modal-title"
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b1221] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] p-7 sm:p-9"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <button
              type="button"
              onClick={resetAndClose}
              aria-label="Close review form"
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-orange-500" />
                </div>
                <h3 id="review-modal-title" className="text-white text-2xl font-bold mb-3">
                  Thanks for the Review
                </h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-2">
                  We've received your review and it's now in our moderation queue.
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-[13px] mb-8">
                  <Clock className="w-3.5 h-3.5" />
                  Our team checks new reviews before they go live
                </div>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-7 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 id="review-modal-title" className="text-white text-2xl font-bold mb-1">
                  Leave a Review
                </h3>
                <p className="text-gray-500 text-[14px] mb-7">
                  Tell other brands about your experience working with TradeFine.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="review-name" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
                        Name
                      </label>
                      <input
                        id="review-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-[#080D16] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:border-orange-500 focus:outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="review-company" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
                        Company
                      </label>
                      <input
                        id="review-company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full bg-[#080D16] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:border-orange-500 focus:outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="review-country" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
                        Country
                      </label>
                      <input
                        id="review-country"
                        name="country"
                        type="text"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full bg-[#080D16] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:border-orange-500 focus:outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="review-email" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
                        Email
                      </label>
                      <input
                        id="review-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full bg-[#080D16] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:border-orange-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1 block">
                      Your Rating
                    </span>
                    <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Star rating">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <button
                          key={val}
                          type="button"
                          role="radio"
                          aria-checked={form.rating === val}
                          aria-label={`${val} star${val > 1 ? 's' : ''}`}
                          onMouseEnter={() => setHoverRating(val)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setForm((prev) => ({ ...prev, rating: val }))}
                          className="p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 rounded"
                        >
                          <Star
                            size={28}
                            className={
                              (hoverRating || form.rating) >= val
                                ? 'fill-orange-500 text-orange-500 transition-colors'
                                : 'fill-transparent text-white/20 transition-colors'
                            }
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="review-product" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
                      Product Purchased
                    </label>
                    <select
                      id="review-product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full bg-[#080D16] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:border-orange-500 focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a category</option>
                      {productOptions.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="review-message" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
                      Your Review
                    </label>
                    <textarea
                      id="review-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about the quality, communication, and delivery..."
                      className="w-full bg-[#080D16] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:border-orange-500 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1 block">
                      Photo or Logo <span className="normal-case font-medium text-gray-400">(optional)</span>
                    </span>
                    {photoPreview ? (
                      <div className="flex items-center gap-3 bg-[#080D16] border border-white/10 rounded-xl p-3">
                        <img src={photoPreview} alt="Upload preview" className="w-12 h-12 rounded-lg object-cover" />
                        <span className="text-gray-400 text-xs truncate flex-1">{photo?.name}</span>
                        <button
                          type="button"
                          onClick={removePhoto}
                          className="text-gray-500 hover:text-red-400 text-xs font-bold uppercase transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="review-photo"
                        className="flex items-center justify-center gap-2 border border-dashed border-white/15 rounded-xl py-4 text-gray-500 text-sm cursor-pointer hover:border-orange-500/40 hover:text-gray-300 transition-colors"
                      >
                        <Upload className="w-4 h-4" />
                        Upload an image
                        <input
                          id="review-photo"
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {error && (
                    <p role="alert" className="text-red-400 text-sm font-semibold">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-linear-to-r from-orange-600 to-orange-400 text-white font-black text-xs uppercase tracking-[0.3em] rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Review'}
                  </button>
                  <p className="text-gray-400 text-[12px] text-center">
                    Reviews are moderated and typically go live within 2 business days.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReviewFormModal;
