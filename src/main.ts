import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);
app.use(VueAxios,axios);

app.config.globalProperties.$axios = axios;
app.mount("#app");
