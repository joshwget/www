const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/careers': { page: '/careers' },
      '/legal': { page: '/legal/terms' },
      '/press': { page: '/press' },
      '/docs': { page: '/docs/quick-start' },
      '/docs/quick-start': { page: '/docs/quick-start' }
    };
  }
});
