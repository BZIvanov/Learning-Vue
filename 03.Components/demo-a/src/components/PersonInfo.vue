<template>
  <li>
    <h3>{{ name }}</h3>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="showDetails">
      <li>{{ city }}</li>
      <li>{{ myHobby }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    city: { type: String, required: true },
    myHobby: { type: String, required: true },
  },
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>
