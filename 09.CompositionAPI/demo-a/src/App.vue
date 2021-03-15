<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Update Data</button>

    <p>{{ userData.city }}</p>
  </section>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const uName = ref('Mira');
    const age = ref(27);

    // reactive is the proper way to work with objects
    const userData = reactive({
      city: 'Sofia',
      street: 'Todor Kableshkov 21',
    });

    function setNewAge() {
      // ref is actually creating object with value property which is the value we provide. In the template the value key will be automatically picked up
      age.value = 28;
      userData.city = 'Varna';
    }

    return { userName: uName, age, setAge: setNewAge, userData };
  },
};
</script>

<style>
.container {
  margin: 1rem auto;
  max-width: 31rem;
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.27);
  padding: 1rem;
  text-align: center;
}
</style>
