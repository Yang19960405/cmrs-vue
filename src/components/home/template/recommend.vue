<template>
    <div>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
            推荐歌单
        </van-divider>
        <div class="cmrs-recommend-div">
            <van-row type="flex" justify="space-around">
                <van-col span="7" v-for="value in recommendData" :key="value">
                    <div>
                        <router-link :to="{path:'/songSheet',query:{songId:value.id}}">
                            <div class="cmrs-recommend-grid" :id="value.id">
                                <div class="cmrs-recommend-grid-c">
                                    <van-image
                                            fit="contain"
                                            :src="value.picUrl">
                                        <template v-slot:loading>
                                            <van-loading type="spinner" size="20" />
                                        </template>
                                    </van-image>

                                </div>
                            </div>
                            <div>
                                <label class="van-multi-ellipsis--l2">{{value.name}}</label>
                            </div>
                        </router-link>
                    </div>

                </van-col>
            </van-row>
        </div>


    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "recommend",
    data(){
        return{
            recommendData:{},//推荐歌单数据
        }
    },
    mounted() {
        this.getRecommendData();
    },
    methods:{
        //获取推荐歌单数据
        getRecommendData:function () {
            var that=this;
            axios.get("http://localhost:3000/personalized?limit=3")
                .then(function (response) {
                    window.console.log(response);
                    that.recommendData=response.data.result;
                })
        }
    }
}
</script>

<style scoped lang="sass">
    .cmrs-recommend-div
        padding: 2vw 0
        background-color: white
        border-radius: 5%
        label
            font-size: 0.1rem
            color: coral
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
