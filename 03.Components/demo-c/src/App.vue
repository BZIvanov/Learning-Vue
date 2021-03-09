<template>
  <section>
    <article>
      <active-user :username="user.username" :age="user.age"></active-user>
    </article>
    <article>
      <user-data @update-user="updateData"></user-data>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: { username: 'Iva', age: 23 },
    };
  },
  methods: {
    updateData(username, age) {
      this.user.username = username;
      this.user.age = parseInt(age, 10) || 'unknown';
    },
  },
};
</script>

<style>
#app section {
  display: flex;
  justify-content: space-evenly;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 3px solid #ccc;
  margin: 0 0 1rem 0;
  min-width: 150px;
}
#app button {
  cursor: pointer;
  border: 1px solid #ff0177;
  background-color: #ff0177;
  color: white;
  padding: 0.05rem 1rem;
}
</style>
