<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router';

import { GET_POSTER_URI } from '../utils/constants';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import { ref } from 'vue'

const router = useRouter();
const imageError = ref(false)



const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    movieData: {
        type: Object,
        default: undefined
    },
    loading: {
        type: Boolean,
        default: false
    },
    rank: {
        type: Boolean,
        default: false
    },
    mode: {
        type: String,
        default: ""
    }
});

const goDetail = (id) => {
    if (props.mode === 'tv') {
        router.push(`/tv/detail/${id}`)
        // router.push({ path: `/detail/${id}`, state: { mode: 'tv' } })
    } else {
        router.push(`/detail/${id}`)
        // router.push({ path: `/detail/${id}`, state: { mode: 'movie' } })
    }

}

const handleImageError = (event) => {
    console.error('이미지 로딩에 실패했습니다.');
    imageError.value = true;
}

</script>

<template>
    <!-- 작품 출력 -->
    <section>
        <div class="movie-wrap" :style="{ marginBottom: loading ? '80px' : '0px' }">
            <div class="title-wrap">
                <span class="title-text">{{ props.title }}</span>
                <!-- <button class="detail-btn">
                    <span class="detail-btn-text">
                        더보기
                    </span>
                    <i class="fa-solid fa-angle-right arrow-right-icon"></i>
                </button> -->
            </div>
            <div :class="['picture-area', loading ? 'picture-area-skeleton' : '']">
                <div v-if="loading" v-for=" index  in  5" :key="index" class="skeleton"></div>
                <swiper v-else :slides-per-view="5" :space-between="10" class="mySwiper">
                    <swiper-slide v-for="item, index in props.movieData" :key="item.id">
                        <div class="picture" @click="item.poster_path && goDetail(item.id)">
                            <img v-if="item.poster_path" :src="`${GET_POSTER_URI}${item.poster_path}`" :alt="item.title"
                                class="thumb-img">
                            <div v-else class="thumb-img" style="cursor: default; transform:scale(1)">
                                <div class="no-image-wrap">
                                    <div>
                                        <i class="fa-solid fa-file-image no-image"></i>
                                    </div>
                                    <span class="no-image-text">
                                        포스터 준비중입니다.
                                    </span>
                                </div>


                            </div>
                            <div v-if="rank" class="rank">{{ index + 1 }}</div>
                        </div>

                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>