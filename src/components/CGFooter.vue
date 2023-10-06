<template>
  <footer>
    <div class="footer-row">
      <div class="footer-text">
        Tell your own story
      </div>

      <div class="footer-social-logos">
        <a
          href="https://www.facebook.com/ChaoticGoodFitness"
          title="Connect with us on Facebook"
          target="_blank"
        >
          <svg title="Facebook logo" class="social__icon">
            <use xlink:href="#social-fb"></use>
          </svg>
        </a>

        <a
          href="https://www.yelp.com/biz/chaotic-good-fitness-atlanta"
          title="Connect with us on Yelp"
          target="_blank"
        >
          <svg title="Yelp logo" class="social__icon">
            <use xlink:href="#social-yelp"></use>
          </svg>
        </a>

        <a
          href="https://www.reddit.com/user/ChaoticGoodFitness"
          title="Connect with us on Reddit"
          target="_blank"
        >
          <svg title="Reddit logo" class="social__icon">
            <use xlink:href="#social-reddit"></use>
          </svg>
        </a>

        <a
          href="https://www.trainerize.me/profile/chaoticgoodfitness"
          title="Connect with us on Trainerize"
          target="_blank"
        >
          <svg title="Trainerize logo" class="social__icon">
            <use xlink:href="#social-trainerize"></use>
          </svg>
        </a>
      </div>
    </div>
    <div class="footer-row">
      © 2023 Chaotic Good Fitness. All rights reserved. <g-link to="/Privacy">Privacy Policy</g-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CGFooter',

};
</script>