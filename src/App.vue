<template>
  <main class="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
    <div class="columns is-centered">
      <div class="column">
        <HeaderPage />
        <HomePage />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import HeaderPage from './components/HeaderPage.vue';
import HomePage from './components/HomePage.vue';

export default
  {
    components: {
        HeaderPage,
        HomePage
    }
  };
</script>

<style scoped>
</style>
