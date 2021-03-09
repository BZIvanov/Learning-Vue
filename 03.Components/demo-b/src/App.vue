<template>
  <section>
    <ul>
      <friend-basic
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :is-online="friend.isOnline"
        @toggle-online="toggleOnlineStatus"
      ></friend-basic>
      <hr />
      <friend-detailed
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :is-online="friend.isOnline"
        @toggle-online="toggleOnlineStatus"
      ></friend-detailed>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        { id: '1', name: 'Iva', isOnline: true },
        { id: '2', name: 'Eva', isOnline: false },
      ],
    };
  },
  methods: {
    toggleOnlineStatus(id) {
      const identifiedFriend = this.friends.find((friend) => friend.id === id);
      identifiedFriend.isOnline = !identifiedFriend.isOnline;
    },
  },
};
</script>

<style>
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.27);
  margin: 1rem auto;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 35rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 3px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0177;
  background-color: #ff0177;
  color: white;
  padding: 0.05rem 1rem;
}
</style>
