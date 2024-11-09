const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 3000;

/**
 * Creates a connection to the MySQL database.
 * 
 * @constant {object} db - The database connection object.
 * @property {string} host - The hostname of the database you are connecting to.
 * @property {string} user - The MySQL user to authenticate as.
 * @property {string} password - The password of that MySQL user.
 * @property {string} database - The name of the database to use for this connection.
 */
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aryan@123',
    database: 'feedback_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit_feedback', (req, res) => {
    const { rating, comments, feedbackType, name, email } = req.body;
    const sql = 'INSERT INTO feedback (rating, comments, feedbackType, name, email) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [rating, comments, feedbackType, name, email], (err, result) => {
        if (err) throw err;
        res.send('Thank you for your feedback!');
    });
});

app.get('/get_feedback_data', (req, res) => {
    const sql = 'SELECT rating, COUNT(*) as count FROM feedback GROUP BY rating';
    db.query(sql, (err, results) => {
        if (err) throw err;
        const ratings = Array(5).fill(0);
        results.forEach(row => {
            ratings[row.rating - 1] = row.count;
        });
        res.json({ ratings });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});