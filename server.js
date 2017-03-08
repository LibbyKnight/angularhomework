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

mongoose.connect("mongodb://localhost:3000/todos/")

app.listen(PORT, function() {
	console.log("listening on port:" + PORT);
});