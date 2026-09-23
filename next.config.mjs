/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/insights",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/insights/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
