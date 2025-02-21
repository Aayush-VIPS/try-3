// server/routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const ToDo = require('../models/ToDo');

// GET all todos
router.get('/', async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST create a todo
router.post('/', async (req, res) => {
  try {
    const newToDo = new ToDo(req.body);
    const savedToDo = await newToDo.save();
    res.json(savedToDo);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
