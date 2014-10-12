/**
* Company.js
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

    // title of the company
    title: 'STRING',

    // company has many users
    users: {
      collection: 'user',
      via: 'company'
    },

    // copmany belong to one account
    account: {
      model: 'account'
    }
  }
};

