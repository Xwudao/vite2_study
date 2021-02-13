import { createApp } from 'vue';
import App from './App.vue';
import { installElement } from './plugins/elements';
import store from './store/store';
import router from './router/router';

import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);
installElement(app);
app.use(store);
app.use(router);
app.mount('#app');
