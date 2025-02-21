// models/Meeting.js
const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
  title: String,
  startTime: Date,
  endTime: Date,
  // possibly store Google Calendar eventId, etc.
});

module.exports = mongoose.model('Meeting', MeetingSchema);
