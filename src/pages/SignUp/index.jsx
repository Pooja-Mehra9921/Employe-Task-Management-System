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
import { showErrorToast, showSuccessToast } from "../../components/Notifications";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  // handle password visibility

  const handlePasswordVisibility = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  // handle confirm password visibility

  const handleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };
  // get data enter by user in the inputs

  const handleInputvalue = (type) => (event) => {
    setUserData({ ...userData, [type]: event.target.value });
  };

  /** handle Sign up btn */
  const handleSignupbtn = () => {
    if (
      userData.email == "" ||
      userData.password == "" ||
      userData.confirmPassword == ""
    ) {
      return showErrorToast("all filed are required");
    }

    if (userData.password !== userData.confirmPassword) {
      return console.log("password is not matched");
    }
    console.log("form submit", userData);
    
    showSuccessToast("sign up succusfully");
    setUserData({
      email:"",
      password:"",
      confirmPassword:""
    })
  };

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
              value={userData.email}
              variant="outlined"
              margin="none"
              fullWidth
              placeholder="Example@gmail.com"
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
              onChange={handleInputvalue("email")}
            />
            {error && <Typography color="red">{error}</Typography>}
            <Typography variant="body1" sx={{ color: "grey" }}>
              Password
            </Typography>

            <TextField
              variant="outlined"
              type={isPasswordShow ? "text" : "password"}
              value={userData.password}

              margin="none"
              fullWidth
              placeholder="Enter your password"
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
              onChange={handleInputvalue("password")}
            />
            <Typography variant="body1" sx={{ color: "grey" }}>
              Confirm Password
            </Typography>

            <TextField
              variant="outlined"
              type={isConfirmPasswordVisible ? "text" : "password"}
              value={userData.confirmPassword}

              margin="none"
              fullWidth
              placeholder="Confirm your password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleConfirmPasswordVisibility}>
                      {isConfirmPasswordVisible ? (
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
              onChange={handleInputvalue("confirmPassword")}
            />
            <Button
              className="login-btn"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleSignupbtn}
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
