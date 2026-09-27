import zonesData from "@/data/zones.json"

export type ZoneType = "Région" | "Département" | "Grandes communes"

export interface Zone {
  name: string
  type: ZoneType
  slug: string
  legacySlug: string
  /** Zone name without the "(33)" department code. */
  label: string
  /** Department code when the entry carries one, otherwise null. */
  code: string | null
  /** Individual communes, split from "Grandes communes" entries. */
  communes: string[]
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

/**
 * Builds the region -> departement -> "grandes communes" hierarchy.
 *
 * zones.json stores the three levels as parallel arrays: entry `i` of "Région",
 * "Département" and "Grandes communes" all describe the same metro area (e.g.
 * "Bretagne" / "Ille-et-Vilaine (35)" / "Rennes, Saint-Malo, ..."). Deriving
 * the parent links from that alignment means the hierarchy can never drift out
 * of sync with the data, and it avoids a hand-maintained name map that silently
 * breaks whenever a department is renamed or re-hyphenated.
 */
function buildParentMap(): Record<string, string> {
  const regions = zonesData["Région"]
  const departments = zonesData["Département"]
  const cities = zonesData["Grandes communes"]

  if (regions.length !== departments.length || departments.length !== cities.length) {
    throw new Error(
      `[zones] zones.json levels are no longer parallel: ` +
        `${regions.length} regions, ${departments.length} departments, ` +
        `${cities.length} "grandes communes". The zone hierarchy cannot be derived.`
    )
  }

  const parents: Record<string, string> = {}
  departments.forEach((department, index) => {
    parents[department] = regions[index]
    parents[cities[index]] = departments[index]
  })
  return parents
}

const ZONE_PARENT: Record<string, string> = buildParentMap()

const NAME_WITH_CODE = /^(.*?)\s*\((\d{2}[A-Za-z]?)\)$/

function buildZone(name: string, type: ZoneType): Zone {
  const withCode = NAME_WITH_CODE.exec(name)
  return {
    name,
    type,
    slug: slugify(name),
    legacySlug: legacySlugify(name),
    label: withCode ? withCode[1] : name,
    code: withCode ? withCode[2] : null,
    communes: name.split(",").map((c) => c.trim()).filter(Boolean),
  }
}

export function getZones(): Zone[] {
  const zones: Zone[] = []
  const types: ZoneType[] = ["Région", "Département", "Grandes communes"]
  for (const type of types) {
    for (const name of zonesData[type]) {
      zones.push(buildZone(name, type))
    }
  }
  return zones
}

/**
 * Resolves a route segment to a zone. Only the clean, accent-normalised slug is
 * accepted: legacy slugs are permanently redirected to their clean equivalent by
 * next.config.mjs, so serving them here would create a 200 duplicate of a page
 * Google already knows about.
 */
export function findZoneBySlug(slug: string): Zone | undefined {
  return getZones().find((zone) => zone.slug === slug)
}

/** The region (or department) page that this zone sits under, if any. */
export function parentZoneOf(zone: Zone): Zone | undefined {
  const parentName = ZONE_PARENT[zone.name]
  if (!parentName) return undefined
  return getZones().find((candidate) => candidate.name === parentName)
}

/**
 * The zones covered by this zone. Regions also surface the "grandes communes"
 * reached through their departments, so a region page links down the whole
 * chain instead of stopping after a single hop.
 */
export function childZonesOf(zone: Zone): Zone[] {
  const all = getZones()
  const direct = all.filter((candidate) => ZONE_PARENT[candidate.name] === zone.name)
  const deeper = all.filter((candidate) => {
    const parentName = ZONE_PARENT[candidate.name]
    return parentName !== undefined && direct.some((child) => child.name === parentName)
  })
  return [...direct, ...deeper]
}

/** The region page that ultimately contains this zone. */
export function regionOf(zone: Zone): Zone | undefined {
  let current = zone
  const seen = new Set<string>()
  while (!seen.has(current.slug)) {
    seen.add(current.slug)
    const next = current.type === "Région" ? undefined : parentZoneOf(current)
    if (!next) return current.type === "Région" ? current : undefined
    current = next
  }
  return undefined
}
