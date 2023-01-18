/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net/**',
      }
    ]
  },
  env: {
    baseURL: 'https://us-central1-news-api-37579.cloudfunctions.net/app',
    smallDescLimit: 90,
    homeNewsLimit: 10,
    homeInterviewLimit: 2,
    homeRSSLimit: 5,
    memesTweetLimit: 6,
  },
}

module.exports = nextConfig
