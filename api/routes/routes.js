var Todo = require('../models/todos.js');
var express = require('express');
var router = express.Router();



router.get('/', function(req, res) {

	Todo.find({}, function(err, data) {

		if (err) console.log(error);
		response.json(data);

	}); 

});

router.post('/', function(req, res) {

	var newItem = new Todo({

		todoItem: req.body.todoItem,
		dueDate: req.body.dueDate

	});

	newItem.save(function (err, newItem) {

		if (err) console.log(error);

	});

});

router.put('/', function(req, res) {

	Todo.findByIdAndUpdate(req.body._id, {completed: req.body.completed}, function(err, data) {
		if (err) console.log(error);

	});

}); 

module.exports = router;