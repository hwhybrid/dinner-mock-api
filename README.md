# Dinner API

## Overview

The Dinner API is a mock API for managing recipes. This project provides a simple backend using `json-server` to serve recipes data, and a frontend built with React to display and manage the recipes. It demonstrates basic CRUD (Create, Read, Update, Delete) operations and uses Axios for making HTTP requests.

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
	git clone https://github.com/hwhybrid/dinner-mock-api.git
	cd dinner-api
2. Install dependencies:
	```bash
	npm install
3. Start the JSON server:
	```bash
	json-server db_recipes.json --port 3000
4. Start the development server:
	```bash
	npm run dev
5. Open your browser and visit `http://localhost:3000` to see the API and `http://localhost:xxxx (the port shown in your terminal) to see the React app.

### API Endpoints

- GET /recipes: Fetch all recipes.
- POST /recipes: Add a new recipe.
- PUT /recipes/:id: Update an existing recipe.
- DELETE /recipes/:id: Delete a recipe.
