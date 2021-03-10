<template>
  <section>
    <base-card>
      <!-- here we use template, because we want to create named slot, for default slot we could just provide the content without template tag -->
      <template v-slot:header>
        <h2>Badges List</h2>
      </template>
      <!-- here we explicitly specify, that this will be our default slot -->
      <template v-slot:default>
        <ul>
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
    </base-card>
  </section>
</template>

<style scoped>
/* scoped for the style tag will make the styles scoped to this component only, otherwise they will apply globally for our app */
section h2 {
  margin: 0.7rem 0;
  color: #bbb;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 0.7rem;
}
</style>
