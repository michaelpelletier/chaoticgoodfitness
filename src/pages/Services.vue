<template>
  <Layout class="programs">
    <h1>Services</h1>

    <div class="tab-controls">
      <div
        class="tab-header"
        :class="{'tab-header--active': activeTab === 'virtual'}"
        @click="selectTab('virtual')"
      >
        <h2>Virtual Programs</h2>
      </div>
      <div
        class="tab-header"
        :class="{'tab-header--active': activeTab === 'local'}"
        @click="selectTab('local')"
      >
        <h2>In-Person Programs</h2>
      </div>
    </div>

    <div class="tab-page" v-if="activeTab === 'virtual'">
      <h3>Program Builder ($150 one-time fee)</h3>
      <p>I create a personalized workout program for you with 6-8 workouts and a reference sheet. We do a one time Strategy video chat to talk about what it is, make any necessary adjustments, and answer any questions you have. You are always welcome to ask questions afterwards.</p>

      <h3>Virtual Training</h3>

      <div class="aside">
        This is better when you need more accountability coaching for a lower price point.
      </div>

      <p>Each program is customized for you based on our consultation call. We'll work together through Trainerize to make the changes you want to see in yourself through a movement program, nutrition habits, and lifestyle changes.</p>

      <p>These programs are all encompassing to best set you up for success in meeting your goals.</p>

      <table>
        <thead>
          <tr>
            <td></td>
            <td>Common</td>
            <td>Rare</td>
            <td>Legendary</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consultation Call</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>App Access
              <span>Includes Habit &amp; Progress Tracking</span>
            </td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Workout Program
              <span>Personalized &amp; easy-to-follow</span>
            </td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Nutrition Coaching</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Unlimited Messaging</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Group Accountability
            </td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Regular Check Ins</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Monthly Strategy Call
              <span>30-45 minutes</span>
            </td>
            <td>-</td>
            <td>✓</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Weekly 1-on-1 Virtual Workout
              <span>30-45 minutes</span>
            </td>
            <td>-</td>
            <td>-</td>
            <td>✓</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Cost<span>Per Month</span></td>
            <td>$150</td>
            <td>$200</td>
            <td>$300</td>
          </tr>
        </tfoot>
      </table>

      <div class="add-on-section">
        <div class="add-on-section--left">
          <h3>Add-Ons</h3>
          <ul>
            <li>Extra Strategy Session - $40</li>
            <li>30 minute Video Workout - $30</li>
            <li>60 minute Video Workout - $50</li>
          </ul>
        </div>
        <div class="add-on-section--right">
          <h3>Custom Packages</h3>
          <p>Don't see what you're looking for? Let's build a plan together that best matches your needs. Message me for more details.</p>
        </div>
      </div>
    </div>

    <div class="tab-page" v-if="activeTab === 'local'">
      <h3>Local Training</h3>

      <div class="aside">
        This is better if you are local, looking for more nuanced exercise help, and don't need the nutrition or habit coaching as much.
      </div>

      <p>For in person programs, either you come to my gym or I go to your home and we work together face to face on a movement program to help you meet your fitness goals. I'll be there every step of the way to ensure you're doing everything properly and effectively.</p>


      <table>
        <thead>
          <tr>
            <td></td>
            <td>30 minutes</td>
            <td>45 minutes</td>
            <td>60 minutes</td>
          </tr>
        </thead>
        <tbody>
          <tr class="label">
            <td colspan="4">Individual Packages</td>
          </tr>
          <tr>
            <td>Single Session</td>
            <td>$50</td>
            <td>$65</td>
            <td>$80</td>
          </tr>
          <tr>
            <td>4 Session Pack</td>
            <td>$180</td>
            <td>$240</td>
            <td>$300</td>
          </tr>
          <tr>
            <td>8 Session Pack</td>
            <td>$360</td>
            <td>$480</td>
            <td>$600</td>
          </tr>
          <tr>
            <td>12 Session Pack</td>
            <td>$540</td>
            <td>$720</td>
            <td>$900</td>
          </tr>
        </tbody>
      </table>

      <div class="addon">Discounts available for small groups.</div>

      <div class="addon">
        Want some nutrition coaching, too? We can add on a hybrid feature giving you access to the nutrition coaching, app, and groups of the virtual coaching for $65 each month.
      </div>

    </div>
  </Layout>
</template>

<script>
import seo from '../data/seo';

export default {
  metaInfo () {
    return this.$seo({
      title: 'Services',
      description: seo.description,
      keywords: seo.keywords.join(', '),
      openGraph: seo.openGraph,
      link: [
        {
          rel: 'canonical',
          content: 'https://chaoticgoodfitness.com/services/'
        }
      ]
    });
  },

  data() {
    return {
      activeTab: 'virtual'
    };
  },

  methods: {
    selectTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>
