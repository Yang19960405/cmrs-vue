<template>
    <div class="cmrs-player" id="body">
        <div class="main" v-for="(item,index) in musicList" :key="index" v-show="item.isShow">
            <div class="top">
                <h3>{{item.title}}</h3>
                <p>{{item.txtname}}<span @click="item.focuState=!item.focuState" :class="item.focuState?'active':''">{{item.focuState?'已关注':'+关注'}}<img src="img/heart.png" v-show="item.focuState"></span></p>
            </div>
            <div class="box">
                <ul class="info">
                    <li v-for="(key,index) in item.messageList" :key="index">
                        <span>{{key.name}}</span>
                    </li>
                    <audio :src="item.audioSrc" @timeupdate="audioClick(index)" muted></audio>
                </ul>
            </div>
            <div class="proBar">
                <div class="bar clearfix">
                    <span class="fl">{{newstarTime}}</span>
                    <div class="barTwig fl">
                        <div class="barRate" :style="{'width':widthStyle}"></div>
                        <div class="barBall" id="ball"></div>
                    </div>
                    <span class="fl" id="newT">{{newtoalTime}}</span>
                </div>
            </div>
            <div class="btnGroup">
                <img src="../../assets/player/ljiantou.png" @click="addClick" />
<!--                <img :src="item.btnState?'../../assets/player/over.png':'../../assets/player/open.png'" @click="changeClick" />-->
                <img src="../../assets/player/open.png" @click="changeClick" />
                <img src="../../assets/player/rjiantou.png" @click="reduceClick" />
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "player",
        data() {
            return {
                musicList: [{
                    title: '下山 (改编版)2',
                    txtname: '',
                    messageList: [
                        { time: "[00:00.00]", name: "小熊纯一郎 - 下山 (改编版)" },

                    ],
                    isShow: true,
                    audioSrc: '',
                    focuState:true
                }, {
                    title: '下山 (改编版)2',
                    txtname: '小熊纯一郎',
                    messageList: [
                        { time: "[00:00.00]", name: "小熊纯一郎 - 下山 (改编版)" },

                    ],
                    isShow: false,
                    audioSrc: '',
                    focuState:false
                }],
                musicIndex: 0,
                btnState: false,
                newtoalTime: 0,
                newstarTime: 0,
                startTime: 0,
                endTimer: 0,
                widthStyle: 0,
                timeList: [],
                itemIndex: 0,
                heightNum: 0
            }
        },
        mounted: function() {
            this.newtoalTime = '0:00'
            this.newstarTime = '0:00'
            this.getMusicData()
        },
        methods: {
            getMusicData:function(){
                let that=this
                axios.get("http://localhost:3000/song/url?id="+that.$route.query.mid)
                    .then(function (response) {
                        window.console.log(response)
                        that.musicList[0].audioSrc=response.data.data[0].url
                        window.console.log(response)
                    })
                axios.get("http://localhost:3000/song/detail?ids="+that.$route.query.mid)
                    .then(function (response) {
                        window.console.log(response)
                        that.musicList[0].title=response.data.songs.name
                        that.musicList[0].txtname=response.data.songs[0].ar[0].name
                    })
                axios.get("http://localhost:3000/lyric?id="+that.$route.query.mid)
                    .then(function (response) {
                        var lyricList =response.data.lrc.lyric.split("\n")
                        lyricList.map(function (item) {
                            var partList=item.split(']')
                            that.musicList[0].messageList.push({time:partList[0]+"]",name:partList[1]})
                        })
                        window.console.log(that.musicList[0].messageList)
                    })
            },
            /*focusClick(index){
                if(this.musicList[this.musicIndex].isShow){
                    this.musicList[this.musicIndex].focuState=!this.musicList[this.musicIndex].focuState
                }
            },*/
            addClick() {
                var aAuto = window.document.getElementsByTagName('audio');
                var oBody = window.document.getElementById('body');
                var aItems = oBody.getElementsByTagName('li');
                var aInfo = window.document.getElementsByClassName('info');
                for(var i in this.musicList) {
                    this.musicList[i].isShow = false
                }
                if(this.musicIndex >= (this.musicList.length - 1)) {
                    this.musicIndex = this.musicList.length - 1;
                } else {
                    this.musicIndex++;
                    this.btnState = false;
                    if(!this.btnState) {
                        // eslint-disable-next-line no-redeclare
                        for(var i in this.musicList) {
                            aAuto[i].pause()
                        }
                    }
                    this.timeList = [];
                    aAuto[this.musicIndex].currentTime = 0;
                    this.newstarTime = '0:00';
                    for(var t = 0; t < aItems.length; t++) {
                        aItems[t].className = ''
                    }
                    for(var s=0;s<aInfo.length;s++){
                        aInfo[s].style.top=0+'px'
                    }
                }
                this.musicList[this.musicIndex].isShow = true;

            },
            reduceClick() {
                var aAuto = window.document.getElementsByTagName('audio');
                var oBody = window.document.getElementById('body');
                var aItems = oBody.getElementsByTagName('li');
                var aInfo = window.document.getElementsByClassName('info')
                for(var i in this.musicList) {
                    this.musicList[i].isShow = false
                }
                if(this.musicIndex <= 0) {
                    this.musicIndex = 0;
                } else {
                    this.musicIndex--
                    this.btnState = false;
                    if(!this.btnState) {
                        // eslint-disable-next-line no-redeclare
                        for(var i in this.musicList) {
                            aAuto[i].pause()
                        }
                    }
                    this.timeList = [];
                    aAuto[this.musicIndex].currentTime = 0;
                    this.newstarTime = '0:00';
                    for(var t = 0; t < aItems.length; t++) {
                        aItems[t].className = ''
                    }
                    for(var s=0;s<aInfo.length;s++){
                        aInfo[s].style.top=0+'px'
                    }
                }
                this.musicList[this.musicIndex].isShow = true;
            },
            changeClick() {
                var aAuto = window.document.getElementsByTagName('audio');
                //var aInfo = document.getElementsByClassName('info');
                this.btnState = !this.btnState
                if(this.btnState) {
                    aAuto[this.musicIndex].play();
                    this.audioClick();
                    for(var i in this.musicList[this.musicIndex].messageList) {
                        this.timeList.push(parseFloat((this.musicList[this.musicIndex].messageList[i].time).substr(1, 3)) * 60 + parseFloat((this.musicList[this.musicIndex].messageList[i].time).substr(4, 9)))
                    }
                } else {
                    aAuto[this.musicIndex].pause();
                    this.timeList = [];

                }
            },
            audioClick() {
                var aAuto = window.document.getElementsByTagName('audio');
                var aitemNum = window.document.getElementsByClassName('barRate');
                var aBall = window.document.getElementsByClassName('barBall');
                var aInfo = window.document.getElementsByClassName('info');
                var aLi = aInfo[this.musicIndex].getElementsByTagName('li');
                var oBody = window.document.getElementById('body');
                var aItems = oBody.getElementsByTagName('li');
                this.startTime = Math.round(aAuto[this.musicIndex].currentTime);
                if((this.startTime / 60) < 1) {
                    if(this.startTime < 10) {
                        this.newstarTime = 0 + ':' + '0' + this.startTime
                    } else {
                        this.newstarTime = 0 + ':' + this.startTime
                    }
                } else {
                    if(this.startTime % 60 < 10) {
                        this.newstarTime = parseInt(this.startTime / 60) + ':' + '0' + this.startTime % 60
                    } else {
                        this.newstarTime = parseInt(this.startTime / 60) + ':' + this.startTime % 60
                    }
                }
                this.endTimer = Math.round(aAuto[this.musicIndex].duration)
                if((this.endTimer % 60) < 10) {
                    this.newtoalTime = parseInt(this.endTimer / 60) + ':' + '0' + Math.round(this.endTimer % 60)
                } else {
                    this.newtoalTime = parseInt(this.endTimer / 60) + ':' + Math.round(this.endTimer % 60)
                }
                this.widthStyle = ((aAuto[this.musicIndex].currentTime) / (aAuto[this.musicIndex].duration)).toFixed(2) * 100 + '%';
                aBall[this.musicIndex].style.left = this.widthStyle
                aitemNum[this.musicIndex].style.height = '100%';
                aitemNum[this.musicIndex].style.background = '#58b2dc';
                if(parseInt(this.widthStyle) == 100) {
                    this.btnState = false;
                }
                for(var i = 0; i < this.timeList.length; i++) {
                    aLi[i].className = ''
                    if(this.startTime > this.timeList[i] && this.startTime < this.timeList[i + 1]) {
                        this.itemIndex = i;
                        this.heightNum = -26 * this.itemIndex;
                        aLi[this.itemIndex].className = 'on';
                        aInfo[this.musicIndex].style.top = this.heightNum+'px';
                        if(aInfo[this.musicIndex].offsetHeight-Math.abs(this.heightNum)<=318){
                            this.heightNum=-(aInfo[this.musicIndex].offsetHeight-318)
                            aInfo[this.musicIndex].style.top = this.heightNum+'px';
                        }
                    }
                    if(this.startTime > (this.timeList[this.timeList.length - 2] + 2) && this.startTime < (this.endTimer - 1)) {
                        aLi[this.timeList.length - 1].className = 'on';
                        aLi[this.timeList.length - 2].className = '';
                    }
                }
                if(this.startTime == this.endTimer) {
                    this.btnState=false
                    aAuto[this.musicIndex].pause();
                    this.timeList = [];
                    aAuto[this.musicIndex].currentTime = 0;
                    this.newstarTime = '0:00';
                    for(var t = 0; t < aItems.length; t++) {
                        aItems[t].className = ''
                    }
                    for(var s=0;s<aInfo.length;s++){
                        aInfo[s].style.top=0+'px'
                    }
                }
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0px;
        padding: 0px;
    }
    body{background-color: #212121}
    .clearfix:after {
        display: block;
        clear: both;
        content: ''
    }

    .fl {
        float: left;
    }

    li {
        list-style: none;
    }

    h3 {
        font-weight: normal;
    }

    .main {
        background-color: blueviolet;
        width: 96vw;
        height: 90vh;
        /*background: url(../../assets/shoucangtrue.png)no-repeat center 10px;*/
        border-radius: 5px;
        margin: 0px auto;
        padding: 10px;
        color: #fff;
    }

    .top {
        text-align: center;
    }

    .top h3 {
        font-size: 24px;
        padding: 10px;
    }

    .top span {
        display: inline-block;
        padding: 0px 2px;
        border-radius: 5px;
        margin-left: 8px;
        font-size: 12px;
        border: 1px solid #fff;
        position: relative;
    }
    .top span.active{
        border: 1px solid #85c6e6;
        background:#078ed0;
    }
    .top span img {
        width: 14px;
        height: 14px;
        position: absolute;
        top: -5px;
        right: -6px;
        transform: rotate(30deg);
        -ms-transform: rotate(30deg);
        -moz-transform: rotate(30deg);
        -webkit-transform: rotate(30deg);
        -o-transform: rotate(30deg);
        animation: Anim 2s linear 1s infinite;
    }

    @keyframes Anim {
        0% {
            opacity:0;
            top: -5px;
            right:-6px;
        }
        30% {
            opacity:1;
            top: -7px;
            right:-8px;
        }
        65% {
            opacity:0.5;
            top: -9px;
            right:-10px;
        }
        100% {
            opacity:0;
            top: -12px;
            right:-12px;
        }
    }

    .box {
        margin-top: 5vh;
        text-align: center;
        height: 44vh;
        overflow: hidden;
        position: relative;
    }

    .info {
        width: 220px;
        margin: 0px auto;
        text-align: center;
        position: absolute;
        top: 0px;
        left: 50%;
        margin-left: -100px;
    }

    .info li {
        padding: 5px;
        font-size: 1rem;
    }

    .proBar {
        height: 5px;
        margin: 17px 10px 10px 10px;
    }

    .bar {
        padding: 20vh 0 0 15vw;
        margin: 0px auto;
    }

    .barTwig {
        /*background: #58b2dc;*/
        background: #fff;
        width: 180px;
        height: 2px;
        border-radius: 2px;
        position: relative;
    }

    .proBar span {
        font-size: 12px;
        margin-top: -7px;
        margin-right: 8px;
        width: 32px;
        height: 16px;
    }

    .proBar span:last-child {
        margin-left: 15px;
    }

    .barBall {
        position: absolute;
        left: 0px;
        top: -3px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #fff;
    }

    .btnRow {
        text-align: center;
    }

    .btnRow img {
        width: 30px;
        height: 30px;
    }

    .btnGroup {
        width: 200px;
        margin: 20vh auto 2vh ;
        text-align: center;
        height: 40px;
    }

    .btnGroup img {
        margin: 8px;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }

    .btnGroup img:nth-child(2) {
        width: 30px;
        height: 30px;
    }

    .on span {
        color: #ffe48a;
    }
</style>
