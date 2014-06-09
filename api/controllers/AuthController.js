
/*
AuthController

@description :: Server-side logic for managing Auths
@help        :: See http://links.sailsjs.org/docs/controllers
 */
var passport;

passport = require("passport");

module.exports = {
  process: function(req, res) {
    passport.authenticate("local", function(err, user, info) {
      if (err || (!user)) {
        res.send(403, {
          message: 'HAHA NOT FOUND'
        });
        return;
      }
      return req.logIn(user, function(err) {
        var current_user = user;
        if (err) {
          return res.send(500, {
            message: 'Something wend wrong'
          });
        }
        return res.send(200, {
          session: req.session.id,
          message: 'Authenticated'
        });
      });
    })(req, res);
  },
  logout: function(req, res) {
    req.logout();
    res.redirect("/");
  },
  github: function(req, res) {
    passport.authenticate("github", {
      failureRedirect: "#login"
    }, function(err, user) {
      req.logIn(user, function(err) {
        if (err) {
          console.log(err);
          res.view("500");
          return;
        }
        res.redirect("/");
      });
    })(req, res);
  },
  facebook: function(req, res) {
    passport.authenticate("facebook", {
      failureRedirect: "#login",
      scope: ["email"]
    }, function(err, user) {
      req.logIn(user, function(err) {
        if (err) {
          console.log(err);
          res.view("500");
          return;
        }
        res.redirect("/");
      });
    })(req, res);
  },
  google: function(req, res) {
    passport.authenticate("google", {
      failureRedirect: "#login",
      scope: ["https://www.googleapis.com/auth/plus.login", "https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"]
    }, function(err, user) {
      req.logIn(user, function(err) {
        if (err) {
          console.log(err);
          res.view("500");
          return;
        }
        res.redirect("/");
      });
    })(req, res);
  },
  twitter: function(req, res) {
    passport.authenticate("twitter", {
      failureRedirect: "#login"
    }, function(err, user) {
      req.logIn(user, function(err) {
        if (err) {
          console.log(err);
          res.view("500");
          return;
        }
        res.redirect("/");
      });
    })(req, res);
  }
};