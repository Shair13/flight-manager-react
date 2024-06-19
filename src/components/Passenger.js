import {Button, Stack, TableCell, TableRow} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";

const Passenger = ({passenger}) => {

    const {id, name, surname, phone} = passenger;

    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell align={"center"}>{name}</TableCell>
            <TableCell align={"center"}>{surname}</TableCell>
            <TableCell align={"center"}>{phone}</TableCell>
            <TableCell align={"center"}>
                <Stack spacing={1} direction="row" justifyContent="center">
                    <Link to={`/update-passenger/${id}`}>
                        <Button variant="contained">Update</Button>
                    </Link>
                    <Link to={`/passenger-delete/${id}`}>
                        <Button variant="outlined" color="error">Delete</Button>
                    </Link>
                </Stack>
            </TableCell>
        </TableRow>
    );
}

export default Passenger;