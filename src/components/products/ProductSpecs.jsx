import React from 'react';
import {
  Check,
  Factory,
  Layers,
  Ruler,
  Palette,
  Sparkles,
  Tag,
  Package,
  Boxes,
  Clock,
  Globe2,
  ShieldCheck,
} from 'lucide-react';

const ProductSpecs = ({ product }) => {
  const rows = [
    { icon: Check, label: 'Fully Customizable', value: product.spec.fullyCustomizable ? 'Yes' : 'No' },
    {
      icon: Factory,
      label: 'Manufactured To Spec',
      value: product.spec.madeToRequirement ? 'Built to your requirements' : '—',
    },
    { icon: Layers, label: 'Material Options', value: product.fabricOptions.join(', ') },
    { icon: Ruler, label: 'Fabric Weight (GSM)', value: product.spec.gsmOptions },
    { icon: Ruler, label: 'Size Options', value: product.spec.sizeCustomization },
    { icon: Palette, label: 'Color / Pantone Matching', value: product.spec.colorCustomization },
    { icon: Sparkles, label: 'Logo Placement', value: product.spec.logoCustomization },
    { icon: Tag, label: 'Label Options', value: product.spec.labelOptions },
    { icon: Package, label: 'Packaging', value: product.spec.packaging },
    { icon: Boxes, label: 'Minimum Order Quantity', value: product.spec.moq },
    { icon: Clock, label: 'Production Lead Time', value: product.spec.leadTime },
    { icon: Globe2, label: 'Country of Manufacturing', value: product.spec.countryOfManufacturing },
    { icon: ShieldCheck, label: 'Quality Control', value: product.spec.qualityControl },
    { icon: Globe2, label: 'Export Availability', value: product.spec.exportAvailability },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
      {rows.map((row) => (
        <div key={row.label} className="flex items-start gap-3">
          <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
            <row.icon size={14} className="text-orange-500" />
          </div>
          <div>
            <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">{row.label}</p>
            <p className="text-white text-base">{row.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSpecs;
