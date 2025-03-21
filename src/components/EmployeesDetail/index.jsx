import React, { useState } from "react";
// styles
import "./style.css";
import { Box, Button, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import AddEmployee from "../AddEmployeModal";
import { useSelector } from "react-redux";

const EmployeesDetail = () => {
  const [openAddEmployee, setOpenAddEmployee] = useState(false);
  const employees = useSelector((store)=> store.app.employees)

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
      <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Employee List
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "#f5f5f5" }}>
            <TableCell><strong>Id</strong></TableCell>
            <TableCell><strong>First Name</strong></TableCell>
            <TableCell><strong>Last Name</strong></TableCell>
            <TableCell><strong>Department</strong></TableCell>
            <TableCell><strong>Phone Number</strong></TableCell>
            <TableCell><strong>Address</strong></TableCell>
            <TableCell sx={{textAlign:"center"}}><strong>Action</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{index +1}</TableCell>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.phoneNumber}</TableCell>
                <TableCell>{employee.address}</TableCell>
                <TableCell sx={{textAlign:"center"}}>
                  <Button>Edit</Button>
                <Button>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No employees added yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default EmployeesDetail;
