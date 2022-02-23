export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const axios = require('axios');
    const response = await axios.put(`https://vue-http-demo-1155b-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, coachData);

    // const responseData = await response.data;

    if(response.status != 200 && response.status != 201){
      // error ...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },

  async loadCoaches(context, payload) {
    if(!payload.forceRefresh && !context.getters.shouldUpdate){
      return;
    }

    const axios = require('axios');
    const response = await axios.get(`https://vue-http-demo-1155b-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);

      const error_trown = new Error(error.message || 'Failed to fetch!');
      throw error_trown;
    });

    const responseData = await response.data;

    const coaches = [];

    for(const key in responseData){
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };

      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');

  },
};