const mongoose = require('mongoose');
const seedTickets = require('./seeds/ticketSeeds');
const seedUsers = require('./seeds/userSeeds');

mongoose.connect('mongodb://localhost:27017/ticket_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB successfully');

    // Seed the database with initial data
    await seedTickets();
    await seedUsers();

    // Close the connection after seeding
    mongoose.connection.close();
});
