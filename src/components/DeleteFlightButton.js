import React from 'react';
import {Button} from "@mui/material";
import {deleteFlight, getFlights} from "../logic/flightsApi";

const DeleteFlightButton = ({flightId, setFlights}) => {

        const buttonHandler = async (e) => {
            e.preventDefault();
            await deleteFlight(flightId)
            const fetchedData = await getFlights();
            setFlights(fetchedData);
        };

        return (
            <Button variant="outlined" color="error" onClick={buttonHandler}>Delete</Button>
        );
    }
;

export default DeleteFlightButton;