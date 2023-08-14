<template>
  <Layout>
    <h1>Contact</h1>
    <p>If you're ready to set up an orientation call with me, please use my <g-link href="https://calendly.com/kjharbison/new-client-orientation" class="external">Calendly</g-link> to schedule a chat!</p>
    <p>Otherwise if you have any questions, please feel free to contact me:</p>
    <p><b>Phone number:</b> (631) 379-7074</p>
    <p><b>Email:</b> info@chaoticgoodfitness.com</p>
    <p><b>Location:</b> Atlanta, GA</p>
  </Layout>
</template>

<script>
import seo from '../data/seo';

export default {
  metaInfo () {
    return this.$seo({
      title: 'Contact',
      description: seo.description,
      keywords: seo.keywords.join(', '),
      openGraph: seo.openGraph,
      link: [
        {
          rel: 'canonical',
          content: 'https://chaoticgoodfitness.com/contact/'
        }
      ]
    });
  },
}
</script>
