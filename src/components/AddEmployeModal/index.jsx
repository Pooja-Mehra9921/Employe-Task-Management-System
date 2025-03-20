import * as React from "react";

// MUI Components
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
import { useDispatch } from "react-redux";
import { setEmployees } from "../../Redux/appReducer/appReducer";

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
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const AddEmployee = ({ open, setOpen }) => {

  const dispatch = useDispatch();
  const [newEmployee, setNewEmployee] = React.useState({
    firstName: "",
    lastName: "",
    department: "",
    phoneNumber: "",
    address: "",
  });


  const handleClose = () => setOpen(false);

  const handleInputChange = (field) => (e) => {
    setNewEmployee({ ...newEmployee, [field]: e.target.value });
  };


  const handleSaveBtn = ()=>{
  console.log("new employee", newEmployee);
  dispatch(setEmployees(newEmployee));

  setNewEmployee({
    firstName: "",
    lastName: "",
    department: "",
    phoneNumber: "",
    address: "",
  })
  handleClose();


  }
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
          Add New Employee
        </Typography>
        <Grid container spacing={2}>
          {/* First Name */}
          <Grid item xs={12} sm={6}>
            <TextField onChange={handleInputChange("firstName")} value={newEmployee.firstName} fullWidth variant="outlined" label="First Name" />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField onChange={handleInputChange("lastName")} value={newEmployee.lastName} fullWidth variant="outlined" label="Last Name" />
          </Grid>

          {/* Department Selection */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="standard">
              <InputLabel>Select Department</InputLabel>
              <NativeSelect value={newEmployee.department} onChange={handleInputChange("department")} input={<BootstrapInput />}>
                <option aria-label="None" value="">Select</option>
                <option value="Developer">Developer</option>
                <option value="HR Department">HR Department</option>
                <option value="UI/UX Department">UI/UX Department</option>
                <option value="Graphic Designer">Graphic Designer</option>
              </NativeSelect>
            </FormControl>
          </Grid>

          {/* Phone Number */}
          <Grid item xs={12} sm={6}>
            <TextField type="tel" onChange={handleInputChange("phoneNumber")} value={newEmployee.phoneNumber} fullWidth variant="outlined" label="Phone Number" />
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <TextField onChange={handleInputChange("address")} value={newEmployee.address} fullWidth variant="outlined" label="Address" multiline rows={2} />
          </Grid>
        </Grid>

        {/* Save Button */}
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button variant="contained" color="primary" onClick={handleSaveBtn} onClose={handleClose}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddEmployee;
