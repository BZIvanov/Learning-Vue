<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to delete user?</p>
  </user-alert>
  <section>
    <h2>Delete User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert.js';

export default {
  components: {
    UserAlert,
  },
  data() {
    return {
      alertTitle: 'Delete User?',
      // property in data has higher priority that property in a mixin
      alertIsVisible: true,
    };
  },
  mixins: [alertMixin],
};
</script>
