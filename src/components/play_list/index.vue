<template>
  <div class="playlist-container" :style="{ overflowY: musicList.length ? 'auto' : 'hidden' }">
    <div class="playlist-title">
      <span>序号</span>
      <span>歌曲</span>
      <span>作者</span>
      <span>专辑</span>
    </div>
    <div v-if="musicList.length">
      <div class="playlist-item"
       v-for="(item, index) in musicList" 
       :key="item.id" 
       @click="playMusic(item)"
       :class="{ 'playing' :item.id===playListStore.playingIndex }"
       >
        <span class="index">{{ index + 1 }}</span>
        <span class="name" >{{ item.name }}</span>
        <span class="artist">{{ item.artists }}</span>
        <span class="type">
          {{ item.album.length > 5 ? item.album.slice(0, 5) + '...' : item.album }}
        </span>
      </div>
    </div>
    <div v-else class="no-music">暂无音乐</div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import useMusicStore from '@/stores/modules/music';
import usePlayListStore from '@/stores/modules/playlist'
// import type { Song } from '@/api/search/type';
import type { AudioResponse } from '@/api/music/type';
import type { PlayListSongs } from '@/api/playlist/type';
import axios from 'axios';

const props = defineProps({
  musicList: {
    type: Array as PropType<PlayListSongs[]>,
    required: true,
  },
});
const playListStore = usePlayListStore();
const playMusic = async (item: PlayListSongs) => {
  const musicStore = useMusicStore();
  await musicStore.getMusicUrl(item.id);
  // await axios.get(`https://www.byfuns.top/api/1?id=${id}`) as AudioResponse
  playListStore.playingIndex=item.id;
  playListStore.addPlayingSong(item);
  // 进度条归零
  const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
  if (audioPlayer) {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
    musicStore.musicState = true;
    playListStore.addHistorySong(item);
  }
}
</script>

<style lang="scss" scoped>
.playlist-container {
  margin-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-height: calc(100vh - 350px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 #333;
  .playing{
      color: #fff;
    .index{
      width: 10px;
      height: 10px;
      // font-size: 0;
      background: url('@/assets/wave.gif') no-repeat 50% ;
    }

  }
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #333;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
}

.playlist-title {
  display: flex;

  span {
    padding-top: 5px;
    flex: 1;
  }
}

.playlist-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin: 10px;
  justify-content: center;
  font-size: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;

  .index,
  .name,
  .artist,
  .type {
    flex: 1;
    text-align: left;
    margin-right: 10px;
  }
}

.no-music {
  justify-content: center;
  text-align: center;
  margin-top: 15vh;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}
</style>