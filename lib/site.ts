// Single source of truth for the canonical origin. Never hardcode the domain in
// a page: importing it from here is what keeps every generated <link
// rel="canonical"> on https://www.casse-vhu.fr and off the http/non-www variants.
export const SITE_URL = "https://www.casse-vhu.fr"

/**
 * Builds the absolute, self-referencing canonical URL for a page path.
 *
 * The root keeps its trailing slash (https://www.casse-vhu.fr/); every other
 * path is normalised to a slash-less form so that it matches the `trailingSlash:
 * false` policy in next.config.mjs and the URLs emitted by next-sitemap.
 *
 * @example canonicalUrl()             // "https://www.casse-vhu.fr/"
 * @example canonicalUrl("/contact")   // "https://www.casse-vhu.fr/contact"
 * @example canonicalUrl("contact")    // "https://www.casse-vhu.fr/contact"
 * @example canonicalUrl("/blog/")     // "https://www.casse-vhu.fr/blog"
 */
export function canonicalUrl(path: string = "/"): string {
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`
  const normalized =
    withLeadingSlash.length > 1 ? withLeadingSlash.replace(/\/+$/, "") : withLeadingSlash
  return `${SITE_URL}${normalized}`
}
