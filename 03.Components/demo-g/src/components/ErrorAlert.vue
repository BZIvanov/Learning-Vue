<template>
  <!-- dialog here is native html element -->
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 30vh;
  left: 35%;
  width: 30%;
  background-color: white;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.27);
  padding: 1rem;
}
</style>
