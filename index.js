/* SETUP */
// Load up express's web app tool
var express = require('express');
var app = express();
var path = require('path');

/* CONFIUGRATION */
// Establish connection port 
var port = process.env.PORT || 8888;

//Serve up static files from public directory
app.use(express.static('public'));

/* ENDPOINT DEFINITIONS: */
// SPA go to index
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
}).listen(port);

console.log('server running om port: ' + port + ':)');