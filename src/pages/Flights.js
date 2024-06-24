import React, {useEffect, useState} from 'react';
import {getFlights} from "../logic/flightsApi";
import {Table, TableBody, TableContainer} from "@mui/material";
import {FlightTableHead} from "../components/FlightTableHead";
import {Flight} from "../components/Flight";
import Loading from "../components/Loading";
import {useNavigate} from "react-router-dom";

const Flights = () => {

    const navigate = useNavigate();
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    if (!flights) {
        return <Loading/>;
    }

    const fetchData = async () => {
        try {
            const fetchedFlights = await getFlights();
            setFlights(fetchedFlights);
        } catch (error) {
            console.error(error);
            navigate('/error', {state: {message: error.message}});
        }
    };

    return (
        <TableContainer>
            <Table>
                <FlightTableHead/>
                <TableBody>
                    {flights.map(flight => <Flight key={flight.id}
                                                   flight={flight}
                                                   isHidden={false}
                                                   setFlights={setFlights}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Flights;

