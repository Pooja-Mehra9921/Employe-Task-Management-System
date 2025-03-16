import React from "react";
// styles
import "./style.css"
import { Box, Typography } from "@mui/material";
import HomeCart from "../HomeCart";

const Home = ()=>{
    return(
        <>
        <Box className="homeSection-main-container">
        <HomeCart/>
        <HomeCart/>
        <HomeCart/>
        <HomeCart/> 

        </Box>
        </>
    )
};

export default Home;