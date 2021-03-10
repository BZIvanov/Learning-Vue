<template>
  <div>
    <header>
      <!-- the below slot will be replaced with content of slot named header -->
      <slot name="header"></slot>
    </header>
    <!-- leaving the slot without name, means it will be our default slot -->
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 32rem;
  border-radius: 8px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.27);
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
