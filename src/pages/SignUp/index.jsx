import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// assets
import LOGIN_IMAGE from "../../assets/images/loginpageimage.png";

// MUI Components
import {
  Button,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";

// styles
import "./style.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const userDetail ={
    email:"",
    password:""
  }


  // handle password visibility

  const handlePasswordVisibility = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  // get data enter by user in the inputs 
  const handleInputvalue=(event)=>{
console.log("input value--", event.target.value);
console.log("input type---", event.target.type);
  }
  return (
    <Box className="main-login-container fx-direction">
      <Box className="paper-container fx-direction">
        <Box className="login-left-section sec fx-direction">
          <Box className="login-form">
            <Typography
              sx={{ textAlign: "center", margin: "30px" }}
              variant="h4"
              component="h1"
              gutterBottom
            >
              Sign Up
            </Typography>
            <Typography
              variant="body1"
              sx={{ margin: "5px auto", color: "grey" }}
            >
              Username or email
            </Typography>
            <TextField
              className="textfiled"
              type="email"
              variant="outlined"
              margin="none"
              fullWidth
              placeholder="example@gmail.com"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <EmailIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "10px",
                  backgroundColor: "#edf0f5",
                  marginBottom: "20px",
                },
              }}
              onChange={handleInputvalue}
            />
            <Typography variant="body1" sx={{ color: "grey" }}>
              Password
            </Typography>

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
                      {isPasswordShow ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "10px",
                  backgroundColor: "#edf0f5",
                  marginBottom: "20px",
                },
              }}
              onChange={handleInputvalue}

            />
            <Typography variant="body1" sx={{ color: "grey" }}>
              Confirm Password
            </Typography>

            <TextField
              variant="outlined"
              type={isPasswordShow ? "text" : "password"}
              margin="none"
              fullWidth
              placeholder="confirm your password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePasswordVisibility}>
                      {isPasswordShow ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "10px",
                  backgroundColor: "#edf0f5",
                },
              }}
              onChange={handleInputvalue}

            />
            <Button
              className="login-btn"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Sign up
            </Button>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", margin: "10px" }}
            >
              Already have an account?{" "}
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </Typography>
          </Box>
        </Box>

        <Box className="login-right-section sec">
          <Box className="fx-direction">
            <img className="login-image" src={LOGIN_IMAGE} alt="Login Image" />
          </Box>
          <Typography
            className="right-title"
            variant="h5"
            sx={{ textAlign: "center", marginTop: "20px" }}
          >
            Check Your Project Progress
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;
