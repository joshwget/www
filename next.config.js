const withOptimizedImages = require('next-optimized-images');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withOptimizedImages(
  withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    exportTrailingSlash: true
  })
);
