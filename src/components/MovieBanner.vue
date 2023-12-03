
<script setup>
import { ref } from 'vue'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
const modules = [Pagination, Navigation, Autoplay]

const items = ref([
    { id: 1, imageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231122_banner_103335.jpg", textImageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231122_103419903.png", alt: "마야3" },
    { id: 2, imageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20230724_banner_152232.jpg", textImageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231117_182632267.png", alt: "연인" },
    { id: 3, imageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231122_banner_135217.jpg", textImageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231122_135317692.png", alt: "오늘도 사랑스럽개" },
    { id: 4, imageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231113_banner_182902.jpg", textImageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231113_182943768.png", alt: "wavvie영화_그때 그사람들" },
    { id: 5, imageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231115_banner_185146.jpg", textImageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/imgbuild_20231115_185317476.png", alt: "방송_제철 요리해 주는 옆집 누나 시즌2" },
]);

const isAutoplay = ref(true);
let swiperInstance = ref(null);


const onSwiper = (swiper) => {
    swiperInstance = swiper;
};

const handleAutoplay = () => {
    isAutoplay.value = !isAutoplay.value;
    if (swiperInstance) {
        if (isAutoplay.value) {
            swiperInstance.autoplay.start();
        } else {
            swiperInstance.autoplay.stop();
        }
    }
};


</script>



<template>
    <swiper ref="{swiperRef}" @swiper="onSwiper" :loop="true" slidesPerView="auto" :centeredSlides="true" :spaceBetween="30"
        :pagination="{ el: '.swiper-pagination', clickable: true }" :navigation="true" :modules="modules"
        :autoplay="{ delay: 3500, disableOnInteraction: false }" class="banner-wrap">
        <swiper-slide v-for="item in items" :key="item.id">

            <div>
                <img :src="item.imageUrl" :alt="item.alt" class="big-banner" style="position: relative;">


                <img :src="item.textImageUrl" :alt="item.alt" class="big-banner" style="position: absolute; top: 0; left:0">
            </div>

        </swiper-slide>

        <div class="main-nav">
            <button class="autoplay-icon-btn" @click="handleAutoplay">
                <i :class="['fa-solid', 'fa-xl', 'autoplay-icon', isAutoplay ? 'fa-pause' : 'fa-play']"></i>
            </button>
            <div class="swiper-pagination"></div>
        </div>
    </swiper>
</template>

<style></style>