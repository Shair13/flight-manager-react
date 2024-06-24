import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Button} from "@mui/material";

const ErrorPage = () => {

    const location = useLocation();
    const { message } = location.state || { message: "An unknown error occurred" };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Oops, something went wrong!</h2>
            <p>We're sorry, but an error occurred.</p>
            <p>{message}</p>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="warning">Go back to homepage</Button>
            </Link>
        </div>
    );
};

export default ErrorPage;
