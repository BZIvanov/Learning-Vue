import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  getters: {
    // with getters parameter we can access other getters, for example to reuse logic
    getCounter(state, getters) {
      console.log(getters);
      return state.counter + ' %';
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
