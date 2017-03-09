var express = require('express');
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Promise = require("bluebird");
var app = express();
var PORT = 3000;

mongoose.Promise = Promise;

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static(__dirname + "/app"));
// app.use(express.static("public"));

mongoose.connect("mongodb://localhost/todos/");

var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose Error: ", error);
});

db.once("open", function() {
	console.log("Mongoose connection successful.");
});

app.listen(PORT, function() {
	console.log("listening on port:" + PORT);
});