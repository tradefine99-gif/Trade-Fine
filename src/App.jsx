import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Manufacturing = lazy(() => import("./pages/Manufacturing"));
const OemOdm = lazy(() => import("./pages/OemOdm"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Resources = lazy(() => import("./pages/Resources"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Minimal, non-blocking fallback for route-level code splitting — the
// full-page LoadingScreen is reserved for the initial app boot, not for
// quick in-app navigations, so this stays understated.
const RouteFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#080D16]">
    <div className="w-10 h-10 border-2 border-white/10 border-t-orange-500 rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/oem-odm" element={<OemOdm />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}