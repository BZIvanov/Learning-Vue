import { createApp } from 'vue';
import App from './App.vue';
import PersonInfo from './components/PersonInfo.vue';

const app = createApp(App);

// this is example of global component, which is registered directly on the app
app.component('person-info', PersonInfo);

app.mount('#app');
