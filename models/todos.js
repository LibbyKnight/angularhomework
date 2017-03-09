// Require mongoose

var mongoose = require("mongoose");

// Create Schema class

var Schema = mongoose.Schema;



// Create article schema

var TodosSchema = new Schema({

  // title is a required string

  duetoday: {

    type: String,

    required: true

  },

  // link is a required string

  duelater: {

    type: String,

    required: true

  },

  // This only saves one note's ObjectId, ref refers to the Note model

  completed: {

    type: Schema.Types.ObjectId,

    ref: "Note"

  },

   overdue: {

    type: Schema.Types.ObjectId,

    ref: "Note"

  }

});



// Create the Article model with the ArticleSchema

var Todos = mongoose.model("Todos", TodosSchema);



// Export the model

module.exports = Todos;