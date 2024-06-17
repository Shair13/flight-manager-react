import React from "react";
import {TableCell, TableHead, TableRow} from "@mui/material";

export const FlightTableHead = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align={"center"}>Flight number</TableCell>
                <TableCell align={"center"}>Route</TableCell>
                <TableCell align={"center"}>Departure</TableCell>
                <TableCell align={"center"}>Available Seats</TableCell>
                <TableCell align={"center"}>Actions</TableCell>
            </TableRow>
        </TableHead>
    )
}