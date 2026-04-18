//Write your code here
// Declare and initialize an attendee object
let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}

// Create a function to log attendee name
function logAttendeeName(attendee){
  console.log(attendee.name)
}

// Create a function to log ticket price
function logTicketPrice(attendee){
  console.log(attendee.ticketPrice)
}

// Create a function to update ticket type
function updateTicketType(attendee, ticketType){
  attendee.ticketType = ticketType
}

// Create function to update ticket price
function updateTicketPrice(attendee, ticketPrice){
  attendee.ticketPrice = ticketPrice
}

// Create a function to remove the event property
function removeEventProperty(attendee){
  delete attendee.event
}

// Create a function to add a checked-in property
function addCheckedInProperty(attendee){
  attendee.checkedIn = true
}



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};