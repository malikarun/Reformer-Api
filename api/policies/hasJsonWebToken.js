'use strict';
/* jshint unused:false */

/**
 * hasJsonWebToken
 *
 * @module      :: Policy
 * @description :: Assumes that your request has an jwt;
 *
 */

var expressJwt = require('express-jwt');
module.exports = expressJwt(sails.config.jwt);