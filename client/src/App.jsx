import { useState, useEffect } from 'react';

function App() {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [deadline, setDeadline] = useState('');
  
  useEffect(() => {
  fetch('http://localhost:5000/api/jobs')
    .then((res) => res.json())
    .then((data) => setJobs(data));
}, []);

const addJob = () => {
  if (!company || !role) return;
  fetch('http://localhost:5000/api/jobs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ company, role, deadline })
  })
    .then((res) => res.json())
    .then((newJob) => {
      setJobs([...jobs, newJob]);
      setCompany('');
      setRole('');
      setDeadline('');
    });
};
 const deleteJob = (id) => {
  fetch(`http://localhost:5000/api/jobs/${id}`, { method: 'DELETE' })
    .then(() => setJobs(jobs.filter((job) => job._id !== id)));
};
 const updateStatus = (id, newStatus) => {
  fetch(`http://localhost:5000/api/jobs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: newStatus })
  })
    .then((res) => res.json())
    .then((updated) => {
      setJobs(jobs.map((job) => (job._id === id ? updated : job)));
    });
};
  return (
    <div>
      <h1>Job Tracker</h1>
      <input
      value={company}
      onChange={(e) => setCompany(e.target.value)}
      placeholder="Company"
      />

      <input
      value={role}
      onChange={(e) => setRole(e.target.value)}
      placeholder="Role"
      />
      <input
      type="date"
      value={deadline}
      onChange={(e) => setDeadline(e.target.value)}
      /> 
      <p>My Applications</p>
      {jobs.map((job) => (
      <li key={job._id}>
  <strong>{job.company}</strong> - {job.role}
  {job.deadline && <span> | Due: {job.deadline.slice(0, 10)}</span>}
  <select
    value={job.status}
    onChange={(e) => updateStatus(job._id, e.target.value)}
  >
    <option value="saved">Saved</option>
    <option value="applied">Applied</option>
    <option value="interview">Interview</option>
    <option value="rejected">Rejected</option>
  </select>
  <button onClick={() => deleteJob(job._id)}>Delete</button>
</li>
      ))}
      <button onClick={addJob}>Add job</button>
    </div>
  );
}

export default App;