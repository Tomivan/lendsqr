import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import Details from "./general-details/general-details";
import Login from "./login/login";

const Pages = () => {

    return(
        <Router>
            <Routes>
            <Route  path="/" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/user-general-details" element={< Details/>}/>
            </Routes>
        </Router>
    )
}

export default Pages;