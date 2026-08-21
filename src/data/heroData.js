import { ShieldCheck, Zap, Globe, Clock, Award, Users, BarChart3 } from "lucide-react";

export const trustBadges = [
  {
    id: 1,
    icon: ShieldCheck,
    label: "ISO Certified",
    sub: "Quality Assured",
  },
  {
    id: 2,
    icon: Zap,
    label: "Low MOQ",
    sub: "Flexible Volume",
  },
  {
    id: 3,
    icon: Globe,
    label: "Worldwide",
    sub: "Global Logistics",
  },
  {
    id: 4,
    icon: Clock,
    label: "Fast Lead",
    sub: "Rapid Turnaround",
  },
];

export const floatingStats = [
  {
    id: 1,
    icon: Award,
    value: "10+ Years",
    label: "Experience",
    color: "bg-orange-500",
    position: "-top-6 -left-6 md:top-12 md:-left-12",
  },
  {
    id: 2,
    icon: Users,
    value: "50+ Countries",
    label: "Global Brands",
    color: "bg-cyan-500",
    position: "bottom-12 -left-10",
  },
  {
    id: 3,
    icon: BarChart3,
    value: "1M+ Pieces",
    label: "Annual Output",
    color: "bg-white/10",
    position: "top-1/2 -right-8",
  },
];