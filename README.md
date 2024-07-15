# Recipe App

This project is a web-based recipe application that allows users to search for recipes by name and displays detailed information including ingredients, preparation instructions, and cooking times. If a recipe is not found, the app provides feedback to the user.

## Features

- **Search Recipes**: Users can enter a recipe name in the input field and click "Start Cooking" to search for recipes.
- **Display Recipe Details**: Upon successful search, the app displays the recipe name, an image, preparation time, total cooking time, servings, ingredients with measurements, and step-by-step instructions.
- **Error Handling**: If the entered recipe name does not match any available recipes in the database, the app shows an error message indicating that the recipe was not found.
- **Responsive Design**: The application's UI is designed to be responsive, adapting to different screen sizes and devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript

  - **HTML**: Structure of the webpage.
  - **CSS**: Styling of the UI for visual appeal.
  - **JavaScript**: Fetches data from the backend API and dynamically updates the UI based on the retrieved data.

- **Backend**: Node.js, Express.js
  - **Node.js**: JavaScript runtime environment.
  - **Express.js**: Web application framework for Node.js, used to handle routing and API requests.

## Directory Structure

- **index.html**: Main HTML file defining the structure of the webpage.
- **style.css**: CSS file for styling the UI elements.
- **main.js**: JavaScript file containing client-side logic, including event handling, API requests, and dynamic content rendering.
- **server.js**: Node.js file defining the server logic, handling API requests, and serving static files (HTML, CSS, images).

## Setup Instructions

1. **Clone Repository**: `git clone <repository-url>`
2. **Install Dependencies**: `npm install`
3. **Run Server**: `node server.js`
4. **Access Application**: Open a web browser and go to `http://localhost:8000`
