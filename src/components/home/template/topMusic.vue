<template>
    <div>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
            Top歌曲
        </van-divider>
        <div class="cmrs-topmusic-div">

            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    class="cmrs-topmusic-van-list"
            >
            <div v-for="(value,index) in topMusicDataListPary" :key="value">
                <van-row>
                    <van-col span="2" class="cmrs-topmusic-van-nub">{{index+1}}</van-col>
                    <van-col span="4">
                        <van-image
                                fit="contain"
                                :src="value.al.picUrl">
                            <template v-slot:loading>
                                <van-loading type="spinner" size="20" />
                            </template>
                        </van-image>
                    </van-col>
                    <van-col span="14" class="cmrs-topmusic-van-text">
                        <div class="cmrs-topmusic-div-van-text-d1">
                            <label class="van-ellipsis">
                                {{value.name}}
                            </label>
                        </div>
                        <div class="cmrs-topmusic-div-van-text-d2">
                            <label class="van-ellipsis">
                                演唱：{{value.ar[0].name}} ~{{value.alia[0]}}
                            </label>
                        </div>
                    </van-col>
                    <van-col span="4">
                        <router-link :to="{path:'/player',query:{mid:value.id}}">
                            <div>
                                <img src="../../../assets/play.png">
                            </div>
                        </router-link>

                    </van-col>
                </van-row>
            </div>
            </van-list>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "topMusic",
        data(){
            return{
                topMusicDataList:[],
                topMusicDataListPary:[],
                loading: false,
                finished: false,
                number:0,
            }
        },
        mounted() {
            this.getTopMusicDateList();
        },
        methods:{
            getTopMusicDateList:function () {
                let that=this;
                axios.get("http://localhost:3000/top/list?idx=1")
                    .then(function (response) {
                        that.topMusicDataList=response.data.playlist.tracks
                        for(let i=0;i<10;i++){
                            that.topMusicDataListPary.push(that.topMusicDataList[that.number++])
                        }
                    })
            },
            onLoad:function () {
                let that=this
                setTimeout(function () {

                    for(let i=0;i<10;i++){
                        that.topMusicDataListPary.push(that.topMusicDataList[that.number++])
                    }
                    // 加载状态结束
                    that.loading = false;

                    // 数据全部加载完成
                    if (that.topMusicDataListPary.length >= 40) {
                        that.finished = true;
                    }
                },2000)

            }

        }
    }
</script>

<style scoped lang="sass">
    .cmrs-topmusic-div
        padding: 2vw 0
        background-color: white
        border-radius: 2rem
        .cmrs-topmusic-van-list
            margin-top: 2rem
            .cmrs-topmusic-van-nub
                text-align: center
                line-height: 3.5rem
            .cmrs-topmusic-van-text
                padding-left: 1rem
                padding-top: .8rem
                .cmrs-topmusic-div-van-text-d1
                    font-size: 1rem
                    color: #6c6155
                .cmrs-topmusic-div-van-text-d2
                    font-size: .6rem
                    color: cornflowerblue
</style>
