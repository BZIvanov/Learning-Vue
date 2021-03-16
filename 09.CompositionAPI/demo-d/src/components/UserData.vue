<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(function() {
      return props.firstName + ' ' + props.lastName;
    });

    // this is how we inject provided values, note that you should never mutate inject values, changes should be done on the provided value
    const age = inject('userAge');

    // we can use context for example to emit a value
    console.log(context);

    return { userName: uName, age };
  },
};
</script>
