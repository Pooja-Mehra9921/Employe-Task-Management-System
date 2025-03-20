import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// custom components
import LoginPage from "./src/pages/Login";
import SignUpPage from "./src/pages/SignUp";
import Home from "./src/pages/Home";


const App = ()=>{
    return(
        <>
<BrowserRouter>
<Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    <Route path="/home" element={<Home/>}/>
</Routes>
    </BrowserRouter>
        </>
    )
};

export default App;