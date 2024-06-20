import {API_URL} from "./constants";

export const getPassengers = async (successCallback) => {
    try {
        const response = await fetch(`${API_URL}/passengers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        return response.json();

        // if (passengers.error || typeof successCallback !== "function") {
        //     throw new Error("Unexpected error!");
        // }
        //
        // successCallback(passengers);
    } catch (err) {
        console.error(err);
    }
};

export const getPassengerById = async (id, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/passengers/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const passenger = await response.json();

        if (passenger.error || typeof successCallback !== "function") {
            throw new Error("Unexpected error!");
        }

        successCallback(passenger);
    } catch (err) {
        console.error(err);
    }
};

export const addPassenger = async (passenger) => {
    try {
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

    } catch (err) {
        console.error(err)
    }
}

export const updatePassenger = async (id, passenger) => {
    try {
        await fetch(`${API_URL}/passengers/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(passenger)
        })
    } catch (err) {
        console.error(err)
    }
}

export const deletePassenger = async (id) => {
    try {
        await fetch(`${API_URL}/passengers/${id}`, {
            method: "DELETE"
        })
    } catch (err) {
        console.error(err)
    }
}