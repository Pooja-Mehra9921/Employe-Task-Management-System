import React, { useState } from "react";
// styles
import "./style.css";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import AddEmployee from "../AddEmployeModal";

const EmployeesDetail = () => {
  const [openAddEmployee, setOpenAddEmployee] = useState(false);

  const handleAddEmployee = () => {
    setOpenAddEmployee(true);
  };

  return (
    <>
      <AddEmployee open={openAddEmployee} setOpen={setOpenAddEmployee} />
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
          variant="contained"
          className="add-empl-btn"
          startIcon={<AddIcon />}
          onClick={handleAddEmployee}
          sx={{
            backgroundColor: "#90CAF9",
            color: "#000",
            "&:hover": {
              backgroundColor: "#64B5F6",
            },
          }}
        >
          Add New Employee
        </Button>
      </Box>
    </>
  );
};

export default EmployeesDetail;
