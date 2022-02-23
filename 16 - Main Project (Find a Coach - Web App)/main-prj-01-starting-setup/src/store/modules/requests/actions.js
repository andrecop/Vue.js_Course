export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const axios = require('axios');
    const response = await axios.post(`https://vue-http-demo-1155b-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, newRequest)
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

      const error_trown = new Error(error.message || 'Failed to send request.');
      throw error_trown;
    });

    const responseData = await response.data;

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const axios = require('axios');
    const response = await axios.get(`https://vue-http-demo-1155b-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`)
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

      const error_trown = new Error(error.message || 'Failed to send request.');
      throw error_trown;
    });
    
    const responseData = await response.data;
    
    const requests = [];
    
    for(const key in responseData){
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };

      requests.push(request);
    }

    context.commit('setRequests', requests);
  },
};