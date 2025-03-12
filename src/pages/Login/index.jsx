import React, { useState } from "react";

// assets
import LOGIN_IMAGE from "../../assets/images/loginpageimage.png";

// MUI Components
import { Button, Typography, Paper, TextField, InputAdornment, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';

// styles
import "./style.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();
  const [isPasswordShow, setIsPasswordShow] = useState(false);


const handlePasswordVisibility = ()=>{
  setIsPasswordShow(!isPasswordShow);
}

  return (
    <Box className="main-login-container fx-direction">
      <Box className="paper-container fx-direction">
        <Box className="login-left-section sec fx-direction">
          <Box className="login-form">
            <Typography
              sx={{ textAlign: "center", margin:"30px" }}
              variant="h4"
              component="h1"
              gutterBottom
            >
              Login
            </Typography>
            <Typography variant="body1" sx={{margin:"5px auto", color:"grey"}}>Username or email</Typography>
            <TextField
            className="textfiled"
            type="email"
              variant="outlined"
              margin="none"
              fullWidth
              placeholder="enter your email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <EmailIcon/>
                    </IconButton>
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "10px",
                  backgroundColor: "#edf0f5",
                  marginBottom:"20px"

                },
              }}
            />
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", margin:"5px auto"}}>
            <Typography variant="body1" sx={{color:"grey"}} >Password</Typography>
            <Typography variant="body2" sx={{color:"blue"}} >Forget password?</Typography>
            </Box>
          

            <TextField
              variant="outlined"
              
              type={isPasswordShow ? "text" : "password"}
              margin="none"
              fullWidth
              placeholder="enter your password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePasswordVisibility}>
                      {isPasswordShow ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "10px",
                  backgroundColor: "#edf0f5",
                },
              }}

            />
            <Button
            className="login-btn"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
            <Typography variant="body1" sx={{textAlign:"center", margin:"10px"}}>Don't have an account? <span style={{cursor:"pointer", color:"blue"}} onClick={()=> navigate("/signup")}>Sign up</span></Typography>
          </Box>
        </Box>


        <Box className="login-right-section sec">
          <Box className="fx-direction">
            <img className="login-image" src={LOGIN_IMAGE} alt="Login Image" />
          </Box>
          <Typography className="right-title" variant="h5" sx={{ textAlign: "center", marginTop:"20px" }}>
            Check Your Project Progress
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
