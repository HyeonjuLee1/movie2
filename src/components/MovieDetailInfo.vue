<script setup>
import { computed, defineProps } from 'vue'
import { GET_POSTER_URI } from '../utils/constants';
import moment from 'moment';
import { useMovieStore } from '@/stores/movie.js'

const movieStore = useMovieStore();

const props = defineProps({
    movieData: {
        type: Object,
        default: undefined
    },
    crewData: {
        type: Object,
        default: undefined
    },
});



const DirectorName = computed(() => {
    return (props.crewData?.crew.find(g => g.job === "Director" && g.department === "Directing"))?.name ?? '-';
})

const actors = computed(() => {
    const actorArr = props.crewData?.cast.slice(0, 3) ?? []
    return (actorArr.map(g => g.name).join(', '));
})

</script>

<template>
    <!-- 영화 정보 -->
    <div class="detail-wrap">
        <div class="detail-div">
            <!-- 영화포스터 -->
            <div :class="['thumb-box', movieStore.isDetailLoading ? 'skeleton' : '']">
                <img v-if="!movieStore.isDetailLoading" class="thumb-box-img"
                    :src="`${GET_POSTER_URI}${props.movieData?.poster_path}`" :alt="`${props.movieData?.title}`">
            </div>

            <div class="movie-info">
                <div :class="[movieStore.isDetailLoading ? 'skeleton-text' : '']"
                    :style="{ width: movieStore.isDetailLoading ? '200px' : 'auto' }">
                    <span class="movie-title-text">
                        {{ !movieStore.isDetailLoading ? props.movieData?.title : "" }}
                    </span>
                </div>

                <div :class="[movieStore.isDetailLoading ? 'skeleton-text' : '']"
                    :style="{ height: movieStore.isDetailLoading ? '100px' : 'auto' }">
                    <p class="text movie-info-text">
                        {{ !movieStore.isDetailLoading ? props.movieData?.overview : "" }}
                    </p>
                </div>

                <!-- 영화 정보 표 -->
                <table v-if="!movieStore.isDetailLoading" class="detail-info-table">
                    <colgroup>
                        <col style="width: 76px;">
                        <col style="width: auto;">
                    </colgroup>
                    <tr>
                        <th scope="row">개요</th>
                        <td>{{ props.movieData?.production_countries[0]?.name }}, {{
                            `${moment(props.movieData?.release_date).format("YYYY")}` }}</td>
                    </tr>
                    <tr>
                        <th scope="row">장르</th>
                        <td> {{ props.movieData?.genres.map(g => g.name).join(', ') }}</td>
                    </tr>
                    <tr>
                        <th scope="row">출연</th>
                        <td>{{ actors }}</td>
                    </tr>
                    <tr>
                        <th scope="row">감독</th>
                        <td> {{ DirectorName }}</td>
                    </tr>
                    <tr>
                        <th scope="row">등급</th>
                        <td>
                            <div class="movie-grade-all movie-grade-notall" v-if="props.movieData?.adult">
                                <div>
                                    <div class="movie-grade-all-text movie-grade-notall-text">청소년</div>
                                    <div class="movie-grade-all-text movie-grade-notall-text">관람불가</div>
                                </div>
                            </div>
                            <div class="movie-grade-all" v-else>
                                <div>
                                    <div class="movie-grade-all-text">전체</div>
                                    <div class="movie-grade-all-text">관람가</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                <div v-else class="skeleton-text" style="margin-top: 18px; height: 300px;"></div>
            </div>
        </div>
    </div>
</template>