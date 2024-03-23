class TravelAgency {
    searchFlights(origin: string, destination: string, date: string): string[] {
        // Logic to search for flights based on origin, destination, and date
        return ["Flight 1", "Flight 2", "Flight 3"]; // Example flights found
    }

    searchHotels(destination: string, checkInDate: string, checkOutDate: string): string[] {
        // Logic to search for hotels based on destination, check-in date, and check-out date
        return ["Hotel A", "Hotel B", "Hotel C"]; // Example hotels found
    }

    bookFlight(flight: string): boolean {
        // Logic to book a flight
        return true; // Booking successful
    }

    bookHotel(hotel: string): boolean {
        // Logic to book a hotel
        return true; // Booking successful
    }

    cancelFlightReservation(flight: string): boolean {
        // Logic to cancel a flight reservation
        return true; // Cancellation successful
    }

    cancelHotelReservation(hotel: string): boolean {
        // Logic to cancel a hotel reservation
        return true; // Cancellation successful
    }
}


const travelAgency = new TravelAgency();
const flights = travelAgency.searchFlights("New York", "Los Angeles", "2024-04-15");
console.log("Flights found:", flights);
const hotels = travelAgency.searchHotels("Los Angeles", "2024-04-15", "2024-04-20");
console.log("Hotels found:", hotels);
const flightBooked = travelAgency.bookFlight("Flight 1");
console.log("Flight booked:", flightBooked);
const hotelBooked = travelAgency.bookHotel("Hotel A");
console.log("Hotel booked:", hotelBooked);
const flightCanceled = travelAgency.cancelFlightReservation("Flight 1");
console.log("Flight canceled:", flightCanceled);
const hotelCanceled = travelAgency.cancelHotelReservation("Hotel A");
console.log("Hotel canceled:", hotelCanceled);


// "Flights found:",  ["Flight 1", "Flight 2", "Flight 3"] 
//"Hotels found:",  ["Hotel A", "Hotel B", "Hotel C"] 
// "Flight booked:",  true 
// "Hotel booked:",  true 
// "Flight canceled:",  true 
// "Hotel canceled:",  true 