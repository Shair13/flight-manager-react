import React, {useState} from 'react';
import {Box, Button, Stack, TextField} from "@mui/material";
import {addPassenger} from "../logic/passengersApi";

const NewPassenger = () => {

    const [newPassenger, setNewPassenger] = useState({
        name: "",
        surname: "",
        phone: ""
    });
    const [errors, setErrors] = useState([]);

    const inputHandler = (e) => {
        const {name, value} = e.target
        setNewPassenger(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validateInputs = () => {
        const validationErrors = {};

        if (newPassenger.name.length <= 0) {
            validationErrors.name = "Name cannot be an empty field.";
        }
        if (newPassenger.surname.length <= 0) {
            validationErrors.surname = "Surname cannot be an empty field.";
        }
        if (newPassenger.phone.length <= 0) {
            validationErrors.phone = "Phone number cannot be an empty field.";
        }
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };


    const addButtonHandler = async (e) => {
        e.preventDefault();

        if (validateInputs()) {
            await addPassenger(newPassenger);
            setNewPassenger({
                name: "",
                surname: "",
                phone: ""
            });
            setErrors([]);
        } else {
            console.warn("Incorrect Values!")
        }
    };

    return (
        <Box sx={{width: '40%'}}>

            <h1>Add Passenger Form</h1>

            <Stack spacing={3}>

                <TextField variant="outlined"
                           type="text"
                           name="name"
                           value={newPassenger.name}
                           onChange={inputHandler}
                           label="Name"
                           error={!!errors.name}
                           helperText={errors.name}/>

                <TextField variant={"outlined"}
                           type="text"
                           name="surname"
                           value={newPassenger.surname}
                           onChange={inputHandler}
                           label="Surname"
                           error={!!errors.surname}
                           helperText={errors.surname}/>

                <TextField type="text"
                           name="phone"
                           value={newPassenger.phone}
                           onChange={inputHandler}
                           label="Phone Number"
                           error={!!errors.phone}
                           helperText={errors.phone}/>

                <Button variant="contained" onClick={addButtonHandler}>Add Passenger</Button>
            </Stack>
        </Box>
    );
};

export default NewPassenger;