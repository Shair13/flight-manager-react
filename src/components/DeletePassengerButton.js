import React from 'react';
import {Button} from "@mui/material";
import {deletePassenger, getPassengers} from "../logic/passengersApi";

const DeleteFlightButton = ({passengerId, setPassenger}) => {

        const buttonHandler = async (e) => {
            e.preventDefault();
            await deletePassenger(passengerId)
            await getPassengers(setPassenger);
        };

        return (
            <Button variant="outlined" color="error" onClick={buttonHandler}>Delete</Button>
        );
    }
;

export default DeleteFlightButton;