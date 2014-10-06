/**
* Group.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },

    title: {
      type: "string",
      required: true,
      unique: true
    },

    description: {
      type: 'text',
      required: true
    },

    discussions: {
      collection: 'discussion',
      via: 'group'
    },

    tasks: {
      collection: 'task',
      via: 'group'
    },
  }
};

