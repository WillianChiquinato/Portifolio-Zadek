<template>
  <main class="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
    <div class="columns is-centered">
      <div class="column">
        <HeaderPage />
        <HomePage />
        <HardSoftSkills />
        <Projetos />
        <Footer />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Footer from './components/Footer.vue';
import HardSoftSkills from './components/HardSoftSkills.vue';
import HeaderPage from './components/HeaderPage.vue';
import HomePage from './components/HomePage.vue';
import Projetos from './components/Projetos.vue';

export default
  {
    components: {
      HeaderPage,
      HomePage,
      HardSoftSkills,
      Projetos,
      Footer
    }
  };
</script>

<style scoped>
</style>
