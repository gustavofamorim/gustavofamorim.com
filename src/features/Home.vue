<template>
  <section class="presentation">
    <img class="image" src="/static/img/me.jpg" alt="Me"/>
    <h1 class="name">Gustavo Freitas de Amorim</h1>
    <p class="job">Sotware Developer at <a target="_blank" rel="noopener" href="http://www.themartians.dk/">The Martians</a> and serverless enthusiast.</p>
    <p class="msg">The revolution can't be stopped! It's coming!</p>
    <p class="contact_h">Contact me at:</p>
    <div class="contact">
      <a class="contact_item linkedin" target="_blank" rel="noopener" href="https://www.linkedin.com/in/gustavofamorim/"><fa :icon="['fab', 'linkedin']" size="2x"/></a>
      <a class="contact_item github" target="_blank" rel="noopener" href="https://github.com/gustavofamorim"><fa :icon="['fab', 'github']" size="2x"/></a>
      <a class="contact_item instagram" target="_blank" rel="noopener" href="https://www.instagram.com/gustavof.a/"><fa :icon="['fab', 'instagram']" size="2x"/></a>

      <svg width="0" height="0">
        <radialGradient id="rg" r="150%" cx="30%" cy="107%">
          <stop stop-color="#fdf497" offset="0" />
          <stop stop-color="#fdf497" offset="0.05" />
          <stop stop-color="#fd5949" offset="0.45" />
          <stop stop-color="#d6249f" offset="0.6" />
          <stop stop-color="#285AEB" offset="0.9" />
        </radialGradient>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>

.presentation {
  padding: 0px 15px;
  height: 100vh;
  width: calc(100vw - 30px);

  display: grid;
  grid-template-areas:
    'image'
    'name'
    'job'
    'msg'
    'contact_h'
    'contact';
  grid-row-gap: 5px;
  align-content: center;
  justify-content: center;

  .image {
    margin: auto;
    grid-area: image;
    width: 70vw;
    height: auto;
    border-radius: 100000px;
  }

  .name { grid-area: name; }
  .job { grid-area: job; }
  .msg { grid-area: msg; }
  .contact_h { grid-area: contact_h; }

  .contact {
    grid-area: contact;

    .contact_item { display: inline-block; }
    .linkedin { color: #2E5FB2; }
    .github { color: #000; }
    .instagram svg * { fill: url(#rg); }
  }

  @media(min-width: 768px) {
    grid-template-areas:
      'image name'
      'image job'
      'image msg'
      'image contact_h'
      'image contact';
    grid-column-gap: 10px;

    padding: 0px;
    width: calc(100vw - 30px);

    .image {
      width: 200px;
    }
  }
}

</style>
