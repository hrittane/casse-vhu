import fs from "node:fs"
import path from "node:path"

// The canonical homepage is https://www.casse-vhu.fr/ (with a trailing slash),
// as declared by <link rel="canonical"> in the document head. next-sitemap
// unconditionally strips the trailing slash from every <loc> when
// `trailingSlash` is false, and exposes no per-path override, so the homepage
// entry is restored here to keep every SEO signal byte-identical.
//
// Subpages are intentionally left untouched: they stay slash-less, matching
// `trailingSlash: false` in next.config.mjs.

const CANONICAL_ORIGIN = "https://www.casse-vhu.fr"
const publicDir = path.join(process.cwd(), "public")

if (!fs.existsSync(publicDir)) {
  console.error(`[normalize-sitemap-root] missing directory: ${publicDir}`)
  process.exit(1)
}

const targets = fs
  .readdirSync(publicDir)
  .filter((name) => /^sitemap(-\d+)?\.xml$/.test(name))

if (targets.length === 0) {
  console.error("[normalize-sitemap-root] no sitemap files found in public/")
  process.exit(1)
}

const slashless = `<loc>${CANONICAL_ORIGIN}</loc>`
const slashed = `<loc>${CANONICAL_ORIGIN}/</loc>`

for (const name of targets) {
  const file = path.join(publicDir, name)
  const xml = fs.readFileSync(file, "utf8")
  if (!xml.includes(slashless)) {
    console.log(`[normalize-sitemap-root] ${name}: no homepage entry to fix`)
    continue
  }
  const fixed = xml.split(slashless).join(slashed)
  if (fixed.includes("https://www.www.")) {
    console.error(`[normalize-sitemap-root] refusing to write, malformed host in ${name}`)
    process.exit(1)
  }
  fs.writeFileSync(file, fixed)
  console.log(`[normalize-sitemap-root] ${name}: homepage <loc> now ${CANONICAL_ORIGIN}/`)
}
