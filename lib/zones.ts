import zonesData from "@/data/zones.json"

export type ZoneType = "Région" | "Département" | "Grandes communes"

export interface Zone {
  name: string
  type: ZoneType
  slug: string
  legacySlug: string
}

const ACCENT_MAP: Record<string, string> = {
  "à": "a",
  "â": "a",
  "ä": "a",
  "á": "a",
  "ã": "a",
  "å": "a",
  "é": "e",
  "è": "e",
  "ê": "e",
  "ë": "e",
  "î": "i",
  "ï": "i",
  "í": "i",
  "ì": "i",
  "ô": "o",
  "ö": "o",
  "ó": "o",
  "ò": "o",
  "õ": "o",
  "ù": "u",
  "û": "u",
  "ü": "u",
  "ú": "u",
  "ç": "c",
  "ñ": "n",
  "œ": "oe",
  "æ": "ae",
  "'": "-",
  "’": "-",
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .split("")
    .map((char) => ACCENT_MAP[char] ?? char)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function legacySlugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-")
}

export function getZones(): Zone[] {
  const zones: Zone[] = []
  const types: ZoneType[] = ["Région", "Département", "Grandes communes"]
  for (const type of types) {
    for (const name of zonesData[type]) {
      zones.push({
        name,
        type,
        slug: slugify(name),
        legacySlug: legacySlugify(name),
      })
    }
  }
  return zones
}

export function findZoneBySlug(slug: string): Zone | undefined {
  return getZones().find((zone) => zone.slug === slug || zone.legacySlug === slug)
}