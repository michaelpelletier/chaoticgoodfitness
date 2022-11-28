// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.script.push({
    src: 'https://www.googletagmanager.com/gtag/js?id=G-4571EDCTDB',
    async: false
  });

  if (isClient) {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '4571EDCTDB');
    window.gtag = gtag; // expose gtag function to global scope
  }
}
