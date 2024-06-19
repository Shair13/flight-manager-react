import React from 'react';
import {useParams} from "react-router-dom";
import PassengerForm from "../components/PassengerForm";

const UpdatePassenger = () => {

    const {passengerId} = useParams();

    return (
        <>
            <h1>Update Passenger (id: {passengerId})</h1>
            <PassengerForm fetchType={"update"} message={`Update Passenger`} passengerId={passengerId}/>
        </>
    );
};

export default UpdatePassenger;