<template>
  <base-container title="Vuex">
    <the-number-box></the-number-box>
    <button @click="addTen">Add 10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheNumberBox from './components/TheNumberBox.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    TheNumberBox,
    ChangeCounter,
  },
  methods: {
    addTen() {
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>
