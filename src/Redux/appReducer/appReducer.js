import { createSlice } from "@reduxjs/toolkit";

const taskManagementSystem = createSlice({
  name: "taskmanagementsystem",
  initialState: {
    employees: [],
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
  },
});


export const {setEmployees} = taskManagementSystem.actions;

export default taskManagementSystem.reducer;