import {TableCell, TableRow} from "@mui/material";

const Passenger = ({passengerId, name, surname, phone}) => {

    return (
        <TableRow>
            <TableCell>{passengerId}</TableCell>
            <TableCell align={"center"}>{name}</TableCell>
            <TableCell align={"center"}>{surname}</TableCell>
            <TableCell align={"center"}>{phone}</TableCell>
        </TableRow>
    );
}

export default Passenger;