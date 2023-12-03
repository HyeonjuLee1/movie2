import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axiosInst from "@/utils/axiosInst.js";

export const useTvShowStore = defineStore("tvShow", () => {
  const isDayTrendingTVLoading = ref(false);
  const isWeekTrendingTVLoading = ref(false);
  const isTVShowDetailLoading = ref(false);
  const isTVTrailerLoading = ref(false);
  const isTVCrewLoading = ref(false);
  const isTVImagesLoading = ref(false);
  const isTVSimilarLoading = ref(false);

  const dayTVTrending = reactive([]);
  const weekTVTrending = reactive([]);
  const tvShowInfo = reactive([]);
  const tvTrailerData = reactive([]);
  const tvCrewData = reactive([]);
  const tvBackdropsList = reactive([]);
  const tvPostersList = reactive([]);
  const similarTVList = reactive([]);

  const getAPI = async (url) => {
    try {
      const data = await axiosInst.get(url);
      return data;
    } catch (error) {
      alert(error.message);
    }
  };

  // 오늘 TV 트렌딩 조회 api
  const getDayTVTrending = async () => {
    isDayTrendingTVLoading.value = true;
    try {
      const data = await getAPI(
        "/trending/tv/day?include_adult=true&language=ko"
      );
      // console.log("dayTrendingTV", data.data.results);
      dayTVTrending.value = data.data.results;
    } catch (error) {
      console.error("dayTrendingTV Error data:", error);
    } finally {
      isDayTrendingTVLoading.value = false;
    }
  };

  // 이번주 TV 트렌딩 조회 api
  const getWeekTVTrending = async () => {
    isWeekTrendingTVLoading.value = true;
    try {
      const data = await getAPI(
        "/trending/tv/week?include_adult=true&language=ko"
      );
      // console.log("weekTVTrending", data.data.results);
      weekTVTrending.value = data.data?.results;
    } catch (error) {
      console.error("weekTVTrending Error data:", error);
    } finally {
      isWeekTrendingTVLoading.value = false;
    }
  };

  // TVshow 상세 api
  const getTVShowDetail = async (id) => {
    isTVShowDetailLoading.value = true;
    try {
      const data = await getAPI(`/tv/${id}?language=ko`);
      // console.log("tvShowInfo", data.data);
      tvShowInfo.value = data.data;
    } catch (error) {
      console.error("tvShowInfo Error data:", error);
    } finally {
      isTVShowDetailLoading.value = false;
    }
  };

  // 예고편 get api
  const getTVTrailer = async (id) => {
    isTVTrailerLoading.value = true;
    try {
      const data = await getAPI(`/tv/${id}/videos?language=ko`);
      // console.log("Trailer", data.data);
      tvTrailerData.value = data.data;
    } catch (error) {
      console.error("Trailer Error data:", error);
    } finally {
      isTVTrailerLoading.value = false;
    }
  };

  // TV 출연, 감독 리스트 api
  const getTVCastList = async (id) => {
    isTVCrewLoading.value = true;
    try {
      const data = await getAPI(`/tv/${id}/credits?language=ko`);
      // console.log("tvCrewData???", data.data);
      tvCrewData.value = data.data;
    } catch (error) {
      console.error("tvCrewData Error data:", error);
    } finally {
      isTVCrewLoading.value = false;
    }
  };

  // 포스터, 스틸컷 api
  const getTVImages = async (id) => {
    isTVImagesLoading.value = true;
    try {
      const data = await getAPI(`/tv/${id}/images?page=1`);
      // console.log("ImagesdMovie", data.data);
      tvBackdropsList.value = data.data.backdrops;
      tvPostersList.value = data.data.posters;
    } catch (error) {
      console.error("ImagesdMovie Error data:", error);
    } finally {
      isTVImagesLoading.value = false;
    }
  };

  // 비슷한 리스트 api
  const getSimilarTVList = async (id) => {
    isTVSimilarLoading.value = true;
    try {
      const data = await getAPI(`/tv/${id}/similar?language=ko&page=1`);
      // console.log("similarMovieList", data.data?.results);
      similarTVList.value = data.data?.results;
    } catch (error) {
      console.error("similarMovieList Error data:", error);
    } finally {
      isTVSimilarLoading.value = false;
    }
  };

  return {
    isDayTrendingTVLoading,
    isWeekTrendingTVLoading,
    isTVShowDetailLoading,
    isTVTrailerLoading,
    dayTVTrending,
    weekTVTrending,
    isTVCrewLoading,
    isTVImagesLoading,
    isTVSimilarLoading,
    tvShowInfo,
    tvTrailerData,
    tvCrewData,
    tvBackdropsList,
    tvPostersList,
    similarTVList,
    getDayTVTrending,
    getWeekTVTrending,
    getTVShowDetail,
    getTVTrailer,
    getTVCastList,
    getTVImages,
    getSimilarTVList,
  };
});
