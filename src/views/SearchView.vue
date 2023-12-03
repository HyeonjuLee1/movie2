<script setup>
import MovieHeader from '@/components/MovieHeader.vue';
import MovieList from '@/components/MovieList.vue';
import EmptyMovieList from '@/components/EmptyMovieList.vue';
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';

import { useMovieStore } from '@/stores/movie.js'

const movieStore = useMovieStore();

const route = useRoute();
const { searchkey } = route.params

onBeforeMount(() => {
  movieStore.getSearchMovie(searchkey)
});

</script>



<template>
  <MovieHeader />
  <main class="main search-div">

    <MovieList v-if="movieStore.foundMovie.value?.length > 0" :movieData="movieStore.foundMovie.value"
      :title="`${searchkey} 검색결과`" :loading="movieStore.isSearchLoading" />
    <EmptyMovieList v-else :title="`${searchkey} 검색결과`" />


  </main>
</template>
