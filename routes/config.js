/**
 * New node file
 */


module.exports = function(){
  var express = require('express'), 
  	  routes = require('../routes/index'), 
  	  user = require('../routes/user');
  var app = express();

  app.get('/', routes.index);
  app.get('/users', user.list);

  return app;
}();