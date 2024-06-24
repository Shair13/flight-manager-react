import React from 'react';
import {Button} from "@mui/material";
import {addPassengerToFlight} from "../logic/flightsApi";
import {useNavigate} from "react-router-dom";

const AddPassengerToFlightButton = ({passengerId, flightId}) => {

        const navigate = useNavigate();

        const buttonHandler = async (e) => {
            e.preventDefault();
            try {
                await addPassengerToFlight(flightId, passengerId);
                console.info(`Passenger id:${passengerId} has been added to flight id:${flightId}`);
            } catch (error) {
                console.error(error);
                navigate('/error', {state: {message: error.message}});
            }
        };

        return (
            <Button variant="contained" color="secondary" onClick={buttonHandler}>Add Passenger to this Flight</Button>
        );
    }
;

export default AddPassengerToFlightButton;