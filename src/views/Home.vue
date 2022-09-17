<template>
  <section class="presentation">
    <img class="image" src="/img/me.jpg" alt="Me"/>
    <h1 class="name">Gustavo Amorim</h1>
    <p class="job">Software Development Engineer at <a target="_blank" rel="noopener" href="https://aws.amazon.com/">Amazon Web Services</a>.</p>
    <div class="msg">
      <p>Always learning and sharing my knowledge with my teammates.</p>
    </div>
    <p class="contact_h">Contact me at:</p>
    <div class="contact">
      <a class="contact_item email" href="mailto:gustavofreitasamorim@gmail.com"><fa icon="at" size="2x"/></a>
      <a class="contact_item linkedin" target="_blank" rel="noopener" href="https://www.linkedin.com/in/gustavofamorim/"><fa :icon="['fab', 'linkedin']" size="2x"/></a>
      <a class="contact_item github" target="_blank" rel="noopener" href="https://github.com/gustavofamorim"><fa :icon="['fab', 'github']" size="2x"/></a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
$elements-max-width: 530px;

.presentation {
  padding: 0px 15px;
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

  .image {
    margin: auto;
    grid-area: image;
    width: 100%;
    max-width: $elements-max-width;
    height: auto;
    border-radius: 100000px;
  }

  .name { grid-area: name; }
  .job { grid-area: job; }
  .msg {
    grid-area: msg;
    max-width: $elements-max-width;
  }
  .contact_h { grid-area: contact_h; }

  .contact {
    grid-area: contact;

    .contact_item {
      display: inline-block;
      margin-right: 5px;
    }

    .github { color: #24292e; }
    .linkedin { color: #0a66c2; }
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

    .image {
      width: 200px;
    }
  }
}
</style>
