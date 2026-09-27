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

// Legacy slugs were produced before accents were normalised, so "Isère (38)"
// became "is-re-38-" and "Fougères" became "foug-res". Google still holds those
// broken URLs, so every one of them is permanently redirected to its clean
// canonical /epaviste/<slug>. The same map is applied to /zones/ and /epaviste/
// so neither prefix can serve a 200 duplicate of a zone page.
const zoneRedirects = []
const zoneTypes = ["Région", "Département", "Grandes communes"]
const seenZoneSources = new Set()

function addZoneRedirect(source, destination) {
  if (seenZoneSources.has(source)) return
  // A zone whose name contains no mangled characters ("le Nord", "Bretagne")
  // slugs to itself. Emitting a redirect there would shadow its own clean page
  // and bounce visitors in a loop, so only genuinely different slugs are added.
  const sourceSlug = source.slice(source.lastIndexOf("/") + 1)
  if (sourceSlug === destination.slice(destination.lastIndexOf("/") + 1)) return
  seenZoneSources.add(source)
  zoneRedirects.push({ source, destination, statusCode: 301 })
}

for (const type of zoneTypes) {
  for (const name of zonesData[type]) {
    const clean = slugify(name)
    const destination = `/epaviste/${clean}`

    // The whole zone entry, mangled by the old slugifier (and the variant with
    // an extra trailing dash, which the old slugifier also emitted).
    const legacy = legacySlugify(name)
    for (const prefix of ["/zones", "/epaviste"]) {
      addZoneRedirect(`${prefix}/${legacy}`, destination)
      addZoneRedirect(`${prefix}/${legacy}-`, destination)
      addZoneRedirect(`${prefix}/${legacy}--`, destination)
    }

    // Single communes inside a "Grandes communes" entry: Google discovered
    // "b-thune" and "foug-res" as standalone city URLs, so each mangled commune
    // slug points back at the zone page that actually covers it.
    if (type === "Grandes communes") {
      for (const commune of name.split(",").map((c) => c.trim()).filter(Boolean)) {
        const communeLegacy = legacySlugify(commune)
        if (communeLegacy === slugify(commune)) continue
        for (const prefix of ["/zones", "/epaviste"]) {
          addZoneRedirect(`${prefix}/${communeLegacy}`, destination)
          addZoneRedirect(`${prefix}/${communeLegacy}-`, destination)
        }
      }
    }
  }
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
      ...zoneRedirects,
    ]
  },
}

export default nextConfig