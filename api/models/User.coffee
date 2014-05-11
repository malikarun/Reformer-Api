###
User.coffee

@description :: TODO: You might write a short summary of how this model works and what it represents here.
@docs        :: http://sailsjs.org/#!documentation/models
###
module.exports =
  attributes:
    firstName:
      type: "string"

    lastName:
      type: "string"

    email:
      type: "string"
      email: true
      unique: true
      required: true

    username:
      unique: true
      type: "string"

    password:
      type: "string"
      required: true

  #Override toJSON method to remove password from API
  toJSON: ->
    obj = @toObject()
    delete obj.password
    obj

  beforeCreate: (attrs, next) ->
    bcrypt = require("bcrypt")
    bcrypt.genSalt 10, (err, salt) ->
      return next(err)  if err
      bcrypt.hash attrs.password, salt, (err, hash) ->
        return next(err)  if err
        attrs.password = hash
        next()
        return
      return
    return