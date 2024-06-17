import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {getPassengers} from "../logic/passengers";
import Passenger from "../components/Passenger";

const Passengers = () => {

    const [passengers, setPassengers] = useState([]);

    useEffect(() => {
        getPassengers(setPassengers);
    }, []);

    return (
        <div>
            <h1>All passengers</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align={"center"}>Name</TableCell>
                            <TableCell align={"center"}>Surname</TableCell>
                            <TableCell align={"center"}>Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {passengers.map(passenger => <Passenger key={passenger.id}
                                                                passengerId={passenger.id}
                                                                name={passenger.name}
                                                                surname={passenger.surname}
                                                                phone={passenger.phone}/>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Passengers;

