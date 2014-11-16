/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */


var cronJob = require('cron').CronJob,
    SSH = require('simple-ssh'),
    fs = require('fs'),
    sleep=require('sleep');

//var cpucore=null;
//cpucore.global = global;



module.exports.bootstrap = function(cb) {



    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

    User.create({username:"admin",password:"password",role:5}).exec(function (err,ress){

        console.log(ress);

        sails.log("Admin User created")
    })

    croncheck()



    function croncheck(){
        new cronJob('* * * * * *', function(){
            console.log('You will see this message every second');

            Private.find().exec(function(err,succ){

                if(err) throw err.message;

                    console.log(succ);

                  for (var i = 0; i < succ.length; i++) {

                        /*sails.log(succ.length, m);

                        var host = succ[m].hostname,
                            user = succ[m].username;

                        sails.log(host, user);*/

                        var host = succ[i].hostname,
                            user = succ[i].username;

                        sails.log(host, user);

                        var ssh = new SSH({
                            host: succ[i].hostname,
                            port: succ[i].hostport,
                            user: succ[i].hostuser,
                            pass: succ[i].hostpassword
                        });
                        console.log(ssh.host);

                        ssh.exec('nproc', {
                            out: function (cpucore) {
                                console.log(cpucore)
                                //global.cpucore = cpucore;
                                fs.writeFile("/tmp/" + user + host + "cpucore", cpucore, function (err) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log("The file was saved!",host);
                                    }
                                });

                            }
                        }).exec('cat /proc/meminfo | grep MemTotal | cut -d":" -f2| cut -d"k" -f1|tr -d " "', {
                                out: function (memtotal) {
                                    console.log(memtotal);
                                    fs.writeFile("/tmp/" + user + host + "memtotal", memtotal, function (err) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            console.log("The file was saved!",host);
                                        }
                                    });
                                }
                            }).exec('cat /proc/meminfo | grep MemFree | cut -d":" -f2| cut -d"k" -f1|tr -d " "', {
                                out: function (memfree) {
                                    console.log(memfree);
                                    fs.writeFile("/tmp/" + user + host + "memfree", memfree, function (err) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            console.log("The file was saved!",host);
                                        }
                                    });
                                }
                            }).exec('uname -i', {
                                out: function (arc) {
                                    console.log(arc);
                                    fs.writeFile("/tmp/" + user + host + "arc", arc, function (err) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            console.log("The file was saved!",host);
                                        }
                                    });
                                }
                            }).start();

                      fs.readFile("/tmp/" + user + host + "cpucore", 'utf8', function (err, cpucore) {
                          if (err) {
                              return console.log(err);
                          }
                          fs.readFile("/tmp/" + user + host + "memtotal", 'utf8', function (err, memtotal) {
                              if (err) {
                                  return console.log(err);
                              }

                              fs.readFile("/tmp/" + user + host + "memfree", 'utf8', function (err, memfree) {
                                  if (err) {
                                      return console.log(err);
                                  }
                                  fs.readFile("/tmp/" + user + host + "arc", 'utf8', function (err, arctype) {
                                      if (err) {
                                          return console.log(err);
                                      }

                                      Resource.find({hostip: host}).exec(function (err, suc) {
                                          if (err) {
                                              sails.log(err.message);
                                          } else if (suc == "") {

                                              sails.log("This is Null");

                                              Resource.create({username: user, hostip: host, cpu: cpucore, totalram: memtotal, leftram: memfree, arctype: arctype}).exec(function (err, succc) {
                                                  if (err) {

                                                  } else {
                                                      sails.log("Data Created for ip", host);
                                                  }
                                              })

                                          } else {
                                              sails.log(suc);
                                              sails.log("We are here in Resources update function");

                                              Resource.update({username: user, hostip: host}, {cpu: cpucore, totalram: memtotal, leftram: memfree, arctype: arctype}).exec(function (err, succc) {
                                                  if (err) {

                                                  } else {
                                                      sails.log("Data Updated for ip", host);

                                                  }
                                              })
                                          }
                                      })
                                      console.log(i);
                                      console.log(host, user, cpucore, memtotal, memfree, arctype);

                                  })
                              })
                          })

                      })


                        //console.log(host, user);
                        console.log(i,"HEre");


                  }


            })



        }, null, true, "America/Los_Angeles");
    }

    cb();

};
