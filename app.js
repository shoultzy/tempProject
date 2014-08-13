var express = require('express');
var port = process.env.PORT || 5000;
var app = express();
var io = require('socket.io').listen(5555);

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/public/index.html');
}).configure(function() {
    app.use('/', express.static(__dirname + '/public/'));
}).listen(port);

//var io = require('socket.io').listen(port);
//var mongoClient = require('mongodb').MongoClient;

io.sockets.on('connection', function(socket) {
	
	socket.emit('news', { hello: 'world' });
	console.log('onConnection');
});
/*
mongoClient.connect('mongodb://heroku_app26689182:9327c0fof9dkb5b6tgdso8l1p@ds053449.mongolab.com:53449/heroku_app26689182/user_worldData', function(err, db) {
	//initCollection(db);
});*/