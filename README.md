# CityU ITC Internship Tracker

A React + JavaScript front-end side project for a CityU Computer Science student applying for ITC/STEM internships. The app demonstrates practical React, JavaScript, HTML, CSS, Fetch API, JSON Server, localStorage, and Git workflow skills without TypeScript, Tailwind, authentication, a real backend, or a database service.

## Features

- Fetches internship records from JSON Server at `http://localhost:3001/internships`
- Displays internship cards with company, role, requirements, skills, deadline, vacancies, honorarium, and application details
- Searches by company, job title, description, requirements, and skills
- Filters by category
- Sorts by deadline soonest, company A-Z, start date earliest, and most vacancies
- Saves internships with localStorage
- Tracks application status with localStorage
- Shows saved internships on a separate page
- Estimates ITC allowance with `Math.min(days, 90) * 383`
- Includes loading, error, and empty states
- Uses responsive CSS for desktop and mobile layouts

## Tech Stack

- React with Vite
- JavaScript
- HTML
- CSS
- React Router
- Fetch API
- JSON Server
- localStorage
- Git

## Setup

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

Open the local Vite URL shown in the terminal, usually `http://localhost:5173`.

## JSON Server

Start JSON Server in a second terminal:

```bash
npx json-server --watch database.json --port 3001
```

The internships endpoint is:

```text
http://localhost:3001/internships
```

You can also run the included script:

```bash
npm run server
```

## Screenshots

### Home Page

![Home page screenshot](screenshots/home.png)

### Saved Internship Card

![Saved internship card screenshot](screenshots/saved-internship.png)

### ITC Allowance Calculator

![ITC allowance calculator screenshot](screenshots/calculator.png)

## Future Improvements

- Add deadline urgency labels
- Add export to CSV for saved internships
- Add notes per internship in localStorage
- Add a simple dashboard chart for application statuses
- Add unit tests for filtering, sorting, and storage utilities
