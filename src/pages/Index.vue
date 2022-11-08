<template>
  <Layout>
    <h1>Welcome</h1>

    <div class="homepage">

      <div class="homepage--section">
        <div class="mtg-placeholder">
          Magic Card Goes Here
        </div>

        <div class="premise">
          <p>I am client-centered and body-positive. I focus on the individual client’s needs and goals without trying to fit them into the standards set up by the fitness industry. Each client has a unique background, goal, and body that deserves to be valued and considered when working together. I don’t expect all of my clients to look, act, feel, or need the same thing, so I don’t use a pre-packaged, uniform program.</p>

          <p>There is no one-size-fits-all magic answer to fitness and health goals, and there is no one-size-fits-all body shape. There is no quick, easy route to take. Making health improvements is hard work, but I am here to guide you through the journey. I'm about to make improvements at your pace for you.</p>

          <p>I am enthusiastic, empathetic, and knowledgeable. I make sure each client understands what we're doing and why. I try to make the workouts doable, fun, and client-specific.</p>
        </div>
      </div>

      <div class="homepage--photo">
        <g-image alt="A photo of Keira" src="~/assets/images/keira1.jpg" />
      </div>

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

    </div>
  </Layout>
</template>

<script>
import SsrCarousel from 'vue-ssr-carousel';
import 'vue-ssr-carousel/index.css';

export default {
  metaInfo: {
    title: 'Tell Your Own Story'
  },

  components: {
    'ssr-carousel': SsrCarousel,
  },

  data() {
    return {
      reviews: [
        {
          id: 0,
          by: 'Jai',
          content: 'Excellent programs and personal trainer! Keira offers several different kinds of services to help others work towards their fitness and health goals. They are knowledgeable, informed, innovative and always working to expand and develop their programs. Thanks to their flexibility, even clients that are at a distance, such as myself, were able to get a personalized routine that fits my needs along with plenty of support and adjustments as needed. They offer the real deal with safe, realistic, and manageable tools that are extremely beginner friendly but I can also see it helping those with more experience fine tune their practice as well. Easily the longest I\'ve stuck with a workout plan, actually noticed results, and I only picture it getting better from there!'
        },
        {
          id: 1,
          by: 'Earnest',
          content: 'Keira is amazing. My greatest challenge to getting physically fit has always been a lack of knowledge. Honestly, I had no clue what to do. They worked with me, without judgement. I asked for basic exercises that I could do on my own and they taught me some. Like when i saw taught I mean, teaching me the correct way to do the exercise and how to stay safe doing then. I\'m definitely going back to them for more lessons when I\'m ready to start up again.',
        },
        {
          id: 2,
          by: 'Sherry',
          content: 'Keira is a highly skilled trainer who can assist people regardless of age, time limitations. They provided workouts based on your needs. First , Keira listens to the clients and what the want and expect to achieve. realistic plan and goals. Keira provides encouragement, accountability and positive reinforcement. If I have a difficult day, I can reflect and move forward , getting back on track. Go with Chaotic Good Fitness in your life. you\'ll be glad you did!',
        },
        {
          id: 3,
          by: 'Emily',
          content: 'The thing I most appreciate about working with Keira is that they are committed to working with you and what you want, not just what is the fitness trend of the moment. After talking to them about my goals they\'ve created a program that fits me and my fitness goals, taking into account my abilities and limitations and weird scheduling constraints. And they\'re always willing to adjust things to better fit what my goals and limitations are day to day (which is sometimes an undervalued quality.) They listen, they cheer you on, and they definitely help you towards your goals.'
        },
        {
          id: 4,
          by: 'CJ',
          content: 'Keira has been a fantastic trainer. They have kept me on a good middle ground between pushing myself but not over doing it. They also talked with me beforehand to make sure my goals were reachable and practical. The program has been great thus far'
        },
      ],
    };
  },
};
</script>
