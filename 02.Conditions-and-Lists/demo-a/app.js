const app = Vue.createApp({
  data() {
    return {
      drink: '',
      drinks: [],
    };
  },
  methods: {
    addDrink() {
      this.drinks.push(this.drink);
    },
    removeDrink(idx) {
      this.drinks.splice(idx, 1);
    },
  },
});

app.mount('#user-drinks');
