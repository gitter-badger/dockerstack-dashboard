/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var passport = require("passport");


module.exports = {



    /**
     * `AuthController.login()`
     */

    login: function (req, res) {

        console.log("We are in Login function");

        return res.view({title: "Dockerstack.org"});
    },


    /**
     * `AuthController.logout()`
     */

    logout: function (req, res) {
        {
            req.logout();
            res.redirect('/auth/login');
        }
    },

    process: function(req,res){

        passport.authenticate('localauth', function(err, user, info){

            sails.log(user, "Here in AuthController Process Function");


            if ((err) || (!user)) {

                sails.log("Authcontroller function and No User Found!!!");

                res.redirect('/');

                return;
            }
            req.logIn(user, function(err){

                if (err) res.redirect('/');

                sails.log("Authcontroller function and  User Found!!!");

                return res.redirect('/index/dashboard');
            });
        })(req, res);
    },


    /**
     * `AuthController.registration()`
     */

    registration: function (req, res) {

        var name = req.body.username;
        var password=req.body.password;

        User.create({username:"admin",password:"password",role:5}).exec(function (err,ress){

            console.log(res);

            res.send("User created")
        })


        sails.log(name,password);
        console.log("You are in the registration module")
    }
};

