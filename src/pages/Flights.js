import React, {useEffect, useState} from 'react';
import {getFlights} from "../logic/flightsApi";
import {Table, TableBody, TableContainer} from "@mui/material";
import {FlightTableHead} from "../components/FlightTableHead";
import {Flight} from "../components/Flight";
import ErrorComponent from "../components/ErrorComponent";
import Loading from "../components/Loading";

const Flights = () => {

    const [flights, setFlights] = useState([]);
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedFlights = await getFlights();
                setFlights(fetchedFlights);
            } catch (error) {
                setError(error);
                console.error(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <ErrorComponent message={error.toString()}/>;
    }

    if (!flights) {
        return <Loading/>;
    }

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

