import React from "react";

// styles 
import "./style.css"


const Button =()=>{
    return(
        <>
        <Button
          variant="contained"
          className="btn-styling"
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
        </>
    )
};

export default Button;