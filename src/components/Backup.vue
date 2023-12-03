
<script setup>
import { ref } from 'vue'
import SwiperClass, { Pagination, Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const items = ref([
    { id: 1, imageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231018_banner_175424.jpg", alt: "영화_스즈메의 문단속(뒤)" },
    { id: 2, imageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231017_banner_174019.jpg", alt: "거래" },
    { id: 3, imageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20230830_banner_165858.jpg", alt: "애니_주술회전2_v2" },
    { id: 4, imageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231018_banner_172020.jpg", alt: "S_국민사형투표" },
    { id: 5, imageUrl: "https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2023/20231023_banner_104208.jpg", alt: "영화_바닷마을 다이어리" },
]);

// const swiperOptions = ref({
//     spaceBetween: 30,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
// });


const modules = [Pagination, Autoplay, Navigation]

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
    <section>
        <swiper class="banner-wrap" @swiper="onSwiper" :spaceBetween=20 :modules="modules" :slides-per-view="3"
            :navigation="true" :pagination="{ el: '.swiper-pagination', clickable: true }" :loop="true"
            :centeredSlides="true" :autoplay="{ delay: 3500, disableOnInteraction: false }">
            <swiper-slide v-for="item in items" :key="item.id">
                <img :src="item.imageUrl" :alt="item.alt" class="big-banner">
            </swiper-slide>
            <div class="main-nav">
                <button class="autoplay-icon-btn" @click="handleAutoplay">
                    <i :class="['fa-solid', 'fa-xl', 'autoplay-icon', isAutoplay ? 'fa-pause' : 'fa-play']"></i>
                </button>
                <div class="swiper-pagination"></div>
            </div>
        </swiper>

    </section>
</template>

<style>
/* 슬라이더 스타일 */
.swiper-slide {
    width: 1120px !important;
}

/* 네비게이션 */
.swiper-button-next {
    top: 46%;
    right: 120px;
}

.swiper-button-prev {
    top: 46%;
    left: 120px;
}

.swiper-button-next:after,
.swiper-button-prev:after {
    color: #a5a5a5;
    font-size: 75px;
}

.swiper-button-next:hover:after,
.swiper-button-prev:hover:after {
    color: white;
}


/* 페이지네이션 */
.main-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 528px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px
}

.swiper-pagination {
    position: static !important;
    width: auto;
    font-size: 0;
    vertical-align: middle;
}

.autoplay-icon-btn {
    width: 34px;
    vertical-align: middle;
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin-right: 5px;
}

.autoplay-icon {
    display: flex;
    align-items: center;
    justify-self: center;
    color: white;

}

.swiper-pagination-bullet {
    background: #e8e8e8;
    width: 10px;
    height: 10px;
}

.swiper-pagination-bullet-active {
    background: white;
}
</style>