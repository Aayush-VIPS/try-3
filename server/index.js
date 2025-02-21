require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const projectRoutes = require('./routes/ProjectRoutes');
app.use('/api/projects', projectRoutes);
const meetingRoutes = require('./routes/meetingroutes');
app.use('/api/projects', meetingRoutes);
const todoRoutes = require('./routes/todoroutes');
app.use('/api/projects', todoRoutes);


// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Example route
app.get('/', (req, res) => {
  res.send('Hello from MERN Calendar App');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
