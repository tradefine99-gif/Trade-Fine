import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import PageBanner3D from "../components/common/PageBanner3D";
import Seo from "../components/common/Seo";

const SECTIONS = [
  {
    title: "Working With TradeFine",
    body:
      "These terms govern quote requests, sample orders, and bulk manufacturing agreements placed with TradeFine, a B2B sportswear manufacturer based in Sialkot, Pakistan. By submitting a quote request or purchase order, you agree to the terms outlined here as well as any specific terms confirmed in your order agreement.",
  },
  {
    title: "Quotes & Order Confirmation",
    body:
      "Quotes provided via our website, email, or WhatsApp are estimates based on the information supplied and are subject to change once final specifications, fabrics, and quantities are confirmed. Production begins only after a written order confirmation and any required deposit is received.",
  },
  {
    title: "Payment Terms",
    body:
      "Unless otherwise agreed in writing, standard terms are 75% advance payment to begin production and the remaining 25% before shipment. Accepted payment methods and currency are confirmed at the time of order.",
  },
  {
    title: "Production, Samples & Lead Times",
    body:
      "Lead times are estimates communicated at order confirmation and may vary based on order complexity, fabric availability, and seasonal demand. Pre-production samples should be reviewed and approved by the buyer before bulk production begins; approval timelines can affect the overall delivery schedule.",
  },
  {
    title: "Shipping & Customs",
    body:
      "TradeFine coordinates shipping through partners such as DHL, FedEx, UPS, and Skynet, as well as sea freight for larger orders. Buyers are responsible for import duties, taxes, and customs clearance in the destination country unless otherwise agreed.",
  },
  {
    title: "Intellectual Property",
    body:
      "For private label and ODM projects, buyers are responsible for ensuring they hold the rights to any logos, designs, or trademarks supplied for production. TradeFine will not knowingly reproduce designs that infringe on a third party's intellectual property.",
  },
  {
    title: "Limitation of Liability",
    body:
      "TradeFine's liability for any order is limited to the value of that order. We are not liable for indirect or consequential losses, including delays caused by circumstances outside our reasonable control such as customs holds or carrier disruptions.",
  },
  {
    title: "Contact",
    body:
      "For questions about an active order or these terms, reach out via our contact page or tradfine99@gmail.com.",
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#080D16] pt-24 pb-28">
      <Seo
        title="Terms of Service"
        description="Terms governing quote requests, sample orders and bulk manufacturing agreements placed with TradeFine, a B2B sportswear manufacturer in Sialkot, Pakistan."
      />
      <div className="relative overflow-hidden pb-8">
        <PageBanner3D accent="cyan" layout="symmetric" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-8">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-black uppercase tracking-widest">
              Terms of Service
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            These terms outline how TradeFine works with wholesale and private
            label partners, from quote to delivery. Last updated July 2026.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-2xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-white/10">
          <Link
            to="/contact"
            className="text-orange-500 font-bold hover:text-orange-400 transition-colors text-base"
          >
            Questions about an order? Contact our team →
          </Link>
        </div>
      </div>
    </main>
  );
}
