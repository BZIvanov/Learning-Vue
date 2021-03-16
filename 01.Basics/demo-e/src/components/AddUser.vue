<template>
  <user-alert v-if="alertIsVisible" title="Add User?" @close="hideAlert">
    <p>Do you want to add user?</p>
  </user-alert>
  <section>
    <h2>Add User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert.js';

export default {
  components: {
    UserAlert,
  },
  mixins: [alertMixin],
};
</script>
