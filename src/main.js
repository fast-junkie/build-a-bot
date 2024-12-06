import { createApp } from 'vue';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';
import currency from '@/shared/currency-filter';

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
};
app
  .use(router)
  .use(store)
  .mount('#app');
