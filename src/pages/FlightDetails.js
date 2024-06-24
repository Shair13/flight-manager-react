import React, {useEffect, useState} from 'react';
import {getFlightById} from "../logic/flightsApi";
import {Table, TableBody, TableContainer} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import Passenger from "../components/Passenger";
import Loading from "../components/Loading";
import {FlightTableHead} from "../components/FlightTableHead";
import {PassengerTableHead} from "../components/PassengerTableHead";
import {Flight} from "../components/Flight";

const FlightDetails = () => {

    const navigate = useNavigate();
    const {flightId} = useParams();
    const [flight, setFlight] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const fetchedFlight = await getFlightById(flightId);
            setFlight(fetchedFlight);
        } catch (error) {
            console.error(error);
            navigate('/error', {state: {message: error.message}});
        }
    };

    if (!flight) {
        return <Loading/>;
    }

    return (
        <div>
            <h1>Details of flight id: {flightId}</h1>
            <TableContainer>
                <Table>
                    <FlightTableHead/>
                    <TableBody>
                        <Flight flight={flight} isHidden={true}/>
                    </TableBody>
                </Table>

                {flight.passengers &&
                    <>
                        <h1>{flight.passengers.length} people on this flight:</h1>
                        <Table>
                            <PassengerTableHead/>
                            <TableBody>
                                {flight.passengers.map(passenger => <Passenger key={passenger.id}
                                                                               passenger={passenger}
                                                                               setFlight={setFlight}
                                                                               flightId={flightId}
                                                                               actions={"flightDetails"}/>)}
                            </TableBody>
                        </Table>
                    </>
                }
            </TableContainer>
        </div>
    );
};

export default FlightDetails;

