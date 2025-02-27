<template>
    <div class="comment-container" @scroll="handleScroll">
        <div class="hot-comment">
            <!-- 精彩评论标题，使用sticky固定 -->
            <div class="title">精彩评论</div>
            <div class="comment-list">
                <!-- 遍历热门评论 -->
                <div v-for="comment in musicStore.hotComments" :key="comment.commentId" class="comment-item">
                    <img :src="comment.user.avatarUrl" alt="用户头像" class="avatar">
                    <div class="comment-info">
                        <div class="user-info">
                            <div class="user-nickname">{{ comment.user.nickname }}</div>
                            <div class="like-count">
                                <svg t="1740670508383" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="4597" width="20" height="20">
                                    <path
                                        d="M64 483.04V872c0 37.216 30.144 67.36 67.36 67.36H192V416.32l-60.64-0.64A67.36 67.36 0 0 0 64 483.04zM857.28 344.992l-267.808 1.696c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-68.832-155.488-137.568-145.504-60.608 8.8-67.264 61.184-67.264 126.816v59.264c0 76.064-63.84 140.864-137.856 148L256 416.96v522.4h527.552a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824z"
                                        p-id="4598" fill="#bfbfbf"></path>
                                </svg>
                                {{ comment.likedCount }}
                            </div>
                        </div>
                        <div class="comment-content">{{ comment.content }}</div>
                        <div class="comment-time">{{ comment.timeStr }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="comment">
            <!-- 最新评论标题，使用sticky固定 -->
            <div class="title">最新评论</div>
            <div class="comment-list">
                <!-- 遍历最新评论 -->
                <div v-for="comment in musicStore.comments" :key="comment.commentId" class="comment-item">
                    <img :src="comment.user.avatarUrl" alt="用户头像" class="avatar">
                    <div class="comment-info">
                        <div class="user-info">
                            <div class="user-nickname">{{ comment.user.nickname }}</div>
                            <div class="like-count">
                            <svg t="1740670508383" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4597" width="20" height="20">
                                <path
                                    d="M64 483.04V872c0 37.216 30.144 67.36 67.36 67.36H192V416.32l-60.64-0.64A67.36 67.36 0 0 0 64 483.04zM857.28 344.992l-267.808 1.696c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-68.832-155.488-137.568-145.504-60.608 8.8-67.264 61.184-67.264 126.816v59.264c0 76.064-63.84 140.864-137.856 148L256 416.96v522.4h527.552a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824z"
                                    p-id="4598" fill="#bfbfbf"></path>
                            </svg>
                            {{ comment.likedCount }}
                        </div>
                        </div>
                        <div class="comment-content">{{ comment.content }}</div>
                        <div class="comment-time">{{ comment.timeStr }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import useMusicStore from '@/stores/modules/music';

let offset = ref(0);
let limit = ref(30);
const musicStore = useMusicStore();

// 监听滚动事件
const handleScroll = () => {
    const container = document.querySelector('.comment-container');
    if (container) {
        const isBottom = container.scrollTop + container.clientHeight >= container.scrollHeight;
        if (isBottom) {
            offset.value += limit.value;
            musicStore.getComment(offset.value, limit.value, musicStore.song.id);
        }
    }
};

onMounted(() => {
    musicStore.getComment(offset.value, limit.value, musicStore.song.id);
    // 绑定滚动事件
    const container = document.querySelector('.comment-container');
    if (container) {
        container.addEventListener('scroll', handleScroll);
    }
})

// 组件销毁时移除滚动事件监听
onUnmounted(() => {
    const container = document.querySelector('.comment-container');
    if (container) {
        container.removeEventListener('scroll', handleScroll);
    }
})
</script>

<style scoped lang="scss">
.comment-container {
    // 示例高度，可根据实际调整
    width: 100%;
    max-height: calc(100vh - 250px);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #888 #333;
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
    .hot-comment,
    .comment {
        .title {
            position: sticky;
            height: 50px;
            align-items: center;
            justify-content: center;
            top: 0;
            background: rgba(0, 0, 0, 0.3); // 暗色透明背景
            backdrop-filter: blur(10px); // 毛玻璃效果
            color: white;
            padding: 10px;
            z-index: 1;
        }

        .comment-list {
            .comment-item {
                display: flex;
                align-items: flex-start;
                margin-top: 10px;
                margin-bottom: 20px;

                .avatar {
                    margin-top: 7px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin-right: 10px;
                    cursor: pointer;
                }

                .comment-info {
                    width: 100%;
                    margin-top: 10px;
                    min-height: 80px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    .user-info {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .like-count {
                            right: 0%;
                            color: #999;
                            font-size: 15px;
                            margin-top: 5px;
                            margin-right: 20px;
                            cursor: pointer;
                        }
                    }

                    .user-nickname {
                        color: #FFFFFF;
                        font-size: 15px;
                        font-weight: bold;
                    }

                    .comment-content {
                        letter-spacing: 0.5px;
                        line-height: 20px;
                        font-size: 15px;
                        margin-top: 5px;
                    }

                    .comment-time {
                        color: #999;
                        font-size: 12px;
                        margin-top: 5px;
                    }


                }
            }
        }
    }
}
</style>