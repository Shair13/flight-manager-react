import React from 'react';
import FlightForm from "../components/FlightForm";
import PassengerForm from "../components/PassengerForm";

const NewPassenger = () => {


    return (
        <>
            <h1>Add Passenger</h1>
            <PassengerForm fetchType={"add"} message={"Add Passenger"}/>
        </>

    );
};

export default NewPassenger;