<template>
    <div>
        <div class="cmrs-search">
            <van-search
                    v-model="value"
                    show-action
                    label="地址"
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
            >
                <template #action>
                    <div @click="onSearch">搜索</div>
                </template>
            </van-search>
        </div>
    </div>
</template>

<script>
    //import axios from 'axios'
    export default {
        name: "Search",
        data(){

        },
        mounted() {

        },
        methods:{
            onSearch:function () {

            }
        },
    }
</script>

<style scoped>

</style>
