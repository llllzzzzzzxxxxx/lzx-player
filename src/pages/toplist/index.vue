<template>
    <div class="top-list" style=" overflow-y: auto;">
        <div class="personalized">
            <h2 class="top-list-title">云音乐特色榜</h2>
            <!-- 只展示前4个 -->
            <div class="top-list-item" v-if="topListStore.topList.length"
                v-for="(item, index) in topListStore.topList.slice(0, 4)" :key="item.id">
                <img :src="item.coverImgUrl" alt="Top List Cover">
                <div class="top-list-info">
                    <span class="top-list-name" :title="item.name">{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div>
            <h2 class="top-list-title">热门歌单</h2>
            <!-- 只展示前4个 -->
            <div class="top-list-item" v-if="topListStore.detailList.length"
                v-for="(item, index) in topListStore.detailList.slice(0, 30)" :key="item.id" @click="">
                <img :src="item.picUrl" alt="Top List Cover">
                <div class="top-list-info">
                    <span class="top-list-name" :title="item.name">{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted ,ref} from 'vue';
import useTopListStore from '@/stores/modules/toplist';
import MusicPlaylist from '@/components/play_list/index.vue';
import type{ PlayListSongs } from '@/api/playlist/type';
let songs = ref<PlayListSongs[]>([]);
const topListStore = useTopListStore();
onMounted(() => {
    topListStore.getTopList();
    topListStore.getPersonalized();
})
</script>

<style scoped lang="scss">
.top-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    // max-height: 900px;
    // border: #E0E0E0 solid 1px;
    max-height: calc(100vh - 250px);
    overflow-y: auto;
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
    .top-list-item {
        display: inline-block;
        width: 130px;
        margin-right: 25px;
        text-align: center;
        cursor: pointer;
        img {
            margin-top: 20px;
            width: 130px;
            height: 130px;
            border-radius: 8px;
        }

        .top-list-name {
            display: block;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
            margin-top: 8px;
        }
    }

    .top-list-title {
        // color: #E0E0E0;
        margin-top: 10px;
        margin-bottom: 10px;
    }
}
</style>