import { NextResponse, type NextRequest } from "next/server"

import { SITE_URL } from "@/lib/site"

const CANONICAL_HOST = "www.casse-vhu.fr"

/**
 * Issues the canonical redirect in a single hop.
 *
 * Next's own `trailingSlash: false` handling answers with a 308, and with
 * `redirects()` in next.config.mjs the canonical-host rules run before
 * middleware, so an apex URL with a trailing slash needed two hops (301 from
 * next.config, then 308 from Next). Everything is handled here instead: the
 * next.config host rules are removed so only one redirect is ever emitted, and
 * the target is always the exact URL in the sitemap.
 *
 * The destination is always built from SITE_URL, never from the incoming Host
 * header, so a spoofed host cannot produce an off-site redirect target.
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const host = request.headers.get("host")?.split(":")[0] ?? ""
  const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim()
  const isSecure = forwardedProto ? forwardedProto === "https" : request.nextUrl.protocol === "https:"

  const needsHostUpgrade = host !== CANONICAL_HOST
  // On Vercel this is always false. Vercel's CDN upgrades plain HTTP to HTTPS
  // with a 308 before the request reaches this function, so middleware never
  // sees an http:// request and cannot change that status code. The 308 is not
  // configurable (vercel.com/docs/cdn-security/encryption) and is equivalent to
  // a 301 for crawlers, so it is left alone.
  //
  // The branch is kept because it is live when the app runs behind a proxy that
  // forwards plain HTTP (self-hosted, or Cloudflare on Full rather than Flexible).
  const needsProtocolUpgrade = !isSecure
  // The root path legitimately ends in a slash, so it is never "trailing".
  const hasTrailingSlash = pathname.length > 1 && pathname.endsWith("/")

  if (!needsHostUpgrade && !needsProtocolUpgrade && !hasTrailingSlash) {
    return NextResponse.next()
  }

  const slug = pathname.replace(/\/+$/, "")
  const destination = new URL(`${slug}${search}`, SITE_URL)

  return NextResponse.redirect(destination, 301)
}

export const config = {
  // Only Next's own internals are skipped. Everything else, including files in
  // public/ (robots.txt, sitemap.xml, llms.txt), still gets the host and
  // protocol canonicalization. The middleware is a no-op for a request already
  // on the canonical origin without a trailing slash, so serving static assets
  // through it costs nothing.
  matcher: ["/((?!_next/).*)"],
}
