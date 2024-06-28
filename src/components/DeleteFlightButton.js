import React from 'react';
import {Button} from "@mui/material";
import {deleteFlight, getFlights} from "../logic/flightsApi";
import {useNavigate} from "react-router-dom";

const DeleteFlightButton = ({flightId, setFlights}) => {

        const navigate = useNavigate();

        const buttonHandler = async (e) => {
            e.preventDefault();
            await deleteFlight(flightId)
            const fetchedData = await getFlights();
            if (typeof setFlights === "function") {
                setFlights(fetchedData);
            } else {
                navigate("/flights");
            }
        };

        return (
            <Button variant="outlined" color="error" onClick={buttonHandler}>Delete</Button>
        );
    }
;

export default DeleteFlightButton;