<script setup>

import { GET_POSTER_URI, GET_BACKDROPS_URI } from '../utils/constants';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import { ref } from 'vue'


const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    imageData: {
        type: Object,
        default: undefined
    },
    loading: {
        type: Boolean,
        default: false
    },
    poster: {
        type: Boolean,
        default: false
    },
});

</script>

<template>
    <section>
        <div class="movie-wrap">
            <div class="title-wrap">
                <span class="title-text">{{ props.title }}</span>

            </div>
            <div :class="['picture-area', loading ? 'picture-area-skeleton' : '']"
                :style="{ overflow: poster ? '' : 'hidden' }">
                <div v-if="loading" v-for=" index in 5" :key="index"
                    :class="[poster ? 'skeleton' : 'backdrop-skeleton']">
                </div>
                <swiper v-else :slides-per-view="poster ? 5 : 2" :space-between="poster ? 10 : 20" class="mySwiper">
                    <swiper-slide v-for="item, index in props.imageData" :key="item.id">
                        <div class="picture" style="margin-bottom: 0px;">
                            <img :src="`${poster ? GET_POSTER_URI : GET_BACKDROPS_URI}${item.file_path}`"
                                :alt="item.title" :class="[poster ? 'poster-img' : 'backdrop-img']">
                        </div>

                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>