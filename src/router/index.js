import Vue from "vue";
import VueRouter from "vue-router";
import home from "../components/home/home";
import songSheet from "../components/SongSheet/songSheet";
import player from "../components/player/player";
import PersonalCenter from "../components/PersonalCenter/PersonalCenter";

Vue.use(VueRouter)
const Routes= new VueRouter({
    routes:[
        {
            path: '/',         //链接路径
            name: 'home',     //路由名称，
            component: home   //对应的组件模板
        },
        {
            path: '/songSheet',         //链接路径
            name: 'songSheet',     //路由名称，
            component: songSheet   //对应的组件模板
        },
        {
            path: '/player',         //链接路径
            name: 'player',     //路由名称，
            component: player   //对应的组件模板
        },
        {
            path: '/PersonalCenter',         //链接路径
            name: 'PersonalCenter',     //路由名称，
            component: PersonalCenter   //对应的组件模板
        }
    ]
})
export default Routes
