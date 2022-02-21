<template>
  <!-- <h3>{{ finalCounter }}</h3> -->
  <h3>{{ final }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   // return this.$store.state.counter;
    //   return this.$store.getters.finalCounter;
    // }
    // ...mapGetters(['finalCounter']),
    // ...mapGetters('numbers', ['finalCounter']),
    // ...mapGetters({
    //   final: 'numbers/finalCounter'
    // }),
    ...mapGetters('numbers', {
      final: 'finalCounter'
    }),
  },
}
</script>