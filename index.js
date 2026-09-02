require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Job = require('./models/Job');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('Connection error:', err.message));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/jobs', async (req, res) => {
  const job = await Job.create(req.body);
  res.json(job);
});

app.post('/api/jobs', async (req, res) => {
  const job = await Job.create(req.body);
  res.json(job);
}); 

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

app.get('/api/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});