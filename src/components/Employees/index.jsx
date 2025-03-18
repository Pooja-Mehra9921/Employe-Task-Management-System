import React from "react";
// styles
import "./style.css";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const Employees = () => {
  return (
    <>
      <Box className="emp-sec-main-container">
        <TextField
          variant="outlined"
          placeholder="Search here..."
          margin="dense"
          size="small"
          sx={{
            backgroundColor: "#3750eb", // Blue background
            borderRadius: "25px", // Rounded corners
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              color: "white",
              "& fieldset": {
                borderColor: "transparent", // Remove border
              },
              "&:hover fieldset": {
                borderColor: "#1565c0", // Slightly darker blue on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // White border when focused
              },
            },
            input: {
              color: "white", // White text color
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="obtained"
          className="add-empl-btn"
          startIcon={<AddIcon />}
        >
          Add New Employee
        </Button>
      </Box>
    </>
  );
};

export default Employees;
