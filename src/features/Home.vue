<template>
  <section class="presentation">
    <b-img class="image" src="/static/img/me.png"/>
    <h1 class="name">Gustavo Freitas de Amorim</h1>
    <p class="job">Sotware Developer at <b-link target="_blank" href="http://www.themartians.dk/">The Martians</b-link> and serverless enthusiast.</p>
    <p class="msg">The revolution can't be stopped! It's coming!</p>
    <p class="contact_h">Contact me at:</p>
    <div class="contact">
      <b-link class="contact_item" target="_blank" href="https://www.linkedin.com/in/gustavofamorim/"><fa :icon="['fab', 'linkedin']" size="2x"/></b-link>
      <b-link class="contact_item" target="_blank" href="https://github.com/gustavofamorim"><fa :icon="['fab', 'github']" size="2x"/></b-link>
      <b-link class="contact_item" target="_blank" href="https://www.instagram.com/gustavof.a/"><fa :icon="['fab', 'instagram']" size="2x"/></b-link>
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
  padding: 15px;
  width: 100vw;
  height: 100vh;
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

  p { margin-bottom: 5px; }
  h1 { margin-bottom: 5px; }

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
  }

  @media(min-width: 768px) {
    grid-template-areas:
      'image name'
      'image job'
      'image msg'
      'image contact_h'
      'image contact';
    grid-column-gap: 10px;

    .image {
      width: 200px;
    }
  }
}

</style>
