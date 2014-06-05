var app = require("express")();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/touch', function(req, res){
  res.sendfile('phone.html');
});

app.get('/'	)


io.on('connection', function(socket){
	
	console.log("user connected: " + socket.id);
	socket.send("set id", socket.id);

	socket.on("tuio 1.0", 
		function (msg){
			console.log(msg);
		}
	);
	socket.on("disconnnect",
		function (){
			console.log("user disconnected");
		}
		);
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});