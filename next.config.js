const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
  // exportPathMap: function() {
  //   return {
  //     '/': { page: '/' },
  //     '/docs': { page: '/docs' },
  //     '/docs/get-started': { page: '/docs/get-started' }
  //   };
  // }
});
