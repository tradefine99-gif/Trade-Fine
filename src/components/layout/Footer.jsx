import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  CheckCircle,
  Truck,
  Factory,
  Clock,
} from 'lucide-react';
import logo from '../../assets/logo/tradefine-logo.png';

const WHATSAPP_URL = 'https://wa.me/923316131936';

/* lucide-react no longer ships brand/logo icons — small inline SVGs instead */
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const WAIcon = ({ className = 'w-[18px] h-[18px]' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const categories = [
    'Sportswear',
    'Fitness Wear',
    'Casual Wear',
    'Team Uniforms',
    'Compression Wear',
    'Private Label',
  ];

  const socialLinks = [
    { label: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61593330791450', color: 'hover:bg-[#1877F2] hover:border-[#1877F2]' },
    { label: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/tradefine8/', color: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent' },
    // No real LinkedIn company page exists yet, so this one deliberately
    // has no href below (see the render block) rather than pointing to
    // linkedin.com's generic homepage or a page that doesn't exist —
    // same icon, same position, same styling, just not a live link
    // until there's a real page to send visitors to.
    { label: 'LinkedIn', icon: LinkedinIcon, href: null, color: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]' },
    { label: 'WhatsApp', icon: WAIcon, href: WHATSAPP_URL, color: 'hover:bg-[#25D366] hover:border-[#25D366]' },
  ];

  const contactData = [
    { icon: <MapPin size={19} />, label: 'Address', value: 'Boghra Green Town, Sialkot, Pakistan' },
    { icon: <Phone size={19} />, label: 'Phone / WhatsApp', value: '+92 331 6131936', href: 'tel:+923316131936' },
    { icon: <Mail size={19} />, label: 'Email', value: 'tradfine99@gmail.com', href: 'mailto:tradfine99@gmail.com' },
    { icon: <Clock size={19} />, label: 'Response Time', value: 'Within 24 hours, worldwide' },
  ];

  return (
    <footer className="relative bg-[#050B14] border-t border-orange-500/20 text-gray-400 font-sans overflow-hidden">
      {/* Ambient animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-orange-600/10 blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 -right-20 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 relative z-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-20">

          {/* BRAND */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8 w-fit group">
              <img src={logo} alt="TradeFine Logo" className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105" />
              <span className="text-white font-bold text-2xl tracking-tight">TradeFine</span>
            </Link>
            <p className="text-base leading-relaxed mb-8 text-gray-300">
              Premium B2B sportswear manufacturer providing OEM, ODM & private label
              solutions for global athletic brands.
            </p>
            {/* Social Links */}
            <div className="flex gap-3.5">
              {socialLinks.map(({ label, icon: Icon, href, color }, idx) => {
                // Same element, same classes, same animation either way —
                // only whether it's a real link differs. LinkedIn (href:
                // null) renders as a non-navigating span instead of an
                // <a>, so it's not announced as a link / doesn't send
                // anyone to a page that doesn't exist yet.
                const Tag = href ? motion.a : motion.span;
                return (
                  <Tag
                    key={label}
                    {...(href
                      ? { href, target: '_blank', rel: 'noopener noreferrer' }
                      : { 'aria-disabled': true, title: `${label} — coming soon` })}
                    aria-label={label}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3.2,
                      delay: idx * 0.25,
                      repeat: Infinity,
                      repeatType: 'mirror',
                      ease: 'easeInOut',
                    }}
                    whileHover={{ y: -6, scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    className={`w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-gray-300 hover:text-white shadow-[0_0_0_rgba(249,115,22,0)] hover:shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-[color,background,border-color,box-shadow] duration-300 ${color}`}
                  >
                    <Icon size={20} />
                  </Tag>
                );
              })}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group relative inline-block text-base text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Categories</h4>
            <ul className="space-y-3.5">
              {categories.map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="group relative inline-block text-base text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-5">
              {contactData.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-orange-500 flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-[11px] text-gray-500 uppercase font-bold mb-1 tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-base text-gray-200 hover:text-orange-400 transition-colors duration-300">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base text-gray-200">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* BUSINESS CARDS */}
          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-orange-500/20 transition-all duration-300">
              <h5 className="text-orange-500 font-bold text-[11px] uppercase mb-3 tracking-wider">Payment Terms</h5>
              <p className="text-base text-gray-300">75% Advance / 25% Before Shipping</p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-cyan-400/20 transition-all duration-300">
              <h5 className="text-orange-500 font-bold text-[11px] uppercase mb-3 tracking-wider">Shipping Partners</h5>
              <p className="text-base text-gray-300">DHL • FedEx • UPS • Skynet</p>
            </div>
          </div>
        </div>

        {/* TRUST BADGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-12 lg:py-16 border-t border-white/5">
          {[
            { icon: Factory, label: 'OEM & ODM Experts' },
            { icon: Globe, label: 'Global Export' },
            { icon: CheckCircle, label: 'Secure Payment' },
            { icon: Truck, label: 'Fast Production' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/25 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Icon className="text-orange-500 flex-shrink-0" size={22} />
              <span className="text-base font-semibold text-gray-300">{label}</span>
            </div>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm uppercase tracking-widest font-bold text-gray-400">
          <div className="flex items-center gap-3">
            <img src={logo} alt="TradeFine Logo" className="h-7 w-7 object-contain" />
            <span>© 2026 TradeFine Sportswear. All Rights Reserved.</span>
          </div>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-orange-500 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-orange-500 transition-colors">Terms</Link>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;
