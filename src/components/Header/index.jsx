import { Box, Button, Typography } from "@mui/material";
import React from "react";

// styles
import "./style.css"
import { useNavigate } from "react-router-dom";

const Header =({title})=>{

    const navigate = useNavigate();


    const handleLogoutBtn =()=>{
        console.log("logout");
        localStorage.clear();
        navigate("/login");
    }
    return(
        <>
        <Box className="main-header-container">
        <Typography variant="h4">{title}</Typography>
        <Button className="logout-btn" onClick={handleLogoutBtn}>Logout</Button>
        </Box>
        </>
    )
};

export default Header;