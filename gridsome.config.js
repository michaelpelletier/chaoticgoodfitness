module.exports = {
  siteName: 'Chaotic Good Fitness',

  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/privacy', '/legal']
      }
    },
    {
      use: 'gridsome-plugin-seo',
    },
  ],
}
