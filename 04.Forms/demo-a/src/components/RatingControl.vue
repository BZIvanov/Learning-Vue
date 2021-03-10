<template>
  <ul>
    <li :class="{ active: modelValue === 'low' }">
      <button type="button" @click="activate('low')">Low</button>
    </li>
    <li :class="{ active: modelValue === 'mid' }">
      <button type="button" @click="activate('mid')">Mid</button>
    </li>
    <li :class="{ active: modelValue === 'high' }">
      <button type="button" @click="activate('high')">High</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00178;
}

.active button {
  color: #a00178;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #bbb;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
