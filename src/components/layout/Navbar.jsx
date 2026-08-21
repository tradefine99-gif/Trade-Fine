import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ChevronDown, SearchX } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/tradefine-logo.png";
import { searchSite, refreshArticleIndex } from "../../data/searchIndex";

/* Real WhatsApp business number (matches Footer / ProductDetailModal) */
const WHATSAPP_URL = "https://wa.me/923316131936";

/* ─── dropdown data ─────────────────────────────────────────────── */
const PRODUCTS = [
  {
    heading: "Sportswear",
    icon: "🏅",
    accent: "from-orange-500 to-red-500",
    items: [
      "Tracksuits & Joggers",
      "Compression Wear",
      "Sports Jerseys",
      "Shorts & Tights",
      "Sports Bras",
      "Football Kits",
    ],
  },
  {
    heading: "Fitness Wear",
    icon: "💪",
    accent: "from-cyan-400 to-blue-500",
    items: [
      "Gym Wear Sets",
      "Yoga Pants & Tops",
      "Running Wear",
      "Tank Tops & Vests",
      "Leggings",
      "Performance Tees",
    ],
  },
  {
    heading: "Casual Wear",
    icon: "✨",
    accent: "from-purple-400 to-pink-500",
    items: [
      "Hoodies & Sweatshirts",
      "Polo Shirts",
      "T-Shirts",
      "Zip-Up Jackets",
      "Bomber Jackets",
      "Cargo Shorts",
    ],
  },
];

const OEM_ODM = [
  { label: "OEM Manufacturing", desc: "Your design, our production", icon: "🏭" },
  { label: "ODM Design Service", desc: "Full design + manufacturing", icon: "✏️" },
  { label: "Private Label", desc: "Brand it as your own", icon: "🏷️" },
  { label: "Bulk Orders", desc: "Low MOQ, fast turnaround", icon: "📦" },
];

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Manufacturing", path: "/manufacturing" },
  { name: "OEM / ODM", path: "/oem-odm" },
  { name: "Gallery", path: "/gallery" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" }
];

