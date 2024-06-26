import {API_URL} from "./constants";
import {httpDelete, httpGet, httpPost, httpPut} from "./fetchData";

export const getPassengers = async () => httpGet(`${API_URL}/passengers`);

export const getPassengerById = async (id) => httpGet(`${API_URL}/passengers/${id}`);

export const addPassenger = async (passenger) => httpPost(`${API_URL}/passengers`, passenger);

export const updatePassenger = async (id, passenger) => httpPut(`${API_URL}/passengers/${id}`, passenger);

export const deletePassenger = async (id) => httpDelete(`${API_URL}/passengers/${id}`);