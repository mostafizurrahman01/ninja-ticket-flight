//Choose Ticket
function handleTicketChoose(ticket, isIncrease) {
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    else if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    let ticketTotal = 0;
    if (ticket == 'first') {
        ticketTotal = ticketNewCount * 150;
    }
    else if (ticket == 'economy') {
        ticketTotal = ticketNewCount * 100;
    }
    calculateTotal();
}

//Ticket price,tax etc. Calculation
function calculateTotal() {
    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    //this is for showing ticket type after clicking book now
    document.getElementById('ticket-type').innerText = 'First Class ($150) - ' + firstCount + ' && ' + ' Economy ($100) - ' + economyCount;

    const totalPrice = firstCount * 150 + economyCount * 100;
    document.getElementById('sub-total').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * .1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;

    //this will get after clicking book-now button ('bookingTicketDetails')
    const bookingTotal = totalPrice + tax;
    document.getElementById('booking-total').innerText = '$' + bookingTotal;
}
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

//Extra Work
//book now button event handler
const bookNowBtn = document.getElementById("book-now").addEventListener("click", function () {
    const bookArea = document.getElementById("booking-area");
    bookArea.style.display = "none";
    const ticketBookDetailsArea = document.getElementById("ticketBookDetails");
    ticketBookDetailsArea.style.display = "block";
})
document.getElementById("book-now").addEventListener('click', function () {
    handleTicketDetails("flyingFrom-input", "flyingFrom");
    handleTicketDetails("flyingTo-input", "flyingTo");
    handleTicketDetails("departure-input", "departure");
    handleTicketDetails("arrive-input", "arrive");
})

//storing all details after clicking book now button
//this function will help to get 4 information.
function handleTicketDetails(id1, id2) {
    const ticketDetails = document.getElementById(id1).value;
    document.getElementById(id2).innerText = ticketDetails;
}