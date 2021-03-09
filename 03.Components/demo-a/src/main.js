import { createApp } from 'vue';
import App from './App.vue';
import PersonInfo from './components/PersonInfo.vue';

const app = createApp(App);

app.component('person-info', PersonInfo);

app.mount('#app');
