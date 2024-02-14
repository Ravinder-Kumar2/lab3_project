

---

# Recipe API

This Recipe API is a simple backend service developed with Node.js, Express, and MongoDB. It facilitates the creation, retrieval, and deletion of recipes.

## Features

- **List Recipes**: Retrieve all recipes from the database.
- **Create Recipe**: Add a new recipe to the database.
- **Delete Recipe**: Remove an existing recipe from the database by ID.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (Recommended: version 14.x or newer)
- npm (Node Package Manager)
- MongoDB account and a database set up on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Installation

### Clone the Project

Download this project to your local machine. Open your terminal, navigate to the project directory, and follow the steps below.

### Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

This command installs Express, Mongoose, body-parser, cors, and other necessary packages as defined in `package.json`.

### Configure MongoDB

Create a `.env` file in the root directory of your project and specify your MongoDB URI:

```env
MONGODB_URI=your_mongodb_uri
```

Replace `your_mongodb_uri` with your actual MongoDB connection string from MongoDB Atlas.

### Running the Server

To start the server, run:

```bash
npm start
```

The server will begin listening on the port specified in your environment (default: 3000), making it accessible at `http://localhost:3000`.

## API Endpoints

### List All Recipes

- **Endpoint:** `GET /api/recipes/get`
- **Description:** Retrieves all recipes stored in the database.

### Create a Recipe

- **Endpoint:** `POST /api/recipes`
- **Description:** Adds a new recipe to the database.
- **Body Example:**

```json
{
  "recipeName": "Chocolate Cake",
  "gradient": "Flour, Sugar, Cocoa Powder, Baking Powder, Eggs, Milk, Vegetable Oil, Vanilla Extract"
}
```

### Delete a Recipe

- **Endpoint:** `POST /api/recipes/delete`
- **Description:** Deletes a recipe by ID.
- **Body Example:**

```json
{
  "id": "recipeId"
}
```

Replace `recipeId` with the actual ID of the recipe you wish to delete.



