/**
 * isAuthenticated
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {
  console.log(req.session);
  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if (req.session.authenticated == true)  {
    return next();
  }
  else {
    // User is not allowed
    // (default res.forbidden() behavior can be overridden in `config/403.js`)
    if(process.env.NODE_ENV == 'development'){
      return res.redirect('http://localhost:1337');
    }
    else{
      return res.redirect('http://procur-core-staging.herokuapp.com');
    }
  }



  //return res.forbidden('You are not permitted to perform this action.');
};
