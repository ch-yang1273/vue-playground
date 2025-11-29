import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./router/index.js";

const app  = createApp(App);

// 라우터 인스턴스 탑재
app.use(router);

app.mount('#app')
