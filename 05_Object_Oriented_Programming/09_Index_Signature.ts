class SeatAssignment {
    deckType: string;
    [seatNumber: string]: string    // indexer setup
}

const seats = new SeatAssignment();
seats.A1 = "Abdul";
seats.B1 = "Afsar";
// seats.deckType = "Upper"

console.log(seats.deckType);