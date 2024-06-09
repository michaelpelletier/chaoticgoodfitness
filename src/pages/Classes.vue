<template>
  <Layout>
    <h1>Classes</h1>

    <h2>Crafting Longevity: A Crafter’s Guide to Fitness</h2>

		<p>As a crafter, you want to be able to keep enjoying your hobby forever. A lot of us craft for hours on end and find ourselves with back pain, hand cramping, neck pain, and more. This class is a guide for how to keep yourself in tip top crafting shape for as long as possible. You’ll learn what the physical concerns of crafting are and how best to stay crafty long term. This class is focused on learning to improve fine motor skills, mobility, posture, and preventing injury.</p>

    <h2>Health & Fitness While Trans: An Exercise & Nutrition Q&A for the questions the fitness industry refuses to answer</h2>

		<p>The fitness industry is generally not friendly to our community and there is simultaneously too much and not enough information about creating a health program for yourself that takes your unique needs into account. We’re going to sit down together and talk through some of the common questions and ways to get started, plus I’m there to answer any specific questions you might have. If I don’t have the answer, I can lead you in the right direction. I want you to leave this class feeling safe and confident about where to go with your health goals.</p>

    <h2>Dino Nuggies and Beyond: Nutrition for Neurodivergents</h2>

		<p>Eating “healthy” is hard for everyone, but being on the neurodivergent spectrum tends to add extra obstacles to eating for your health goals. This class is a way for you to hear from a personal trainer that isn’t just going to say “eat veggies” or “just do the thing”. I know that doesn’t work all the time. We’re going to talk about ways to work with you as you are and find ways to rewrite the nutrition rules to be more inclusive and compassionate. We’ll brainstorm ideas that will be more impactful than what you usually see in the health industry.</p>
  </Layout>
</template>

<script>
import seo from '../data/seo';

export default {
  metaInfo () {
    return this.$seo({
      title: 'Classes',
      description: seo.description,
      keywords: seo.keywords.join(', '),
      openGraph: seo.openGraph,
      link: [
        {
          rel: 'canonical',
          content: 'https://chaoticgoodfitness.com/classes/'
        }
      ]
    });
  },
}
</script>
