import React from 'react';
import {Button} from "@mui/material";
import {addPassengerToFlight} from "../logic/flightsApi";

const AddPassengerToFlightButton = ({passengerId, flightId}) => {

        const buttonHandler = async (e) => {
            e.preventDefault();
            await addPassengerToFlight(flightId, passengerId);
            console.info(`Passenger id:${passengerId} has been added to flight id:${flightId}`);
        };

        return (
            <Button variant="contained" color="secondary" onClick={buttonHandler}>Add Passenger to this Flight</Button>
        );
    }
;

export default AddPassengerToFlightButton;