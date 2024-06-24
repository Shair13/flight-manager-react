import React from 'react';
import {Button} from "@mui/material";
import {deletePassenger, getPassengers} from "../logic/passengersApi";

const DeleteFlightButton = ({passengerId, setPassengers}) => {

        const buttonHandler = async (e) => {
            e.preventDefault();
            await deletePassenger(passengerId)
            const fetchedPassengers = await getPassengers();
            setPassengers(fetchedPassengers);
        };

        return (
            <Button variant="outlined" color="error" onClick={buttonHandler}>Delete</Button>
        );
    }
;

export default DeleteFlightButton;