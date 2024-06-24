import {API_URL} from "./constants";

export const getFlights = async () => {
    const response = await fetch(`${API_URL}/flights`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const responseJson = await response.json();

    if (!response.ok) {
        throw new Error(responseJson.error || "An error occurred");
    }

    return responseJson;
};

export const getFlightById = async (id) => {
    const response = await fetch(`${API_URL}/flights/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const responseJson = await response.json();

    if (!response.ok) {
        throw new Error(responseJson.error || "An error occurred");
    }

    return responseJson;
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
    const response = await fetch(`${API_URL}/flights/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(flight)
    })

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }

    console.info("The flight has been updated.");
}

export const deleteFlight = async (id) => {
    const response = await fetch(`${API_URL}/flights/${id}`, {
        method: "DELETE"
    })
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }

    console.info("The flight has been deleted");
}

export const addPassengerToFlight = async (flightId, passengerId) => {
    const response = await fetch(`${API_URL}/flights/add/${flightId}/${passengerId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseJson = await response.json();

    if (!response.ok) {
        throw new Error(responseJson.error || 'An error occurred');
    }
}

export const deletePassengerFromFlight = async (flightId, passengerId) => {
    const response = await fetch(`${API_URL}/flights/delete/${flightId}/${passengerId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }
}