/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  outputFileTracingRoot: process.cwd(),
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
