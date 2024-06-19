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
                                                   flight={flight}
                                                   isHiddenDetails={false}
                                                   setFlights={setFlights}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Flights;

