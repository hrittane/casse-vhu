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

const zoneRedirects = []
const zoneTypes = ["Région", "Département", "Grandes communes"]
for (const type of zoneTypes) {
  for (const name of zonesData[type]) {
    const legacy = legacySlugify(name)
    const clean = slugify(name)
    zoneRedirects.push({
      source: `/zones/${legacy}`,
      destination: `/epaviste/${clean}`,
      permanent: true,
    })
  }
}

const nextConfig = {
  experimental: {
    partytown: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.casse-vhu.fr",
          },
        ],
        destination: "https://casse-vhu.fr/:path*",
        permanent: true,
      },
      {
        source: "/zones",
        destination: "/epaviste",
        permanent: true,
      },
      {
        source: "/blog/prime-conversion-2024-conditions-demarches",
        destination: "/blog/prime-conversion-2026-conditions-demarches",
        permanent: true,
      },
      ...zoneRedirects,
    ]
  },
}

export default nextConfig