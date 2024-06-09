<template>
  <Layout>
    <h1>Contact</h1>
    <p>If you're ready to set up an orientation call with me, please use the link below to schedule a chat!</p>

    <g-link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1tf0MD5LKltdpDy5QZfnjhS4WKJ3kUG6VLHPUudXxWYwqrT8ie5J5QWYLUm5aLU4bVlv73qCvs?gv=true" class="external button">Schedule orientation</g-link>

    <g-link href="http://eepurl.com/iDCoSo" class="external button">Sign up for the Newsletter</g-link>

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

  mounted() {
    var target = document.currentScript;
    window.addEventListener('load', function() {
      calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1tf0MD5LKltdpDy5QZfnjhS4WKJ3kUG6VLHPUudXxWYwqrT8ie5J5QWYLUm5aLU4bVlv73qCvs?gv=true',
        color: '#039BE5',
        label: "Book a Consultation",
        target,
      });
    });
  }
}
</script>
