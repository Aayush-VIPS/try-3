// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create a new project
router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.json(newProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
