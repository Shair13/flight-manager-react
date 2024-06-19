import {TableCell, TableHead, TableRow} from "@mui/material";
import React from "react";

export const PassengerTableHead = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align={"center"}>Name</TableCell>
                <TableCell align={"center"}>Surname</TableCell>
                <TableCell align={"center"}>Phone</TableCell>
                <TableCell align={"center"}>Actions</TableCell>
            </TableRow>
        </TableHead>
    )
}