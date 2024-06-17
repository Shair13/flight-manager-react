import React, {useEffect, useState} from 'react';
import {getFlights} from "../logic/flightApi";
import {Table, TableBody, TableContainer} from "@mui/material";
import {FlightTableHead} from "../components/FlightTableHead";
import {Flight} from "../components/Flight";

const Flights = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        getFlights(setFlights);
    }, []);

    return (
        <TableContainer>
            <Table>
                <FlightTableHead/>
                <TableBody>
                    {flights.map(flight => <Flight key={flight.id}
                                                   flightId={flight.id}
                                                   number={flight.number}
                                                   route={flight.route}
                                                   departure={flight.departure}
                                                   availableSeats={flight.availableSeats}
                                                   isHiddenDetails={false}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Flights;

