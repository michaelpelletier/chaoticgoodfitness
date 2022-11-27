module.exports = {
  siteName: 'Chaotic Good Fitness',
  siteUrl: 'https://www.chaoticgoodfitness.com',

  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: [],
        '/*': {
          changefreq: 'monthly',
          priority: 0.7,
          lastmod: '2022-11-27',
        }
      }
    },
    {
      use: 'gridsome-plugin-seo',
    },
  ],
}
