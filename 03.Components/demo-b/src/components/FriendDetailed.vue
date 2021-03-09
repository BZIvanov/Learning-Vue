<template>
  <li>
    <h2>{{ name }} {{ isOnline ? '(Online)' : '(Off)' }}</h2>
    <button @click="toggleOnline">Toggle Online</button>
  </li>
</template>

<script>
export default {
  // here we have detailed props and emits definitions, with data validation
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    isOnline: { type: Boolean, required: false, default: false },
  },
  // emits property only reveals details and adds validation, but is not actually the one emitting the event, emitter is in the methods
  emits: {
    'toggle-online': function(id) {
      if (id) {
        return true;
      } else {
        console.warn('Id is missing');
        return false;
      }
    },
  },
  methods: {
    toggleOnline() {
      this.$emit('toggle-online', this.id);
    },
  },
};
</script>
