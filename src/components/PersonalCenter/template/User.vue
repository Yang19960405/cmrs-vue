<template>
    <div class="cmrs-user-div">
        <van-row type="flex" justify="space-around">
            <van-col class="cmrs-user-div-row-col" span="8">
                <div class="cmrs-user-div-row-col-d">
                    <img :src="UserInfo.avatarUrl" width="100%" height="100%"/>
                </div>
                <div class="cmrs-user-div-row-col-t">
                    <div class="cmrs-user-div-row-col-t-d">
                        <label class="van-ellipsis">{{UserInfo.nickname}}</label>
                    </div>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "User",
        data(){
            return{
                UserInfo:[]
            }
        },
        mounted() {
            this.getUserInfo();
        },
        methods:{
            getUserInfo:function () {
                let that=this;
                axios.get("http://localhost:3000/user/detail?uid=357509333")
                    .then(function (response) {
                        that.UserInfo=response.data.profile
                        //window.console.log(response.data)
                    })
            }
        }
    }
</script>

<style scoped lang="sass">
    .cmrs-user-div
        width: 100vw
        height: 35vh
        background-image: url("../../../assets/User/jianbian.jpg")
        .cmrs-user-div-row-col
            padding: 5vh 0
            .cmrs-user-div-row-col-d
                width: 20vh
                height: 20vh
                z-index: 1
                img
                    border-radius: 10vh
                    background-color: coral
                    z-index: -1
            .cmrs-user-div-row-col-t
                width: 20vh
                height: 5vh
                padding: 2vh 0
                .cmrs-user-div-row-col-t-d
                    height: 100%
                    width: 20vh
                    background-color: aliceblue
                    text-align: center
                    label
                        color: #07c160
                        line-height: 5vh



</style>
