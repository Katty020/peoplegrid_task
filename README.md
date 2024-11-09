# Feedback Collection and Analysis Form

## Project Overview
This project provides a feedback form that captures user responses, stores them in a MySQL database, and displays the feedback data in a graphical format on a dashboard. The form collects ratings, comments, and other feedback attributes, allowing data analysis through visualizations like bar and line charts.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express, MySQL
- **Middleware**: body-parser
- **Data Visualization**: Chart.js (or any other charting library)

## Features
- **Feedback Form**: Collects rating, comments, attributes, and optional user info.
- **Data Storage**: Stores feedback in MySQL with unique IDs.
- **Data Visualization**: Displays ratings distribution, trends, and filtering options.
- **Responsive Design**: Form and dashboard adapt to various screen sizes.

## Prerequisites
- **Node.js**: Ensure Node.js is installed on your system.
- **MySQL**: A MySQL database to store feedback data.

## Getting Started

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/feedback-collection-form.git
   cd feedback-collection-form
Install dependencies:

bash
Copy code
npm install
Set Up MySQL Database:

Open MySQL and create a new database named feedback_db:
sql
Copy code
CREATE DATABASE feedback_db;
Create a feedback table within this database:
sql
Copy code
CREATE TABLE feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rating INT NOT NULL,
  comments TEXT,
  attributes VARCHAR(255),
  name VARCHAR(50),
  email VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Update Database Configuration:

In server.js, update the MySQL configuration with your credentials:
javascript
Copy code
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'feedback_db'
});
Run the Application:

bash
Copy code
npm start
The application should be accessible at http://localhost:3000.

Usage
Submit Feedback:

Open index.html in the browser and submit feedback through the form.
Includes fields for ratings, comments, and additional attributes.
Data Storage:

Form responses are stored in the MySQL database with a unique identifier.
Data Visualization:

Access dashboard.html to view feedback data. Charts include:
Bar Chart: Shows rating distribution.
Line Chart: Displays feedback trends over time.
Dashboard filters allow viewing data by date range, rating, and other criteria.
Extra Features
Thank You Message: Displays a confirmation message after form submission.
Validation: Ensures mandatory fields are completed before submission.
Responsive Design: Works on desktop and mobile devices.
