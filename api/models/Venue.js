/**
* Venue.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    number: {
      type: "string"
    },
    street: {
      type: 'string'
    },
    suburb: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    pinCode: {
      type: 'integer'
    },

    owner: {
      model: 'meeting'
    }
  }
};

