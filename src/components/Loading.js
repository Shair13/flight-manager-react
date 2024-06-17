import React from "react";
import {CircularProgress, Stack} from "@mui/material";

const Loading = () => {

    return (
        <Stack sx={{color: 'grey.500'}} spacing={2} direction="row">
            <CircularProgress color="secondary"/>
        </Stack>);
}

export default Loading;