/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var crypto = require('crypto');

module.exports = {

    attributes: {
        username: {
            type: 'string',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true
        },
        role: {
            type: 'int'

        }
    },

    beforeCreate: function(user, cb) {

        var salt = "!@#$06Rt$5^",
            pass = crypto.createHash('md5').update(user.password + salt).digest('hex');

        user.password = pass;

        cb(null, user);
    }
};

