<template>
  <main class="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
    <div class="columns is-centered">
      <div class="column">
        <HeaderPage />
        <HomePage />
        <HardSoftSkills />
        <Projetos />
        <FooterProject />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import FooterProject from './components/Footer.vue';
import HardSoftSkills from './components/HardSoftSkills.vue';
import HeaderPage from './components/HeaderPage.vue';
import HomePage from './components/HomePage.vue';
import Projetos from './components/Projetos.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderPage,
    HomePage,
    HardSoftSkills,
    Projetos,
    FooterProject
  }
});
</script>

<style scoped></style>
