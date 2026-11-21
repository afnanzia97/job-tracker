const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: String, default: 'saved' },
  deadline: Date,
  jobType: { type: String, default: 'graduate-scheme' },
  location: String,
  source: String,
  matchScore: Number
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);


module.exports = Job;  