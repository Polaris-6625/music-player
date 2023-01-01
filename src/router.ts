import {createRouter , createWebHashHistory} from 'vue-router';
import Index from './components/index.vue';
import Search from './components/search.vue';

interface Router {
    path:string;
    component:object;
}

const routes:Array<Router> = [
    {
        path:"/index",
        component:Index
    },
    {
        path:"/search",
        component:Search
    }
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;