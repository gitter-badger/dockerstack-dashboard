/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var Docker = require('dockerode');
var changeCase = require('change-case');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

var docker = new Docker({protocol:'http', host: '192.168.72.134', port: 5555});

//docker.listContainers(function (err, containers) {
//
//    console.log(containers);
//    console.log("Inside");
//});

var appTitle="Dockerstack"

module.exports = {

    home: function(req,res) {



        console.log("Hello");

        return res.view({title: appTitle ,user:req.session.passport.user} );
    },

    dashboard: function(req,res){

        var str = req.session.passport.user,
            user = changeCase.pascal(str);

        sails.log(req.session.passport.user);

        sails.log(req.headers['user-agent']);

        return res.view({title: appTitle, user:user})
    },

    subscribe: function(req,res){




    }
}

