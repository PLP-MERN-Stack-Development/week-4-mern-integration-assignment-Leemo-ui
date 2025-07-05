# MERN Blog - React + Vite

## Project Overview

This project is a simple MERN (MongoDB, Express, React, Node.js) blog application frontend built with React and Vite. It allows users to view, create, and edit blog posts with a modern UI.

## Setup Instructions

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173)

> **Note:** Ensure your backend API is running and accessible.

## API Documentation

The frontend expects the following API endpoints from the backend:

- `GET /api/posts` — Fetch all blog posts
- `POST /api/posts` — Create a new blog post
- `GET /api/posts/:id` — Fetch a single post by ID
- `PUT /api/posts/:id` — Update a post by ID
- `DELETE /api/posts/:id` — Delete a post by ID

All endpoints should return JSON.

## Features Implemented

- View a list of all blog posts
- Create a new blog post
- Edit an existing blog post
- Responsive and modern UI with animated navbar logo
- Routing with React Router

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

// Screenshots of the application

