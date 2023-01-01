import { createApp } from 'vue'
import "@nutui/nutui/dist/style.css";
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import NutUI from "@nutui/nutui";
import Menu from "./components/Menu.vue";
import router from './router';

const app = createApp(App);
app.use(VueAxios,axios);
app.use(NutUI);
app.use(router);
app.component("Menu",Menu);
// axios.defaults.baseURL = "/api"
app.config.globalProperties.$axios = axios;
app.mount("#app");
