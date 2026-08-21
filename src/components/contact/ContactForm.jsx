import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  User,
  Mail,
  Globe,
  Layers,
  Hash,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { submitLead } from '../../services/leadsService';

const CATEGORIES = [
  'Sportswear & Teamwear',
  'Fitness & Gym Wear',
  'Casual & Lifestyle Apparel',
  'Custom Private Label',
];

const FIELD_CLASS =
  'w-full bg-[#080D16] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-base focus:border-orange-500 focus:outline-none transition-all';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    country: '',
    category: '',
    quantity: '',
    message: '',
    website: '', // honeypot — real users never see or fill this
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const result = await submitLead({
      source: 'contact',
      companyName: formData.companyName,
      contactPerson: formData.contactPerson,
      email: formData.email,
      country: formData.country,
      category: formData.category,
      quantity: formData.quantity,
      message: formData.message,
      website: formData.website,
    });

    setSubmitting(false);

    if (!result.success) {
      setError(result.error);
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col items-center text-center min-h-[420px] justify-center">
        <CheckCircle2 className="w-14 h-14 text-orange-500 mb-6" />
        <h3 className="text-white text-2xl font-bold mb-3">Request received</h3>
        <p className="text-gray-400 max-w-sm">
          Thanks, {formData.contactPerson || 'there'} — our team will review your project and
          reply within 24 hours at {formData.email || 'the email you provided'}.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Honeypot field — hidden from real users via CSS, bots often fill every field they see */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
          className="absolute -left-[9999px] w-px h-px opacity-0"
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2 group">
            <label htmlFor="contact-companyName" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
              Company Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
              <input
                id="contact-companyName"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Business Ltd."
                required
                className={FIELD_CLASS}
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label htmlFor="contact-contactPerson" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
              Contact Person
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
              <input
                id="contact-contactPerson"
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className={FIELD_CLASS}
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label htmlFor="contact-email" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ceo@brand.com"
                required
                className={FIELD_CLASS}
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label htmlFor="contact-country" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
              Country
            </label>
            <div className="relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
              <input
                id="contact-country"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Destination Country"
                className={FIELD_CLASS}
              />
            </div>
          </div>

          <div className="space-y-2 group">
            <label htmlFor="contact-category" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
              Category
            </label>
            <div className="relative">
              <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none group-focus-within:text-orange-500 transition-colors z-10" />
              <select
                id="contact-category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`${FIELD_CLASS} pr-8 appearance-none cursor-pointer`}
              >
                <option value="">Choose Apparel Category</option>
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2 group">
            <label htmlFor="contact-quantity" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
              Quantity
            </label>
            <div className="relative">
              <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
              <input
                id="contact-quantity"
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Expected Pieces"
                min="0"
                className={FIELD_CLASS}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2 group">
          <label htmlFor="contact-message" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">
            Message
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Discuss technical requirements, fabrics, GSM or lead times..."
              rows="4"
              className={`${FIELD_CLASS} pt-4 resize-none`}
            />
          </div>
        </div>

        {error && (
          <p role="alert" className="text-red-400 text-sm font-semibold -mt-4">{error}</p>
        )}

        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={{ scale: submitting ? 1 : 1.01 }}
          whileTap={{ scale: submitting ? 1 : 0.98 }}
          className="w-full py-5 bg-linear-to-r from-orange-600 to-orange-400 text-white font-black text-xs uppercase tracking-[0.3em] rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
        >
          <span className="flex items-center justify-center space-x-2">
            <span>{submitting ? 'Sending…' : 'Request Free Quote'}</span>
            {!submitting && <ChevronRight className="w-5 h-5" />}
          </span>
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
