###
Gets the current user from session, or returns 403
###
module.exports = (req, res, next) ->

  # User is allowed, proceed to controller
  if req.session.user
    req.session.userId = req.session.user
    next()

  # User is not allowed
  else
    res.send "You are not permitted to perform this action.", 403