/* ─── WA icon ───────────────────────────────────────────────────── */
const WAIcon = ({ cls = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

/* ─── component ─────────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [searchOpen, setSearchOpen]     = useState(false);
  const [searchQuery, setSearchQuery]   = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchIndexTick, setSearchIndexTick] = useState(0);
  const searchRef   = useRef(null);
  const dropTimeout = useRef(null);
  const navigate = useNavigate();

  // Swap the static article search entries for live Supabase data once,
  // in the background. Search works immediately off the static fallback
  // either way, this just re-renders results if the live list differs.
  useEffect(() => {
    refreshArticleIndex()?.then(() => setSearchIndexTick((t) => t + 1));
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps -- searchIndexTick intentionally forces a recompute against the (mutated) SEARCH_INDEX array
  const searchResults = searchSite(searchQuery);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleResultClick = (path) => {
    navigate(path);
    closeSearch();
  };

  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        closeSearch();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!searchOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  const openDrop  = (name) => { clearTimeout(dropTimeout.current); setActiveDropdown(name); };
  const closeDrop = ()     => { dropTimeout.current = setTimeout(() => setActiveDropdown(null), 160); };

  return (
    <header
      className="
        sticky top-0 z-40
        bg-[#080D16]/96 backdrop-blur-xl
        border-b border-white/[0.08]
        shadow-[0_2px_32px_rgba(0,0,0,0.6)]
      "
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="h-[76px] flex items-center justify-between gap-4">

          {/* ── LOGO + BRAND TEXT ────────────────────────── */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-3 group"
            aria-label="TradeFine – Home"
          >
            <img
              src={logo}
              alt="TradeFine"
              className="
                h-[46px] w-auto object-contain flex-shrink-0
                transition-transform duration-300 group-hover:scale-105
                drop-shadow-[0_0_10px_rgba(255,255,255,0.12)]
              "
            />
            {/* Brand wordmark */}
            <div className="flex flex-col leading-none select-none">
              <span
                className="
                  text-[17px] font-extrabold tracking-tight
                  bg-gradient-to-r from-white via-white to-white/70
                  bg-clip-text text-transparent
                "
              >
                Trade<span className="text-orange-500">Fine</span>
              </span>
              <span className="text-[9px] font-semibold tracking-[0.18em] text-white/40 uppercase mt-[2px]">
                Sportswear Mfg.
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ──────────────────────────────── */}
          <nav className="hidden xl:flex items-center gap-7 2xl:gap-8 flex-1 justify-center">
            {NAV_LINKS.map((linkObj) => {
              const hasDrop  = linkObj.name === "Products" || linkObj.name === "OEM / ODM";

              return (
                <div
                  key={linkObj.name}
                  className="relative"
                  onMouseEnter={() => hasDrop && openDrop(linkObj.name)}
                  onMouseLeave={() => hasDrop && closeDrop()}
                  onFocus={() => hasDrop && openDrop(linkObj.name)}
                  onBlur={(e) => {
                    if (hasDrop && !e.currentTarget.contains(e.relatedTarget)) {
                      closeDrop();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (hasDrop && e.key === "Escape") {
                      setActiveDropdown(null);
                      e.currentTarget.querySelector("a")?.focus();
                    }
                  }}
                >
                  <NavLink
                    to={linkObj.path}
                    end={linkObj.path === "/"}
                    aria-haspopup={hasDrop ? "true" : undefined}
                    aria-expanded={hasDrop ? activeDropdown === linkObj.name : undefined}
                    className={({ isActive }) => `
                      group/link relative flex items-center gap-[3px]
                      text-[14px] font-semibold tracking-wide whitespace-nowrap
                      transition-colors duration-300
                      ${isActive ? "text-orange-500" : "text-white/80 hover:text-white"}
                    `}
                  >
                    {({ isActive }) => (
                      <>
                        {linkObj.name}
                        {hasDrop && (
                          <ChevronDown
                            size={13}
                            className={`
                              mt-px transition-transform duration-300
                              ${activeDropdown === linkObj.name ? "rotate-180 text-orange-500" : "text-white/40"}
                            `}
                          />
                        )}
                        {/* hover / active underline */}
                        <span
                          className={`
                            absolute -bottom-[27px] left-0 h-[2px] rounded-full
                            bg-gradient-to-r from-orange-500 to-amber-400
                            transition-all duration-300
                            ${isActive ? "w-full" : "w-0 group-hover/link:w-full"}
                          `}
                        />
                      </>
                    )}
                  </NavLink>

                  {/* ── PRODUCTS mega dropdown ────────── */}
                  {linkObj.name === "Products" && activeDropdown === "Products" && (
                    <div
                      className="
                        absolute top-[calc(100%+27px)] left-1/2 -translate-x-1/2
                        w-[700px] bg-[#0b1221]/98 backdrop-blur-2xl
                        border border-white/10 rounded-2xl
                        shadow-[0_28px_70px_rgba(0,0,0,0.75)]
                        overflow-hidden
                      "
                      onMouseEnter={() => openDrop("Products")}
                      onMouseLeave={closeDrop}
                    >
                      {/* top bar */}
                      <div className="h-[3px] w-full bg-gradient-to-r from-orange-500 via-cyan-400 to-purple-500" />

                      <div className="p-6 grid grid-cols-3 gap-0">
                        {PRODUCTS.map((col, idx) => (
                          <div
                            key={col.heading}
                            className={`  
                              px-5 py-1
                              ${idx < PRODUCTS.length - 1 ? "border-r border-white/[0.07]" : ""}
                            `}
                          >
                            {/* column header */}
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-base">{col.icon}</span>
                              <span
                                className={`
                                  text-[12px] font-bold uppercase tracking-widest
                                  bg-gradient-to-r ${col.accent} bg-clip-text text-transparent
                                `}
                              >
                                {col.heading}
                              </span>
                            </div>

                            <ul className="space-y-[10px]">
                              {col.items.map((p) => (
                                <li key={p}>
                                  <Link
                                    to="/products"
                                    className="
                                      text-[14px] text-white/60
                                      hover:text-white
                                      transition-colors duration-200
                                      flex items-center gap-1.5
                                      group/item
                                    "
                                  >
                                    <span className="
                                      inline-block w-1 h-1 rounded-full bg-white/20
                                      group-hover/item:bg-orange-500
                                      transition-colors duration-200 flex-shrink-0
                                    " />
                                    {p}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* footer */}
                      <div className="mx-6 pb-5 pt-4 border-t border-white/[0.07] flex items-center justify-between">
                        <span className="text-white/30 text-[13px]">Browse our full catalogue</span>
                        <Link
                          to="/products"
                          className="
                            text-[13px] font-bold text-orange-500 hover:text-orange-400
                            transition-colors flex items-center gap-1
                          "
                        >
                          View All Products →
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* ── OEM/ODM dropdown ─────────────── */}
                  {linkObj.name === "OEM / ODM" && activeDropdown === "OEM / ODM" && (
                    <div
                      className="
                        absolute top-[calc(100%+27px)] left-1/2 -translate-x-1/2
                        w-[320px] bg-[#0b1221]/98 backdrop-blur-2xl
                        border border-white/10 rounded-2xl
                        shadow-[0_24px_60px_rgba(0,0,0,0.75)]
                        overflow-hidden
                      "
                      onMouseEnter={() => openDrop("OEM / ODM")}
                      onMouseLeave={closeDrop}
                    >
                      <div className="h-[3px] w-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                      <div className="p-3">
                        {OEM_ODM.map((opt) => (
                          <Link
                            key={opt.label}
                            to="/oem-odm"
                            className="
                              flex items-start gap-3 px-4 py-3 rounded-xl
                              hover:bg-white/[0.05] transition-colors duration-200 group/opt
                            "
                          >
                            <span className="text-xl mt-0.5">{opt.icon}</span>
                            <div>
                              <p className="text-white text-[14px] font-semibold group-hover/opt:text-orange-400 transition-colors">
                                {opt.label}
                              </p>
                              <p className="text-white/40 text-[12.5px] mt-0.5">{opt.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ── RIGHT ACTIONS ────────────────────────────── */}
          <div className="hidden xl:flex items-center gap-3 flex-shrink-0">

            {/* Search */}
            <div ref={searchRef} className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="
                  w-8 h-8 flex items-center justify-center rounded-lg
                  text-white/60 hover:text-white hover:bg-white/[0.07]
                  transition-all duration-200
                "
                aria-label="Search"
              >
                {searchOpen ? <X size={18} /> : <Search size={18} />}
              </button>
              {searchOpen && (
                <div
                  role="search"
                  className="
                  absolute right-0 top-[calc(100%+12px)]
                  w-80 bg-[#0b1221]/98 backdrop-blur-2xl
                  border border-white/10 rounded-xl p-3
                  shadow-[0_16px_48px_rgba(0,0,0,0.65)]
                ">
                  <label htmlFor="navbar-search-input" className="sr-only">Search products, services, FAQs</label>
                  <input
                    id="navbar-search-input"
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products, services, FAQs…"
                    className="
                      w-full bg-white/[0.05] border border-white/10 rounded-lg
                      px-4 py-2.5 text-white text-sm placeholder-white/25
                      outline-none focus:border-orange-500/50 transition-colors
                    "
                  />

                  {searchQuery.trim() && (
                    <div className="mt-3 max-h-80 overflow-y-auto">
                      {searchResults.length === 0 ? (
                        <div className="flex flex-col items-center text-center py-8 px-2">
                          <SearchX className="w-6 h-6 text-white/20 mb-2" />
                          <p className="text-white/70 text-sm font-semibold">No results found</p>
                          <p className="text-white/30 text-xs mt-1">
                            Try "OEM", "hoodie", or "MOQ"
                          </p>
                        </div>
                      ) : (
                        <ul className="space-y-1">
                          {searchResults.map((result, i) => (
                            <li key={result.path + result.title + i}>
                              <button
                                onClick={() => handleResultClick(result.path)}
                                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors group"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-white text-sm font-medium truncate group-hover:text-orange-400">
                                    {result.title}
                                  </span>
                                  <span className="flex-shrink-0 text-[9px] font-bold uppercase tracking-widest text-orange-500/80 bg-orange-500/10 px-2 py-0.5 rounded-full">
                                    {result.category}
                                  </span>
                                </div>
                                <p className="text-white/40 text-xs mt-0.5 line-clamp-1">
                                  {result.description}
                                </p>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="
                flex items-center gap-2 px-2.5 2xl:px-3 py-2 rounded-lg
                text-[14px] font-semibold text-green-400 hover:text-green-300
                hover:bg-green-500/[0.08] transition-all duration-200
              "
            >
              <WAIcon />
              <span className="hidden 2xl:inline">WhatsApp</span>
            </a>

            {/* ── REQUEST QUOTE — primary CTA (site-wide button system) ── */}
            <Link
              to="/contact"
              className="
                relative inline-flex items-center justify-center
                px-4 2xl:px-5 py-[9px] rounded-xl
                text-[13px] font-bold tracking-wide text-white
                whitespace-nowrap overflow-hidden
                bg-gradient-to-r from-orange-600 to-orange-400
                transition-all duration-300
                hover:-translate-y-0.5
                shadow-[0_4px_20px_rgba(255,107,0,0.32)]
                hover:shadow-[0_8px_28px_rgba(255,107,0,0.5)]
                group/cta
              "
            >
              {/* subtle hover sheen, on-brand (no hue shift) */}
              <span
                className="
                  absolute inset-0 rounded-xl opacity-0
                  group-hover/cta:opacity-100
                  transition-opacity duration-500
                  bg-gradient-to-r from-orange-500 to-orange-300
                "
              />
              <span className="relative z-10">Request Quote</span>
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER ─────────────────────────── */}
          <button
            onClick={() => { setMobileOpen(!mobileOpen); setMobileSubOpen(null); }}
            className="xl:hidden text-white/80 hover:text-white p-1 flex-shrink-0"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ──────────────────────────────────── */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#0b1221] border-t border-white/[0.08] overflow-y-auto max-h-[82vh]">
          <div className="flex flex-col px-6 py-5 gap-0">
            {NAV_LINKS.map((linkObj) => {
              const hasDrop = linkObj.name === "Products" || linkObj.name === "OEM / ODM";
              const subItems =
                linkObj.name === "Products"
                  ? PRODUCTS.flatMap((col) => col.items)
                  : linkObj.name === "OEM / ODM"
                  ? OEM_ODM.map((o) => o.label)
                  : [];
              const subOpen = mobileSubOpen === linkObj.name;

              return (
                <div key={linkObj.name} className="border-b border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <NavLink
                      to={linkObj.path}
                      end={linkObj.path === "/"}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) => `
                        flex-1 py-3.5 text-[16px] font-medium
                        transition-colors duration-200
                        ${isActive ? "text-orange-500" : "text-white/75 hover:text-white"}
                      `}
                    >
                      {linkObj.name}
                    </NavLink>
                    {hasDrop && (
                      <button
                        type="button"
                        aria-label={`${subOpen ? "Collapse" : "Expand"} ${linkObj.name} submenu`}
                        aria-expanded={subOpen}
                        onClick={() => setMobileSubOpen(subOpen ? null : linkObj.name)}
                        className="p-3 -mr-2 text-white/40 hover:text-white transition-colors"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${subOpen ? "rotate-180 text-orange-500" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {hasDrop && subOpen && (
                    <div className="pb-3 pl-4 flex flex-col gap-0.5 animate-entrance">
                      {subItems.map((item) => (
                        <Link
                          key={item}
                          to={linkObj.path}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileSubOpen(null);
                          }}
                          className="py-2 text-[14px] text-white/50 hover:text-orange-400 transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  border border-green-500/30 rounded-full py-3
                  text-green-400 font-semibold text-base
                  hover:bg-green-500/10 transition-colors
                "
              >
                <WAIcon />
                WhatsApp
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="
                  rounded-xl py-3 text-center
                  text-white font-bold text-base tracking-wide
                  bg-gradient-to-r from-orange-600 to-orange-400
                  shadow-[0_4px_20px_rgba(255,107,0,0.35)]
                  transition-all duration-300
                "
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}