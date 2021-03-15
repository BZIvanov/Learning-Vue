import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Mira',
          lastName: 'Ivanov',
          areas: ['frontend', 'career'],
          description:
            "Hello, nice to meet you.",
          hourlyRate: 15
        },
        {
          id: 'c2',
          firstName: 'Petar',
          lastName: 'Petrov',
          areas: ['backend', 'career'],
          description:
            'Glad to share my knowledge.',
          hourlyRate: 20
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
