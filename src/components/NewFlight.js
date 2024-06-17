import React, {useState} from 'react';
import {addFlight} from "../logic/flights";
import {Box, Button, Input, Stack, TextField} from "@mui/material";

const NewFlight = () => {

        const [newFlight, setNewFlight] = useState({
            number: "",
            route: "",
            departure: "",
            availableSeats: ""
        })
        const [errors, setErrors] = useState([])

        const inputHandler = (e) => {
            const {name, value} = e.target
            setNewFlight(prev => ({
                ...prev,
                [name]: value
            }))
        }

        const validateInputs = () => {
            const validationErrors = {};

            if (newFlight.number <= 0) {
                validationErrors.number = "Flight number must be greater than 0.";
            }
            if (!newFlight.availableSeats || newFlight.availableSeats < 0) {
                validationErrors.availableSeats = "Available seats must not be less than 0.";
            }
            if (!newFlight.route || newFlight.route.length === 0) {
                validationErrors.route = "Route cannot be empty.";
            }
            if (!newFlight.departure || new Date(newFlight.departure) <= new Date()) {
                validationErrors.departure = "Departure must be a future date.";
            }
            setErrors(validationErrors);
            return Object.keys(validationErrors).length === 0;
        };


        const addButtonHandler = async (e) => {
            e.preventDefault();

            if (validateInputs()) {
                await addFlight(newFlight);
                setNewFlight({
                    number: "",
                    route: "",
                    departure: "",
                    availableSeats: ""
                });
                setErrors([]);
            } else {
                console.warn("Incorrect Values!")
            }
        };

        return (
            <Box sx={{width: '40%'}}>

                <h1>Add Flight Form</h1>

                <Stack spacing={3}>

                    <TextField variant="outlined"
                               type="number"
                               name="number"
                               value={newFlight.number}
                               onChange={inputHandler}
                               label="Flight number"
                               error={!!errors.number}
                               helperText={errors.number}/>

                    <TextField variant={"outlined"}
                               type="text"
                               name="route"
                               value={newFlight.route}
                               onChange={inputHandler}
                               label="Flight route"
                               error={!!errors.route}
                               helperText={errors.route}/>

                    <TextField type="number"
                               name="availableSeats"
                               value={newFlight.availableSeats}
                               onChange={inputHandler}
                               label="Available seats"
                               error={!!errors.availableSeats}
                               helperText={errors.availableSeats}/>

                    <Box mt={2}>
                        <Input
                            type="datetime-local"
                            name="departure"
                            value={newFlight.departure}
                            onChange={inputHandler}
                            error={!!errors.departure}
                            placeholder="Flight departure"
                            fullWidth
                        />
                        {errors.departure && (
                            <Box color="error.main" mt={1}>
                                {errors.departure}
                            </Box>
                        )}
                    </Box>

                    <Button variant="contained" onClick={addButtonHandler}>Add Flight</Button>
                </Stack>
            </Box>
        );
    }
;

export default NewFlight;