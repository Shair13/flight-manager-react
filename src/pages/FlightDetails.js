import React, {useEffect, useState} from 'react';
import {getFlightById} from "../logic/flightApi";
import {Table, TableBody, TableContainer} from "@mui/material";
import {useParams} from "react-router-dom";
import Passenger from "../components/Passenger";
import Loading from "../components/Loading";
import {FlightTableHead} from "../components/FlightTableHead";
import {PassengerTableHead} from "../components/PassengerTableHead";
import {Flight} from "../components/Flight";

const FlightDetails = () => {

    const {flightId} = useParams();
    const [flight, setFlight] = useState();

    useEffect(() => {
        getFlightById(flightId, setFlight);
    }, []);

    if (!flight) {
        return <Loading/>;
    }

    return (
        <div>
            <h1>Details of flight ID: {flightId}</h1>
            <TableContainer>
                <Table>
                    <FlightTableHead/>
                    <TableBody>
                        <Flight key={flight.id}
                                flightId={flight.id}
                                number={flight.number}
                                route={flight.route}
                                departure={flight.departure}
                                availableSeats={flight.availableSeats}
                                isHiddenDetails={true}/>
                    </TableBody>
                </Table>

                {flight.passengers &&
                    <>
                        <h1>{flight.passengers.length} Passengers found on this flight.</h1>
                        <Table>
                            <PassengerTableHead/>
                            <TableBody>
                                {flight.passengers.map(passenger => <Passenger key={passenger.id}
                                                                               passengerId={passenger.id}
                                                                               name={passenger.name}
                                                                               surname={passenger.surname}
                                                                               phone={passenger.phone}/>)}
                            </TableBody>
                        </Table>
                    </>
                }
            </TableContainer>
        </div>
    );
};

export default FlightDetails;

