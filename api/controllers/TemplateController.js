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
  index: function(req, res){

      var data = {
          from: 'ubuntu:12.04',
          maintainer: 'John Smith',
          steps: [
              {
                  instruction: 'run',
                  arguments: 'apt-get update'
              },
              {
                  instruction: 'run',
                  arguments: 'apt-get install -y nodejs',
                  only: [
                      'nodejs'
                  ]
              },
              {
                  instruction: 'cmd',
                  arguments: 'echo $hello',
                  comment:'update'
              },
              {
                  instruction: 'run',
                  arguments: 'apt-get install -y mysql-server mysql-client',
                  unless: [
                      'no_database'
                  ]
              }
          ]
      };


      return res.view({title: "Dockerstack.org"});
  },

  /**
   * `TemplateController.create()`
   */
  create: function (req, res) {
      var data =req.body.databody;

      var tags=[];

      ds.generateContents(data,tags, function(err, contents) {
          if (err) throw err;
          console.log(contents);
      });

      return res.json({
      todo: 'create() is not implemented yet!'
    });
  }
};

