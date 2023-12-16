// app.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display tickets on page load
    fetchTickets();

});

async function fetchTickets() {
    try {
        const response = await fetch('http://localhost:3000/api/tickets');
        const data = await response.json();

        const ticketsList = document.getElementById('ticketsList');
        ticketsList.innerHTML = '';

        data.forEach(ticket => {
            const ticketElement = document.createElement('div');
            ticketElement.innerHTML = `
                <h3>${ticket.issueTitle}</h3>
                <p><strong>Customer Name:</strong> ${ticket.customerName}</p>
                <p><strong>Status:</strong> ${ticket.status}</p>
                <p>${ticket.issueDescription}</p>
                <hr>
            `;
            ticketsList.appendChild(ticketElement);
        });
    } catch (error) {
        console.error('Error fetching tickets:', error);
    }
}

async function createTicket() {
    const form = document.getElementById('ticketForm');
    const formData = new FormData(form);

    try {
        const response = await fetch('http://localhost:3000/api/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });

        if (response.ok) {
            console.log('Ticket created successfully');
            // Refresh tickets after creating a new one
            fetchTickets();
        } else {
            console.error('Failed to create ticket:', response.statusText);
        }
    } catch (error) {
        console.error('Error creating ticket:', error);
    }
}
