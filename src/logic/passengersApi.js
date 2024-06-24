import {API_URL} from "./constants";

export const getPassengers = async () => {
    const response = await fetch(`${API_URL}/passengers`, {
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

export const getPassengerById = async (id) => {
    const response = await fetch(`${API_URL}/passengers/${id}`, {
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

export const addPassenger = async (passenger) => {
    const response = await fetch(`${API_URL}/passengers`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(passenger)
    })

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }

    console.info("The passenger has been added.");
}

export const updatePassenger = async (id, passenger) => {
    const response = await fetch(`${API_URL}/passengers/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(passenger)
    })

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }
}

export const deletePassenger = async (id) => {
    const response = await fetch(`${API_URL}/passengers/${id}`, {
        method: "DELETE"
    })
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }

    console.info("The passenger has been deleted");
}