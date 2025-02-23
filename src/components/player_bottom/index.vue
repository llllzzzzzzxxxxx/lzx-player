<template>
    <div class="bottom">
        <div class="left">播放键</div>
        <div class="middle">进度条</div>
        <div class="right">其他设置</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.bottom{
    position: fixed;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: 70px;
    // background-color: skyblue;
    display: grid;
    justify-content: space-around;
    grid-template-columns: 1fr 3fr 1fr ;
    grid-template-areas: 
    "left middle right";
    gap: 10px;
    .left{
        grid-area: left;
        justify-content: space-around;
        // background: red;
    }
    .middle{
        grid-area: middle;
    }
    .right{
        grid-area: right;
        // background: red;
    }
}
</style>