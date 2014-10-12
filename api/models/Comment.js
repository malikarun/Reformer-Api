/**
* Comment.js
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

    // content for the comment
    body: 'STRING',

    // comment belongs to a post
    post: {
      model: 'post'
    },

    // comment belongs to a user
    user: {
      model: 'user'
    }
  }
};

