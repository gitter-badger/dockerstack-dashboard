/**
* Private.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      username: {
          type: 'string',
          required: true

      },
      service:{
          type:'string',
          required:true

      },
      hostname:{
          type:'string',
          required:true
      },
      hostuser:{
          type:'string',
          required:true
      },
      hostpassword:{
          type:'string',
          required:true
      },
      hostport:{
          type:'string',
          required:true
      }

  }
};

