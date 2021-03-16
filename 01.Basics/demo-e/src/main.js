import { createApp } from 'vue';
import App from './App.vue';
import loggerMixin from './mixins/logger.js';

const app = createApp(App);
// this is example of global mixin
app.mixin(loggerMixin);

app.mount('#app');
