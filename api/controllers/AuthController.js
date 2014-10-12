var jwt = require('jsonwebtoken');
/**
 * Authentication Controller
 *
 * This is merely meant as an example of how your Authentication controller
 * should look. It currently includes the minimum amount of functionality for
 * the basics of Passport.js to work.
 */
var AuthController = {
  /**
   * Create a third-party authentication endpoint
   *
   * @param {Object} req
   * @param {Object} res
   */
  provider: function (req, res) {
    passport.endpoint(req, res);
  },

  /**
   * Create a authentication callback endpoint
   *
   * This endpoint handles everything related to creating and verifying Pass-
   * ports and users, both locally and from third-aprty providers.
   *
   * Passport exposes a login() function on req (also aliased as logIn()) that
   * can be used to establish a login session. When the login operation
   * completes, user will be assigned to req.user.
   *
   * For more information on logging in users in Passport.js, check out:
   * http://passportjs.org/guide/login/
   *
   * @param {Object} req
   * @param {Object} res
   */
  callback: function (req, res) {

    passport.callback(req, res, function (err, user) {

      // Return validation error otherwise raise a server error
      if (err) {
        if (err.code === 'E_VALIDATION') {
          return res.status(err.status).json(err);
        } else {
          return res.serverError(err);
        }
      }

      // Authentication failed
      if (!user) {
        return res.status(401).send('Username or password is incorrect.');
      }

      // sign the email
      var token = jwt.sign({ email: user.email }, sails.config.jwt.secret, sails.config.jwt);

      // send the token back
      res.json({ token: token, user: user });

    });
  },

  /**
   * Disconnect a passport from a user
   *
   * @param {Object} req
   * @param {Object} res
   */
  disconnect: function (req, res) {
    passport.disconnect(req, res);
  }
};

module.exports = AuthController;
