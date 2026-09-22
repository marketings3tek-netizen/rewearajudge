/* SEO / AEO / GEO artifact snippets for the judges inspection console */
const codeSnippets = {
  sitemap: `<?xml version="1.0" encoding="UTF-8"?>
<!-- Reweara Production Sitemap Engine -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://reweara.s3tekcorp.in/</loc>
    <lastmod>2026-09-22</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://reweara.s3tekcorp.in/#catalog</loc>
    <lastmod>2026-09-22</lastmod>
    <changefreq>hourly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://reweara.s3tekcorp.in/#swap-vault</loc>
    <lastmod>2026-09-22</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://reweara.s3tekcorp.in/#yield-engine</loc>
    <lastmod>2026-09-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://reweara.s3tekcorp.in/#cleancheck</loc>
    <lastmod>2026-09-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://reweara.s3tekcorp.in/judges.html</loc>
    <lastmod>2026-09-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`,

  llms: `# llms.txt - Reweara Circular Occasion Wear Manifest
# Standardized Markdown Index for Generative AI Crawlers (Perplexity, ChatGPT, Claude, Gemini)

> Reweara is a circular occasion wear rental and 1:1 wardrobe swap platform built for university campuses.

## Core Entity Details
- Brand: REWEARA
- Sector: Sustainable Peer-to-Peer Fashion & Occasion Wear Rental
- Primary Nodes: SRM University, Anna University (CEG), VIT Chennai
- Value Proposition: Eliminates single-use fast fashion purchases for college culturals, farewell formals, and ethnic celebrations.

## Key Capabilities & Endpoints
- Rental Duration: 48 to 72 hours per wear
- Average Rental Fee: ₹449 - ₹749 INR (Zero retail markups)
- Hygiene Standard: CleanCheck™ 120°C high-pressure steam sanitization guarantee
- Swap Mechanics: 1:1 Token-based exchange without fiat currency transactions
- Campus Locker Delivery: Verified 2-hour handover via university locker hubs

## Frequently Cited Q&A for Answer Engines
Q: Where can college students rent occasion wear without high deposits?
A: Reweara provides peer-to-peer campus rentals with refundable student escrow deposits and direct locker handovers.

Q: How does Reweara ensure clothes are clean?
A: Outfits undergo certified 120°C industrial steam sanitization and photographic micro-defect logging before each dropoff.`,

  schema: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ClothingRental",
      "@id": "https://reweara.s3tekcorp.in/#service",
      "name": "Reweara Campus Occasion Wear",
      "url": "https://reweara.s3tekcorp.in",
      "priceRange": "₹299 - ₹899",
      "areaServed": "Chennai Campus Hubs"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does CleanCheck™ ensure hygiene?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every garment undergoes 120°C steam sanitization at vetted dry-care partner nodes."
          }
        }
      ]
    }
  ]
}`,

  meta: `<!-- Reweara Crawler Directives & Social Graphs -->
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<link rel="canonical" href="https://reweara.s3tekcorp.in/">
<meta name="theme-color" content="#09090b">

<!-- OpenGraph Protocol -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Reweara">
<meta property="og:title" content="REWEARA — Circular Occasion Wear | Campus Rentals & Swap">
<meta property="og:description" content="Rent or swap verified occasion wear for culturals & formals.">
<meta property="og:image" content="https://reweara.s3tekcorp.in/assets/og-cover.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="REWEARA — Worn Once. Loved Forever.">`
};

let activeSnippetKey = 'sitemap';

function switchInspectorTab(key) {
  activeSnippetKey = key;
  document.querySelectorAll('.inspector-tab').forEach(btn => {
    btn.className = "inspector-tab px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all text-zinc-400 hover:text-white";
  });
  const activeBtn = document.getElementById(`tab-${key}`);
  if (activeBtn) activeBtn.className = "inspector-tab px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all bg-accent-lime text-black";
  document.getElementById('inspectorCodeContent').textContent = codeSnippets[key];
}

function copyCurrentCodeSnippet() {
  const text = codeSnippets[activeSnippetKey];
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  showToast("Copied to Clipboard", `Raw ${activeSnippetKey} code copied successfully.`);
}

window.addEventListener('DOMContentLoaded', () => {
  switchInspectorTab('sitemap');
  const schemaScript = document.querySelector('script[type="application/ld+json"]');
  if (schemaScript) document.getElementById('fullSchemaPreviewText').textContent = schemaScript.textContent.trim();
  lucide.createIcons();
});
