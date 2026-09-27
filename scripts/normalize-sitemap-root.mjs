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

// next-sitemap emits a non-standard `Host:` directive and comment-delimited
// groups, and it has no way to exclude the JSON contact-form endpoint. The
// robots file is rewritten here to exactly what we want served: one allow-all
// group, the private API path blocked, and the absolute sitemap reference.

const robotsFile = path.join(publicDir, "robots.txt")
const robots = `User-agent: *
Allow: /

Disallow: /api/

Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml
`

fs.writeFileSync(robotsFile, robots)
console.log("[normalize-sitemap-root] robots.txt rewritten (allow all, /api/ blocked)")

// next-sitemap builds its list from the prerendered output, so a page that is
// rendered on demand is skipped even when it is a plain indexable page. That
// silently dropped /blog (it reads searchParams for its category and search
// filters) from the sitemap. The static routes are re-derived from the app
// directory and any missing one is appended, so the sitemap cannot drift from
// the routes that actually exist.
function collectStaticRoutes(dir, prefix = "") {
  const routes = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      // Route groups "(marketing)" do not appear in the URL.
      if (entry.name.startsWith("(") && entry.name.endsWith(")")) {
        routes.push(...collectStaticRoutes(path.join(dir, entry.name), prefix))
      } else {
        routes.push(...collectStaticRoutes(path.join(dir, entry.name), `${prefix}/${entry.name}`))
      }
      continue
    }
    if (entry.name !== "page.tsx" && entry.name !== "page.jsx" && entry.name !== "page.js") continue
    // A dynamic segment is expanded by next-sitemap from generateStaticParams.
    if (prefix.split("/").some((segment) => segment.includes("["))) continue
    routes.push(prefix || "/")
  }
  return routes
}

const requiredRoutes = collectStaticRoutes(path.join(process.cwd(), "app"))

// Only the numbered chunk files hold <url> entries. sitemap.xml is the sitemap
// index and must keep its <sitemapset> shape, so it is never written to here.
for (const name of targets.filter((n) => /^sitemap-\d+\.xml$/.test(n))) {
  const file = path.join(publicDir, name)
  let xml = fs.readFileSync(file, "utf8")

  const present = new Set(
    [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].replace(CANONICAL_ORIGIN, "") || "/")
  )

  const missing = requiredRoutes
    .filter((route) => !present.has(route))
    .map((route) => (route === "/" ? `${CANONICAL_ORIGIN}/` : `${CANONICAL_ORIGIN}${route}`))

  if (missing.length > 0) {
    const lastmod = new Date().toISOString()
    const entries = missing
      .map(
        (loc) =>
          `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod>` +
          `<changefreq>daily</changefreq><priority>0.7</priority></url>`
      )
      .join("")
    xml = xml.replace("</urlset>", `${entries}</urlset>`)
    fs.writeFileSync(file, xml)
    console.log(`[normalize-sitemap-root] ${name}: added ${missing.length} route(s) next-sitemap skipped`)
    for (const loc of missing) console.log(`[normalize-sitemap-root]   + ${loc}`)
  }
}

