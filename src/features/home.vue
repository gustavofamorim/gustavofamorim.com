<template>
  <b-container>
    <b-row>
      <b-col md="3">
        <b-img class="image" src="/static/img/me.png"/>
      </b-col>
      <b-col>
          <h1>Gustavo Freitas de Amorim</h1>
          <p>Sotware Developer at <b-link target="_blank" href="http://www.themartians.dk/">The Martians</b-link> and serverless enthusiast.</p>
          <p>The revolution can't be stopped! It's coming!</p>
          <p>Contact me at: </p>
          <b-link target="_blank" href="https://www.linkedin.com/in/gustavofamorim/"><fa :icon="['fab', 'linkedin']" size="2x"/></b-link>
          <b-link target="_blank" href="https://github.com/gustavofamorim"><fa :icon="['fab', 'github']" size="2x"/></b-link>
          <b-link target="_blank" href="https://www.instagram.com/gustavof.a/"><fa :icon="['fab', 'instagram']" size="2x"/></b-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

.image {
  width: 100%;
  height: auto;
  border-radius: 100000px;
}

</style>
