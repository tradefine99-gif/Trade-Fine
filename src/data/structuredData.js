// Schema.org JSON-LD builders. Every field pulled in here comes from
// real site content (seoConfig.js, or data passed in by the calling
// page from Supabase) — nothing invented. In particular: no
// aggregateRating, review, price, or availability fields are ever
// added, because the site doesn't have real, structured data to back
// those claims yet (see the SEO report's "remaining issues" section).

import { SITE_URL, SITE_NAME, BUSINESS } from '../lib/seoConfig';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressCountry: BUSINESS.address.addressCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      contactType: 'sales',
    },
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

/**
 * items: [{ name, path }] in order from Home to the current page.
 * path should start with '/' (e.g. '/products').
 */
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * product: the already-fetched product object from productsService
 * (see toUiProduct). url: the page URL this product is described on.
 * Deliberately omits offers/price/availability/aggregateRating —
 * the catalog doesn't have real, structured price or review-count
 * data wired to individual products, and Schema.org Product markup
 * with fabricated offer/rating data is exactly the kind of thing
 * Google's structured-data guidelines penalize.
 */
export function buildProductSchema(product, url) {
  if (!product) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || undefined,
    image: product.images?.map((img) => img.url).filter(Boolean),
    url,
    brand: { '@type': 'Brand', name: SITE_NAME },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
  };
}

/**
 * article: the already-fetched article object from articlesService
 * (see toUiArticle). url: the article's canonical URL.
 */
export function buildArticleSchema(article, url) {
  if (!article) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt || undefined,
    image: article.image ? [article.image] : undefined,
    datePublished: article.publishedAtISO || undefined,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: url,
  };
}
