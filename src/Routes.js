import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import FlightavaliableatNow from "./Home";
import Login from "./Login";
import Register from "./RegisterUser";
export default  class Router extends React.Component{
    render(){
     return(<>
        <React.Fragment>
              <BrowserRouter>
              <Routes>
                <Route path="/" element={<FlightavaliableatNow/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signup" element={<Register/>}/>
              </Routes>
              </BrowserRouter>
            </React.Fragment>
        
        </>
            )
    }
}