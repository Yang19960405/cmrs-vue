<template>
    <div>
        <van-collapse v-model="activeNames" accordion>
            <van-collapse-item name="1">
                <template #title>
                    <div>心动歌曲 <van-icon name="question-o" /></div>
                </template>
                <div>
                    <div v-for="(value,index) in loveMusicDataListPary" :key="value">
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
                </div>
            </van-collapse-item>
            <van-collapse-item >
                <template #title>
                    <div>喜爱歌单 <van-icon name="question-o" /></div>
                </template>
                <div>
                    <div v-for="(value) in userSongSheet" :key="value">
                        <van-swipe-cell>
                            <template #left>
                                <van-button square type="primary" text="选择"/>
                            </template>
                            <van-cell :border="false" :title="'歌单名：'+value.name" :value="'共'+value.trackCount+'首'" />
                            <template #right>
                                <van-button square type="primary" text="详情" click="userSongSheetLoad"/>
                                <van-button square type="danger" text="删除" />
                            </template>
                        </van-swipe-cell>
                    </div>
                </div>
            </van-collapse-item>
            <van-collapse-item >
                <template #title>
                    <div>最近歌曲<van-icon name="question-o" /></div>
                </template>
               <div>
                   <div v-for="(value,index) in latelyMusicDataListPary" :key="value">
                       <van-row>
                           <van-col span="2" class="cmrs-topmusic-van-nub">{{index+1}}</van-col>
                           <van-col span="4">
                               <van-image
                                       fit="contain"
                                       :src="value.song.al.picUrl">
                                   <template v-slot:loading>
                                       <van-loading type="spinner" size="20" />
                                   </template>
                               </van-image>
                           </van-col>
                           <van-col span="14" class="cmrs-topmusic-van-text">
                               <div class="cmrs-topmusic-div-van-text-d1">
                                   <label class="van-ellipsis">
                                       {{value.song.name}}
                                   </label>
                               </div>
                               <div class="cmrs-topmusic-div-van-text-d2">
                                   <label class="van-ellipsis">
                                       演唱：{{value.song.ar[0].name}} ~{{value.song.alia[0]}}
                                   </label>
                               </div>
                           </van-col>
                           <van-col span="4">
                               <router-link :to="{path:'/player',query:{mid:value.song.id}}">
                                   <div>
                                       <img src="../../../assets/play.png">
                                   </div>
                               </router-link>
                           </van-col>
                       </van-row>
                   </div>
               </div>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "UserMusicInfo",
        data(){
            return{
                activeNames:['1'],
                loveMusicDataList:[],
                loveMusicDataListPary:[],
                latelyMusicDataListPary:[],
                latelyMusicDataList:[],
                userSongSheet:[],
                number:0,
            }
        },
        mounted() {
            this.getloveMusicLoad();
            this.getUserSongSheet();
            this.getUserLatelyMusic();
        },
        methods:{
            getloveMusicLoad:function () {
                let that=this;
                axios.get("http://localhost:3000/playlist/detail?id=503669878")
                    .then(function (response) {
                        //window.console.log(response)
                        that.loveMusicDataList=response.data.playlist.tracks
                        for(let i=0;i<10;i++){
                            that.loveMusicDataListPary.push(that.loveMusicDataList[that.number++])
                        }
                    })
            },
            getUserSongSheet:function () {
                let that=this;
                axios.get("http://localhost:3000/user/playlist?uid=357509333")
                    .then(function (response) {
                       // window.console.log(response)
                        that.userSongSheet=response.data.playlist
                    })
            },
            getUserLatelyMusic:function () {
                let that=this;
                axios.get("http://localhost:3000/user/record?uid=357509333&type=0")
                    .then(function (response) {
                        window.console.log(response)
                        that.latelyMusicDataList=response.data.allData
                        window.console.log(that.latelyMusicDataList)
                        for(let i=0;i<10;i++){
                            that.latelyMusicDataListPary.push(that.latelyMusicDataList[that.number++])
                        }
                    })
            },
            userSongSheetLoad:function () {
                window.console.log("11");
            }

        },
    }
</script>

<style scoped>

</style>
