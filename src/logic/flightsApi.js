import {API_URL} from "./constants";
import {httpDelete, httpGet, httpPatch, httpPost, httpPut} from "./fetchData";

export const getFlights = () => httpGet(`${API_URL}/flights`);

export const getFlightById = (id) => httpGet(`${API_URL}/flights/${id}`);

export const addFlight = (flight) => httpPost(`${API_URL}/flights`, flight);

export const updateFlight = (id, flight) => httpPut(`${API_URL}/flights/${id}`, flight);

export const deleteFlight = async (id) => httpDelete(`${API_URL}/flights/${id}`);

export const addPassengerToFlight = async (flightId, passengerId) => httpPatch(`${API_URL}/flights/add/${flightId}/${passengerId}`);

export const deletePassengerFromFlight = async (flightId, passengerId) => httpPatch(`${API_URL}/flights/delete/${flightId}/${passengerId}`);