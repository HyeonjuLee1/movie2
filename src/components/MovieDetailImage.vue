<script setup>
import { computed } from 'vue'
import { GET_BACKPOSTER_URI } from '../utils/constants';
import moment from 'moment';
import { ref } from 'vue'

import { useMovieStore } from '@/stores/movie.js'

const movieStore = useMovieStore();

const props = defineProps({
    movieData: {
        type: Object,
        default: undefined
    },
});

const openVideoModal = ref(false);

const trailerVideoKey = computed(() => {
    return (movieStore.videoData.value?.results.find(r => r.type === "Trailer"))?.key;
})
</script>

<template>
    <section class="player-contents">
        <div v-if="!movieStore.isDetailLoading" class="player-bg-image"
            :style="{ backgroundImage: `linear-gradient(to bottom left,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(${GET_BACKPOSTER_URI}${props.movieData?.backdrop_path})` }">
            <button class="trailerplay-icon-btn" @click="openVideoModal = true">
                <i :class="['fa-solid', 'fa-2xl', 'fa-circle-play', 'trailer-play-icon']"></i>
            </button>
            <div v-if="openVideoModal" class="trailer-modal-backdrop">
                <transition name="pop" appear>
                    <div class="trailer-modal">
                        <div class="trailer-modal-header">
                            <span class="trailer-modal-text"> Play Trailer</span>
                            <button class="trailerplay-icon-btn" @click="openVideoModal = false"><i
                                    :class="['fa-solid', 'fa-xl', 'fa-xmark', 'trailer-play-icon', 'close-icon']"></i></button>
                        </div>

                        <div class="trailer-modal-content">
                            <iframe v-if="trailerVideoKey"
                                :src="'https://www.youtube.com/embed/' + `${trailerVideoKey}`" frameborder="0"
                                allowfullscreen class="trailer-modal-iframe"></iframe>
                            <div v-else class="trailer-modal-text trailer-modal-info-text">
                                예고편이 존재하지 않습니다.
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

            <div class="movie-detail-area">
                <div class="movie-data">

                    <span class="text"> {{ moment(props.movieData?.release_date).format("YYYY.MM.DD") }}</span>

                    <div class="dot">
                    </div>
                    <span class="text">{{ `${props.movieData?.runtime}분` }}</span>

                    <div class="dot"></div>
                    <span class="text">{{ props.movieData?.genres.map(g => g.name).join(', ') }}</span>

                    <i class="fa-solid fa-star star"></i>
                    <span class="text">{{ `평점 : ${(props.movieData?.vote_average).toFixed(1)}` }}</span>
                </div>

                <span class="text">{{ props.movieData?.tagline }}</span>
            </div>
        </div>
        <div v-else class="player-bg-image skeleton"></div>
    </section>
</template>