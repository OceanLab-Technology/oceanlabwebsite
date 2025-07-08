/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  images: {
    domains: ['ik.imagekit.io'],
  },

}

export default nextConfig
