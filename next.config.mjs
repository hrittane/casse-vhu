/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    partytown: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.casse-vhu.fr',
          },
        ],
        destination: 'https://casse-vhu.fr/:path*',
        permanent: true,
      },
      {
        source: '/zones/:path*',
        destination: '/epaviste/:path*',
        permanent: true,
      }
    ]
  },
}

export default nextConfig