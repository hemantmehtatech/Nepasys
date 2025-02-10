# TechTraining Platform

A comprehensive IT training and technology services platform built with React, Express, and TypeScript.

## Features

- Professional course listings
- Technology service offerings
- Contact and inquiry system
- Newsletter subscription
- Responsive design
- Team and testimonials showcase

## Getting Started

### Prerequisites

- Node.js (v20.x or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
```bash
cd tech-training-platform
```

3. Install dependencies:
```bash
npm install
```

### Development

To run the development server:

```bash
npm run dev
```

This will start both the frontend and backend servers. The application will be available at `http://localhost:5000`.

### Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

- `/client` - Frontend React application
  - `/src/components` - Reusable React components
  - `/src/pages` - Page components
  - `/src/lib` - Utility functions and configurations
- `/server` - Backend Express server
- `/shared` - Shared TypeScript types and schemas

## Tech Stack

- Frontend:
  - React
  - TypeScript
  - TanStack Query
  - Tailwind CSS
  - shadcn/ui components
  - Wouter for routing

- Backend:
  - Express.js
  - TypeScript
  - In-memory storage (can be extended to use a database)

## Contributing

Feel free to submit issues and enhancement requests!
