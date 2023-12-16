const Ticket = require('../models/ticketModel');
const User = require('../models/userModel');

const ticketData = [
    {
        customerName: 'John Doe',
        issueTitle: 'Computer not turning on',
        issueDescription: 'The computer is not responding when I press the power button.',
        status: 'Open',
    },
];

const userData = [
    {
        username: 'BraianPerez',
        password: 'admin123', // Replace
    },
];

async function seedDatabase() {
    try {
        // Seed tickets
        await Ticket.deleteMany({});
        await Ticket.insertMany(ticketData);
        console.log('Tickets seeded successfully.');

        // Seed users
        await User.deleteMany({});
        await User.insertMany(userData);
        console.log('Users seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

module.exports = seedDatabase;
