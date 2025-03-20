import React from "react";

// styles 
import "./style.css"
import { Box, Typography } from "@mui/material";

const DashBoardCart =({title, bgColor})=>{
    return(
        <>
        <Box sx={{margin:"10px", backgroundColor: bgColor}} className="main-homecart-container">
            <Box>
            <Typography sx={{textAlign:"center"}}>0</Typography>
            <Typography sx={{textAlign:"center"}}>{title}</Typography>

            </Box>

        </Box>
        </>
    )
};

export default DashBoardCart;