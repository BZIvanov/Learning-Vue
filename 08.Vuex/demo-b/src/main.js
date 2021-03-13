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
  actions: {
    increment(context) {
      setTimeout(function() {
        context.commit('increment');
      }, 1000);
    },
    increase(context, payload) {
      // commit will call the selected mutation
      context.commit('increase', payload);
    },
  },
  getters: {
    result(state) {
      return state.counter + ' %';
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
