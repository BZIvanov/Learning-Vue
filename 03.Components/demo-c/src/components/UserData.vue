<template>
  <form @submit.prevent="submitData">
    <div>
      <input type="text" v-model="username" placeholder="username" />
    </div>
    <div>
      <input type="number" v-model="age" placeholder="age" />
    </div>
    <button>Update</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      age: '',
    };
  },
  emits: ['update-user'],
  methods: {
    submitData() {
      this.$emit('update-user', this.username, this.age);
    },
  },
};
</script>
