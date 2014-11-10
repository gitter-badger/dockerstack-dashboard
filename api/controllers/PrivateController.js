/**
 * PrivateController
 *
 * @description :: Server-side logic for managing privates
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var changeCase = require('change-case');

module.exports = {

    index: function (req, res) {

        sails.log(req.socket._connecting);

        var str = req.session.passport.user,
            user = changeCase.pascal(str);


        return res.view({title: "Dockerstack.org",user:user});
    }


};

