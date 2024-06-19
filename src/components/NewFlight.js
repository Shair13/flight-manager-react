import React from 'react';
import FlightForm from "./FlightForm";

const NewFlight = () => {


    return (
        <>
            <h1>Add Flight</h1>
            <FlightForm fetchType={"add"} message={"Add Flight"}/>
        </>

    );
};

export default NewFlight;