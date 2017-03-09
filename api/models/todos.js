var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var db = require("../server.js");


var TodosSchema = new Schema({


  todoItem: {

    todoItem: String,
    required: true

  },

   dueDate: {

    type: Date,
    required: true

  },

   completed: {

    type: Boolean,
    default: false

  }

 
});

var Todos = mongoose.model("Todos", TodosSchema);

module.exports = Todos;