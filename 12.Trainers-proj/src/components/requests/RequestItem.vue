<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ['email', 'message'],
  computed: {
    emailLink() {
      return 'mailto:' + this.email;
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #bbb;
  padding: 1rem;
}
a {
  color: #3d018d;
  text-decoration: none;
  font-weight: bold;
}
a:hover,
a:active {
  color: #8d017a;
}
p {
  margin: 0.4rem 0 0 0;
}
</style>