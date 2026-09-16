import { useState, useEffect } from 'react';

function App() {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
  fetch('http://localhost:5000/api/jobs')
    .then((res) => res.json())
    .then((data) => setJobs(data));
}, []);

  return (
    <div>
      <h1>Job Tracker</h1>
            {jobs.map((job) => (
        <li>{job.company} - {job.role}</li>
      ))}
      <p>My applications</p>
      <button>click me</button>
    </div>
  );
}

export default App;