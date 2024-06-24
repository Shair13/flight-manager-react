import {Button, Stack, TableCell, TableRow} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";
import DeletePassengerButton from "./DeletePassengerButton";
import DeletePassengerFromFlightButton from "./DeletePassengerFromFlightButton";
import AddPassengerToFlightButton from "./AddPassengerToFlightButton";

const Passenger = ({passenger, setPassengers, setFlight, actions, flightId}) => {

    const {id, name, surname, phone} = passenger;

    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell align={"center"}>{name}</TableCell>
            <TableCell align={"center"}>{surname}</TableCell>
            <TableCell align={"center"}>{phone}</TableCell>
            <TableCell align={"center"}>
                {actions === "passengers" &&
                    <Stack spacing={1} direction="row" justifyContent="center">
                        <Link to={`/update-passenger/${id}`}>
                            <Button variant="contained">Update</Button>
                        </Link>
                        <DeletePassengerButton passengerId={id} setPassengers={setPassengers}/>
                    </Stack>
                }
                {actions === "flightDetails" &&
                    <Stack spacing={1} direction="row" justifyContent="center">
                        <DeletePassengerFromFlightButton passengerId={id} flightId={flightId} setFlight={setFlight}/>
                    </Stack>
                }
                {actions === "addPassenger" &&
                    <Stack spacing={1} direction="row" justifyContent="center">
                        <AddPassengerToFlightButton passengerId={id} flightId={flightId}/>
                    </Stack>
                }
            </TableCell>
        </TableRow>
    );
}

export default Passenger;