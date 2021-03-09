import { createApp } from 'vue';

import App from './App.vue';
import FriendBasic from './components/FriendBasic.vue';
import FriendDetailed from './components/FriendDetailed.vue';

const app = createApp(App);

app.component('friend-basic', FriendBasic);
app.component('friend-detailed', FriendDetailed);

app.mount('#app');
