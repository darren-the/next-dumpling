// next.config.js
var nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net/**"
      }
    ]
  },
  env: {
    baseURL: "https://us-central1-news-api-37579.cloudfunctions.net/app",
    smallDescLimit: 90,
    homeInterviewLimit: 2,
    homeRSSLimit: 5
  }
};
module.exports = nextConfig;
