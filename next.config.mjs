/** @type {import('next').NextConfig} */
const nextConfig = {
  // `devIndicators` settings were removed earlier as they are deprecated.
  // outputFileTracingRoot ensures Next.js uses the correct workspace root
  outputFileTracingRoot: process.cwd(),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
