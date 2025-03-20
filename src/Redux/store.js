import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import taskManagementSystem from "../Redux/appReducer/appReducer"






export const store = configureStore({
    reducer:{
        app: taskManagementSystem,
    },
});

setupListeners(store.dispatch);