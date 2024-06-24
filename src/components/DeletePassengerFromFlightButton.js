import React from 'react';
import {Button} from "@mui/material";
import {deletePassengerFromFlight, getFlightById} from "../logic/flightsApi";

const DeletePassengerFromFlightButton = ({passengerId, flightId, setFlight}) => {

        const buttonHandler = async (e) => {
            e.preventDefault();
            await deletePassengerFromFlight(flightId, passengerId);
            const fetchedFlight = await getFlightById(flightId);
            setFlight(fetchedFlight);
        };

        return (
            <Button variant="outlined" color="error" onClick={buttonHandler}>X</Button>
        );
    }
;

export default DeletePassengerFromFlightButton;