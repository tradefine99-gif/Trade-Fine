import React from 'react';
import { Factory, Layers, Globe2, Gem, Sparkles } from 'lucide-react';

const BADGES = [
  { icon: Factory, label: 'OEM Manufacturer' },
  { icon: Layers, label: 'ODM Manufacturer' },
  { icon: Globe2, label: 'Worldwide Export' },
  { icon: Gem, label: 'Premium Fabrics' },
  { icon: Sparkles, label: 'Custom Branding' },
];

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap gap-2.5">
      {BADGES.map((b) => (
        <span
          key={b.label}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 text-[10px] font-bold uppercase tracking-widest"
        >
          <b.icon size={12} className="text-orange-500" />
          {b.label}
        </span>
      ))}
    </div>
  );
};

export default TrustBadges;
