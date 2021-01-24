 // server.js
 var express = require('express');
 var path = require('path');
 var serveStatic = require('serve-static');
 var app = express();
 var history = require('connect-history-api-fallback');
 
 app.use(history({
   // verbose: true
 }));
 
 app.use(express.static(__dirname + '/dist'));
 
 // var port = process.env.PORT || 8080;
 
 app.set('port', (process.env.PORT || 8080));
 
 
 // app.listen(port);
 
 app.listen(app.get('port'), () => {
   console.log(`ENV: ${process.env.NODE_ENV}`);
   console.log(`Derp is running at localhost: ${app.get('port')}`);
 });
 
 // console.log('server started '+ port);