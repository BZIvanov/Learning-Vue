<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="role" :class="roleClass">{{ role }}</div>
  </li>
</template>

<script>
export default {
  props: ['name', 'role'],
  computed: {
    roleClass() {
      if (this.role === 'Engineer') {
        return 'role--engineer';
      }
      if (this.role === 'Consultant') {
        return 'role--consultant';
      }
      return null;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #bbb;
  padding: 1rem;
}

h3 {
  margin: 0.5rem 0;
}

.role {
  border-radius: 39px;
  background-color: #bbb;
  color: #333;
  padding: 0.25rem 1rem;
  display: inline-block;
}

.role--engineer {
  background-color: blue;
  color: white;
}

.role--consultant {
  background-color: #af013a;
  color: white;
}
</style>
