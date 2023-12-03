<script setup>
import MovieHeader from '@/components/MovieHeader.vue';
import MovieDetailImage from '@/components/MovieDetailImage.vue';
import MovieDetailInfo from '@/components/MovieDetailInfo.vue';
import MovieList from '@/components/MovieList.vue';
import ImagesList from '@/components/ImagesList.vue';

import { onBeforeMount, ref } from 'vue'

import { useRoute } from 'vue-router';
import { useMovieStore } from '@/stores/movie.js'
import { useTvShowStore } from '@/stores/tvShow.js'

const movieStore = useMovieStore();


const route = useRoute();
const { id } = route.params;
const mode = ref('');

// history.state.mode === 'tv'
onBeforeMount(() => {

  movieStore.getMovieDetail(id);
  movieStore.getTrailer(id);
  movieStore.getMovieCastList(id);
  movieStore.getSimilarMovieList(id);
  movieStore.getMovieImages(id);


  window.scrollTo(0, 0);
});


</script>

<template>
  <MovieHeader />
  <main class="main">
    <div>
      <MovieDetailImage :movieData="movieStore.movieInfo.value" />
      <div class="divider"></div>
    </div>
    <MovieDetailInfo :movieData="movieStore.movieInfo.value" :crewData="movieStore.crewData.value" />
    <div class="divider"></div>
    <div class="similar-movie-wrap">
      <ImagesList :imageData="movieStore.movieBackdropsList.value" title="스틸컷" :loading="movieStore.isImagesLoading" />
    </div>
    <div class="divider"></div>
    <div class="similar-movie-wrap">
      <ImagesList :imageData="movieStore.moviePostersList.value" title="포스터" :loading="movieStore.isImagesLoading"
        poster />
    </div>
    <div class="divider"></div>
    <div class="similar-movie-wrap">
      <MovieList :movieData="movieStore.similarMovieList.value" title="비슷한 영화 추천"
        :loading="movieStore.isSimilarLoading" />
    </div>

  </main>
</template>
