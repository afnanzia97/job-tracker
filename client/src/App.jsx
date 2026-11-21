import { useState, useEffect } from 'react';
const API = 'https://job-tracker-whht.onrender.com';

function App() {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    fetch(`${API}/api/jobs`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const addJob = () => {
    if (!company || !role) return;
    fetch(`${API}/api/jobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ company, role, deadline })
    })
      .then((res) => res.json())
      .then((newJob) => {
        if (newJob.error) return alert(newJob.error);
        setJobs([...jobs, newJob]);
        setCompany('');
        setRole('');
        setDeadline('');
      });
  };

  const deleteJob = (id) => {
    fetch(`${API}/api/jobs/${id}`, { method: 'DELETE' })
      .then(() => setJobs(jobs.filter((job) => job._id !== id)));
  };

  const updateStatus = (id, newStatus) => {
    fetch(`${API}/api/jobs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    })
      .then((res) => res.json())
      .then((updated) => {
        if (updated.error) return alert(updated.error);
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