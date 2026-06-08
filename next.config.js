/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'svbmamaqrtsknuztxiuq.supabase.co',
      },
      {
        protocol: 'https',
        hostname: '**.googleapis.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/returns.html', destination: '/returns', permanent: true },
      { source: '/delivery.html', destination: '/delivery', permanent: true },
      { source: '/payment.html', destination: '/payment', permanent: true },
      { source: '/contacts.html', destination: '/contacts', permanent: true },
    ]
  },
}

module.exports = nextConfig
