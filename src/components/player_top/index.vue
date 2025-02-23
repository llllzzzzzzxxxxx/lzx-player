<template>
    <div class="top">
        <div class="left">
            <p class="title">musicPlayer</p>
        </div>
        <div class="right">登录</div>
    </div>
</template>

<script setup lang="ts">

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
    }
}

</style>