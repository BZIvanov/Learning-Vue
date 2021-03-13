<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="addTen">+10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
  },
  methods: {
    addTen() {
      this.$store.commit({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>
