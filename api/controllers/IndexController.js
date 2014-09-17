/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var Docker = require('dockerode');

var docker = new Docker({protocol:'http', host: '192.168.72.134', port: 5555});

module.exports = {

    home: function(req,res) {

        docker.listContainers(function (err, containers) {

            console.log(containers);
            console.log("Inside");
        });

        console.log("Hello");

        return res.view({title: "Dockerstack.org"});
    }
}

