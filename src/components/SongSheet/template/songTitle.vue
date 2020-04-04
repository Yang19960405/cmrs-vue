<template>
    <div class="cmrs-song-title-div">
        <van-row>
            <van-col span="10">
                <van-image
                        width="30vw"
                        height="30vw"
                        :src="songSheetData.coverImgUrl"
                />
            </van-col>
            <van-col span="14">
                <div class="cmrs-song-title-div-d  ">
                    <label class="cmrs-song-title-div-d-l1 van-multi-ellipsis--l2 lab">
                        {{songSheetData.name}}
                    </label>
                    <label class="cmrs-song-title-div-d-l2 van-ellipsis lab">
                        <span><img src="../../../assets/songSheetUser.png" height="20"/></span> {{songSheetData.creator.nickname}}
                    </label>
                    <label class="cmrs-song-title-div-d-l3 van-multi-ellipsis--l2 lab">
                        {{songSheetData.creator.signature}}
                    </label>
                </div>
            </van-col>
        </van-row>

    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: "songTitle",
        data(){
            return{
                songSheetData:{},
            }
        },
        mounted() {
            this.getSongTitleList()
        },
        methods:{
            getSongTitleList:function () {
                let that=this;
                axios.get("http://localhost:3000/playlist/detail?id="+that.$route.query.songId)
                    .then(function (response) {
                        that.songSheetData=response.data.playlist

                    })
            }
        }
    }
</script>

<style scoped lang="sass">
    .cmrs-song-title-div
        padding: 2vw
        height: 20vh
        width: 92vw
        .cmrs-song-title-div-d
            padding: 1vh 0
            .lab
                width: 100%
            .cmrs-song-title-div-d-l1
                color: white
                font-size: 1rem
            .cmrs-song-title-div-d-l2
                line-height: 2.5rem
                color: aliceblue
                font-size: .6rem
                img
                    margin-top: .5rem
            .cmrs-song-title-div-d-l3
                color: antiquewhite
                font-size: .8rem


</style>
