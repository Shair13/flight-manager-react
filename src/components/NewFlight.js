import React, {useState} from 'react';
import {addFlight} from "../logic/flightApi";
import {Box, Button, Input, Stack, TextField} from "@mui/material";
import FlightForm from "./FlightForm";

const NewFlight = () => {


    return (
        <>
            <h1>Add Flight</h1>
            <FlightForm fetchType={"add"} message={"Add flight"}/>
        </>

    );
};

export default NewFlight;