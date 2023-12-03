<script setup>
import MovieHeader from '@/components/MovieHeader.vue';
import MovieBanner from '@/components/MovieBanner.vue';
import MovieList from '@/components/MovieList.vue';

import { onBeforeMount } from 'vue'

import { useMovieStore } from '@/stores/movie.js'
import { useTvShowStore } from '@/stores/tvShow.js'

const movieStore = useMovieStore();
const tvStore = useTvShowStore();

onBeforeMount(() => {
  movieStore.getDayTrending()
  movieStore.getWeekTrending();
  movieStore.getPopular()
  movieStore.getUpcoming();
  tvStore.getDayTVTrending();
  tvStore.getWeekTVTrending();
  window.scrollTo(0, 0);
});

</script>



<template>
  <MovieHeader />
  <main class="main">
    <div>
      <MovieBanner />
      <MovieList :movieData="movieStore.dayTrending.value" title="오늘의 영화 TOP 20"
        :loading="movieStore.isDayTrendingLoading" :rank="true" />
      <MovieList :movieData="movieStore.weekTrending.value" title="이번 주 영화 TOP 20"
        :loading="movieStore.isWeekTrendingLoading" :rank="true" />
      <MovieList :movieData="movieStore.popular.value" title="실시간 인기 영화" :loading="movieStore.isPopularLoading" />
      <MovieList :movieData="movieStore.upcoming.value" title="두근두근 Coming Soon"
        :loading="movieStore.isUpcomingLoading" />
      <MovieList :movieData="tvStore.dayTVTrending.value" title="오늘의 TV Show TOP 20"
        :loading="useTvShowStore.isDayTrendingTVLoading" :rank="true" mode="tv" />
      <MovieList :movieData="tvStore.weekTVTrending.value" title="이번 주 TV Show TOP 20"
        :loading="useTvShowStore.isWeekTrendingTVLoading" :rank="true" mode="tv" />
    </div>
  </main>
</template>
