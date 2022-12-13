// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // Pinterest
  head.meta.push({
    name: 'p:domain_verify',
    content: 'cf6d957903dce231195d6b4ef2bdaa5a'
  });
}
