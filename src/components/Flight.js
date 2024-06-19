import {Button, Stack, TableCell, TableRow} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";
import DeleteFlightButton from "./DeleteFlightButton";

export const Flight = ({flight, isHiddenDetails,setFlights}) => {

    const {number, id, route, departure, availableSeats} = flight;

    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell align={"center"}>{number}</TableCell>
            <TableCell align={"center"}>{route}</TableCell>
            <TableCell align={"center"}>{departure}</TableCell>
            <TableCell align={"center"}>{availableSeats}</TableCell>
            <TableCell align={"center"}>
                <Stack spacing={1} direction="row" justifyContent="center">
                    <Link to={`/flight/${id}`} hidden={isHiddenDetails}>
                        <Button variant="outlined">Details</Button>
                    </Link>
                    <Link to={`/update-flight/${id}`}>
                        <Button variant="contained">Update</Button>
                    </Link>
                    <DeleteFlightButton flightId={id} setFlights={setFlights}/>
                </Stack>
            </TableCell>
        </TableRow>
    );
}