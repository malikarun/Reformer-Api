/**
* UserProfile.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    firstName: {
      type: "string"
    },
    lastName: {
      type: "string"
    },
    gender: {
      type: 'string'
    },
    birthDate: {
      type: 'date'
    },
    phoneNumber: {
      type: 'string'
    },
    user: {
      model: 'user'
    }
  }
};
