
/*
User.coffee

@description :: TODO: You might write a short summary of how this model works and what it represents here.
@docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {

  attributes: {

    username: {
      type: "string"
    },
    email: {
      type: "string",
      email: true,
      unique: true,
      required: true
    },
    password: {
      type: "string",
      required: true
    },



    profile: {
      collection: 'profile',
      via: 'owner'
    },
    address: {
      collection: 'address',
      via: 'owner'
    },
    groups: {
      collection: 'group',
      via: 'owner'
    },
    ideas: {
      collection: 'idea',
      via: 'owner'
    },
    discussions: {
      collection: 'discussion',
      via: 'owner'
    },
    problems: {
      collection: 'problem',
      via: 'owner'
    },
    solutions: {
      collection: 'solution',
      via: 'owner'
    },
    achievements: {
      collection: 'achievement',
      via: 'owner'
    },
    meetings: {
      collection: 'meeting',
      via: 'owner'
    }
  },


  toJSON: function() {
    var obj;
    obj = this.toObject();
    delete obj.password;
    return obj;
  },

  beforeCreate: function(attrs, next) {
    var bcrypt;
    bcrypt = require("bcrypt");
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(attrs.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        attrs.password = hash;
        next();
      });
    });
  }
};
