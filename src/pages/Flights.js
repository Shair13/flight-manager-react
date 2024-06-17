import React, {useEffect, useState} from 'react';
import Flight from "../components/Flight";
import {getFlights} from "../logic/flights";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const Flights = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        getFlights(setFlights);
    }, [flights]);

    return (
        <div>
            <h1>All flights</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align={"center"}>Flight number</TableCell>
                            <TableCell align={"center"}>Route</TableCell>
                            <TableCell align={"center"}>Departure</TableCell>
                            <TableCell align={"center"}>Available Seats</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {flights.map(flight => <Flight key={flight.id}
                                                       flightId={flight.id}
                                                       number={flight.number}
                                                       route={flight.route}
                                                       departure={flight.departure}
                                                       availableSeats={flight.availableSeats}/>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Flights;

