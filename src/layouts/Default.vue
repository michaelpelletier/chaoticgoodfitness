<template>
  <div class="layout">
    <CGHeader />

    <div class="content">
      <slot/>
    </div>

    <icons />

    <ReviewCarousel />

    <CGFooter />
  </div>
</template>

<script>
import icons from '@/components/icons';
import CGHeader from '@/components/CGHeader.vue';
import CGFooter from '@/components/CGFooter.vue';
import ReviewCarousel from '@/components/ReviewCarousel.vue';

import '@/style/app.scss';

export default {
  components: {
    icons,
    CGHeader,
    CGFooter,
    ReviewCarousel,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
