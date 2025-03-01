<template>
    <div class="clearHistoryList" @click="playListStore.clearHistorySong">清除历史记录</div>
    <div>
        <MusicPlaylist :musicList="playListStore.HistorySong" />
    </div>
</template>

<script setup lang="ts">
import { onMounted,onUnmounted } from 'vue';
import usePlayListStore from '@/stores/modules/playlist';
import MusicPlaylist from '@/components/play_list/index.vue';
const playListStore = usePlayListStore();
onMounted(() => {
    playListStore.getLocalMusic();
})
</script>

<style scoped lang="scss">
.clearHistoryList{
    cursor: pointer;
}

</style>