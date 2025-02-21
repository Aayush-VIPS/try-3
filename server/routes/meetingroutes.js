// server/routes/meetingRoutes.js
const express = require('express');
const router = express.Router();
const Meeting = require('../models/meeting');

// GET all meetings
router.get('/', async (req, res) => {
  try {
    const meetings = await Meeting.find();
    res.json(meetings);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST create a meeting
router.post('/', async (req, res) => {
  try {
    const newMeeting = new Meeting(req.body);
    const savedMeeting = await newMeeting.save();
    res.json(savedMeeting);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
