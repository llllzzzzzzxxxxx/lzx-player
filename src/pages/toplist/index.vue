<template>
    <div v-if="!playListStore.topListSongs.length" 
    element-loading-text="Loading..."
    v-loading.fullscreen.lock="topListStore.isLoading"
    element-loading-background="rgba(0, 0, 0, 0.7)"
    class="top-list"
        style=" overflow-y: auto;">
        <div class="personalized">
            <h2 class="top-list-title">云音乐特色榜</h2>
            <!-- 只展示前4个 -->
            <div class="top-list-item" v-if="topListStore.topList.length"
                v-for="(item, index) in topListStore.topList.slice(0, 4)" :key="item.id" @click="handleClick(item.id)">
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
                v-for="(item, index) in topListStore.detailList.slice(0, 30)" :key="item.id"
                @click="handleClick(item.id)">
                <img :src="item.picUrl" alt="Top List Cover">
                <div class="top-list-info">
                    <span class="top-list-name" :title="item.name">{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <span class="return" @click="playListStore.topListSongs = []">
            <span><svg t="1740666111038" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2520" width="23" height="23">
                    <path
                        d="M918.8 411.9c-61.6-45.5-146.1-69.6-244.5-69.6H53.4L311.9 130c9.5-7.8 10.9-21.8 3.1-31.3-7.8-9.5-21.8-10.9-31.3-3.1L24 308.8l-1.6 1.5C8 324.7 0 344 0 364.6s8 39.9 22.4 54.3l0.8 0.8 260.4 213.9c4.1 3.4 9.1 5.1 14.1 5.1 6.4 0 12.8-2.8 17.2-8.1 7.8-9.5 6.4-23.5-3.1-31.3L53.4 386.9h620.9c147.5 0 305.2 63.9 305.2 243.3 0 178.7-153.3 258.8-305.2 258.8H328.8c-12.3 0-22.3 10-22.3 22.3s10 22.3 22.3 22.3h345.5c95.7 0 182.8-27.7 245.2-77.9 68.4-55 104.5-132.9 104.5-225.4 0-92-36.4-167.5-105.2-218.4z"
                        fill="#bfbfbf" p-id="2521"></path>
                </svg></span>
            <span>返回</span>
        </span>
        <MusicPlaylist :musicList="playListStore.topListSongs" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useTopListStore from '@/stores/modules/toplist';
import MusicPlaylist from '@/components/play_list/index.vue';
import usePlayListStore from '@/stores/modules/playlist';
import type { PlayListSongs } from '@/api/playlist/type';
import { ElLoading } from 'element-plus'
const playListStore = usePlayListStore();
const topListStore = useTopListStore();
onMounted(() => {
    topListStore.getTopList();
    topListStore.getPersonalized();
})
const handleClick = async (id: number) => {

    topListStore.getPlaylistDetail(id);
    console.log(playListStore.topListSongs.length);
}
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
        margin-left: 20px;
        margin-right: 25px;
        text-align: center;
        cursor: pointer;

        img {
            margin-top: 20px;
            width: 130px;
            height: 130px;
            border-radius: 8px;

            &:hover {
                transform: scale(1.15);
                transition: all 0.3s ease;
            }
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

.return {
    justify-content: center;
    align-items: center;
    display: flex;
    left: 20px;
    width: 100px;
    height: auto;
    cursor: pointer;

    span {
        margin-left: 3px;
    }

    // border: #666666 solid 2px;
}
</style>