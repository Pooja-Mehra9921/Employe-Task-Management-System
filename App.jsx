import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// custom components
import LoginPage from "./src/pages/Login";
import SignUpPage from "./src/pages/SignUp";
import Home from "./src/pages/Home";
import DashBoard from "./src/components/DashBoard";
import TaskBoard from "./src/components/TaskBoard";
import Projects from "./src/components/Projects";
import EmployeesDetail from "./src/components/EmployeesDetail";
import Notifications from "./src/components/Notifications";
import Settings from "./src/components/Settings";


const App = ()=>{
    return(
        <>
      
<BrowserRouter>
<Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/dashboard" element={<DashBoard/>}/>
    <Route path="/taskboard" element={<TaskBoard/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/notifications" element={<Notifications/>}/>
    <Route path="/employee" element={<EmployeesDetail/>}/>
    <Route path="/settings" element={<Settings/>}/>
</Routes>
    </BrowserRouter>
        </>
    )
};

export default App;