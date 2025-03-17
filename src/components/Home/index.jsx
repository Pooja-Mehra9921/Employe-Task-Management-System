import React from "react";
// styles
import "./style.css"
import { Box, Typography } from "@mui/material";
import HomeCart from "../HomeCart";

const Home = ()=>{
    return(
        <>
        <Box className="css-1ygil4i-MuiToolbar-root"></Box>
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