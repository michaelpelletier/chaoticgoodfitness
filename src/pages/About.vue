<template>
  <Layout>
    <h1>About us</h1>

    <h2>Why Chaotic Good?</h2>

    <div class="aside">Examples of Chaotic Good characters include Robin Hood, Han Solo, Mary Poppins, Toph Beifong, Zorro, Mulan, the Teenage Mutant Ninja Turtles, Indiana Jones, and The Doctor.</div>

    <p>In Dungeons and Dragons, Chaotic Good is a character alignment that reflects one whose heart is pure, but who does not take the law at face value. They question authority and forge their own path based on their own value system and morals. They value freedom and individuality over social norms and rules.</p>

    <p>CG Fitness views fitness and health in the same way. We are client-centered and body positive. We focus on the individual client’s needs and goals without trying to fit them into the standards set up by the fitness industry. Each client has a unique background, goal, and body that deserves to be valued and considered when working together. We don’t expect all of our clients to look, act, feel, or need the same thing, so we don’t use a pre-packaged, uniform program.</p>

    <div class="about-photos">
      <div class="about-photo">
        <g-image alt="A photo of Keira stretching" src="~/assets/images/keira2.jpg" />
      </div>
      <div class="about-photo">
        <g-image alt="A photo of Keira working out their lower body" src="~/assets/images/keira3.jpg" />
      </div>
      <div class="about-photo">
        <g-image alt="A photo of Keira working out their upper body" src="~/assets/images/keira4.jpg" />
      </div>
    </div>

    <p>We focus on what’s right for you, whether or not it looks like what magazines tell you you need to look like. Some clients want weight loss programs, but some join us for pain management and reduction. Others have worked with us for pre-surgical body change needs. The owner does this for stress management! No matter why you come to us, we will find ways to help you level up.</p>

    <p>There is no one size fits all magic answer to fitness and health goals and there is no one size fits all body shape. There is no quick, easy route to take. Making health improvements is hard work, but we are here to guide you through the journey. CG Fitness is about making improvements at your pace for you. </p>

    <p>Now, let’s pull out your character sheet and roll for initiative!</p>

  </Layout>
</template>

<script>
import seo from '../data/seo';

export default {
  metaInfo () {
    return this.$seo({
      title: 'About',
      description: seo.description,
      keywords: seo.keywords.join(', '),
      openGraph: seo.openGraph,
      link: [
        {
          rel: 'canonical',
          content: 'https://chaoticgoodfitness.com/about/'
        }
      ]
    });
  },
}
</script>
