import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Table, TableBody} from "@mui/material";
import {PassengerTableHead} from "../components/PassengerTableHead";
import Passenger from "../components/Passenger";
import {getPassengers} from "../logic/passengersApi";
import {getFlightById} from "../logic/flightsApi";
import Loading from "../components/Loading";

const AddPassengerToFlight = () => {

    const [passengers, setPassengers] = useState([]);
    const [flight, setFlight] = useState([]);
    const [notDuplicatedPassengers, setNotDuplicatedPassengers] = useState()
    const {flightId} = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedPassengers = await getPassengers();
                const fetchedFlight = await getFlightById(flightId);
                setPassengers(fetchedPassengers);
                setFlight(fetchedFlight);

                if (fetchedFlight.passengers && fetchedPassengers) {
                    const filteredPassengers = fetchedPassengers.filter(
                        passenger => !fetchedFlight.passengers.some(flightPassenger => flightPassenger.id === passenger.id)
                    );
                    setNotDuplicatedPassengers(filteredPassengers);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if(!notDuplicatedPassengers){
        return(
            <Loading/>
        )
    }

    return (
        <>
            <h1>Add Passengers to Flight id: {flightId}</h1>
            <Table>
                <PassengerTableHead/>
                <TableBody>
                    {notDuplicatedPassengers
                        .map(passenger => (
                            <Passenger
                                key={passenger.id}
                                passenger={passenger}
                                flightId={flightId}
                                actions={"addPassenger"}
                            />
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default AddPassengerToFlight;