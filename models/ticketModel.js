const mongoose = mongoose.model('mongoose');

const ticketSchema = new mongoose.Schema({
    costumerName: {
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
    timestamp: true,
});

module.exports = mongoose.model('Ticket', ticketSchema);