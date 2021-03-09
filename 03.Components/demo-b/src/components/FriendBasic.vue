<template>
  <li>
    <h2>{{ name }} {{ isOnline ? '(Online)' : '(Off)' }}</h2>
    <button @click="toggleOnline">Toggle Online</button>
  </li>
</template>

<script>
export default {
  // here we have basic props and emits definitions
  props: ['id', 'name', 'isOnline'],
  emits: ['toggle-online'],
  methods: {
    toggleOnline() {
      // the first parameter is the name of the event we are emitting, every next is additional data we want to emit
      this.$emit('toggle-online', this.id);
    },
  },
};
</script>
