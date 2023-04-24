import { createApp } from 'vue'
import "@nutui/nutui/dist/style.css";
import "./style.css";
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import NutUI from "@nutui/nutui";
import Menu from "./views/Menu.vue";
import router from './router';
import { createPinia, PiniaPluginContext, PiniaPlugin } from 'pinia'
import { Icon } from '@nutui/nutui';

// 持久化存储pinia
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia()
store.use(piniaPluginPersist)

const app = createApp(App);
app.use(VueAxios,axios);
app.use(NutUI);
app.use(router);
app.use(createPinia());
app.use(Icon);
app.component("Menu",Menu);
// axios.defaults.baseURL = "/api"
app.config.globalProperties.$axios = axios;
app.mount("#app");
