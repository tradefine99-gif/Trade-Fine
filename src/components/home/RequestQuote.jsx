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
  Clock, 
  ShieldCheck, 
  Headset,
  CheckCircle2,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import IndustrialPrecisionVisual from './IndustrialPrecisionVisual';
import { submitLead } from '../../services/leadsService';

// Same number already used across the site (Footer, product modal, etc.)
const WHATSAPP_URL = 'https://wa.me/923316131936';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    country: '',
    category: '',
    quantity: '',
    message: '',
    agreed: false,
    website: '' // honeypot — real users never see or fill this
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [lastSubmission, setLastSubmission] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactPerson || !formData.email) {
      setError('Please fill in your company name, contact person, and email.');
      return;
    }
    setError('');
    setSubmitting(true);

    const result = await submitLead({
      source: 'quote',
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
    setLastSubmission({
      category: formData.category,
      quantity: formData.quantity,
      companyName: formData.companyName,
    });
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      country: '',
      category: '',
      quantity: '',
      message: '',
      agreed: false,
      website: ''
    });
  };

  const categories = [
    "Sportswear & Teamwear",
    "Fitness & Gym Wear",
    "Casual & Lifestyle Apparel",
    "Custom Private Label"
  ];

  return (
    <section className="bg-[#080D16] py-28 px-6 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto lg:px-12 relative z-10">
        
        {/* Header Section: Proper line-height and centered alignment */}
        <motion.div 
          className="text-center mb-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
            <span className="text-orange-500 text-xs font-black uppercase tracking-widest">
              Request a Quote
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tight uppercase">
            Let's Manufacture Your <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-300">
              Next Collection
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto italic">
            "Direct OEM/ODM solutions for brands scaling global sportswear operations."
          </p>
        </motion.div>

        {/* Layout Grid: Desktop 12 columns for precise control */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Content (5 Columns) */}
          <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
            <div className="aspect-[16/11] rounded-3xl overflow-hidden border border-white/10 bg-[#080D16] relative group">
              <IndustrialPrecisionVisual />
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="text-white text-2xl font-bold uppercase italic tracking-tight">Industrial Precision</h3>
                <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mt-1">Sialkot Facility</p>
              </div>
            </div>

            {/* highlights */}
            <div className="space-y-4">
              {[
                "OEM & ODM Manufacturing", 
                "Low Minimum Order Quantity", 
                "Worldwide Export Logistics", 
                "Triple Quality Inspection"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 p-5 bg-white/[0.02] border border-white/10 rounded-2xl">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-white font-bold tracking-tight text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Form (7 Columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">Quote Request Received</h3>
                  <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-8">
                    Thank you for reaching out. Our manufacturing team will review your
                    requirements and get back to you within 24 hours.
                  </p>
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                      `Hello TradeFine, I just submitted a quote request.\n\nProduct: ${lastSubmission?.category || 'N/A'}\nQuantity: ${lastSubmission?.quantity || 'N/A'}\nCompany: ${lastSubmission?.companyName || 'N/A'}\n\nI would like to discuss my requirements further.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-4 mb-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-[#25D366]/20 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Continue on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-orange-500 font-bold text-sm uppercase tracking-widest hover:text-orange-400 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
              <form className="space-y-8" onSubmit={handleSubmit} noValidate>

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
                  {/* Company */}
                  <div className="space-y-2 group">
                    <label htmlFor="rq-company" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">Company Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                      <input
                        id="rq-company"
                        name="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Business Ltd."
                        className="w-full bg-[#080D16] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-base focus:border-orange-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Person */}
                  <div className="space-y-2 group">
                    <label htmlFor="rq-person" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">Contact Person</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                      <input
                        id="rq-person"
                        name="contactPerson"
                        type="text"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-[#080D16] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-base focus:border-orange-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2 group">
                    <label htmlFor="rq-email" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                      <input
                        id="rq-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ceo@brand.com"
                        className="w-full bg-[#080D16] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-base focus:border-orange-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="space-y-2 group">
                    <label htmlFor="rq-country" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">Country</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                      <input
                        id="rq-country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Destination Country"
                        className="w-full bg-[#080D16] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-base focus:border-orange-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="space-y-2 group">
                    <label htmlFor="rq-category" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">Category</label>
                    <div className="relative">
                      <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none group-focus-within:text-orange-500 transition-colors z-10" />
                      <select
                        id="rq-category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full bg-[#080D16] border border-white/10 rounded-xl py-4 pl-12 pr-8 text-white text-base focus:border-orange-500 focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Choose Apparel Category</option>
                        {categories.map((c, i) => <option key={i}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="space-y-2 group">
                    <label htmlFor="rq-quantity" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">Quantity</label>
                    <div className="relative">
                      <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                      <input
                        id="rq-quantity"
                        name="quantity"
                        type="number"
                        min="0"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Expected Pieces"
                        className="w-full bg-[#080D16] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-base focus:border-orange-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2 group">
                  <label htmlFor="rq-message" className="text-gray-400 text-[11px] font-black uppercase tracking-widest px-1">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                    <textarea
                      id="rq-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Discuss technical requirements, fabrics, GSM or lead times..."
                      rows="4"
                      className="w-full bg-[#080D16] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-base focus:border-orange-500 focus:outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                {error && (
                  <p role="alert" className="text-red-400 text-sm font-semibold -mt-4">{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-5 bg-linear-to-r from-orange-600 to-orange-400 text-white font-black text-xs uppercase tracking-[0.3em] rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  <span className="flex items-center justify-center space-x-2">
                    {submitting ? 'Sending…' : 'Request Free Quote'} {!submitting && <ChevronRight className="w-5 h-5" />}
                  </span>
                </button>
              </form>
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM TRUST ROW - Spaced with grid and top margin */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-white/10">
          {[
            { icon: Clock, label: "24h Response", sub: "Fast Professional Consultation" },
            { icon: ShieldCheck, label: "Non-Disclosure", sub: "Strict Project Confidentiality" },
            { icon: Globe, label: "Worldwide", sub: "Seamless Customs & Export" },
            { icon: Headset, label: "Client Support", sub: "Direct Manufacturing Expert" },
          ].map((trust, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <trust.icon className="w-6 h-6 text-orange-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black uppercase tracking-tighter text-sm">{trust.label}</span>
                <span className="text-gray-500 text-[11px] font-bold uppercase">{trust.sub}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RequestQuote;