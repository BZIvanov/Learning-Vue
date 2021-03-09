<template>
  <div>
    <selected-topic
      :title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></selected-topic>
    <knowledge-base></knowledge-base>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: '1',
          title: 'Props',
          description: 'Working with and using props',
          fullText:
            'All you need to know about the props and how to use them ti build nice apps.',
        },
        {
          id: '2',
          title: 'State',
          description: 'Defining components state',
          fullText: 'State is important piece of information in every app.',
        },
      ],
      activeTopic: null,
    };
  },
  // with provide we can provide data or functions to deeply nested child components directly
  provide() {
    return {
      topics: this.topics,
      selectTopic: this.activateTopic,
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
};
</script>

<style>
section {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.27);
  margin: 1rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 10px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
li {
  border-radius: 12px;
  border: 1px solid #bbb;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
h2 {
  margin: 0.75rem 0;
  text-align: center;
}
button {
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  cursor: pointer;
}
</style>
