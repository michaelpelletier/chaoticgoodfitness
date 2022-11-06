<template>
  <header class="header">
    <g-link to="/" class="logo-section">
      <g-image alt="Example image" src="~/assets/square.png" width="120" />
      <div class="logo-text">
        <h1 class="title">Chaotic Good</h1>
        <h2 class="subtitle">Fitness</h2>
        <nav class="nav--mobile">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
          <g-link class="nav__link" to="/programs/">Programs</g-link>
        </nav>
      </div>
    </g-link>

    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/about/">About</g-link>
      <g-link class="nav__link" to="/programs/">Programs</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'CGHeader',

};
</script>