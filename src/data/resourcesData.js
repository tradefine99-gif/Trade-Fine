import manufacturingProcessHero from '../assets/articles/manufacturing-process-hero.jpg';
import choosingManufacturerHero from '../assets/articles/choosing-manufacturer-hero.jpg';
import oemVsPrivateLabelHero from '../assets/articles/oem-vs-private-label-hero.jpg';
import fabricsHero from '../assets/articles/fabrics-hero.jpg';
import embroideryHero from '../assets/articles/embroidery-hero.jpg';

export const CATEGORIES = ['Manufacturing', 'OEM / ODM', 'Fabric Guide', 'Printing Guide'];

export const ARTICLES = [
  {
    slug: 'how-custom-sportswear-is-manufactured',
    title: 'How Custom Sportswear Is Manufactured: From Concept to Global Delivery',
    category: 'Manufacturing',
    excerpt:
      'A complete walkthrough of the custom sportswear manufacturing journey — from design and sampling through mass production, decoration, quality control, and worldwide delivery.',
    image: manufacturingProcessHero,
    date: 'June 2026',
    readTime: '17 min read',
    featured: true,
  },
  {
    slug: 'choosing-the-right-sportswear-manufacturer',
    title: 'The Complete Guide to Choosing the Right Sportswear Manufacturer',
    category: 'Manufacturing',
    excerpt:
      'What separates a reliable manufacturing partner from a risky one — MOQs, communication, certifications, sampling process, and the questions worth asking before you commit.',
    image: choosingManufacturerHero,
    date: 'June 2026',
    readTime: '22 min read',
  },
  {
    slug: 'oem-vs-private-label-sportswear',
    title: 'OEM vs Private Label Sportswear: Which Manufacturing Model Is Right for Your Brand?',
    category: 'OEM / ODM',
    excerpt:
      'A side-by-side breakdown of OEM and Private Label manufacturing — design ownership, cost, lead time, MOQ, and how to decide which path fits your brand strategy.',
    image: oemVsPrivateLabelHero,
    date: 'June 2026',
    readTime: '22 min read',
  },
  {
    slug: 'best-sportswear-fabrics-explained',
    title: 'Best Sportswear Fabrics Explained: Choosing the Right Material for Every Sport',
    category: 'Fabric Guide',
    excerpt:
      'Moisture-wicking, compression, thermal regulation, and more — a technical guide to matching fiber types and fabric blends to the performance your product needs.',
    image: fabricsHero,
    date: 'June 2026',
    readTime: '18 min read',
  },
  {
    slug: 'sublimation-embroidery-screen-printing',
    title: 'Sublimation, Embroidery & Screen Printing: Choosing the Best Branding Method',
    category: 'Printing Guide',
    excerpt:
      'Durability, hand feel, color range, and cost — a full comparison of the three most-used decoration methods in custom sportswear manufacturing.',
    image: embroideryHero,
    date: 'June 2026',
    readTime: '20 min read',
  },
];
