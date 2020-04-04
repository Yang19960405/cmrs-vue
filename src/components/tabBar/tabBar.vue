<template>
    <div class="cmrs-tabbar">
        <van-tabbar v-model="active">
            <router-link :to="{path:'/'}">
                <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            </router-link>
            <router-link :to="{path:'/songSheet',query:{songId:3026816798}}">
                <van-tabbar-item icon="search">歌单</van-tabbar-item>
            </router-link>
            <router-link :to="{path:'/player'}">
                <van-tabbar-item icon="friends-o">播放</van-tabbar-item>
            </router-link>
            <router-link :to="{path:'/PersonalCenter'}">
                <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
            </router-link>
        </van-tabbar>
    </div>
</template>

<script>

    export default {
        name: "TabBar",
        data() {
            return {
                active: 0
            }
        }
    }
</script>

<style scoped lang="sass">
    @import "../../style/tabBar/tabBar"
</style>
