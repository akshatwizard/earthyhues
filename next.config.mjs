/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "earthyhues.co.in",
      },
      {
        protocol: "https",
        hostname: "www.exportleftovers.in", 
      },
    ],
  },
};

export default nextConfig;
