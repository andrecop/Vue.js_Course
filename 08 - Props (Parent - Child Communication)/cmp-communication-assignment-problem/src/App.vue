<template>
  <section>
    <active-user
      :username="user.username"
      :age="user.age"
      ></active-user>
  </section>
  <user-data
    @set-data="setUserData"
  ></user-data>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
  export default {
  components: { ActiveUser },
    data() {
      return {
        user: {
          username: 'pippo',
          age: 23
        }
      }
    },
    methods: {
      setUserData(name, age) {
        this.user = {
          username: name,
          age: +age
        }
      }
    },
  }
</script>

<style>
html {
  font-family: "Jost", sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>