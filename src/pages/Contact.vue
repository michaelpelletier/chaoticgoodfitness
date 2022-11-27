<template>
  <Layout>
    <h1>Contact</h1>
    <p>If you're ready to set up an orientation call with me, please use my <g-link href="https://calendly.com/kjharbison/new-client-orientation">Calendly</g-link> to schedule a chat!</p>
    <p>Otherwise if you have any questions, please feel free to contact me:</p>
    <p><b>Phone number:</b> 631-379-7074</p>
    <p><b>Email:</b> keira.harbison@gmail.com</p>
    <p><b>Location:</b> Atlanta, GA</p>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return this.$seo({
      title: 'Contact',
      description: 'Chaotic Good Fitness offers client-focused, body positive personal training programs both virutally and in-person.',
      keywords: 'fitness, training, trainer, personal trainer, workout, work out, nutrition, coaching, atlanta',
      openGraph: {
        title: 'Chaotic Good Fitness',
        type: 'website',
      },
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
