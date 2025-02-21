// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add any additional fields needed
});

module.exports = mongoose.model('Project', ProjectSchema);
