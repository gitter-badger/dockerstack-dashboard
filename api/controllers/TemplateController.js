/**
 * TemplateController
 *
 * @description :: Server-side logic for managing templates
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var ds = require('dockerspaniel');


module.exports = {

    /**
     *
     * `TemplateController.index()
     */

    index: function (req, res) {

        sails.log(req.socket._connecting);


        return res.view({title: "Dockerstack.org"});
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

