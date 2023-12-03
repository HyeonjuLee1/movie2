<script setup>
import { RouterView } from 'vue-router'
// import { useMovieStore } from '@/stores/movie.js'
// const movieStore = useMovieStore();
// movieStore.init();
// console.log(movieStore.movieArr);
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/detail/:id">Detail</RouterLink>
    <RouterLink to="/search/:searchkey">Search</RouterLink>
  </nav>
  <RouterView :key="$route.fullPath" />
</template>

<style scoped>
nav {
  display: none;
}
</style>
