/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.casse-vhu.fr',
    // NOTE: the homepage <loc> is normalized to include a trailing slash by
    // scripts/normalize-sitemap-root.mjs, because next-sitemap always strips it
    // when `trailingSlash` is false and offers no per-path override.
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
}
