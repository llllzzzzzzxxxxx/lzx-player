<template>
    <div class="nav">
        <div class="playlist"  @click="$router.push('/playlist')">
            <span :class="{active: isActive('/playlist')}">正在播放</span>
        </div>
        <div class="toplist" @click="$router.push('/toplist')">
            <span :class="{ active: isActive('/toplist') }">推荐</span>
        </div>
        <div class="search" @click="$router.push('/search')">
            <span :class="{ active: isActive('/search') }">搜索</span>
        </div>
        <div class="userlist" @click="$router.push('/userlist')">
            <span :class="{ active: isActive('/userlist') }">我的歌单</span>
        </div>
        <div class="historylist" @click="$router.push('/historylist')">
            <span :class="{ active: isActive('/historylist') }">我听过的</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path: string) => {
    return route.path === path;
};
</script>

<style scoped lang="scss">
.nav{
    
    display: grid;
    grid-template-columns: 100px 100px 100px 100px 100px ;
    grid-template-areas: 
    "playlist toplist search userlist historylist";
    gap: 10px;  
    span{
        cursor: pointer;
        display: flex;
        width: 100px;
        height: 50px;
        border: 1px solid #c5baba;
        border-radius: 5px;
        justify-content: space-around;
        align-items: center;
        font-size: 15px;
        &:hover {
            background-color: #f0f0f0; /* 悬停时的背景颜色 */
            border-color: #8c8c8c;     /* 悬停时的边框颜色 */
            color: #333;               /* 悬停时的文本颜色 */
        }
        &.active {
            background-color: #e0e0e0; /* 激活时的背景颜色 */
            border-color: #6c6c6c;     /* 激活时的边框颜色 */
            color: #000;               /* 激活时的文本颜色 */
        }
    }
    .playlist{
        grid-area: playlist;
    }
    .toplist{
        grid-area: toplist;
    }
    .search{
        grid-area: search;
    }
    .userlist{
        grid-area: userlist;
    }
    .historylist{
        grid-area: historylist;
    }
    .blank{
        grid-area: blank;
    }
}
</style>