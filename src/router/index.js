import Vue from "vue";
import VueRouter from "vue-router";
import home from "../components/home/home";

Vue.use(VueRouter)
const Routes= new VueRouter({
    routes:[
        {
            path: '/',         //链接路径
            name: 'home',     //路由名称，
            component: home   //对应的组件模板
        }
    ]
})
export default Routes
