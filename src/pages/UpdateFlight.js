import React from 'react';
import FlightForm from "../components/FlightForm";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";

const UpdateFlight = () => {

        const {flightId} = useParams();

        return (
            <>
                <h1>Update Flight (id: {flightId})</h1>
                <FlightForm fetchType={"update"} message={`Update Flight`} flightId={flightId}/>
            </>
        );
    };

export default UpdateFlight;