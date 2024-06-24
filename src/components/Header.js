import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, ButtonGroup, Grid} from "@mui/material";

const Header = () => {
    return (
        <Box
            height={30}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}>
            <Grid container justifyContent="center" spacing={5}>
                <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Link to="/"><Button>Home Page</Button></Link>
                        <Link to="/flights"><Button>Flights</Button></Link>
                        <Link to="/passengers"><Button>Passengers</Button></Link>
                        <Link to="/add-flight"><Button>Add New Flight</Button></Link>
                        <Link to="/add-passenger"><Button>Add New Passenger</Button></Link>
                </ButtonGroup>
            </Grid>
        </Box>
    );
};

export default Header;
