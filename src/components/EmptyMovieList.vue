<script setup>

const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    loading: {
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
            <div class="empty-div">
                <div style="margin-bottom: 30px;">
                    <i class="fa-solid fa-circle-exclamation fa-2xl" style="color: white;"></i>
                </div>
                <span class="empty-search-text">검색 결과가 없습니다.</span>



            </div>
        </div>
    </section>
</template>