<template>
  <section>
    <ul>
      <person-info
        v-for="person in people"
        :key="person.id"
        :name="person.name"
        :city="person.city"
        :my-hobby="person.hobby"
      ></person-info>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      people: [
        { id: 1, name: 'Marto', city: 'Sofia', hobby: 'ski' },
        { id: 2, name: 'Mira', city: 'Varna', hobby: 'fitness' },
      ],
    };
  },
};
</script>

<style>
#app h3 {
  font-size: 2rem;
  border-bottom: 3px solid #bbb;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.27);
  margin: 0.5rem auto;
  border-radius: 10px;
  padding: 0.5rem;
  text-align: center;
  max-width: 35rem;
}
#app button {
  cursor: pointer;
  border: 1px solid #ff0177;
  background-color: #ff0177;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.27);
}
</style>
