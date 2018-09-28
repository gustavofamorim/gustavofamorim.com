<template lang="html">
  <div class="project">
    <img :src="image"/>
    <a  :href="url" rel="noopener" target="_blank">
      <h3>{{name}}</h3>
    </a>
  </div>
</template>

<script>
export default {
  props: [
    'name', 'image', 'url'
  ]
}
</script>

<style lang="scss" scoped>

.project {
  position: relative;
  margin-bottom: 15px;
  background-color: white;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);

  img {
    width: 100%;
    height: 100%;
    display: block;
    background-color: white;
  }

  a {
    margin: 0px;
    padding: 0px;
    position: absolute;
    bottom: 0px;
    background-color: rgba(#000000, .5);
    color: white;

    h3 {
      margin: 0px;
      padding: 3px;
    }
  }
}

</style>
