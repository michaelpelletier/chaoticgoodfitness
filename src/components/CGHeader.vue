<template>
  <header class="header">
    <div class="logo-section">
      <g-link to="/" class="logo-link">
        <g-image alt="Chaotic Good Fitness Logo" src="~/assets/square.png" width="120" />
      </g-link>
      <div class="logo-text">
        <g-link to="/">
          <h1 class="title">Chaotic Good</h1>
        </g-link>

        <div class="subtitle-section">
          <g-link to="/">
            <h2 class="subtitle">Fitness</h2>
          </g-link>
          <nav class="nav">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/about/">About</g-link>
            <g-link class="nav__link" to="/services/">Services</g-link>
            <g-link class="nav__link" to="/contact/">Contact</g-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CGHeader',

};
</script>