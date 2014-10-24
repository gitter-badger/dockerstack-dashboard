/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var Docker = require('dockerode');
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

        return res.view({title: appTitle});
    },

    dashboard: function(req,res){

        sails.log(req.session.passport.user);

        return res.view({title: appTitle})
    },

    subscribe: function(req,res){




    }
}

