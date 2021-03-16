<template>
  <user-data :first-name="firstName" :last-name="lastName"></user-data>
</template>

<script>
import { ref, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  setup() {
    const firstName = ref('Mira');
    const lastName = ref('Ivanova');
    const age = ref(27);

    provide('userAge', age);

    return { firstName, lastName };
  },
};
</script>
