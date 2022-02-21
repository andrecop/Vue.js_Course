
// import { createStore } from 'vuex';

// // a module can be accessed only by inside, another module cannot get access to it's informations
// const counterModule = {
//   namespaced: true,
//   state() {
//     return {
//       counter: 0,
//     }
//   },
//   mutations: {
//     increment(state) {
//       state.counter = state.counter + 1;
//     },
//     // increase(state, payload) {
//     //   state.counter = state.counter + payload;
//     // },
//     increase(state, payload) {
//       state.counter = state.counter + payload.value;
//     },
//   },
//   actions: {
//     increment(context) {
//       setTimeout(function() {
//         context.commit('increment');
//       }, 500);
//     },
//     increase(context, payload) {
//       console.log(context);
//       setTimeout(function() {
//         context.commit('increase', payload);
//       }, 200);
//     },
//     login() {},
//   },
//   getters: {
//     // testAuth(state, getters, rootState, rootGetters) {
//     //   return state.isLoggedIn;
//     // },
//     finalCounter(state) {
//       return state.counter;
//     },
//     normalizedCounter(_, getters) {
//       const finalCounter = getters.finalCounter;
//       if(finalCounter < 0) {
//         return 0;
//       }
//       if(finalCounter > 100) {
//         return 100;
//       }
//       return finalCounter;
//     },
//   }
// }

// const store = createStore({
//   modules: {
//     numbers: counterModule,
//   },
//   state() {
//     return {
//       isLoggedIn: false,
//     };
//   },
//   mutations: {
//     setAuth(state, payload) {
//       state.isLoggedIn = payload.isAuth;
//     },
//   },
//   actions: {
//     login(context) {
//       context.commit('setAuth', { isAuth: true });
//     },
//     logout(context) {
//       context.commit('setAuth', { isAuth: false });
//     },
//   },
//   getters: {
//     userIsAutheticated(state) {
//       return state.isLoggedIn;
//     },
//   },
// });

// export default store;