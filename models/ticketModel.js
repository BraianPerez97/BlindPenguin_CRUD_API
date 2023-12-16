const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    custumerName: {
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
        default: 'Open',
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Ticket', ticketSchema);