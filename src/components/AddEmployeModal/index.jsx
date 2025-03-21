import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  NativeSelect,
  styled,
  InputBase,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../../Redux/appReducer/appReducer";
import { showErrorToast } from "../Messages";

// Style for modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

// Custom styled input
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: ["-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const AddEmployee = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const addedEmployees = useSelector((store) => store.app.employees);

  const [newEmployee, setNewEmployee] = React.useState({
    firstName: "",
    lastName: "",
    department: "",
    phoneNumber: "",
    address: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleClose = () => setOpen(false);

  const handleInputChange = (field) => (e) => {
    setNewEmployee({ ...newEmployee, [field]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // First Name validation (Required & No special characters/numbers)
    if (!newEmployee.firstName.trim()) {
      errors.firstName = "First Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(newEmployee.firstName)) {
      errors.firstName = "First Name should contain only letters";
      isValid = false;
    }

    // Last Name validation (Required & No special characters/numbers)
    if (!newEmployee.lastName.trim()) {
      errors.lastName = "Last Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(newEmployee.lastName)) {
      errors.lastName = "Last Name should contain only letters";
      isValid = false;
    }

    // Department validation (Required)
    if (!newEmployee.department) {
      errors.department = "Please select a department";
      isValid = false;
    }

    // Phone Number validation (Must be 10 digits)
    if (!newEmployee.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(newEmployee.phoneNumber)) {
      errors.phoneNumber = "Phone Number must be exactly 10 digits";
      isValid = false;
    }

    // Address validation (Required & Minimum 10 characters)
    if (!newEmployee.address.trim()) {
      errors.address = "Address is required";
      isValid = false;
    } else if (newEmployee.address.length < 10) {
      errors.address = "Address must be at least 10 characters";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSaveBtn = () => {
    if (!validateForm()) {
      return showErrorToast("Please correct the errors before saving.");
    }

    dispatch(setEmployees(newEmployee));

    setNewEmployee({
      firstName: "",
      lastName: "",
      department: "",
      phoneNumber: "",
      address: "",
    });

    setErrors({});
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
          Add New Employee
        </Typography>
        <Grid container spacing={2}>
          {/* First Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleInputChange("firstName")}
              value={newEmployee.firstName}
              fullWidth
              variant="outlined"
              label="First Name"
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleInputChange("lastName")}
              value={newEmployee.lastName}
              fullWidth
              variant="outlined"
              label="Last Name"
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>

          {/* Department Selection */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="standard" error={!!errors.department}>
              <InputLabel>Select Department</InputLabel>
              <NativeSelect value={newEmployee.department} onChange={handleInputChange("department")} input={<BootstrapInput />}>
                <option aria-label="None" value="">
                  Select
                </option>
                <option value="Developer">Developer</option>
                <option value="HR Department">HR Department</option>
                <option value="UI/UX Department">UI/UX Department</option>
                <option value="Graphic Designer">Graphic Designer</option>
              </NativeSelect>
              {errors.department && <Typography color="error">{errors.department}</Typography>}
            </FormControl>
          </Grid>

          {/* Phone Number */}
          <Grid item xs={12} sm={6}>
            <TextField
              type="tel"
              onChange={handleInputChange("phoneNumber")}
              value={newEmployee.phoneNumber}
              fullWidth
              variant="outlined"
              label="Phone Number"
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <TextField
              onChange={handleInputChange("address")}
              value={newEmployee.address}
              fullWidth
              variant="outlined"
              label="Address"
              multiline
              rows={2}
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
        </Grid>

        {/* Save Button */}
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button variant="contained" color="primary" onClick={handleSaveBtn}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddEmployee;
