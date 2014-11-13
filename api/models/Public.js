/**
* Public.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      username: {
          type: 'string',
          required: true,
          unique: true
      },
      service: {
          type:'string',
          required: true
      },
      accesskey:{
          type: 'string',
          size:100
      },
      secretkey:{
          type:'string',
          size:100
      },
      region: {
          type: 'string'
      }

  },
    toJSON: function() {
        var obj = this.toObject();
        return obj;
    }
};

