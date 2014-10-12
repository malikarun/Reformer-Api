/**
 * JWT configuration
 * (sails.config.jwt)
 *
 * These are passed as options to express-jwt (https://github.com/auth0/express-jwt) to verify JWT tokens
 * on requests and the secret is passed to jsonwebtoken (https://github.com/auth0/node-jsonwebtoken) for token
 * generation.
 *
 */

module.exports.jwt = {
  secret: 'WhY n0t Us3 Th1S 1ne!',
  algorithm: 'HS256',
  expiresInMinutes: 20160
};