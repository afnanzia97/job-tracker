require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobs');
const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('Connection error:', err.message));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
