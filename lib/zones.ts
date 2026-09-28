import zonesData from "@/data/zones.json"

export type ZoneType = "Région" | "Département" | "Grandes communes"

/** One row of data/zones.json, before the derived fields are filled in. */
interface PlaceRecord {
  name: string
  label: string
  type: ZoneType
  preposition: string
  parent: string | null
  communes: string[]
}

export interface Zone {
  /** Unique key of the record. "Gironde (33)" keeps its department number. */
  name: string
  type: ZoneType
  slug: string
  legacySlug: string
  /** Properly spelled name without the "(33)" department code, e.g. "Bretagne". */
  label: string
  /**
   * The name to show and index for this place: the label, plus the department
   * number where there is one, so "Vendée (85)" reads as itself rather than as
   * a bare "Vendée" that another place on the site could also use.
   */
  displayName: string
  /** Department code when the entry carries one, otherwise null. */
  code: string | null
  /**
   * The full phrase French requires for this place, e.g. "en Bretagne",
   * "dans le Nord", "dans les Bouches-du-Rhône", "à Rennes". Declared per place
   * because neither the preposition nor its article is derivable from the zone
   * type: "en" + region, "dans le"/"dans les" + masculine/plural department.
   * Always ends with `label`, which `assertZonesAreCoherent` enforces.
   */
  preposition: string
  /** Real communes covered in this place, or [] when none are recorded. */
  communes: string[]
  /** `name` of the containing place, or null for a top-level region. */
  parentName: string | null
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

const NAME_WITH_CODE = /^(.*?)\s*\((\d{2}[A-Za-z]?)\)$/

function toZone(record: PlaceRecord): Zone {
  const withCode = NAME_WITH_CODE.exec(record.name)
  const code = withCode ? withCode[2] : null
  return {
    name: record.name,
    type: record.type,
    slug: slugify(record.name),
    legacySlug: legacySlugify(record.name),
    label: record.label,
    code,
    displayName: code ? `${record.label} (${code})` : record.label,
    preposition: record.preposition,
    communes: record.communes,
    parentName: record.parent,
  }
}

/**
 * Fails the build on anything that would make the rendered pages disagree with
 * each other. This is the same guarantee the old index-aligned parent map gave
 * for free, re-established on explicit `parent` references: the previous scheme
 * threw only when the three parallel arrays stopped being the same length,
 * which left a mistyped parent name silently rendering a page with no hub.
 */
function assertZonesAreCoherent(places: Zone[]) {
  const byName = new Map<string, Zone>()
  for (const place of places) {
    if (byName.has(place.name)) {
      throw new Error(`[zones] duplicate place name in zones.json: "${place.name}"`)
    }
    byName.set(place.name, place)
  }

  const bySlug = new Set<string>()
  for (const place of places) {
    if (bySlug.has(place.slug)) {
      throw new Error(
        `[zones] two places resolve to the same slug "${place.slug}" ` +
          `("${place.name}"). They would fight over one URL.`
      )
    }
    bySlug.add(place.slug)

    if (!place.preposition.endsWith(place.label)) {
      throw new Error(
        `[zones] preposition for "${place.name}" must end with its label ` +
          `"${place.label}", got "${place.preposition}".`
      )
    }
  }

  for (const place of places) {
    if (place.parentName === null) continue
    const parent = byName.get(place.parentName)
    if (!parent) {
      throw new Error(
        `[zones] "${place.name}" points at a parent that does not exist: ` +
          `"${place.parentName}".`
      )
    }
  }

  // A cycle would make regionOf() loop and make the breadcrumb infinite.
  for (const place of places) {
    const seen = new Set<string>([place.name])
    let current = place
    while (current.parentName !== null) {
      const parent = byName.get(current.parentName)!
      if (seen.has(parent.name)) {
        throw new Error(`[zones] parent cycle detected around "${place.name}".`)
      }
      seen.add(parent.name)
      current = parent
    }
  }
}

let cache: Zone[] | null = null

export function getZones(): Zone[] {
  if (cache) return cache
  const records = zonesData.places as PlaceRecord[]
  const zones = records.map(toZone)
  assertZonesAreCoherent(zones)
  cache = zones
  return zones
}

export function getZonesByType(type: ZoneType): Zone[] {
  return getZones().filter((zone) => zone.type === type)
}

/**
 * Resolves a route segment to a zone. Only the clean, accent-normalised slug is
 * accepted: every other spelling is permanently redirected to its clean
 * equivalent by next.config.mjs, so serving them here would create a 200
 * duplicate of a page Google already knows about.
 */
export function findZoneBySlug(slug: string): Zone | undefined {
  return getZones().find((zone) => zone.slug === slug)
}

/** The region (or department) page that this zone sits under, if any. */
export function parentZoneOf(zone: Zone): Zone | undefined {
  if (!zone.parentName) return undefined
  return getZones().find((candidate) => candidate.name === zone.parentName)
}

/** The regions this zone sits under: its direct parent and its grandparent. */
export function parentZonesOf(zone: Zone): Zone[] {
  const chain: Zone[] = []
  for (let current = zone; ; ) {
    const parent = parentZoneOf(current)
    if (!parent) return chain
    chain.push(parent)
    current = parent
  }
}

/**
 * The zones covered by this zone. Regions also surface the "grandes communes"
 * reached through their departments, so a region page links down the whole
 * chain instead of stopping after a single hop.
 */
export function childZonesOf(zone: Zone): Zone[] {
  const all = getZones()
  const direct = all.filter((candidate) => candidate.parentName === zone.name)
  const directNames = new Set(direct.map((child) => child.name))
  const deeper = all.filter(
    (candidate) => candidate.parentName !== null && directNames.has(candidate.parentName)
  )
  return [...direct, ...deeper]
}

/**
 * The departments a region links down to. A region page is a hub, so these are
 * the links that carry it, listed separately from the "grandes communes" it
 * also covers.
 */
export function departmentZonesOf(zone: Zone): Zone[] {
  return childZonesOf(zone).filter((child) => child.type === "Département")
}

/** The "grandes communes" metro pages a region reaches through its departments. */
export function metroZonesOf(zone: Zone): Zone[] {
  return childZonesOf(zone).filter((child) => child.type === "Grandes communes")
}

/** The region page that ultimately contains this zone, if there is one. */
export function regionOf(zone: Zone): Zone | undefined {
  const parent = parentZoneOf(zone)
  if (!parent) return zone.type === "Région" ? zone : undefined
  return regionOf(parent)
}
