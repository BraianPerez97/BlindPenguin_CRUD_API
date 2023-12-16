const mongoose = require('mongoose');

// Ticket Schema
const ticketSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    issueTitle: {
        type: String,
        required: true,
    },
    issueDescription: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'Open', // Open, In Progress, Closed, etc.
    },
}, {
    timestamps: true,
});

// User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = {
    Ticket: mongoose.model('Ticket', ticketSchema),
    User: mongoose.model('User', userSchema),
};
