<template>
  <h2>Manage Items</h2>
  <input type="text" ref="item" />
  <button @click="setItem">Set Item</button>
  <!-- teleport is similar to react portal with which we can place elements in different places on the DOM tree -->
  <teleport to="body">
    <error-alert v-if="textIsValid">
      <h2>Input is invalid!</h2>
      <p>Please provide some text</p>
      <button @click="confirmError">OK</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      textIsValid: false,
    };
  },
  methods: {
    setItem() {
      const textValue = this.$refs.item.value;
      if (textValue === '') {
        this.textIsValid = true;
      }
    },
    confirmError() {
      this.textIsValid = false;
    },
  },
};
</script>
