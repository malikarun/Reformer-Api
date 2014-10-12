/**
* Like.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    // id is primary key
    id: {
      type: 'INTEGER',
      primaryKey: true,
      autoIncrement: true
    },

    // like belongs to a post
    post: {
      model: 'post'
    },

    // like belongs to a user
    user: {
      model: 'user'
    }
  }
};

