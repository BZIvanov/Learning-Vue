<template>
  <div class="container">
    <!-- transition component will provide us with 6 specific classes, which we need to prefix with para, because that is the name we specified -->
    <transition name="para">
      <p v-if="paraIsVisible">Some random text displayed</p>
    </transition>
    <button @click="toggleParagraph">Toggle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paraIsVisible: false,
    };
  },
  methods: {
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
  },
};
</script>

<style>
button {
  padding: 0.5rem 2rem;
  border-radius: 20px;
  background-color: #810132;
  color: white;
  cursor: pointer;
}
.container {
  max-width: 39rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid #bbb;
  border-radius: 10px;
}
/* below classes are provided by the transition component and allow us to control the state of the animation */
.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  transition: all 1s ease-out;
}
.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.para-leave-active {
  transition: all 1s ease-in;
}
.para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
