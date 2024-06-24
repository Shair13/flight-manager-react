import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField} from "@mui/material";
import {addPassenger, getPassengerById, updatePassenger} from "../logic/passengersApi";
import {useNavigate} from "react-router-dom";

const PassengerForm = ({fetchType, message, passengerId}) => {

        const navigate = useNavigate();
        const [passenger, setPassenger] = useState({
            name: "",
            surname: "",
            phone: ""
        });
        const [errors, setErrors] = useState([]);

        useEffect(() => {
            if (passengerId) {
                fetchData();
            }
        }, []);

        const fetchData = async () => {
            try {
                const fetchedPassenger = await getPassengerById(passengerId);
                setPassenger(fetchedPassenger);
            } catch (error) {
                console.error(error);
                navigate('/error', {state: {message: error.message}});
            }
        };

        const inputHandler = (e) => {
            const {name, value} = e.target
            setPassenger(prev => ({
                ...prev,
                [name]: value
            }))
        }

        const validateInputs = () => {
            const validationErrors = {};

            if (passenger.name.length <= 0) {
                validationErrors.name = "Name cannot be an empty field.";
            }
            if (passenger.surname.length <= 0) {
                validationErrors.surname = "Surname cannot be an empty field.";
            }
            if (passenger.phone.length <= 0) {
                validationErrors.phone = "Phone number cannot be an empty field.";
            }
            setErrors(validationErrors);
            return Object.keys(validationErrors).length === 0;
        };

        const buttonHandler = async (e) => {
            e.preventDefault();

            if (validateInputs() && fetchType === "add") {
                await addPassenger(passenger);
                clearPassengerAndErrors()
            } else if (validateInputs() && fetchType === "update") {
                await updatePassenger(passengerId, passenger);
                clearPassengerAndErrors();
                window.location.assign(`/passengers`);
            } else {
                console.warn("Incorrect Values!")
            }
        };

        const clearPassengerAndErrors = () => {
            setPassenger({
                name: "",
                surname: "",
                phone: ""
            });
            setErrors([]);
        }

        return (
            <Box sx={{width: '40%'}}>

                <Stack spacing={3}>

                    <TextField variant="outlined"
                               type="text"
                               name="name"
                               value={passenger.name}
                               onChange={inputHandler}
                               label="Name"
                               error={!!errors.name}
                               helperText={errors.name}/>

                    <TextField variant={"outlined"}
                               type="text"
                               name="surname"
                               value={passenger.surname}
                               onChange={inputHandler}
                               label="Surname"
                               error={!!errors.surname}
                               helperText={errors.surname}/>

                    <TextField type="text"
                               name="phone"
                               value={passenger.phone}
                               onChange={inputHandler}
                               label="Phone Number"
                               error={!!errors.phone}
                               helperText={errors.phone}/>

                    <Button variant="contained" onClick={buttonHandler}>{message}</Button>
                </Stack>
            </Box>
        );
    }
;

export default PassengerForm;