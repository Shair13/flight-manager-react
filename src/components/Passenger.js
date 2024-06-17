import {Button, Stack, TableCell, TableRow} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";

const Passenger = ({passengerId, name, surname, phone}) => {

    return (
        <TableRow>
            <TableCell>{passengerId}</TableCell>
            <TableCell align={"center"}>{name}</TableCell>
            <TableCell align={"center"}>{surname}</TableCell>
            <TableCell align={"center"}>{phone}</TableCell>
            <TableCell align={"center"}>
                <Stack spacing={1} direction="row" justifyContent="center">
                    <Link to={`/flights/${passengerId}`}>
                        <Button variant="contained">Update</Button>
                    </Link>
                    <Link to={`/flights/${passengerId}`}>
                        <Button variant="outlined" color="error">Delete</Button>
                    </Link>
                </Stack>
            </TableCell>
        </TableRow>
    );
}

export default Passenger;