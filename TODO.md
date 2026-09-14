# SEO Action Plan & TODOs for casse-vhu.fr

## Step 1: Fix Technical SEO Issues
- [x] **Implement 301 Redirects:** Consolidate traffic by implementing a permanent 301 redirect in Next.js from `www` to `non-www` (or vice-versa) to avoid duplicate content penalties.
- [x] **Canonical Tags:** Ensure every page has a self-referencing canonical tag.
- [x] **Robots.txt & Sitemap:** Verify that `sitemap.xml` and `robots.txt` are correctly configured and submitted to Google Search Console.

## Step 2: Optimize Local SEO Landing Pages
- [x] **Programmatic Local Pages (Priority):** Build programmatic landing pages following the URL structure `/epaviste/[nom-ville-ou-departement]` (e.g., `/epaviste/paris-75`). Include unique local intros, embedded localized Google Maps, department-specific VHU guidelines, and distinct H1/H2 tags for each area.
- [x] **Enhance Existing Regional Pages:** Improve content on current regional pages by adding local keywords, localized FAQs, and clear contact information.
- [x] **Implement AutomotiveBusiness Schema:** Add `AutomotiveBusiness` JSON-LD schema across all pages. Explicitly declare key properties: `areaServed`, `telephone` (06 30 30 20 53), `priceRange` (0€), and official VHU approval numbers to establish trust with search engines.

## Step 3: Improve Content & On-Page SEO
- [ ] **Optimize for Positions 8-20 (Low-Hanging Fruit):** Filter GSC data for queries where average position is between 8 and 20. Update page titles, H2s, and body text on existing pages to include these exact-match phrases.
- [ ] **Improve Low CTR Meta Data:** Identify pages with high impressions but CTR under 2%. Rewrite meta titles and descriptions to feature strong incentives (e.g., "Intervention sous 24h", "Certificat de destruction fourni sur place").
- [ ] **Target Administrative Intent via Blog:** Create/expand detailed blog articles addressing specific legal and administrative pain points:
  - [ ] "Comment se débarrasser d'une voiture sans carte grise ?"
  - [ ] "Formulaire Cerfa 1577602 : Guide remplissage certificat de cession"
  - [ ] "Prime à la conversion 2026 : Conditions pour un véhicule hors d'usage"
- [ ] **Target High-Volume Generic Keywords:** Create or expand dedicated pages for high-volume terms like "Épaviste", "Centre VHU agréé", and "Enlèvement épave".

## Step 4: User Experience (UX) & Conversion Rate Optimization (CRO)
- [ ] **Mobile Sticky CTA:** Ensure the click-to-call button (06 30 30 20 53) is permanently sticky at the bottom of the viewport on mobile devices.
- [ ] **Reduce Bounce Rate:** Add immediate, clear Calls-to-Action (CTAs) above the fold on desktop and tablet views.
- [ ] **Internal Linking:** Add contextual links from blog posts to service and regional pages to guide users through the site.

## Step 5: Next.js Performance Optimization
- [ ] **Core Web Vitals:** Review page loading speeds and ensure proper image optimization (e.g., using `next/image`).
- [ ] **Rendering Strategy:** Verify that Server-Side Rendering (SSR) or Static Site Generation (SSG) is properly utilized for all landing pages.
