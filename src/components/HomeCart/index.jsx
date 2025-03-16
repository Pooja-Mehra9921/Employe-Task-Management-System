import React from "react";

// styles 
import "./style.css"
import { Box, Typography } from "@mui/material";

const HomeCart =()=>{
    return(
        <>
        <Box className="main-homecart-container">
            <Box>
            <Typography sx={{textAlign:"center"}}>Total Employess</Typography>
            <Typography sx={{textAlign:"center"}}>0</Typography>
            </Box>

        </Box>
        </>
    )
};

export default HomeCart;