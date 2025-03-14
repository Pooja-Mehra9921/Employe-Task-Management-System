import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// custom components
import LoginPage from "./src/pages/Login";
import SignUpPage from "./src/pages/SignUp";
import Dashboard from "./src/pages/Dashboard";


const App = ()=>{
    return(
        <>
<BrowserRouter>
<Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
    </BrowserRouter>
        </>
    )
};

export default App;