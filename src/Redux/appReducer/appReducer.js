import { createSlice } from "@reduxjs/toolkit";

const taskManagementSystem = createSlice({
  name: "taskmanagementsystem",
  initialState: {
    employees: [],
  },
  reducers: {
    setEmployees: (state, action) => {
      if(Array.isArray(action.payload)){
        state.employees = [...action.payload]
      }else{
        state.employees.push(action.payload);

      }
    },
  },
});


export const {setEmployees} = taskManagementSystem.actions;

export default taskManagementSystem.reducer;