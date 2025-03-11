import React from "react";

// assents
import LOGIN_IMAGE from "../../assents/images/loginpageimage.png"

// MUI Components
import { Button, Typography, Paper, TextField } from "@mui/material";
import Box from "@mui/material/Box";

// styles
import "./style.css";

const LoginPage = () => {
  return (
    <Box className="main-login-container">
      <Box className="paper-container">
        <Box className="login-left-section sec">
          <Box className="login-form">
            <Typography variant="h5" component="h1" gutterBottom>
              Login
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder="enter your email"
            />
            <TextField
              variant="outlined"
              type="password"
              margin="normal"
              fullWidth
              placeholder="enter your password"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>

        <Box className="login-right-section sec">
            <img className="login-image" src={LOGIN_IMAGE} alt="Login Image" />
            <Typography variant="h5" sx={{textAlign:"center"}}>Check Your Project Progress</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
