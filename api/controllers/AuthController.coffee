###
AuthController

@description :: Server-side logic for managing Auths
@help        :: See http://links.sailsjs.org/docs/controllers
###

passport = require("passport")
module.exports =
  process: (req, res) ->
    passport.authenticate("local", (err, user, info) ->
      if (err) or (not user)
        res.send 403, message: 'HAHA NOT FOUND'
        return
      req.logIn user, (err) ->
        return res.send 500, message: 'Something wend wrong'  if err
        return res.send 200, message: 'Authenticated'
    ) req, res
    return

  logout: (req, res) ->
    req.logout()
    res.redirect "/"
    return


  # http://developer.github.com/v3/
  # http://developer.github.com/v3/oauth/#scopes
  github: (req, res) ->
    passport.authenticate("github",
      failureRedirect: "#login"
    , (err, user) ->
      req.logIn user, (err) ->
        if err
          console.log err
          res.view "500"
          return
        res.redirect "/"
        return
      return
    ) req, res
    return


  # https://developers.facebook.com/docs/
  # https://developers.facebook.com/docs/reference/login/
  facebook: (req, res) ->
    passport.authenticate("facebook",
      failureRedirect: "#login"
      scope: ["email"]
    , (err, user) ->
      req.logIn user, (err) ->
        if err
          console.log err
          res.view "500"
          return
        res.redirect "/"
        return
      return
    ) req, res
    return


  # https://developers.google.com/
  # https://developers.google.com/accounts/docs/OAuth2Login#scope-param
  google: (req, res) ->
    passport.authenticate("google",
      failureRedirect: "#login"
      scope: [
        "https://www.googleapis.com/auth/plus.login"
        "https://www.googleapis.com/auth/userinfo.profile"
        "https://www.googleapis.com/auth/userinfo.email"
      ]
    , (err, user) ->
      req.logIn user, (err) ->
        if err
          console.log err
          res.view "500"
          return
        res.redirect "/"
        return
      return
    ) req, res
    return


  # https://apps.twitter.com/
  # https://apps.twitter.com/app/new
  twitter: (req, res) ->
    passport.authenticate("twitter",
      failureRedirect: "#login"
    , (err, user) ->
      req.logIn user, (err) ->
        if err
          console.log err
          res.view "500"
          return
        res.redirect "/"
        return
      return
    ) req, res
    return