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

export default {
  components: {
    'ssr-carousel': SsrCarousel,
  },

  data() {
    return {
      reviews: [
        {
          id: 0,
          by: 'Jai Mi',
          content: 'Excellent programs and personal trainer! Keira offers several different kinds of services to help others work towards their fitness and health goals. They are knowledgeable, informed, innovative and always working to expand and develop their programs. Thanks to their flexibility, even clients that are at a distance, such as myself, were able to get a personalized routine that fits my needs along with plenty of support and adjustments as needed. They offer the real deal with safe, realistic, and manageable tools that are extremely beginner friendly but I can also see it helping those with more experience fine tune their practice as well. Easily the longest I\'ve stuck with a workout plan, actually noticed results, and I only picture it getting better from there!'
        },
        {
          id: 1,
          by: 'Earnest',
          content: 'Keira is amazing. My greatest challenge to getting physically fit has always been a lack of knowledge. Honestly, I had no clue what to do. They worked with me, without judgement. I asked for basic exercises that I could do on my own and they taught me some. Like when i saw taught I mean, teaching me the correct way to do the exercise and how to stay safe doing then. I\'m definitely going back to them for more lessons when I\'m ready to start up again.',
        },
        {
          id: 2,
          by: 'Emily',
          content: 'The thing I most appreciate about working with Keira is that they are committed to working with you and what you want, not just what is the fitness trend of the moment. After talking to them about my goals they\'ve created a program that fits me and my fitness goals, taking into account my abilities and limitations and weird scheduling constraints. And they\'re always willing to adjust things to better fit what my goals and limitations are day to day (which is sometimes an undervalued quality.) They listen, they cheer you on, and they definitely help you towards your goals.'
        },
        {
          id: 3,
          by: 'Jessica',
          content: 'They built me a great customized workout package that I could do from my home, that specifically fit my goals and my ADHD. My upper body is getting stronger!!! The price was less than I expected for that much personalization. Even though I hired them remotely, Kiera video called made sure that I understood all the movements and how the program was designed. Strongly recommend!',
        },
        {
          id: 4,
          by: 'Dee',
          content: 'I am really happy with the progress I\'m making with Keira as my trainer.  She pushes me, but also won\'t let me push myself too hard.  She understands my physical limitations and tailors my workouts so that I can work smarter and harder.  Workouts are challenging but rewarding, and Keira is very encouraging.  I highly recommend Chaotic Good Fitness for anyone wanting to get in shape, lose weight or any other health/fitness goal you want to achieve.'
        },
        {
          id: 5,
          by: 'Lo',
          content: 'I\'ve been working with Keira for a couple months now, and she is a very knowledgable and motivating trainer. I can tell she has tailored my workouts for my body\'s ability, but also my personal needs and goals as well as making sure to incorporate the things I enjoy doing. I can tell she puts a lot of time, energy, and research into designing workouts, and each one feels physically balanced, challenging, but attainable. She responds in a timely manner with any questions and concerns. And she is very receptive to feedback about what is going well and what isn\'t. She\'s very thorough and also takes into account social and mental factors that aren\'t usually acknowledged as part of/affecting a fitness plan. I can\'t say enough good things about her!'
        },
      ],
    };
  },
};
</script>