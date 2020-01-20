<template>
    <div class="cmrs-homesort">
        <van-row type="flex" justify="space-around" class="cmrs-grid">
            <van-col span="4" class="cmrs-grid-item" v-for="value in sortData" :key="value.icon">
                <div class="cmrs-grid-item-c">
<!--                    <i class="van-icon van-icon-photo-o van-grid-item__icon"></i>-->
                    <img :src="require('../../../assets/'+value.icon)" width="28" height="28">
                    <br/>
                    <span class="van-grid-item__text">{{value.name}}</span>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "homeSort",
        data(){
            return{
                sortData:[
                    {
                        icon:"tuijian-01.png", name:"推荐"
                    },{
                        icon:"yinyue-01.png",name: "歌单"
                    },{
                        icon:"geshou-01.png",name: "明星"
                    },{
                        icon:"paihangbang-01.png",name: "排行榜"
                    },{
                        icon:"qita-01.png",name: "其他"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="sass">
    @import "../../../style/home/home"
</style>
