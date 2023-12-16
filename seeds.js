const mongoose = require('mongoose');
const seedDatabase = require('./seeds');

mongoose.connect('mongodb://localhost:27017/ticket_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB successfully');

    // Seed the database with initial data
    await seedDatabase();

    // Close the connection after seeding
    mongoose.connection.close();
});
