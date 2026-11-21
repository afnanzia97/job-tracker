const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

const MY_CV = `
MSc Advanced Computer Science, University of Kent. Machine learning,
deep learning, natural language processing. Python, SQL, JavaScript,
Java, C++. Built a retrieval-augmented generation system with FAISS
and Sentence-Transformers, served through FastAPI. Built a full-stack
job tracker with React, Node, Express and MongoDB. Looking for
graduate machine learning, data science or software engineering roles.
`;

router.post('/', async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ deadline: 1, createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    res.json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;