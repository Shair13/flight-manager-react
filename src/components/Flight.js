import {TableCell, TableRow} from "@mui/material";

const Flight = ({number, flightId, route, departure, availableSeats}) => {

    return (
            <TableRow>
                <TableCell>{flightId}</TableCell>
                <TableCell align={"center"}>{number}</TableCell>
                <TableCell align={"center"}>{route}</TableCell>
                <TableCell align={"center"}>{departure}</TableCell>
                <TableCell align={"center"}>{availableSeats}</TableCell>
            </TableRow>
    );
}

export default Flight;