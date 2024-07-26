# Case Management System

This project is a simple Case Management System built using Node.js, Express, MongoDB, and EJS. It displays a list of cases stored in a MongoDB database and features a dark-themed UI with a scrolling marquee title.

## Features

- Display cases stored in MongoDB
- Dark-themed UI to reduce eye strain
- Scrolling marquee title

## Project Structure

case-website/
│
├── node_modules/ # Node.js modules
├── public/ # Public folder for static assets
│ ├── css/
│ │ └── styles.css # Custom CSS for styling
│ └── js/ # (Optional) JavaScript files
│
├── views/ # Views for rendering HTML
│ └── index.ejs # Main view for displaying cases
│
├── DBModels/ # Mongoose schemas
│ └── Case.js # Case schema
│
├── config.json # Configuration file
├── package.json # Node.js project metadata
├── package-lock.json # Exact versions of installed packages
└── server.js # Main server file


## Prerequisites

- Node.js installed
- MongoDB database setup

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/case-website.git
    cd case-website
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Configure MongoDB connection:

    - Open `config.json` and replace `"your_mongodb_connection_string"` with your MongoDB connection string.

    ```json
    {
      "mongoUri": "your_mongodb_connection_string"
    }
    ```

4. Start the server:

    ```bash
    node server.js
    ```

5. Open your browser and navigate to `http://localhost:3000` to see the case management system in action.

## File Descriptions

### `server.js`
- Main server file that sets up the Express application, connects to MongoDB, and defines the route to render the main page.

### `DBModels/Case.js`
- Mongoose schema for the Case model. Defines the structure and types of data stored for each case.

### `views/index.ejs`
- EJS template for the main page. Renders the list of cases in an HTML table with a dark theme.

### `public/css/styles.css`
- Custom CSS for styling the website. Includes styles for the dark theme and marquee title.

### `config.json`
- Configuration file that stores the MongoDB connection string.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or issues, you can reach out to me:

Name: suman9725
GitHub Username: suman9725
Email: suman9725@staff.irf.red

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [EJS](https://ejs.co/)
 