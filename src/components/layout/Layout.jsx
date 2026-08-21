import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import BackToTop from "./BackToTop";
import JsonLd from "../common/JsonLd";
import { buildOrganizationSchema, buildWebsiteSchema } from "../../data/structuredData";

// Site-wide entity schema (Organization + WebSite) — rendered once here
// rather than per-page, since it describes the business/site as a whole,
// not any individual page. Per-page schema (BreadcrumbList, Product,
// Article) is added by each page alongside its own <Seo> tags.
const organizationSchema = buildOrganizationSchema();
const websiteSchema = buildWebsiteSchema();

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <AnnouncementBar />
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
      <BackToTop />
    </>
  );
}
