<template>
    <div class="cmrs-narbar">
        <van-nav-bar
                title="首页"
                @click-left="onClickLeft"
                @click-right="onClickRight"
        >
            <van-icon name="wap-nav" size="2rem" slot="left"/>
            <van-icon name="search"  size="1.5rem" slot="right"/>
        </van-nav-bar>

        <!--弹出框-->
        <van-popup
                v-model="navbarshow"
                position="left"
        >
            <van-sidebar v-model="activeKey">
                <van-sidebar-item title="个人中心"/>
                <van-sidebar-item title="消息通知"/>
                <van-sidebar-item title="歌单" />
                <van-sidebar-item title="设置"/>
                <van-sidebar-item title="退出" />
            </van-sidebar>
        </van-popup>
    </div>

</template>

<script>
    export default {
        name: "NarBar",
        data(){
            return{
                navbarshow:false,
                activeKey:0
            }
        },
        methods: {
            onClickLeft() {
                this.navbarshow===false?this.navbarshow=true:this.navbarshow=false;
            },
            onClickRight() {
                window.console.log('返回');
            },

        }
    }
</script>

<style scoped lang="sass">
    @import "../../style/tabHader/narBar"
</style>
