import * as React from "react";
import { Box, Button, Typography, Modal, Grid, TextField, Select } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const AddEmployee = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Employee
        </Typography>
        <Grid container>
          <Grid item>
            <Typography>First Name</Typography>
            <TextField></TextField>
            <Typography>last Name</Typography>
            <TextField></TextField>
            <Select>
      <Option value={1}>Documentation</Option>
      <Option value={2}>Components</Option>
      <Option value={3}>Features</Option>
    </Select>
          </Grid>
        </Grid>
        <Button onClick={handleClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default AddEmployee;
