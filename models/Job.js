const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: String, default: 'saved' },
  link: String,
  notes: String,
  deadline: Date,
  jobType: { type: String, default: 'graduate-scheme' },
  location: String,
  source: String
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);