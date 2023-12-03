<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onBeforeMount } from 'vue'

const router = useRouter();
const route = useRoute();
const searchKey = ref("");

const goHome = () => {
    router.push('/')
}

const goSearch = (searchKey) => {
    router.push(`/search/${searchKey}`)
}

const onInputHandler = (e) => {
    // console.log("event", e.target.value)
    searchKey.value = e.target.value
}

onBeforeMount(() => {
    searchKey.value = route.params.searchkey;
    // console.log(searchKey.value)
});

</script>
<template>
    <!-- 헤더 -->
    <header>
        <div class="header">
            <div class="header-gnb">
                <div class="header-logo" @click="goHome">
                    Movie
                </div>
                <div>
                    <input id="searchme" class="search" title="Search" type="text" placeholder="제목으로 찾아보세요"
                        @keydown.enter="goSearch(searchKey)" @input="(e) => onInputHandler(e)" v-model="searchKey"
                        :autocomplete="'off'" />
                </div>
            </div>
        </div>
    </header>
</template>