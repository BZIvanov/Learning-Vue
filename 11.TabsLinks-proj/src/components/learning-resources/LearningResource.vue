<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat" @click="deleteResource(id)"
          >Delete</base-button
        >
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  inject: ['deleteResource'],
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 41rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.3rem 0;
}

a {
  text-decoration: none;
  color: #ce5c01;
}

a:hover,
a:active {
  color: #c89301;
}
</style>
