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
import { showErrorToast, showSuccessToast } from "../../components/Messages";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle password visibility
  const handlePasswordVisibility = () => setIsPasswordShow(!isPasswordShow);
  const handleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  // Handle input change
  const handleInputValue = (type) => (event) => {
    setUserData({ ...userData, [type]: event.target.value });
  };

  // Reset form fields
  const resetForm = () => {
    setUserData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /** Handle Signup button */
  const handleSignupBtn = () => {
    const { email, password, confirmPassword } = userData;

    if (!email || !password || !confirmPassword) {
      return showErrorToast("All fields are required");
    }

    if (!isValidEmail(email)) {
      return showErrorToast("Please enter a valid email address");
    }

    if (password !== confirmPassword) {
      return showErrorToast("Passwords do not match");
    }

    // Retrieve existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem("Users")) || [];

    // Check if the email is already registered
    const isEmailExist = existingUsers.some((user) => user.email === email);
    if (isEmailExist) {
      return showErrorToast("Email is already registered. Please use a different email.");
    }

    // Append the new user to the existing users array
    const updatedUsers = [...existingUsers, { email, password }];

    // Save the updated users array to local storage
    localStorage.setItem("Users", JSON.stringify(updatedUsers));

    showSuccessToast("Sign-up successful");
    resetForm();

    // Navigate to login after successful signup
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <Box className="main-login-container fx-direction">
      <Box className="paper-container fx-direction">
        <Box className="login-left-section sec fx-direction">
          <Box className="login-form">
            <Typography sx={{ textAlign: "center", margin: "30px" }} variant="h4">
              Sign Up
            </Typography>

            <Typography variant="body1" sx={{ margin: "5px auto", color: "grey" }}>
              Username or Email
            </Typography>
            <TextField
              className="textfiled"
              type="email"
              value={userData.email}
              variant="outlined"
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
              onChange={handleInputValue("email")}
            />

            <Typography variant="body1" sx={{ color: "grey" }}>Password</Typography>
            <TextField
              variant="outlined"
              type={isPasswordShow ? "text" : "password"}
              value={userData.password}
              fullWidth
              placeholder="Enter your password"
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
                  marginBottom: "20px",
                },
              }}
              onChange={handleInputValue("password")}
            />

            <Typography variant="body1" sx={{ color: "grey" }}>Confirm Password</Typography>
            <TextField
              variant="outlined"
              type={isConfirmPasswordVisible ? "text" : "password"}
              value={userData.confirmPassword}
              fullWidth
              placeholder="Confirm your password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleConfirmPasswordVisibility}>
                      {isConfirmPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "10px",
                  backgroundColor: "#edf0f5",
                },
              }}
              onChange={handleInputValue("confirmPassword")}
            />

            <Button
              className="login-btn"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleSignupBtn}
            >
              Sign Up
            </Button>

            <Typography variant="body1" sx={{ textAlign: "center", margin: "10px" }}>
              Already have an account?{" "}
              <span style={{ cursor: "pointer", color: "blue" }} onClick={() => navigate("/login")}>
                Login
              </span>
            </Typography>
          </Box>
        </Box>

        <Box className="login-right-section sec">
          <Box className="fx-direction">
            <img className="login-image" src={LOGIN_IMAGE} alt="Login" />
          </Box>
          <Typography className="right-title" variant="h5" sx={{ textAlign: "center", marginTop: "20px" }}>
            Check Your Project Progress
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;
