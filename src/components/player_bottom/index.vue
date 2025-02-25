<template>
    <div class="bottom">
        <div class="left">
            <div class="last">
                <svg t="1740403359449" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3008" width="48" height="48">
                    <path
                        d="M256 224a32 32 0 0 1 32 32v512a32 32 0 0 1-64 0V256a32 32 0 0 1 32-32z m385.952 30.624a96 96 0 0 1 157.44 73.76v366.72a96 96 0 0 1-157.44 73.76l-220.032-183.36a96 96 0 0 1 0-147.52z m86.048 53.28a32 32 0 0 0-45.056-4.096l-220.032 183.36a32 32 0 0 0-4.096 4.096l-2.4 3.232a32 32 0 0 0 6.496 41.824l220.032 183.36a32 32 0 0 0 52.48-24.576v-366.72a32 32 0 0 0-7.424-20.48z"
                        fill="#8a8a8a" p-id="3009"></path>
                </svg>
            </div>
            <div class="play" @click="togglePlay">
                <Audio :src="musicUrl" ref="audioPlayer"></Audio>
                <svg t="1740403321634" class="icon" :class="{ 'rotate-animation': musicStore.musicState }" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2408" width="48" height="48">
                    <path
                        d="M512 160a32 32 0 0 1 0 64 288 288 0 1 0 288 288 286.496 286.496 0 0 0-38.144-143.328 32 32 0 0 1 55.488-31.904A350.496 350.496 0 0 1 864 512c0 194.4-157.6 352-352 352S160 706.4 160 512 317.6 160 512 160z m160 0a96 96 0 0 1 96 96 32 32 0 0 1-63.776 3.744L704 256a32 32 0 0 0-63.776-3.744L640 256v256a128 128 0 1 1-63.968-110.848L576 256a96 96 0 0 1 96-96z m-160 288a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
                        fill="#8a8a8a" p-id="2409"></path>
                </svg>
            </div>
            <div class="next">
                <svg t="1740403378507" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3330" width="48" height="48">
                    <path
                        d="M768 224a32 32 0 0 1 32 32v512a32 32 0 0 1-64 0V256a32 32 0 0 1 32-32z m-386.336 31.36l220.032 183.36a96 96 0 0 1 0 147.52l-220.032 183.36a96 96 0 0 1-157.44-73.76v-366.72a96 96 0 0 1 157.44-73.76zM295.616 308.64a32 32 0 0 0-7.424 20.48v366.72a32 32 0 0 0 52.48 24.576l220.032-183.36a32 32 0 0 0 6.496-41.824l-2.4-3.264a32 32 0 0 0-4.096-4.096l-220.032-183.36a32 32 0 0 0-45.056 4.128z"
                        fill="#8a8a8a" p-id="3331"></path>
                </svg>
            </div>
        </div>
        <div class="middle">
            <input type="range" class="progress-bar" min="0" max="100" v-model="progress"
                @input="handleProgressChange" />
        </div>
        <div class="right"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import useMusicStore from '@/stores/modules/music';

const musicStore = useMusicStore();
const audioPlayer = ref<HTMLAudioElement | null>(null);
let musicUrl = ref('');
const progress = ref(0);

const togglePlay = () => {
    if (audioPlayer.value) {
        if (musicStore.musicState) {
            audioPlayer.value.pause();
        } else {
            audioPlayer.value.play();
        }
        musicStore.musicState = !musicStore.musicState;
    }
};

const handleProgressChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const newTime = (audioPlayer.value?.duration || 0) * (Number(target.value) / 100);
    if (audioPlayer.value) {
        audioPlayer.value.currentTime = newTime;
    }
};

watch(() => musicStore.musicUrl, (newUrl) => {
    musicUrl.value = newUrl;
    if (audioPlayer.value) {
        audioPlayer.value.load();
        if (musicStore.musicState) {
            audioPlayer.value.play();
        }
    }
});

onMounted(() => {
    if (audioPlayer.value) {
        audioPlayer.value.addEventListener('timeupdate', () => {
            if (audioPlayer.value) {
                progress.value = (audioPlayer.value.currentTime / audioPlayer.value.duration) * 100;
            }
        });
    }
});
</script>

<style scoped lang="scss">
.bottom {
    position: fixed;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: 70px;
    // background-color: skyblue;
    display: grid;
    justify-content: space-around;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas:
        "left middle right";
    gap: 10px;

    .left {
        grid-area: left;
        justify-content: space-around;
        display: flex;
        align-items: center;
        margin-left: 5vh;
        .last,
        .play,
        .next {
            cursor: pointer;
        }
    }

    .middle {
        grid-area: middle;
        display: flex;
        align-items: center;
        justify-content: center;

        .progress-bar {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 2px;
            outline: none;
            appearance: none;
            cursor: pointer;

            &::-webkit-slider-thumb {
                appearance: none;
                width: 12px;
                height: 12px;
                background: #fff;
                border-radius: 50%;
                cursor: pointer;
            }
        }
    }

    .right {
        grid-area: right;
        // background: red;
    }
}

.rotate-animation {
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>