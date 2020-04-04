<template>
    <div class="cmrs-song">
        <song-title/>
        <song-btn/>
        <song-music/>
    </div>
</template>

<script>
    import songTitle from "./template/songTitle";
    import songBtn from "./template/songBtn";
    import songMusic from "./template/songMusic";
    export default {
        name: "songSheet",
        components:{
            songTitle,
            songBtn,
            songMusic,
        },
    }
</script>

<style scoped lang="sass">
    .cmrs-song
        height: 100vh
        background-color: rgba(108,29,29,0.85)
        padding: 2vh 2vw
</style>
