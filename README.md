# Grocery Planner

## Description

The Grocery Planner Web App is a web-based application that helps users organize and manage their recipes efficiently. Users can access a personalised recipe library where they can add and view their favourite go-to recipes. Users can also plan their meals for the week, and automatically generate a grocery list to help them with their weekly shop.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [File structure of react components](#file-structure-of-react-components)
- [Database structure](#database-structure)
- [Contact](#contact)

## Installation

### Prerequisites

- React
- Node.js
- Express.js
- MySQL

### Steps

1. Clone the repository:

    ```sh
    git clone https://github.com/clio-petersdorff/fspt27-mvp.git 
    ```

2. Navigate to the project directory:

    ```sh
    cd fspt27-mvp/grocery-list-generator
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

4. Create a `.env` file in the root directory and set up the necessary environment variables:

    ```sh
    DB_HOST = '127.0.0.1'
    DB_USER = 'root'
    DB_PASS = YOUR_PASSWORD
    DB_NAME = 'recipes'
    ```

5. Start the development server:

    ```sh
    npm run migrate
    npm start
    ```

## Usage

### Running the project

1. Navigate to the project directory:

    ```sh
    cd client
    ```

2. Install dependencies

    ```sh
    npm install
    ```

3. Run the application:

    ```sh
    npm run dev
    ```

## File structure of react components

- App.jsx
    - Library.jsx
    - CreateRecipe.jsx
    - GroceryList.jsx

### App.jsx

All Routing is handled here.

### Library.jsx

This component displays all saved recipes. Users can click on recipe cards to see recipe descriptions and they can add recipes to their meal plan by selected them.
When a user clicks on the **Create new recipe** button, they are redirected to the CreateRecipe.jsx. When a user clicks on the **generate grocery list** button, all items currently in the GroceryList DB table are removed, and the table is repopulated based on the selected recipes. User is then redirected to the GroceryList.jsx component.

### CreateRecipe.jsx

This component contains a form which allows users to create their own recipes.

### GroceryList.jsx

This component displays all items in the GroceryList DB table.

## Database structure

The DB consists of 3 tables:

1. Recipes: Stores the title, image url, and description of a recipe. Each recipe has a unique id.
2. Ingredients: Stores the ingredients contained in each recipe (ingredient name, amount, measure). Each ingredient has a unique ingredient id and is linked to the recipes table through a recipe id.
3. GroceryList: This table is filled out when user generates a grocery list. It contains ingredient name, amount and measure as well as a unique grocery item id.

## Contact

- For support or inquiries, contact [cvonpetersdorff@gmail.com] or create an issue in the repository.
