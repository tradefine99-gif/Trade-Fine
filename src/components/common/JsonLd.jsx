/**
 * Renders one Schema.org JSON-LD <script> block. Data must be a plain
 * object (or array of objects) — this component only serializes it,
 * it doesn't validate or fabricate any field. Every builder in
 * src/data/structuredData.js only uses values that already exist in
 * the site's real content/config, never placeholder or invented data
 * (no fake ratings, review counts, prices, or availability).
 */
export default function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
