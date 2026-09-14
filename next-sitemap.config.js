/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://casse-vhu.fr',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
}