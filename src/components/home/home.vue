<template>
    <div>
        <swipe/>
        <van-row type="flex" justify="space-around">

            <van-col span="22" >
                <div class="cmrs-division"></div>
                <home-sort/>
                <recommend/>
                <top-music/>
            </van-col>
        </van-row>

    </div>
</template>

<script>
    import swipe from "./template/swipe";
    import homeSort from "./template/homeSort";
    import recommend from "./template/recommend";
    import topMusic from "./template/topMusic";
    export default {
        name: "Home",
        components: {
            swipe,
            homeSort,
            recommend,
            topMusic,
        },

    }
</script>
<style scoped lang="sass">
    @import "../../style/home/home"
    .cmrs-division
        width: 100vw
        height: 1vh
</style>
