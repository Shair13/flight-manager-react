import {Button, Stack, TableCell, TableRow} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";

function DeleteIcon() {
    return null;
}

export const Flight = ({number, flightId, route, departure, availableSeats, isHiddenDetails}) => {


    return (
        <TableRow>
            <TableCell>{flightId}</TableCell>
            <TableCell align={"center"}>{number}</TableCell>
            <TableCell align={"center"}>{route}</TableCell>
            <TableCell align={"center"}>{departure}</TableCell>
            <TableCell align={"center"}>{availableSeats}</TableCell>
            <TableCell align={"center"}>
                <Stack spacing={1} direction="row" justifyContent="center">
                    <Link to={`/flights/${flightId}`} hidden={isHiddenDetails}>
                        <Button variant="outlined">Details</Button>
                    </Link>
                    <Link to={`/flights/${flightId}`}>
                        <Button variant="contained">Update</Button>
                    </Link>
                    <Link to={`/flights/${flightId}`}>
                        <Button variant="outlined" color="error">Delete</Button>
                    </Link>
                </Stack>
            </TableCell>
        </TableRow>
    );
}