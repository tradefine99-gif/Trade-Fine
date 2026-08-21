import { ARTICLES } from './resourcesData';

// Each entry: { title, description, category, path, keywords }
// `path` may include a hash anchor for deep-linking into a specific section.

const PAGES = [
  {
    title: 'Home',
    description: 'TradeFine — premium OEM & ODM sportswear manufacturing.',
    category: 'Page',
    path: '/',
    keywords: ['home', 'homepage'],
  },
  {
    title: 'About Us',
    description: 'Our story, facility, and manufacturing capabilities.',
    category: 'Page',
    path: '/about',
    keywords: ['about', 'company', 'story', 'factory'],
  },
  {
    title: 'Products',
    description: 'Sportswear, fitness wear, and casual wear manufacturing catalog.',
    category: 'Page',
    path: '/products',
    keywords: ['products', 'catalog', 'apparel', 'clothing'],
  },
  {
    title: 'Manufacturing Process',
    description: 'How we take your project from inquiry to worldwide delivery.',
    category: 'Page',
    path: '/manufacturing',
    keywords: ['manufacturing', 'process', 'production'],
  },
  {
    title: 'OEM / ODM',
    description: 'OEM, ODM, and private label manufacturing routes explained.',
    category: 'Page',
    path: '/oem-odm',
    keywords: ['oem', 'odm', 'private label'],
  },
  {
    title: 'Gallery',
    description: 'A visual look at our production floor and finished apparel.',
    category: 'Page',
    path: '/gallery',
    keywords: ['gallery', 'photos', 'images', 'portfolio'],
  },
  {
    title: 'Resources & Insights',
    description: 'Fabric guides, printing guides, and manufacturing knowledge.',
    category: 'Page',
    path: '/resources',
    keywords: ['resources', 'blog', 'articles', 'insights', 'guides'],
  },
  {
    title: 'Contact & Request Quote',
    description: 'Get in touch or submit a manufacturing quote request.',
    category: 'Page',
    path: '/contact',
    keywords: ['contact', 'quote', 'request quote', 'email', 'phone', 'whatsapp'],
  },
];

const SERVICES = [
  {
    title: 'OEM Manufacturing',
    description: 'Full-scale production from your own design specs and tech packs.',
    category: 'Service',
    path: '/manufacturing#oem-manufacturing',
    keywords: ['oem', 'original equipment manufacturing'],
  },
  {
    title: 'ODM Manufacturing',
    description: 'Our in-house team develops the concept, patterns and samples.',
    category: 'Service',
    path: '/manufacturing#odm-manufacturing',
    keywords: ['odm', 'original design manufacturing', 'design service'],
  },
  {
    title: 'Private Label',
    description: 'Launch under your own brand name with custom labels and packaging.',
    category: 'Service',
    path: '/manufacturing#private-label',
    keywords: ['private label', 'white label', 'branding'],
  },
  {
    title: 'DTF Printing',
    description: 'Durable, vibrant direct-to-film transfers.',
    category: 'Service',
    path: '/manufacturing#dtf-printing',
    keywords: ['dtf', 'direct to film', 'printing'],
  },
  {
    title: 'DTG Printing',
    description: 'Photo-realistic direct-to-garment printing.',
    category: 'Service',
    path: '/manufacturing#dtg-printing',
    keywords: ['dtg', 'direct to garment', 'printing'],
  },
  {
    title: 'Sublimation Printing',
    description: 'Full all-over prints with high-definition inks.',
    category: 'Service',
    path: '/manufacturing#sublimation-printing',
    keywords: ['sublimation', 'printing', 'all-over print'],
  },
  {
    title: 'Embroidery',
    description: 'Precision-stitched logos and branding.',
    category: 'Service',
    path: '/manufacturing#embroidery',
    keywords: ['embroidery', 'stitching', 'logo'],
  },
  {
    title: 'Stone Placement',
    description: 'Rhinestone and stud detailing applied with industrial accuracy.',
    category: 'Service',
    path: '/manufacturing#stone-placement',
    keywords: ['stone placement', 'rhinestone', 'studs'],
  },
  {
    title: 'Logo Development',
    description: 'From concept sketches to production-ready brand marks.',
    category: 'Service',
    path: '/manufacturing#logo-development',
    keywords: ['logo development', 'branding', 'design'],
  },
];

