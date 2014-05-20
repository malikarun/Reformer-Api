
/*
User.coffee

@description :: TODO: You might write a short summary of how this model works and what it represents here.
@docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
  attributes: {
    firstName: {
      type: "string"
    },
    lastName: {
      type: "string"
    },
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
