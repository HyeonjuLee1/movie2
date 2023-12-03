import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axiosInst from "@/utils/axiosInst.js";

export const useMovieStore = defineStore("movie", () => {
  const isDayTrendingLoading = ref(false);
  const isWeekTrendingLoading = ref(false);
  const isPopularLoading = ref(false);
  const isUpcomingLoading = ref(false);

  const isSimilarLoading = ref(false);
  const isDetailLoading = ref(false);
  const isCrewLoading = ref(false);

  const isTrailerLoading = ref(false);
  const isImagesLoading = ref(false);
  const isSearchLoading = ref(false);

  const dayTrending = reactive([]);
  const weekTrending = reactive([]);
  const popular = reactive([]);
  const upcoming = reactive([]);
  const movieInfo = reactive([]);
  const crewData = reactive([]);

  const similarMovieList = reactive([]);
  const movieBackdropsList = reactive([]);
  const moviePostersList = reactive([]);

  const videoData = reactive([]);
  const foundMovie = reactive([]);

  const getAPI = async (url) => {
    try {
      const data = await axiosInst.get(url);
      return data;
    } catch (error) {
      alert(error.message);
    }
  };

  // 오늘 트렌딩 조회 api
  const getDayTrending = async () => {
    isDayTrendingLoading.value = true;
    try {
      const data = await getAPI(
        "/trending/movie/day?include_adult=true&language=ko"
      );
      // console.log("dayTrending", data.data.results);
      dayTrending.value = data.data.results;
    } catch (error) {
      console.error("dayTrending Error data:", error);
    } finally {
      isDayTrendingLoading.value = false;
    }
  };

  // 이번주 트렌딩 조회 api
  const getWeekTrending = async () => {
    isWeekTrendingLoading.value = true;
    try {
      const data = await getAPI(
        "/trending/movie/week?include_adult=true&language=ko"
      );
      // console.log("datadata", data);
      // console.log("weekTrending", data.data?.results);
      weekTrending.value = data.data?.results;
    } catch (error) {
      console.error("weekTrending Error data:", error);
    } finally {
      isWeekTrendingLoading.value = false;
    }
  };

  // 인기영화 조회 api
  const getPopular = async () => {
    isPopularLoading.value = true;
    try {
      const data = await getAPI(
        "/movie/popular?include_adult=true&language=ko&page=1"
      );
      // console.log("popular", data.data.results);
      popular.value = data.data.results;
    } catch (error) {
      console.error("popular Error data:", error);
    } finally {
      isPopularLoading.value = false;
    }
  };

  // 개봉예정 조회 api
  const getUpcoming = async () => {
    isUpcomingLoading.value = true;
    try {
      const data = await getAPI(
        "/movie/upcoming?include_adult=true&language=ko&page=1"
      );
      // console.log("upcoming", data.data.results);
      upcoming.value = data.data.results;
    } catch (error) {
      console.error("upcoming Error data:", error);
    } finally {
      isUpcomingLoading.value = false;
    }
  };

  // 영화상세 api
  const getMovieDetail = async (id) => {
    isDetailLoading.value = true;
    try {
      const data = await getAPI(`/movie/${id}?language=ko`);
      // console.log("detail", data.data);
      movieInfo.value = data.data;
    } catch (error) {
      console.error("detail Error data:", error);
    } finally {
      isDetailLoading.value = false;
    }
  };

  // 영화 출연, 감독 리스트 api
  const getMovieCastList = async (id) => {
    isCrewLoading.value = true;
    try {
      const data = await getAPI(`/movie/${id}/credits?language=ko`);
      // console.log("crewData???", data.data);
      crewData.value = data.data;
    } catch (error) {
      console.error("crewData Error data:", error);
    } finally {
      isCrewLoading.value = false;
    }
  };

  // 비슷한 리스트 api
  const getSimilarMovieList = async (id) => {
    isSimilarLoading.value = true;
    try {
      const data = await getAPI(`/movie/${id}/similar?language=ko&page=1`);
      // console.log("similarMovieList", data.data?.results);
      similarMovieList.value = data.data?.results;
    } catch (error) {
      console.error("similarMovieList Error data:", error);
    } finally {
      isSimilarLoading.value = false;
    }
  };

  // 예고편 get api
  const getTrailer = async (id) => {
    isTrailerLoading.value = true;
    try {
      const data = await getAPI(`/movie/${id}/videos?language=ko`);
      // console.log("Trailer", data.data);
      videoData.value = data.data;
    } catch (error) {
      console.error("Trailer Error data:", error);
    } finally {
      isTrailerLoading.value = false;
    }
  };

  // 포스터, 스틸컷 api
  const getMovieImages = async (id) => {
    isImagesLoading.value = true;
    try {
      const data = await getAPI(`/movie/${id}/images?page=1`);
      // console.log("ImagesdMovie", data.data);
      movieBackdropsList.value = data.data.backdrops;
      moviePostersList.value = data.data.posters;
    } catch (error) {
      console.error("ImagesdMovie Error data:", error);
    } finally {
      isImagesLoading.value = false;
    }
  };

  // 검색 api
  const getSearchMovie = async (searchkey) => {
    isSearchLoading.value = true;
    try {
      const data = await getAPI(
        `/search/multi?query=${searchkey}&include_adult=true&language=ko&page=1`
      );
      // console.log("foundMovie", data.data.results);
      foundMovie.value = data.data.results;
    } catch (error) {
      console.error("foundMovie Error data:", error);
    } finally {
      isSearchLoading.value = false;
    }
  };

  return {
    isDayTrendingLoading,
    isWeekTrendingLoading,
    isPopularLoading,
    isUpcomingLoading,
    isDetailLoading,
    isCrewLoading,
    isSimilarLoading,
    dayTrending,
    weekTrending,
    isTrailerLoading,
    isImagesLoading,
    isSearchLoading,
    popular,
    upcoming,
    similarMovieList,
    movieInfo,
    crewData,
    videoData,
    movieBackdropsList,
    moviePostersList,
    foundMovie,
    getDayTrending,
    getWeekTrending,
    getPopular,
    getUpcoming,
    getMovieDetail,
    getMovieCastList,
    getSimilarMovieList,
    getTrailer,
    getMovieImages,
    getSearchMovie,
  };
});
