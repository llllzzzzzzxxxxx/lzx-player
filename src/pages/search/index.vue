<template>
    <div class="search">
        <input type="text" v-model="searchQuery" placeholder="音乐/歌手/专辑"
            @keyup.enter="handleSearch(searchQuery, 10, 0)" />
        <span class="search-icon" @click="handleSearch(searchQuery, 10, 0)">
            <svg t="1740303498012" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="8602" width="32" height="32">
                <path
                    d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0"
                    p-id="8603" fill="#e6e6e6"></path>
            </svg>
        </span>
        <ul class="hot-list">
            <li v-for="item in hotList" :key="item.first" @click="searchhots(item)">{{ item.first }}</li>
        </ul>
    </div>
    <!-- <div class="search-list" :style="{ overflowY: searchStore.searchList.songs?.length ? 'auto' : 'hidden' }">
        <div class="search-title">
            <span>序号</span>
            <span>歌曲</span>
            <span>作者</span>
            <span>专辑</span>
        </div>
        <div v-if="searchStore.searchList.songs?.length">
            <div class="search-item" v-for="(item, index) in searchStore.searchList.songs" @click="playMusic(item.id)" :key="item.id">
                <span class="index">{{ index + 1 }}</span>
                <span class="name">{{ item.name }}</span>
                <span class="artist">{{ item.artists[0].name }}</span>
                <span class="type">{{ item.album.name.length > 5 ? item.album.name.slice(0, 5) + '...' : item.album.name
                }}</span>
            </div>
        </div>
        <div v-else class="no-search">
            <div><svg t="1740401874319" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4924" width="64" height="64">
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
    </div> -->
    <div  v-if="searchStore.searchList.songs?.length">
        <MusicPlaylist :musicList="usePlayListStore().songs" />
    </div>
    <div v-else class="no-search">
            <div><svg t="1740401874319" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4924" width="64" height="64">
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue';
import type { HotSearchResponseData, HotSearchItem } from '@/api/search/type'
import { reqSearchHot, reqSearch } from '@/api/search';
import type { PlayListSongs } from '@/api/playlist/type';
import useMusicStore from '@/stores/modules/music';
import useSearchStore from '@/stores/modules/search';
import usePlayListStore from '@/stores/modules/playlist';
import MusicPlaylist from '@/components/play_list/index.vue';
let searchQuery = ref('');
const hotList = ref<HotSearchItem[]>([]);
const searchStore = useSearchStore();
const getHotList = async () => {
    let result: HotSearchResponseData = await reqSearchHot();
    if (result && result.result) {
        hotList.value = result.result.hots.slice(0, 5);
    } else {
        hotList.value = []; // 如果result.result为空，设置为空数组
    }
}
const searchhots = (item: HotSearchItem) => {
    searchQuery.value = item.first;
    handleSearch(item.first, 30, 0);
}
const handleSearch = async (keywords: string, limit: number, offset: number) => {
    searchStore.getSearchList(keywords, limit, offset);
    
}
onMounted(async () => {
    getHotList();
})
</script>

<style scoped>
.search {
    display: flex;
    z-index: 10;
    align-items: center;
    width: 100%;
    height: 70px;
    box-shadow: rgba(0, 0, 0, 1);

    span {
        cursor: pointer;
    }

    .hot-list {
        display: flex;

        li {
            cursor: pointer;
            margin-left: 10px;
            justify-content: space-around;
            align-items: center;

            &:hover {
                color: #fff;
            }
        }
    }

    input {
        padding: 8px;
        margin-right: 8px;
        width: 50%;
        height: 60%;
        background-color: transparent;
        /* 设置背景为透明 */
        border: 1px solid white;
        /* 设置边框为白色 */
        border-radius: 4px;
        color: white;
        /* 设置输入文字为白色 */
        font-size: 16px;
        /* 新增：设置字体大小 */
    }

    input::placeholder {
        color: white;
        /* 设置placeholder文字颜色为白色 */
        opacity: 0.8;
        /* 新增：设置placeholder透明度 */
    }
}

button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.search-list {
    margin-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    max-height: calc(100vh - 350px);
    /* 限制最大高度为视口高度减去70px */
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #888 #333;
}

.search-list::-webkit-scrollbar {
    width: 10px;
    /* 进度条宽度为10px */
}

.search-list::-webkit-scrollbar-track {
    background: #333;
}

.search-list::-webkit-scrollbar-thumb {
    background: #888;
    /* 进度条为浅灰色 */
    border-radius: 5px;
    /* 进度条圆角 */
}

.search-list::-webkit-scrollbar-button {
    display: none;
    /* 省去上键和下键 */
}

.search-title {
    display: flex;
}

.search-title span {
    flex: 1;
}

.search-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    margin: 10px 10px 10px 10px;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
}

.search-item .index,
.search-item .name,
.search-item .artist,
.search-item .type {
    flex: 1;
    text-align: left;
    margin-right: 10px;
    
}

.no-search {
    justify-content: center;
    text-align: center;
    margin-top: 15vh;
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
}
</style>