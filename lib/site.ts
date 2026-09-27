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

/**
 * Builds an absolute internal link so every href in the markup points at the
 * canonical origin, never at whatever host the request happened to arrive on.
 *
 * It shares its normalisation with `canonicalUrl` on purpose: an internal link
 * must always resolve to exactly the URL that page declares as its canonical,
 * otherwise the two signals can disagree about which URL is authoritative. Any
 * query string or hash is preserved, which is what the /blog filter views need.
 *
 * @example internalUrl("/contact")           // "https://www.casse-vhu.fr/contact"
 * @example internalUrl("/epaviste/le-nord/") // "https://www.casse-vhu.fr/epaviste/le-nord"
 * @example internalUrl("/blog?category=X")   // "https://www.casse-vhu.fr/blog?category=X"
 * @example internalUrl("#anchor")            // "https://www.casse-vhu.fr/#anchor"
 */
export function internalUrl(path: string = "/"): string {
  const suffixAt = path.search(/[?#]/)
  const pathname = suffixAt === -1 ? path : path.slice(0, suffixAt)
  const suffix = suffixAt === -1 ? "" : path.slice(suffixAt)
  return `${canonicalUrl(pathname)}${suffix}`
}
