<template>
  <main class="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
    <div class="columns is-centered">
      <div class="column">
        <HeaderPage />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import HeaderPage from './components/HeaderPage.vue';

export default
  {
    components: {
        HeaderPage
    }
  };
</script>

<style scoped>
</style>
