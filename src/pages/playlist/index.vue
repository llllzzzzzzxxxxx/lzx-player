<template>
    <div class="clearPlayingList" @click="playListStore.clearPlayingSong">清除播放列表</div>
    <div>
        <MusicPlaylist :musicList="playListStore.PlayingSong" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import usePlayListStore from '@/stores/modules/playlist';
import MusicPlaylist from '@/components/play_list/index.vue';
const playListStore = usePlayListStore();
onMounted(() => {
    playListStore.getLocalMusic();
})
</script>

<style scoped lang="scss">
.clearPlayingList{
    cursor: pointer;
}

</style>