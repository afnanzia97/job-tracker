const express = require('express');
const app = express();

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

app.get('/api/jobs', (req, res) => {[]
  res.json([{ company: 'Lloyds', role: 'Data Scientist' }]);
});