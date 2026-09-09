const express = require('express');
const router = express.Router();
const Job = require('../models/Job');


router.post('/', async (req, res) => {
  const job = await Job.create(req.body);
  res.json(job);
}); 

router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.delete('/:id', async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  res.json(job);
});
router.put('/:id', async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(job);
});


module.exports = router;