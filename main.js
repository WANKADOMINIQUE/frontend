import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import i18n from './i18n';
//import { createI18n } from 'vue-i18n';



// Create the Vue app
const app = createApp(App);

// Use VueSplide and i18n plugins
app.use(VueSplide);
app.use(i18n);

// Mount the app
app.mount('#app');