import {createRouter , createWebHashHistory} from 'vue-router';
import Index from './views/index.vue';
import Search from './views/search.vue';
import  MyInf from './views/MyInf.vue';
import baseIndex from './views/index.vue';
import Login from "./views/Login.vue";
import Register from './views/Register.vue';
import Communication from './views/Communication.vue';
import Demo from './components/Demo.vue';
import Certification from './views/Certification.vue';
import MyHistory from './views/MyHistory.vue';
import MyPraise from './views/MyPraise.vue';
import musicPush from "./views/MusicPush.vue";
import AddChat from './components/AddChat.vue';

interface Router {
    path:string;
    component:object;
}

const routes:Array<Router> = [
    {
      path:"/",
      component:baseIndex
    },
    {
        path:"/communicate",
        component:Communication
    },
    {
        path:"/Register",
        component:Register
    },
    {
        path:"/Login",
        component:Login
    },
    {
        path:"/index",
        component:Index
    },
    {
        path:"/search",
        component:Search
    },
    {
        path:"/MyInf",
        component:MyInf
    },
    {
        path:"/Demo",
        component:Demo
    },
    {
        path:"/MyInf/MusicPush",
        component:musicPush
    },
    {
        path:"/MyInf/MyPraise",
        component:MyPraise
    },
    {
        path:"/MyInf/MyHistory",
        component:MyHistory
    },
    {
        path:"/MyInf/Certification",
        component:Certification
    },
    {
        path:"/Communication/AddChat",
        component:AddChat
    }
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

// router.beforeEach((to, from,next) => {
//     if (
//         // 检查用户是否已登录
//         // to.name !== 'MyInf'
//         // to.path !== '/search'
//         true == true
//     ) {
//         // 将用户重定向到登录页
//         // return { name: 'search' }
//         return true;
//     }
// })

export default router;
