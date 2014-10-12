/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*
*/

module.exports = {

  attributes: {

    // id is primary key
    id: {
      type: 'INTEGER',
      primaryKey: true,
      autoIncrement: true
    },

    // body of the post
    body: 'STRING',


    // post belongs to a user
    user: {
      model: 'user'
    },

    // post belongs to a company
    company: {
      model: 'company'
    },

    // post has many likes
    likes: {
      collection: 'like',
      via: 'post'
    },

    // post has many comments
    comments: {
      collection: 'comment',
      via: 'post'
    }
  }
};

