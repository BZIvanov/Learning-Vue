<template>
  <main>
    <add-user></add-user>
    <delete-user></delete-user>
  </main>
</template>

<script>
import AddUser from './components/AddUser.vue';
import DeleteUser from './components/DeleteUser.vue';

export default {
  components: {
    AddUser,
    DeleteUser,
  },
};
</script>

<style>
main {
  width: 39rem;
  margin: 1rem auto;
}

section {
  margin: 2rem auto;
  border: 1px solid #bbb;
  border-radius: 10px;
  padding: 1rem;
}

button {
  font: inherit;
  background-color: #313131;
  border: 1px solid #313131;
  border-radius: 7px;
  color: white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}
</style>
