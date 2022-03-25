/** @type {import('next').NextConfig} */
const withImages = require('next-images')


const nextConfig = withImages({
  images: {
    disableStaticImages: true,
  }
});

module.exports = nextConfig
