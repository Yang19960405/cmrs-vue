<template>
    <div class="cmrs-song-btn-div">
        <van-row type="flex" justify="space-around" class="song-van-row">
            <van-col span="6" class="col-btn">
                <div class="crms-song-btn-div-s">
                    <img src="../../../assets/zanfalse.png" height="30" >
                    <label>点赞</label>
                </div>

            </van-col>
            <van-col span="6" class="col-btn">
                <div class="crms-song-btn-div-s">
                    <img src="../../../assets/pingjia.png" height="30" >
                    <label>评价</label>
                </div>
            </van-col>
            <van-col span="6" class="col-btn">
                <div class="crms-song-btn-div-s">
                    <img src="../../../assets/shouchangfalse.png" height="30" >
                    <label>收藏</label>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>

    export default {
        name: "songBtn"
    }
</script>

<style scoped lang="sass">
    .cmrs-song-btn-div
        background-color: rgba(116, 25, 156, 0.3)
        border-radius: 2rem
        .song-van-row
            .crms-song-btn-div-s
                text-align: center
                color: aliceblue
                width: 100%
                img
                    margin: 0 8vw


</style>
