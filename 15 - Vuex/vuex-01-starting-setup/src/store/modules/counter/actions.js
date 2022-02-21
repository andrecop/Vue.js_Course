export default {
  increment(context) {
    setTimeout(function() {
      context.commit('increment');
    }, 500);
  },
  increase(context, payload) {
    console.log(context);
    setTimeout(function() {
      context.commit('increase', payload);
    }, 200);
  },
  login() {},
};