var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.static(__dirname + "/app"));

app.listen(PORT, function() {
	console.log("listening on port:" + PORT);
});