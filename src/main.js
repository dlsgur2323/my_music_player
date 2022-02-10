import { createApp } from 'vue'
import App from './App.vue'

import MusicService from '@/services/MusicService.js';
window.MusicService = MusicService;

createApp(App).mount('#app')
