import fs from "fs"
import path from "path"

const ACCENT_MAP = {
  "à": "a", "â": "a", "ä": "a", "á": "a", "ã": "a", "å": "a",
  "é": "e", "è": "e", "ê": "e", "ë": "e",
  "î": "i", "ï": "i", "í": "i", "ì": "i",
  "ô": "o", "ö": "o", "ó": "o", "ò": "o", "õ": "o",
  "ù": "u", "û": "u", "ü": "u", "ú": "u",
  "ç": "c", "ñ": "n", "œ": "oe", "æ": "ae",
  "'": "-", "’": "-",
}

function slugify(name) {
  return name
    .toLowerCase()
    .split("")
    .map((char) => ACCENT_MAP[char] ?? char)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function legacySlugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-")
}

const zonesData = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "data", "zones.json"), "utf8")
)

const places = zonesData.places
const retired = zonesData.retired ?? []

const lastSegment = (path) => path.slice(path.lastIndexOf("/") + 1)

/**
 * Places that used to render a page of their own and now hand their ranking to
 * a single surviving page, declared in the "retired" block of data/zones.json.
 *
 * The first four are the un-numbered spellings of departments the file listed
 * twice, once as a "Région" row and once as a "Département" row, so "Vendée"
 * and "Vendée (85)" rendered two URLs for one place. The last one is a
 * five-city URL competing with the department page covering the same communes.
 *
 * They are kept as data rather than as a hand-written redirect list so that
 * every spelling Google may hold for a retired place — the clean slug, the
 * pre-accent-normalisation slug, and for a "Grandes communes" entry each
 * mangled commune on its own — is derived from the same place, exactly as it
 * was when the page still existed. Dropping that generation would 404 all 31 of
 * them.
 */
const liveSlugs = new Set(places.map((place) => slugify(place.name)))
const destinationBySlug = new Map(
  retired.map((entry) => {
    const source = slugify(entry.name)
    const destination = slugify(entry.redirectsTo)
    if (liveSlugs.has(source)) {
      throw new Error(
        `[next.config] cannot redirect /epaviste/${source}: data/zones.json still renders a page there.`
      )
    }
    if (!liveSlugs.has(destination)) {
      throw new Error(
        `[next.config] retired place "${entry.name}" redirects to "${entry.redirectsTo}", ` +
          `which data/zones.json does not render.`
      )
    }
    return [source, destination]
  })
)

// A retired place pointing at another retired place would produce a two-hop
// chain, which the destination check above already rules out.
const consolidationRedirects = [...destinationBySlug].map(([source, destination]) => ({
  source: `/epaviste/${source}`,
  destination: `/epaviste/${destination}`,
  statusCode: 301,
}))

// Legacy slugs were produced before accents were normalised, so "Isère (38)"
// became "is-re-38-" and "Fougères" became "foug-res". Google still holds those
// broken URLs, so every one of them is permanently redirected to its clean
// canonical /epaviste/<slug>. The same map is applied to /zones/ and /epaviste/
// so neither prefix can serve a 200 duplicate of a zone page.
const zoneRedirects = []
const seenZoneSources = new Set(
  [...destinationBySlug.keys()].map((slug) => `/epaviste/${slug}`)
)

function addZoneRedirect(source, targetSlug) {
  if (seenZoneSources.has(source)) return
  // A place whose name contains no mangled characters ("le Nord", "Bretagne")
  // slugs to itself. Emitting a redirect there would shadow its own clean page
  // and bounce visitors in a loop, so only genuinely different slugs are added.
  if (lastSegment(source) === targetSlug) return
  seenZoneSources.add(source)
  zoneRedirects.push({ source, destination: `/epaviste/${targetSlug}`, statusCode: 301 })
}

function addPlaceRedirects({ name, type }, targetSlug) {
  // The whole zone entry, mangled by the old slugifier (and the variant with
  // an extra trailing dash, which the old slugifier also emitted).
  const legacy = legacySlugify(name)
  for (const prefix of ["/zones", "/epaviste"]) {
    addZoneRedirect(`${prefix}/${legacy}`, targetSlug)
    addZoneRedirect(`${prefix}/${legacy}-`, targetSlug)
    addZoneRedirect(`${prefix}/${legacy}--`, targetSlug)
  }

  // Single communes inside a "Grandes communes" entry: Google discovered
  // "b-thune" and "foug-res" as standalone city URLs, so each mangled commune
  // slug points back at the zone page that actually covers it.
  if (type === "Grandes communes") {
    for (const commune of name.split(",").map((c) => c.trim()).filter(Boolean)) {
      const communeLegacy = legacySlugify(commune)
      if (communeLegacy === slugify(commune)) continue
      for (const prefix of ["/zones", "/epaviste"]) {
        addZoneRedirect(`${prefix}/${communeLegacy}`, targetSlug)
        addZoneRedirect(`${prefix}/${communeLegacy}-`, targetSlug)
      }
    }
  }
}

for (const place of places) {
  addPlaceRedirects(place, slugify(place.name))
}

for (const entry of retired) {
  addPlaceRedirects(entry, destinationBySlug.get(slugify(entry.name)))
}

const CANONICAL_HOST = "www.casse-vhu.fr"
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`

const nextConfig = {
  experimental: {
    partytown: true,
  },
  trailingSlash: false,
  // Next normalises a trailing slash before middleware runs, so its built-in
  // handler would always win and answer 308. Turning it off hands the job to
  // middleware.ts, which issues the same redirect as a 301 in a single hop.
  skipTrailingSlashRedirect: true,
  async redirects() {
    // Host, protocol and trailing-slash canonicalization all live in
    // middleware.ts. `redirects()` is evaluated before middleware runs, so
    // keeping the host rules here would shadow the middleware and force an
    // apex URL with a trailing slash through two hops (301 here, then 308 from
    // Next's own trailingSlash handling).
    return [
      {
        source: "/zones",
        destination: "/epaviste",
        statusCode: 301,
      },
      {
        source: "/blog/prime-conversion-2024-conditions-demarches",
        destination: "/blog/prime-conversion-2026-conditions-demarches",
        statusCode: 301,
      },
      // First so a consolidated URL never falls through to a legacy-slug rule
      // with a different destination.
      ...consolidationRedirects,
      ...zoneRedirects,
    ]
  },
}

export default nextConfig