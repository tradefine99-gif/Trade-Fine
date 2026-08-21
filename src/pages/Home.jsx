import React from "react";
import Hero from "../components/home/Hero";
import ManufacturingServices from "../components/home/ManufacturingServices";
import ProductCategories from "../components/home/ProductCategories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ManufacturingProcess from "../components/home/ManufacturingProcess";
import TrustedBrands from "../components/home/TrustedBrands";
import Testimonials from "../components/home/ClientReviews";
import RequestQuote from "../components/home/RequestQuote";
import FAQ from "../components/home/FAQ";
import Seo from "../components/common/Seo";

// 1. IMPORT THE FOOTER HERE

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080D16]">
      <Seo
        title="Custom OEM & ODM Sportswear Manufacturer"
        description="TradeFine is a Sialkot, Pakistan-based sportswear manufacturer producing custom teamwear, gym wear and athletic apparel for OEM and ODM buyers worldwide."
      />
      <Hero />
      <ManufacturingServices />
      <div className="gradient-divider" />
      <ProductCategories />
      <WhyChooseUs />
      <div className="gradient-divider" />
      <ManufacturingProcess />
      <TrustedBrands />
      <div className="gradient-divider" />
      <Testimonials />
      <RequestQuote />
      <FAQ />

      {/* 2. PLACE THE FOOTER AT THE VERY BOTTOM */}
    </main>
  );
}