import React from 'react';
import FlightForm from "./FlightForm";
import PassengerForm from "./PassengerForm";

const NewPassenger = () => {


    return (
        <>
            <h1>Add Passenger</h1>
            <PassengerForm fetchType={"add"} message={"Add Passenger"}/>
        </>

    );
};

export default NewPassenger;