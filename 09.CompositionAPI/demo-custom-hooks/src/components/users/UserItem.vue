<template>
  <li>
    <h3>{{ userName }}</h3>
    <button @click="viewProjects">View Projects</button>
  </li>
</template>

<script>
export default {
  props: ['id', 'userName'],
  emits: ['list-projects'],
  methods: {
    viewProjects() {
      this.$emit('list-projects', this.id);
    },
  },
};
</script>

<style scoped>
li {
  margin: 0.4rem 0;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.27);
  border: 1px solid #bbb;
}

li h3 {
  margin: 0;
}
</style>
