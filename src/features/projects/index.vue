<template lang="html">
  <div class="projects">
    <router-link class="go-home" :to="{ name: 'Home' }"><fa icon="arrow-left" size="2x"/></router-link>
    <h1>My Projects</h1>
    <p>Here you can some projects I developed before. Some links are a preview of content developed.</p>
    <div class="projects-list">
      <project v-for="project in projects" :key="project.image" :name="project.name" :image="project.image" :url="project.url"/>
    </div>
  </div>
</template>

<script>

import Project from './components/project.vue'

export default {
  components: {
    Project
  },
  data: () => ({
    projects: [
      {
        name: 'Hero Feedback CMS',
        image: '/static/img/projects/hero_feedback.png',
        url: 'https://web.govster.com'
      },
      {
        name: 'Maanaim Guarapari Website and CMS',
        image: '/static/img/projects/maanaim_guarapari.pjpg',
        url: 'https://maanaimguarapari.com'
      },
      {
        name: 'Escola Megabots',
        image: '/static/img/projects/megabots.pjpg',
        url: 'https://escolamegabots.com'
      },
      {
        name: 'Grupo Castanheira e-commerce',
        image: '/static/img/projects/castanheira_ecommerce.pjpg',
        url: 'https://castanheira.gustavoamorim.xyz'
      },
      {
        name: 'Aioh',
        image: '/static/img/projects/aioh.png',
        url: 'https://aioh.gustavoamorim.xyz/'
      },
      {
        name: 'I am an Asteroid',
        image: '/static/img/projects/i_am_an_asteroid.png',
        url: 'https://gustavofamorim.github.io/i_am_an_asteroid/'
      },
      {
        name: 'Free Hand Spinner',
        image: '/static/img/projects/hand_spinner.png',
        url: 'https://gustavofamorim.github.io/freehandspinner/'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>

.projects {
  margin: 50px auto 0px auto;
  max-width: 1024px;

  h1 {
    margin-left: 10px;
  }

  p {
    margin-left: 10px;
  }

  .go-home {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #2c3e50;
    margin-right: 10px;
  }

  .projects-list {
    padding: 10px;
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    .project {
      break-inside: avoid;
    }
  }
}

</style>
