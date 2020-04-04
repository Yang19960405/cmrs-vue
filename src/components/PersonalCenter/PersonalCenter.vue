<template>
    <div>
        <User/>
        <UserMusicInfo/>
    </div>
</template>

<script>
    import User from "./template/User";
    import UserMusicInfo from "./template/UserMusicInfo";

    export default {
        name: "PersonalCenter",
        components:{
            User,
            UserMusicInfo,
        }
    }
</script>

<style scoped >

</style>
