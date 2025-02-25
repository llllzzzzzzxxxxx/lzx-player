<template>
    <div class="player">
        <div class="album-cover">
            <img v-if="hasMusic" :src="albumCoverUrl" alt="Album Cover">
            <img v-else src="../../assets/albumCover.png" alt="Default Album Cover">
        </div>
        <div class="player-info" v-if="hasMusic">
            <div class="song-name">歌曲：{{ musicStore.song?.name }}</div>
            <div class="artist">作者：{{ musicStore.song.ar?.[0]?.name || '未知' }}</div>
            <div class="album">专辑：{{ musicStore.song.al?.name || '未知' }}</div>
        </div>
        <div class="lyric">
            <div v-if="lyrics.length === 0" class="empty-lyric">
                暂无歌词
            </div>
            <div v-else class="lyric-wrapper" ref="lyricWrapper">
                <div class="lyric-container" :style="{ transform: `translate3d(0, ${lyricOffset}px, 0)` }">
                    <div v-for="(line, index) in useMusicStore().lyric" :key="index"
                        :class="['lyric-line', { 'active': currentLineIndex === index }]">
                        {{ line.text }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useMusicStore from '@/stores/modules/music';
import { watch, ref, computed, nextTick } from 'vue';

const musicStore = useMusicStore();
const hasMusic = ref(false);
const albumCoverUrl = ref('');
const lyrics = ref<{ time: number; text: string }[]>([]);
const lyricWrapper = ref<HTMLElement | null>(null);
const lyricOffset = ref(0);
const lineHeight = 40; // 需要与CSS中的行高保持一致

// 转换播放时间到秒数
const getCurrentTime = () => {
    if (!musicStore.currentTime) return 0;
    const [minutes, seconds] = musicStore.currentTime.split(':');
    return Number(minutes) * 60 + Number(seconds);
};

// 计算当前歌词行索引
const currentLineIndex = computed(() => {
    const currentTime = getCurrentTime();
    let activeIndex = 0;
    lyrics.value.forEach((line, index) => {
        if (currentTime >= line.time) {
            activeIndex = index;
        }
    });

    return activeIndex;
});

// 更新歌词位置
const updateLyricPosition = () => {
    nextTick(() => {
        if (!lyricWrapper.value || lyrics.value.length === 0) return;

        const wrapperHeight = lyricWrapper.value.clientHeight;
        const activeLineIndex = currentLineIndex.value;
        const newOffset = -activeLineIndex * lineHeight + wrapperHeight / 2;

        // 限制滚动范围
        const minOffset = wrapperHeight - lyrics.value.length * lineHeight;
        lyricOffset.value = Math.max(minOffset, Math.min(newOffset, wrapperHeight / 2));
    });
};

// 初始化歌词数据
watch(() => musicStore.song, (newSong) => {
    if (newSong) {
        hasMusic.value = true;
        albumCoverUrl.value = musicStore.song.al.picUrl;
        console.log(lyrics.value);
    }
});
watch(() => musicStore.lyric, (newLyrics) => {
    if (newLyrics) {
        lyrics.value = newLyrics;
    }
})
// 监听时间变化和歌词数据变化
watch(() => musicStore.currentTime, updateLyricPosition);
watch(() => [...lyrics.value], updateLyricPosition, { deep: true });
</script>

<style scoped lang="scss">
.player {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // border: 1px solid #fff;
    .album-cover {
        flex: 1;
        display: flex;
        justify-content: center;
        padding: 20px 0;
        img {
            width: 186px;
            height: 186px;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
    }

    .player-info {
        flex: 0.5;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;

        div {
            margin: 4px 0;
            font-size: 14px;
            // color: #fff;

            &.song-name {
                font-size: 16px;
                // color: #bbb6b6;
                font-weight: 500;
            }
        }
    }

    .lyric {
        flex: 2.5;
        height: 300px;
        position: relative;
        overflow: hidden;

        .empty-lyric {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #c7c1c1;
            font-size: 14px;
        }

        .lyric-wrapper {
            height: 100%;
            position: relative;
            overflow: hidden;
        }

        .lyric-container {
            position: absolute;
            width: 100%;
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            padding:  0;
        }

        .lyric-line {
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            color: #cac4c4;
            opacity: 0.6;
            transition: all 0.3s ease;
            transform: scale(0.95);

            &.active {
                color: #31c27c;
                font-size: 18px;
                opacity: 1;
                font-weight: 600;
                transform: scale(1);

                &::after {
                    content: '';
                    display: block;
                    width: 60%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #31c27c, transparent);
                    margin: 2px auto 0;
                }
            }
        }
    }
}
</style>