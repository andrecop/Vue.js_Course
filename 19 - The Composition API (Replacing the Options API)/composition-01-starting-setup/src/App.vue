<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2>
    <!-- <h2>{{ userName }}</h2>
    <h2>{{ age }}</h2> -->

    <!-- <button @click="user.age = 32">Change Age</button> -->
    <button @click="setAge">Change Age</button>
    <!-- {{ setAge() }} -->
  </section>
</template>

<script>
// import { ref } from 'vue';
// import { reactive, toRefs } from 'vue';
import { reactive } from 'vue';
// import { reactive, isReactive, isRef } from 'vue';

export default {

  // ------- OPTION 1
  // setup() {
  //   const uName = ref('Maximilian');
  //   const uAge = ref(31);

  //   setTimeout(function() {
  //     uName.value = 'Max';
  //     uAge.value = 32;
  //   }, 2000)

  //   return {
  //     userName: user.value.name,
  //     age: user.value.age,
  //   };
  // }
  
  // ------- OPTION 2
  // setup() {
  //   const user = ref({
  //     name: 'Maximilian',
  //     age: 31,
  //   });

  //  console.log(isReactive(user));
  //  console.log(isRef(user));

  //   setTimeout(function() {
  //     user.value.name = 'Max';
  //     user.value.age = 32;
  //   }, 2000)

  //   return {
  //     user: user
  //   };
  // }
  
  // ------- OPTION 3
  // setup() {
  //   const user = reactive({
  //     name: 'Maximilian',
  //     age: 31,
  //   });

  //   setTimeout(function() {
  //     user.name = 'Max';
  //     user.age = 32;
  //   }, 2000)

  //   const userRefs = toRefs(user);

  //   return {
  //     user: user,
  //     userName: userRefs.name,
  //     age: userRefs.age,
  //   };
  // }
  
  // ------- OPTION 3 - clean
  setup() {
    const user = reactive({
      name: 'Maximilian',
      age: 31,
    });

    function setNewAge() {
      user.age = 32;
    }

    return {
      user: user,
      setAge: setNewAge
    };
  }

  // ------- OPTION OLD
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 31,
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 31;
  //   }
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
