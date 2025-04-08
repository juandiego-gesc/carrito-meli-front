# Carrito Meli

Carrito Meli is a React-based e-commerce shopping cart application. It allows users to browse products, add and remove items to/from their cart, and perform user authentication using JWT.

## Table of Contents

- [Carrito Meli](#carrito-meli)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the App](#running-the-app)
  - [Project Structure](#project-structure)
  - [Environment Variables](#environment-variables)
  - [Authentication](#authentication)
  - [API Services](#api-services)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Features

- User authentication (login & registration) using JSON Web Tokens (JWT)
- Protected routes for authenticated users
- A shopping cart UI supporting add, update, and delete operations
- Product browsing with details and prices
- Responsive design powered by Tailwind CSS

## Tech Stack

- **React** – Front-end framework
- **React Router** – Page routing & protected routes
- **Axios** – HTTP client for API calls
- **Tailwind CSS** – Utility-first CSS framework
- **FastAPI** (backend) – API server for authentication, products, and cart management
- **Context API** - State management for authentication and cart

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14+ installed  
- A functioning FastAPI backend running at the API base URL (default: `http://127.0.0.1:8000`)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your_username/carrito-meli.git
   cd carrito-meli
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

### Running the App

To run the app in development mode:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page reloads on code changes.

## Project Structure

```
carrito-meli/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── cartItem.js
│   │   ├── cartTab.js
│   │   ├── header.js
│   │   ├── layout.js
│   │   ├── product.js
│   │   └── protectedRoute.js
│   ├── contexts/
│   │   ├── authContext.js
│   │   └── cartContext.js
│   ├── pages/
│   │   ├── home.js
│   │   └── login.js
│   ├── service/
│   │   ├── api.js
│   │   ├── cartService.js
│   │   ├── productService.js
│   │   └── userService.js
│   ├── App.js
│   └── ...
├── tailwind.config.js
├── package.json
├── .env.local
└── README.md
```

## Environment Variables

Create a `.env.local` file in the project root with the following content, if not already defined:

```bash
REACT_APP_API_BASE_URL=http://127.0.0.1:8000
```

This variable sets the base URL for API requests.

## Authentication

User authentication is handled via JWT. When a user logs in, a JWT is issued and stored in `localStorage`. Axios interceptors in [api.js](src/service/api.js) verify if a token is valid on every API response. If a token has expired or is invalid, the interceptor automatically logs the user out by removing the token and redirecting to the login page.

## API Services

API calls are centralized in the `/src/service/` folder:
- [api.js](src/service/api.js) – Configures Axios with a base URL and interceptors.
- [userService.js](src/service/userService.js) – Handles user authentication and management.
- [productService.js](src/service/productService.js) – Fetches product data.
- [cartService.js](src/service/cartService.js) – Manages shopping cart operations.



## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements


The project structure and certain styling elements were informed by [HoanghoDev's youtube_v2 repository](https://github.com/HoanghoDev/youtube_v2).
