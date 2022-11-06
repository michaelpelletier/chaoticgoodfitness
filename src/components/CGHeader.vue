<template>
  <header class="header">
    <div class="logo-section">
      <g-link to="/">
        <g-image alt="Example image" src="~/assets/square.png" width="120" />
      </g-link>
      <div class="logo-text">
        <g-link to="/">
          <h1 class="title">Chaotic Good</h1>
          <h2 class="subtitle">Fitness</h2>
        </g-link>
        <nav class="nav--mobile">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
          <g-link class="nav__link" to="/programs/">Programs</g-link>
        </nav>
      </div>
    </div>

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