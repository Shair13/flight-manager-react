import {API_URL} from "./constants";

export const getFlights = async () => {
    const response = await fetch(`${API_URL}/flights`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const flights = await response.json();

    if (!flights.error) {
        return flights;
    } else {
        throw new Error(flights.error);
    }
};

export const getFlightById = async (id) => {
    const response = await fetch(`${API_URL}/flights/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const flight = await response.json();

    if (!flight.error) {
        return flight;
    } else {
        throw new Error(flight.error);
    }
};

export const addFlight = async (flight) => {
        const response = await fetch(`${API_URL}/flights`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(flight)
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
        }

        console.info("The flight has been added.");
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
        console.error(err);
    }
}

export const deleteFlight = async (id) => {
    try {
        await fetch(`${API_URL}/flights/${id}`, {
            method: "DELETE"
        })
    } catch (err) {
        console.error(err);
    }
}

export const addPassengerToFlight = async (flightId, passengerId) => {
    try {
        const response = await fetch(`${API_URL}/flights/add/${flightId}/${passengerId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const jsonResponse = await response.json();

        if (!response.ok) {
            throw new Error(JSON.stringify(jsonResponse));
        }

    } catch (err) {
        console.error(err);
    }
}

export const deletePassengerFromFlight = async (flightId, passengerId, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/flights/delete/${flightId}/${passengerId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const jsonResponse = await response.json();

        if (typeof successCallback !== "function" || !response.ok) {
            throw new Error(JSON.stringify(jsonResponse));
        }

        successCallback(jsonResponse)
    } catch (err) {
        console.error(err);
    }
}