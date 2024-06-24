import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableContainer} from "@mui/material";
import {getPassengers} from "../logic/passengersApi";
import Passenger from "../components/Passenger";
import {PassengerTableHead} from "../components/PassengerTableHead";
import Loading from "../components/Loading";
import {useNavigate} from "react-router-dom";

const Passengers = () => {

    const navigate = useNavigate();
    const [passengers, setPassengers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    if (!passengers) {
        return <Loading/>;
    }

    const fetchData = async () => {
        try {
            const fetchedPassengers = await getPassengers();
            setPassengers(fetchedPassengers);
        } catch (error) {
            console.error(error);
            navigate('/error', {state: {message: error.message}});
        }
    };

    return (
        <TableContainer>
            <Table>
                <PassengerTableHead/>
                <TableBody>
                    {passengers.map(passenger => <Passenger key={passenger.id} passenger={passenger}
                                                            setPassengers={setPassengers} actions="passengers"/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Passengers;

