// models/Todo.js
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  // associate with a user or project if needed
});

module.exports = mongoose.model('Todo', TodoSchema);
