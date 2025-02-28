<template>
    <div class="top-list" 
    element-loading-text="Loading..."
    v-loading.fullscreen.lock="useUserStore().isLoading"
    element-loading-background="rgba(0, 0, 0, 0.7)"
    v-if="playListStore.UserListSong.length===0" style="overflow-y: auto;">
        <div v-if="userStore.userinfo">
            <h2 class="top-list-title">我的歌单</h2>
            <div class="top-list-item" v-if="userStore.userPlaylist.length"
                v-for="(item, index) in userStore.userPlaylist" :key="item.id" @click="handleClick(item.id)">
                <img :src="item.coverImgUrl" alt="Top List Cover">
                <div class="top-list-info">
                    <span class="top-list-name" :title="item.name">{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="no-search">
                <div><svg t="1740401874319" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4924" width="64" height="64">
                        <path
                            d="M884.363636 320.349091a29.090909 29.090909 0 0 1-3.723636-58.181818l69.818182-9.192728a29.090909 29.090909 0 1 1 7.563636 58.181819l-69.818182 9.192727zM853.992727 174.545455a29.090909 29.090909 0 0 1-20.596363-49.687273L889.134545 69.818182a29.090909 29.090909 0 0 1 41.192728 41.192727l-55.738182 55.738182a28.974545 28.974545 0 0 1-20.596364 7.796364zM708.770909 144.407273h-3.84a29.090909 29.090909 0 0 1-25.018182-32.698182l9.192728-69.818182a29.090909 29.090909 0 0 1 58.181818 7.563636l-9.192728 69.818182a29.090909 29.090909 0 0 1-29.323636 25.134546z"
                            fill="#8a8a8a" p-id="4925"></path>
                        <path
                            d="M731.112727 995.723636H246.341818a122.298182 122.298182 0 0 1-122.181818-122.181818V270.894545a122.298182 122.298182 0 0 1 122.181818-122.181818h333.963637l272.98909 227.490909v497.338182a122.298182 122.298182 0 0 1-122.181818 122.181818zM246.341818 206.894545a64.116364 64.116364 0 0 0-64 64v602.763637a64.116364 64.116364 0 0 0 64 64h484.770909a64.116364 64.116364 0 0 0 64-64V403.432727L559.243636 206.894545z"
                            fill="#8a8a8a" p-id="4926"></path>
                        <path
                            d="M797.090909 442.181818h-139.636364A122.298182 122.298182 0 0 1 535.272727 320v-116.363636a29.090909 29.090909 0 0 1 58.181818 0v116.363636a64.116364 64.116364 0 0 0 64 64h139.636364a29.090909 29.090909 0 0 1 0 58.181818z"
                            fill="#8a8a8a" p-id="4927"></path>
                    </svg></div>
                <div>暂无搜索结果</div>
            </div>
        </div>
    </div>
    <div v-else>
        <span class="return" @click="playListStore.UserListSong = []">
            <span><svg t="1740666111038" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2520" width="23" height="23">
                <path
                    d="M918.8 411.9c-61.6-45.5-146.1-69.6-244.5-69.6H53.4L311.9 130c9.5-7.8 10.9-21.8 3.1-31.3-7.8-9.5-21.8-10.9-31.3-3.1L24 308.8l-1.6 1.5C8 324.7 0 344 0 364.6s8 39.9 22.4 54.3l0.8 0.8 260.4 213.9c4.1 3.4 9.1 5.1 14.1 5.1 6.4 0 12.8-2.8 17.2-8.1 7.8-9.5 6.4-23.5-3.1-31.3L53.4 386.9h620.9c147.5 0 305.2 63.9 305.2 243.3 0 178.7-153.3 258.8-305.2 258.8H328.8c-12.3 0-22.3 10-22.3 22.3s10 22.3 22.3 22.3h345.5c95.7 0 182.8-27.7 245.2-77.9 68.4-55 104.5-132.9 104.5-225.4 0-92-36.4-167.5-105.2-218.4z"
                    fill="#bfbfbf" p-id="2521"></path>
            </svg></span>
            <span>返回</span>
        </span>
        <MusicPlaylist :musicList="playListStore.UserListSong" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import useUserStore from '@/stores/modules/user';
import usePlayListStore from '@/stores/modules/playlist';
import MusicPlaylist from '@/components/play_list/index.vue';
const userStore = useUserStore();
const playListStore = usePlayListStore();
const user = ref();

onMounted(() => {
    userStore.getUser();
    if (userStore.userinfo) {
        userStore.getUserPlaylistDetail(userStore.userinfo.userId);
    }
});

const handleClick = async (id: number) => {
    userStore.getUserPlaylist(id);
};
</script>

<style scoped lang="scss">
.top-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
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
            
            margin-right: 25px;
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
        margin-top: 10px;
        margin-bottom: 10px;
    }
}
.no-search {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 15vh;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
}
.return {
    justify-content: center;
    align-items: center;
    display: flex;
    left: 20px;
    width: 100px;
    height: auto;
    cursor: pointer;
    span{
        margin-left: 3px;
    }
    // border: #666666 solid 2px;
}
</style>