import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableContainer} from "@mui/material";
import {getPassengers} from "../logic/passengers";
import Passenger from "../components/Passenger";
import {PassengerTableHead} from "../components/PassengerTableHead";

const Passengers = () => {

    const [passengers, setPassengers] = useState([]);

    useEffect(() => {
        getPassengers(setPassengers);
    }, []);

    return (
        <TableContainer>
            <Table>
                <PassengerTableHead/>
                <TableBody>
                    {passengers.map(passenger => <Passenger key={passenger.id}
                                                            passengerId={passenger.id}
                                                            name={passenger.name}
                                                            surname={passenger.surname}
                                                            phone={passenger.phone}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Passengers;

