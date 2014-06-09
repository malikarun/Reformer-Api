
/*
UserController

@description :: Server-side logic for managing users
@help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  find: function (req, res) {
    res.send(req.user);
  },
};

  // login: function(req, res) {
  //   var bcrypt;
  //   bcrypt = require("bcrypt");
  //   User.findOne({
  //     email: req.body.email
  //   }).exec(function(err, user) {
  //     if (err) {
  //       res.json({
  //         error: "DB error"
  //       }, 500);
  //     }
  //     if (user) {
  //       bcrypt.compare(req.body.password, user.password, function(err, match) {
  //         if (err) {
  //           res.json({
  //             error: "Server error"
  //           }, 500);
  //         }
  //         if (match) {
  //           req.session.user = user.id;
  //           res.json(user);
  //         } else {
  //           if (req.session.user) {
  //             req.session.user = null;
  //           }
  //           res.json({
  //             error: "Invalid password"
  //           }, 400);
  //         }
  //       });
  //     } else {
  //       res.json({
  //         error: "User not found"
  //       }, 404);
  //     }
  //   });
  // }
