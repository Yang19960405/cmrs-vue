<template>
    <div class="cmrs-swipe">
        <van-swipe :autoplay="3000" :height="150">
            <van-swipe-item><img src="../../../imges/home/shouye01.jpg" height="100%" width="100%" alt=""/></van-swipe-item>
            <van-swipe-item><img src="../../../imges/home/shouye02.jpg" height="100%" width="100%" alt=""/></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "swipe",
    }
</script>

<style scoped lang="sass">
    @import "../../../style/home/home"
    .cmrs-swipe
        margin: 0 2vw
</style>
