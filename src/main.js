import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';

import MusicService from '@/services/MusicService.js';
window.MusicService = MusicService;

const app = createApp(App)
app.use(router);
app.mount('#app')
