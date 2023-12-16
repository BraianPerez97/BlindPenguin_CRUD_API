const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticketModel');

// Create Ticket
router.post('/tickets', async (req, res) => {
    try {
        const ticket = new Ticket(req.body);
        await ticket.save();
        res.status(201).send(ticket);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read tickets
router.get('/tickets', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.send(tickets);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update Ticket
router.patch('/tickets/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['issueTitle', 'issueDescription', 'status'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!ticket) {
            return res.status(404).send();
        }
        res.send(ticket);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a ticket
router.delete('/tickets/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);
        if (!ticket) {
            return res.status(404).send();
        }
        res.send(ticket);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;