const PRODUCT_CATEGORIES = [
  {
    title: 'Sportswear',
    description: 'Jerseys, team uniforms, warm-up jackets, and match kits.',
    category: 'Product',
    path: '/products',
    keywords: ['sportswear', 'jersey', 'team uniform', 'football', 'soccer', 'basketball'],
  },
  {
    title: 'Fitness Wear',
    description: 'Gym shorts, leggings, rashguards, and compression tops.',
    category: 'Product',
    path: '/products',
    keywords: ['fitness wear', 'gym wear', 'leggings', 'compression', 'mma', 'bjj'],
  },
  {
    title: 'Casual Wear',
    description: 'Hoodies, joggers, polos, and streetwear essentials.',
    category: 'Product',
    path: '/products',
    keywords: ['casual wear', 'hoodie', 'joggers', 'polo', 'streetwear'],
  },
];

const FAQS = [
  {
    title: 'What is your minimum order quantity (MOQ)?',
    description: 'Flexible MOQ depending on product type and customization requirements.',
    category: 'FAQ',
    path: '/#faq',
    keywords: ['moq', 'minimum order quantity'],
  },
  {
    title: 'Do you provide OEM & ODM manufacturing?',
    description: 'Yes — OEM, ODM, and full private label manufacturing solutions.',
    category: 'FAQ',
    path: '/#faq',
    keywords: ['oem', 'odm', 'faq'],
  },
  {
    title: 'Can I request custom designs?',
    description: 'Our design and sampling team works from tech packs, sketches, or samples.',
    category: 'FAQ',
    path: '/#faq',
    keywords: ['custom design', 'tech pack', 'sampling'],
  },
  {
    title: 'Which countries do you export to?',
    description: 'Worldwide, including North America, Europe, the Middle East and Australia.',
    category: 'FAQ',
    path: '/#faq',
    keywords: ['export', 'shipping', 'countries', 'worldwide'],
  },
  {
    title: 'How long does production take?',
    description: 'Typically 3–8 weeks after final sample approval and deposit.',
    category: 'FAQ',
    path: '/#faq',
    keywords: ['production time', 'lead time', 'timeline'],
  },
  {
    title: 'How can I request a quotation?',
    description: 'Complete the Request a Quote form, or reach us on WhatsApp or email.',
    category: 'FAQ',
    path: '/#faq',
    keywords: ['quotation', 'quote', 'pricing'],
  },
];

function toArticleSearchItem(a) {
  return {
    title: a.title,
    description: a.excerpt,
    category: 'Article',
    path: `/resources/${a.slug}`,
    keywords: [a.category.toLowerCase()],
  };
}

// Static fallback so the search bar works instantly on load and never breaks
// if the live fetch below fails — same articles that used to be the only
// source, now just the first paint instead of the permanent one.
let resourceArticles = ARTICLES.map(toArticleSearchItem);

const STATIC_INDEX = [...PAGES, ...SERVICES, ...PRODUCT_CATEGORIES, ...FAQS];

// Mutable in place so any component already holding a reference to
// SEARCH_INDEX (via searchSite) transparently sees the refreshed articles
// once refreshArticleIndex() resolves — no prop drilling or context needed.
export const SEARCH_INDEX = [...STATIC_INDEX, ...resourceArticles];

let refreshed = false;
let refreshPromise = null;

/**
 * Replaces the article portion of SEARCH_INDEX with live data from
 * Supabase (via articlesService.getArticles()), so newly published
 * articles show up in site search without a redeploy. Safe to call
 * multiple times — only fetches once per page load. Falls back to
 * leaving the static article list in place if the fetch fails or
 * returns nothing, so search never regresses to a worse state.
 */
export function refreshArticleIndex() {
  if (refreshed || refreshPromise) return refreshPromise;

  refreshPromise = import('../services/articlesService')
    .then(({ getArticles }) => getArticles())
    .then(({ articles, error }) => {
      if (error || !articles || articles.length === 0) return;
      resourceArticles = articles.map(toArticleSearchItem);
      SEARCH_INDEX.length = 0;
      SEARCH_INDEX.push(...STATIC_INDEX, ...resourceArticles);
      refreshed = true;
    })
    .catch(() => {
      // Network/Supabase error — keep the static fallback, don't throw.
    });

  return refreshPromise;
}

export function searchSite(query, limit = 8) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return SEARCH_INDEX.filter((item) => {
    const haystack = [item.title, item.description, item.category, ...(item.keywords || [])]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  }).slice(0, limit);
}
