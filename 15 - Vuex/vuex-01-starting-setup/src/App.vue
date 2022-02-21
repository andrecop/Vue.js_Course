<template>
  <base-container title="Auth">
    <UserAuth />
  </base-container>
  <base-container title="Vuex" v-if="isAuth">
    <TheCounter />
    <button @click="addOne">Add 10</button>
    <ChangeCounter />
    <FavouriteValue />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth,
  },
  methods: {
    addOne() {
      // this.$store.state.counter += 11;
      // this.$store.commit('increase', 2);
      // this.$store.commit('increase', 'string');
      // this.$store.commit('increase', { value: 2 });
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // });
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      });
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAutheticated;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>