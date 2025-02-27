<template>
    <div class="top-list" style="max-height: 400px; overflow-y: auto;">
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
                v-for="(item, index) in topListStore.detailList.slice(0, 30)" :key="item.id">
                <img :src="item.picUrl" alt="Top List Cover">
                <div class="top-list-info">
                    <span class="top-list-name" :title="item.name">{{ item.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useTopListStore from '@/stores/modules/toplist';

const topListStore = useTopListStore();
onMounted(() => {
    topListStore.getTopList();
    topListStore.getPersonalized();
})
</script>

<style scoped lang="scss">
.top-list-item {
    display: inline-block;
    width: 130px;
    margin-right: 25px;
    text-align: center;

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
.top-list-title{
    color: #E0E0E0;
}
</style>