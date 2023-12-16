const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ticketRoutes = require('./routes/ticketRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(ticketRoutes);
app.use(userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ticket_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// MongoDB connection event handlers
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB successfully');

    // Create collections (tables) for Ticket and User models
    db.createCollection('tickets', (err) => {
        if (err) console.error('Error creating tickets collection:', err);
        else console.log('Tickets collection created successfully.');
    });

    db.createCollection('users', (err) => {
        if (err) console.error('Error creating users collection:', err);
        else console.log('Users collection created successfully.');
    });
});


// Serve static files (frontend)
app.use(express.static('frontend'));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
