require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobs');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('Connection error:', err.message));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/jobs', jobRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

