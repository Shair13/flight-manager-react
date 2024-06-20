import React, {useEffect, useState} from 'react';
import {Box, Button, Input, Stack, TextField} from "@mui/material";
import {addFlight, getFlightById, updateFlight} from "../logic/flightsApi";

const FlightForm = ({fetchType, message, flightId}) => {

        const [flight, setFlight] = useState({
            number: "",
            route: "",
            departure: "",
            availableSeats: ""
        })
        const [errors, setErrors] = useState([])

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const fetchedFlight = await getFlightById(flightId);
                    setFlight(fetchedFlight);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchData();
        }, []);

        const inputHandler = (e) => {
            const {name, value} = e.target
            setFlight(prev => ({
                ...prev,
                [name]: value
            }))
        }

        const validateInputs = () => {
            const validationErrors = {};

            if (flight.number <= 0) {
                validationErrors.number = "Flight number must be greater than 0.";
            }
            if (!flight.availableSeats || flight.availableSeats < 0) {
                validationErrors.availableSeats = "Available seats must not be less than 0.";
            }
            if (!flight.route || flight.route.length === 0) {
                validationErrors.route = "Route cannot be empty.";
            }
            if (!flight.departure || new Date(flight.departure) <= new Date()) {
                validationErrors.departure = "Departure must be a future date.";
            }
            setErrors(validationErrors);
            return Object.keys(validationErrors).length === 0;
        };

        const buttonHandler = async (e) => {
            e.preventDefault();

            if (validateInputs() && fetchType === "add") {
                await addFlight(flight);
                clearFlightAndErrors()
            } else if (validateInputs() && fetchType === "update") {
                await updateFlight(flightId, flight);
                clearFlightAndErrors()
                window.location.assign(`/flight/${flightId}`);
            } else {
                console.warn("Incorrect Values!")
            }
        };

        const clearFlightAndErrors = () => {
            setFlight({
                number: "",
                route: "",
                departure: "",
                availableSeats: ""
            });
            setErrors([]);
        }

        return (
            <Box sx={{width: '40%'}}>

                <Stack spacing={3}>

                    <TextField variant="outlined"
                               type="number"
                               name="number"
                               value={flight.number}
                               onChange={inputHandler}
                               label="Flight number"
                               error={!!errors.number}
                               helperText={errors.number}/>

                    <TextField variant={"outlined"}
                               type="text"
                               name="route"
                               value={flight.route}
                               onChange={inputHandler}
                               label="Flight route"
                               error={!!errors.route}
                               helperText={errors.route}/>

                    <TextField type="number"
                               name="availableSeats"
                               value={flight.availableSeats}
                               onChange={inputHandler}
                               label="Available seats"
                               error={!!errors.availableSeats}
                               helperText={errors.availableSeats}/>

                    <Box mt={2}>
                        <Input
                            type="datetime-local"
                            name="departure"
                            value={flight.departure}
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

                    <Button variant="contained" onClick={buttonHandler}>{message}</Button>
                </Stack>
            </Box>
        );
    }
;

export default FlightForm;