<template>
    <div class="container" :style="backgroundStyle">
        <PlayerTop />
        <div class="content">
            <div class="nav">
                <Nav/>
            </div>
            <div class="page">
                <router-view></router-view>
            </div>
            <div class="player">播放器</div>
        </div>
        <PlayerBottom />
    </div>
</template>

<script setup lang="ts">
import { ref, computed,onMounted } from 'vue';
import PlayerTop from '@/components/player_top/index.vue';
import PlayerBottom from '@/components/player_bottom/index.vue';
import Login from '@/components/login/index.vue';
import Nav from '@/components/nav/index.vue';
// 导入图片资源
import defaultBackground from '@/assets/background/bg-1.jpg'; // 根据实际情况修改路径

let OriginTitile = document.title
let titleTime: number | null = null;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '死鬼去哪里了！'
        if (titleTime !== null) {
            clearTimeout(titleTime);
        }
    } else {
        document.title = '(つェ⊂)咦!又好了!'
        titleTime = setTimeout(function () {
            document.title = OriginTitile
        }, 2000)
    }
})
// 定义一个响应式的背景图片路径
const backgroundImage = ref(defaultBackground);

// 计算属性，返回内联样式对象
const backgroundStyle = computed(() => ({
    'background-image': `url(${backgroundImage.value})`,
    'background-size': 'cover',
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'height': '100vh',
    'backdrop-filter': 'blur(5px)', // 添加模糊效果
}));

function changeBackground(newImagePath: string) {
    backgroundImage.value = newImagePath;
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative; // 确保 ::before 伪元素相对于 .container 定位
    width: 100%; // 确保容器宽度足够大
}

.container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(46, 46, 46, 0.5); // 黑色遮罩层，透明度为 0.5
    backdrop-filter: blur(10px);
    z-index: -1; // 确保遮罩层在内容之下
}

.content {
    margin-top: 70px;
    margin-bottom: 70px;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative; // 确保内容相对于容器定位backdrop-filter: blur(10px); // 内容区域的模糊效果
    padding: 20px;
    border-radius: 10px; // 圆角效果
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 阴影效果
    display: grid;
    grid-template-columns: 3fr 1fr; // 定义两列，第一列宽度为1份，第二列宽度为3份
    grid-template-rows: 60px 1fr; // 定义两行，第一行高度自适应，第二行高度为1份
    gap: 20px;
    grid-template-areas:
        "nav player"
        "page player";

    .nav {
        grid-area: nav;
        // background: red;
    }

    .page {
        grid-area: page;
        max-height: calc(100vh - 400px);
        margin-left: 5vh;
        // background: green;
    }

    .player {
        grid-area: player;
        // background: blue;
    }
}
</style>