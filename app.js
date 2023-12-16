const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const ticketRoutes = require('./routes/ticketRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(ticketRoutes);
app.use(userRoutes);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'ticket_user',
    password: 'password',
    database: 'ticket_system',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id', connection.threadId);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
