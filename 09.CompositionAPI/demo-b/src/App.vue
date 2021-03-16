<template>
  <section class="container">
    <h2>{{ fullName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Update Age</button>
    <div>
      <input type="text" v-model="firstName" />
      <input type="text" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const firstName = ref('Mira');
    const lastName = ref('Ivanova');
    const uAge = ref(27);

    // computed function will run only one of its dependency is changed
    const fullName = computed(function() {
      return firstName.value + ' ' + lastName.value;
    });

    // the first parameter is array with dependencies which will be watched and if any of them changes, the watch function will run
    watch([uAge, fullName], function(newValues, prevValues) {
      console.log('Prev age: ' + prevValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Prev name: ' + prevValues[1]);
      console.log('New name: ' + newValues[1]);
    });

    function setNewAge() {
      uAge.value = 29;
    }

    // everything we use in the template, should be included in the return object
    return {
      fullName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
    };
  },
};
</script>

<style>
.container {
  margin: 1rem auto;
  max-width: 28rem;
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.27);
  padding: 1rem;
  text-align: center;
}
</style>
