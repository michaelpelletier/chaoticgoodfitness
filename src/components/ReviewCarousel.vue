<template>
  <ssr-carousel
    class="reviews"
    :slides-per-page="1"
    :loop="true"
    :autoplay="true"
    :autoplay-delay="5000"
    :show-dots="true"
  >
    <div
      class="slide review"
      v-for="review in reviews"
      :key="review.id"
    >
      <div class="review--score">
        <svg title="star rating" class="star__icon">
          <use xlink:href="#star"></use>
        </svg>
        <svg title="star rating" class="star__icon">
          <use xlink:href="#star"></use>
        </svg>
        <svg title="star rating" class="star__icon">
          <use xlink:href="#star"></use>
        </svg>
        <svg title="star rating" class="star__icon">
          <use xlink:href="#star"></use>
        </svg>
        <svg title="star rating" class="star__icon">
          <use xlink:href="#star"></use>
        </svg>
      </div>

      <div class="review--inner">
        <span class="quote-container">
          <span class="quote">“</span>
        </span>
        {{review.content}}”
      </div>
      <div class="review--author">
        - {{review.by}}
      </div>
    </div>
  </ssr-carousel>
</template>

<script>
import SsrCarousel from 'vue-ssr-carousel';
import 'vue-ssr-carousel/index.css';

import reviews from '../data/reviews';

export default {
  components: {
    'ssr-carousel': SsrCarousel,
  },

  data() {
    return {
      reviews,
    };
  },
};
</script>