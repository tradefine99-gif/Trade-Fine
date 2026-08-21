// Central SEO constants — every value here is taken directly from the
// site's own real content (Contact page, Navbar WhatsApp link, package
// metadata). Nothing here is invented.
//
// IMPORTANT: SITE_URL is a placeholder. Replace it with the real
// production domain before deploying — canonical tags, the sitemap,
// robots.txt and Open Graph URLs all derive from this one constant.
export const SITE_URL = "https://www.tradefinesportswear.com";

export const SITE_NAME = "TradeFine Sportswear";

export const BUSINESS = {
  legalName: "TradeFine Sportswear",
  address: {
    streetAddress: "Boghra Green Town",
    addressLocality: "Sialkot",
    addressCountry: "PK",
  },
  phone: "+92-331-6131936",
  email: "tradfine99@gmail.com",
};

// Used as the fallback/default Open Graph image when a page doesn't
// have a more specific one (e.g. a product or article cover image).
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;
