import React from 'react';
import {Button} from "@mui/material";
import {deletePassengerFromFlight} from "../logic/flightsApi";

const DeletePassengerFromFlightButton = ({passengerId, flightId, setFlight}) => {

        const buttonHandler = async (e) => {
            e.preventDefault();
            await deletePassengerFromFlight(flightId, passengerId, setFlight);
            console.log(flightId, passengerId);
        };

        return (
            <Button variant="outlined" color="error" onClick={buttonHandler}>X</Button>
        );
    }
;

export default DeletePassengerFromFlightButton;