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
        <HomeCart title={"Total Department"} bgColor={"#3F51B5"} />
        <HomeCart title={"Total Employees"} bgColor={"#1E88E5"} />
        <HomeCart title={"New Tasks"} bgColor={"#90CAF9"} />
        <HomeCart title={"Inprogress Task"} bgColor={"#64B5F6"} />
        <HomeCart title={"Completed Task"} bgColor={"#BBDEFB"} />
        <HomeCart title={"All Task"} bgColor={"#E3F2FD"} />

        </Box>
        </>
    )
};

export default Home;