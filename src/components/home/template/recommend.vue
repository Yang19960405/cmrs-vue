<template>
    <div>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
            推荐歌单
        </van-divider>
        <van-row type="flex" justify="space-around">
            <van-col span="7" v-for="value in 3" :key="value">
                <div class="cmrs-recommend-grid">
                    <div class="cmrs-recommend-grid-c">as</div>
                </div>
            </van-col>
        </van-row>

    </div>
</template>

<script>
    export default {
        name: "recommend"
    }
</script>

<style scoped lang="sass">
    .cmrs-recommend-grid
        width: 100%
        padding-top: 100%
        position: relative
        background-color: blueviolet
        border-radius: 10%
        .cmrs-recommend-grid-c
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
    .van-grid-item__content
        background-color: #ededed
</style>
