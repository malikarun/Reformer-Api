###
UserController

@description :: Server-side logic for managing users
@help        :: See http://links.sailsjs.org/docs/controllers
###
module.exports =
  login: (req, res) ->
    bcrypt = require("bcrypt")
    User.findOne(email: req.body.email).exec (err, user) ->
      if err
        res.json
          error: "DB error"
        , 500
      if user
        bcrypt.compare req.body.password, user.password, (err, match) ->
          if err
            res.json
              error: "Server error"
            , 500
          if match
            # password match
            req.session.user = user.id
            res.json user
          else
            # invalid password
            req.session.user = null  if req.session.user
            res.json
              error: "Invalid password"
            , 400
          return
      else
        res.json
          error: "User not found"
        , 404
      return
    return