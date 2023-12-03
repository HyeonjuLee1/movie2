<script setup>
import MovieHeader from '@/components/MovieHeader.vue';
import TVDetailImage from '@/components/TVDetailImage.vue';
import TVDetailInfo from '@/components/TVDetailInfo.vue';
import MovieList from '@/components/MovieList.vue';
import ImagesList from '@/components/ImagesList.vue';

import { onBeforeMount } from 'vue'

import { useRoute } from 'vue-router';
import { useTvShowStore } from '@/stores/tvShow.js'

const tvStore = useTvShowStore();

const route = useRoute();
const { id } = route.params;
// history.state.mode === 'tv'
onBeforeMount(() => {

  tvStore.getTVShowDetail(id);
  tvStore.getTVTrailer(id);
  tvStore.getTVCastList(id);
  tvStore.getTVImages(id)
  tvStore.getSimilarTVList(id)

  window.scrollTo(0, 0);
});

</script>

<template>
  <MovieHeader />
  <main class="main">
    <div>
      <TVDetailImage :movieData="tvStore.tvShowInfo.value" />
      <div class="divider"></div>
    </div>
    <TVDetailInfo :movieData="tvStore.tvShowInfo.value" :crewData="tvStore.tvCrewData?.value" />
    <div class="divider"></div>
    <div class="similar-movie-wrap">
      <ImagesList :imageData="tvStore.tvBackdropsList.value" title="스틸컷" :loading="tvStore.isTVImagesLoading" />
    </div>
    <div class="divider"></div>
    <div class="similar-movie-wrap">
      <ImagesList :imageData="tvStore.tvPostersList.value" title="포스터" :loading="tvStore.isTVImagesLoading" poster />
    </div>
    <div class="divider"></div>
    <div class="similar-movie-wrap">
      <MovieList :movieData="tvStore.similarTVList.value" title="비슷한 영화 추천" :loading="tvStore.isTVSimilarLoading" />
    </div>

  </main>
</template>
