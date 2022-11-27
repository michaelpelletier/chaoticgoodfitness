<template>
  <Layout>
    <h1>Welcome</h1>

    <div class="homepage">
      <p>Empathetic, Knowledgeable Personal Trainer + Nutrition Coach</p>

      <div class="homepage--section">
        <div class="mtg-container">
          <g-image alt="Keira's contact info in the style of a card from Magic the Gathering" src="~/assets/images/magic.png" />
        </div>

        <div class="premise">
          <h2>What We Do</h2>

          <p>Chaotic Good Fitness empowers people to improve themselves through movement and habit changes. We help clients feel confident in their own bodies and set them up for success in their health and aesthetic goals.</p>

          <h2>Our Story</h2>

          <p>Chaotic Good Fitness is the creation of Keira Harbison, a lifelong nerd and educator who discovered weightlifting in college as a way to lose weight. They live in Atlanta, GA with their partner and pupper. When not picking up heavy things and putting them back down, they are playing board games, watching Doctor Who, or reading. They have been an ACSM certified personal trainer since 2018 and are ready to get you where you want to be!</p>
        </div>
      </div>

      <div class="homepage--section homepage--section-second">
        <div class="premise">
          <h2>Certifications</h2>

          <p><b>Certifications:</b> ACSM, Girls Gone Strong, Silver Sneakers, and Precision Nutrition certified</p>

          <p><b>Client Specializations:</b> Beginners, Clients with ADHD, LGBTQ+ and Gender Affirming Training (but I work with lots of other people too!)</p>

          <p><b>Medical Condition Experience:</b> ADHD, Depression, Anxiety, Joint Pain, Chronic Pain, Autoimmune conditions</p>
        </div>

        <div class="homepage--photo">
          <g-image alt="A photo of Keira" src="~/assets/images/keira1.jpg" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return this.$seo({
      title: 'Tell Your Own Story',
      description: 'Chaotic Good Fitness offers client-focused, body positive personal training programs both virutally and in-person.',
      keywords: 'fitness, training, trainer, personal trainer, workout, work out, nutrition, coaching, atlanta',
      openGraph: {
        title: 'Chaotic Good Fitness',
        type: 'website',
      },
      link: [
        {
          rel: 'canonical',
          content: 'https://chaoticgoodfitness.com'
        }
      ]
    });
  },
};
</script>
