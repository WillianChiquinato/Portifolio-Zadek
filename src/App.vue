<template>
  <main class="is-flex is-flex-direction-column">
    <LoadingScreen :visible="loading" />
    <div v-if="!loading">
      <HeaderPage />
      <HomePage />
      <HardSoftSkills />
      <Projetos />
      <FooterProject />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoadingScreen from './components/LoadingScreen.vue';

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
    FooterProject,

    LoadingScreen
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
});
</script>
