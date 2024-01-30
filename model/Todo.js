const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
