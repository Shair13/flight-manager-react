import React from "react";
import {CircularProgress, Grid} from "@mui/material";

const Loading = () => {

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            height="50vh">
            <CircularProgress color="secondary"/>
        </Grid>);
}

export default Loading;