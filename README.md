# Job Tracker

A full-stack app for tracking graduate job applications. Add roles with deadlines, move them through stages from saved to interview and sort by closest deadline.

**Live demo:** https://job-tracker-snowy-mu.vercel.app

<img width="1877" height="845" alt="Image" src="https://github.com/user-attachments/assets/c945359b-242d-48fd-b221-86c34198eccf" />

Note: the backend runs on a free tier that sleeps when idle. The first load can take around 30 seconds.

## Why I built it

I was applying to graduate schemes across several job boards and kept losing track of deadlines. This keeps everything in one place.

## Features

- Add, edit, delete and view applications
- Track status: saved, applied, interview, rejected
- Record deadlines and sort by the soonest
- Data stored in a cloud database

## Tech stack

- **Frontend:** React with Vite, deployed on Vercel
- **Backend:** Node.js and Express, deployed on Render
- **Database:** MongoDB Atlas with Mongoose

## API

| Method | Route | Description |
|---|---|---|
| GET | /api/jobs | List all jobs sorted by deadline |
| POST | /api/jobs | Create a job |
| PUT | /api/jobs/:id | Update a job |
| DELETE | /api/jobs/:id | Delete a job |

## Run it locally

1. Clone the repo and run `npm install` in the root and in `client`
2. Create a `.env` file in the root with `MONGODB_URI=your_connection_string`
3. Start the backend with `npx nodemon index.js`
4. Start the frontend with `cd client` then `npm run dev`

## What's next

- User accounts so each person sees only their own jobs
- Matching job descriptions against a CV using embeddings