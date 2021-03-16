<template>
  <section>
    <h2>{{ name }}</h2>
    <div>
      <input type="text" ref="nameInput" />
      <button @click="setName">Set Name</button>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('Mira');
    const nameInput = ref(null);

    function setName() {
      // the first .value is for the ref in this script and the second is for the ref in the template
      name.value = nameInput.value.value;
    }

    return { name, nameInput, setName };
  },
};
</script>
