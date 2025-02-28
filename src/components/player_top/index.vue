<template>
    <div class="top">
        <div class="left">
            <p class="title">musicPlayer</p>
        </div>
        
        <div v-if="user" class="right">
            <img :src="user.avatarUrl" alt="">
            <span>{{ user.nickname }}</span>
            <span class="exit" @click="logOut">退出</span>
        </div>
        <div v-else class="right" @click="loginPage">登录</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import Login from '@/components/login/index.vue';
import useUserStore from '@/stores/modules/user';
import type { Profile } from "@/api/login/type";

let user = ref<Profile>();
const loginPage = () => {
    useUserStore().isLogin= true;
}
const logOut = () => {
    useUserStore().logout();
    getUser();
    useUserStore().hasChange=!useUserStore().hasChange;
    user.value = undefined;
}
watch(() => useUserStore().hasChange, (newUser) => {
    getUser();
})
const getUser = ()=>{
    let storedUser = localStorage.getItem('user');
    if (storedUser) {
        user.value = JSON.parse(storedUser);
    }
}
onMounted(() => {
    getUser();
})
</script>

<style scoped lang="scss">
.top{
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 70px;
    // background-color: skyblue;
    display: flex;
    justify-content: space-between;
    .left{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 30px;
        .title{
            font-size: 30px;
            color: #c5baba;
        }
    }
    .right{
        color: #FFFFF9;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        margin-right: 20px;
        cursor: pointer;
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }
        span{
            font-size: 14px;
            margin-right: 10px;
        }
    }
}
</style>