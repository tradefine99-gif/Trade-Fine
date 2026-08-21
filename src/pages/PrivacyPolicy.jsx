import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import PageBanner3D from "../components/common/PageBanner3D";
import Seo from "../components/common/Seo";

const SECTIONS = [
  {
    title: "Information We Collect",
    body:
      "When you request a quote, contact our team, or subscribe to updates, we collect the details you provide directly — such as your name, company, email address, country, and project requirements. We also collect basic technical information (browser type, device, and pages visited) to help us improve the site.",
  },
  {
    title: "How We Use Your Information",
    body:
      "We use the information you share to respond to quote requests, prepare samples and proposals, coordinate production and shipping, and send updates relevant to your inquiry. We do not sell or rent your personal information to third parties.",
  },
  {
    title: "Data Sharing",
    body:
      "We may share information with trusted logistics, payment, and production partners solely to fulfil your order or request — for example, sharing a shipping address with our freight partner. Any partner handling your data is required to protect it to the same standard we do.",
  },
  {
    title: "Data Retention & Security",
    body:
      "We retain business inquiry and order information for as long as needed to support your account, meet legal and accounting obligations, and improve our services. We apply reasonable technical and organizational safeguards to protect your information from unauthorized access.",
  },
  {
    title: "Your Rights",
    body:
      "You can request access to, correction of, or deletion of your personal information at any time by contacting us. If you no longer wish to receive communications from TradeFine, let us know and we will update our records promptly.",
  },
  {
    title: "Contact Us",
    body:
      "Questions about this policy can be sent to tradfine99@gmail.com or via our contact page. We're happy to clarify how your information is handled.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#080D16] pt-24 pb-28">
      <Seo
        title="Privacy Policy"
        description="How TradeFine collects, uses and protects the information you share when requesting a quote or contacting our team."
      />
      <div className="relative overflow-hidden pb-8">
        <PageBanner3D accent="orange" layout="symmetric" />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-8">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-xs font-black uppercase tracking-widest">
              Privacy Policy
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Your Privacy Matters
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            This policy explains what information TradeFine collects from wholesale
            buyers and website visitors, how it's used, and the choices you have.
            Last updated July 2026.
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
            Have questions about your data? Contact our team →
          </Link>
        </div>
      </div>
    </main>
  );
}
