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

const LoginPage = () => {
  const navigate = useNavigate();
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // Handle password visibility toggle
  const handlePasswordVisibility = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  // Handle input change
  const handleInputValue = (type) => (event) => {
    setUserData({ ...userData, [type]: event.target.value });
  };

  // Reset form fields
  const resetForm = () => {
    setUserData({
      email: "",
      password: "",
    });
  };

  // Login function
  const handleLogin = () => {
    const { email, password } = userData;

    if (!email || !password) {
      return showErrorToast("All fields are required");
    }

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem("Users")) || [];

    // Find user in local storage
    const foundUser = users.find((user) => user.email === email && user.password === password);

    if (foundUser) {
      showSuccessToast("Login successful!");
      resetForm();

      // Store logged-in user data in localStorage
      localStorage.setItem("LoggedInUser", JSON.stringify(foundUser));

      // Redirect to  home page
      setTimeout(() => {
        navigate("/home"); // navigate to homepage
      }, 2000);
    } else {
      showErrorToast("Invalid email or password");
    }
  };

  return (
    <Box className="main-login-container fx-direction">
      <Box className="paper-container fx-direction">
        <Box className="login-left-section sec fx-direction">
          <Box className="login-form">
            <Typography sx={{ textAlign: "center", margin: "30px" }} variant="h4">
              Login
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
              placeholder="Enter your email"
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

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "5px auto" }}>
              <Typography variant="body1" sx={{ color: "grey" }}>
                Password
              </Typography>
              <Typography variant="body2" sx={{ color: "blue", cursor: "pointer" }}>
                Forgot password?
              </Typography>
            </Box>

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
                },
              }}
              onChange={handleInputValue("password")}
            />

            <Button className="login-btn" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
              Login
            </Button>

            <Typography variant="body1" sx={{ textAlign: "center", margin: "10px" }}>
              Don't have an account?{" "}
              <span style={{ cursor: "pointer", color: "blue" }} onClick={() => navigate("/signup")}>
                Sign up
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

export default LoginPage;
