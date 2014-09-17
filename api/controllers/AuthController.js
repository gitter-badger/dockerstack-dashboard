/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `AuthController.login()`
   */
  login: function (req, res) {

      return res.view({title: "Dockerstack.org"});
  },


  /**
   * `AuthController.logout()`
   */
  logout: function (req, res) {
      {
          req.logout();
          res.redirect('/');
      }
  },


  /**
   * `AuthController.registration()`
   */
  registration: function (req, res) {
    return res.json({
      todo: 'registration() is not implemented yet!'
    });
  }
};

