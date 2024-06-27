# Next.js Examples: SSR and Hydration

This repository contains examples of server-side rendering (SSR) and client-side hydration using Next.js and Tailwind CSS. These examples demonstrate how to implement and style pages in a Next.js application using these techniques.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [SSR Example](#ssr-example)
- [Hydration Example](#hydration-example)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Server-side rendering (SSR) and hydration are powerful techniques in modern web development. SSR allows you to render pages on the server for each request, providing dynamic content and improved SEO. Hydration is the process of making server-rendered HTML interactive on the client side.

This project illustrates how to use these techniques in a Next.js application and style them with Tailwind CSS.

## Features

- Server-side rendering (SSR) example
- Client-side hydration example
- Styled with Tailwind CSS
- Consistent layout using a reusable `Layout` component

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nextjs-ssr-hydration-examples.git
   cd nextjs-ssr-hydration-examples
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Project Structure

The project structure is organized as follows:
├── app
│ ├── components
│ │ └── Layout.tsx
│ ├── hydration
│ │ └── page.tsx
│ ├── ssr
│ │ └── page.tsx
│ ├── page.tsx
│ └── layout.tsx
├── public
│ └── ...
├── styles
│ └── globals.css
├── tailwind.config.js
├── package.json
└── README.md

### Explanation:

- **`app/`**: This directory contains your main application code.

  - **`components/`**: Contains reusable React components used throughout your application. Example: `Layout.tsx`.
  - **`hydration/`**: Contains the client-side hydration example. Example: `page.tsx`.
  - **`ssr/`**: Contains the server-side rendering (SSR) example. Example: `page.tsx`.
  - **`page.tsx`**: Entry point of your Next.js application.
  - **`layout.tsx`**: Layout component used to wrap pages with consistent styles and structure.

- **`public/`**: Directory for static assets like images, fonts, etc.

- **`styles/`**: Contains global CSS styles. Example: `globals.css`.

- **`tailwind.config.js`**: Configuration file for Tailwind CSS.

- **`package.json`**: Configuration file for npm dependencies and scripts.

- **`README.md`**: The file you are currently reading, containing project information and instructions.

## Technologies Used

This project uses the following technologies:

- **[Next.js](https://nextjs.org/)**: React framework for server-rendered applications.
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
