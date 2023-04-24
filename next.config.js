/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'www.bhphotovideo.com'],
    // add .svg extension to allow Next.js to handle SVG files
    extensions: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
  },
};

module.exports = nextConfig;
