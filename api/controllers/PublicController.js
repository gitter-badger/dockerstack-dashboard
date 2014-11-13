/**
 * PublicController
 *
 * @description :: Server-side logic for managing templates
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var ds = require('dockerspaniel'),
    changeCase = require('change-case'),
    AWS = require('aws-sdk');


module.exports = {

    /**
     *
     * `TemplateController.index()
     */

    index: function (req, res) {

        sails.log(req.socket._connecting);

        var str = req.session.passport.user,
            user = changeCase.pascal(str);

        return res.view({title: "Dockerstack.org",user:user});
    },

    /**
     * `TemplateController.create()`
     */

    create: function (req, res) {

        var data = req.body.databody;

        var tags = [];

        ds.generateContents(data, tags, function (err, contents) {

            if (err) throw err;

            console.log(contents);

            return res.send("Template Created");


        });
    },

    saveawscred: function (req, res){

        var secretkey=req.body.secretkey,
            accessid=req.body.accessid,
            zone=req.body.zone;

        console.log(secretkey,accessid,zone);

        Public.create({username:req.session.passport.user,service:"AWS",accesskey:accessid,secretkey:secretkey,region:zone}).exec(function (err,ress) {

            if (err){
                console.log(err.message);
            } else {
                sails.log("Credentials Created");
                res.redirect('/index/public');
            }

        })


    },

    checkAwscred: function(res,req){

        var accessid=req.body.accessid,
            secretkey=req.body.secretkey,
            region=req.body.region;

        AWS.config.update({accessKeyId: accessid, secretAccessKey: secretkey, region: region });

        var ec2 = new AWS.EC2();

        var params = {};

        ec2.describeInstances(params, function (err, data) {
            if (err) {
                console.log(err.code, err.stack);
                res.send(err.code);

            } else {

                sails.log("credentials are working");
                res.send("Authorized")
            }
        })


    },

    testing: function (req, res) {

        var room = req.param('room');

        if (req.isSocket){

            sails.sockets.join(req.socket,room);

            User.find().exec(function(err,ress){

                console.log("Ping");

                res.send(ress);

            })


        }else {

            sails.log("Sorry it is not a Socket Request");

        }

    }

};

