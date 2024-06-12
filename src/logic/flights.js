import {API_URL} from "./constants";

export const getFlights = async (successCallback) => {
    try {
        const response = await fetch(`${API_URL}/flights`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const flights = await response.json();

        if (flights.error || typeof successCallback !== "function") {
            throw new Error("Unexpected error!");
        }

        successCallback(flights);
    } catch (err) {
        console.error(err);
    }
};

export const getFlightById = async (id, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/flights/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const flight = await response.json();

        if (flight.error || typeof successCallback !== "function") {
            throw new Error("Unexpected error!");
        }

        successCallback(flight);
    } catch (err) {
        console.error(err);
    }
};

export const addFlight = async (flight) => {
    try {
        await fetch(`${API_URL}/flights`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(flight)
        })
    } catch (err) {
        console.error(err)
    }
}

export const updateFlight = async (id, flight) => {
    try {
        await fetch(`${API_URL}/flights/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(flight)
        })
    } catch (err) {
        console.error(err)
    }
}

export const deleteFlight = async (id) => {
    try {
        await fetch(`${API_URL}/flights/${id}`, {
            method: "DELETE"
        })
    } catch (err) {
        console.error(err)
    }
}