import {React, useEffect, useState}  from "react";
import './home.css'
import flight from './pexels-pixabay-62623.jpg'
//import { Image } from "react-bootstrap";
//import delhi from './DELHI.jpg'
//import logo from './logo.svg'
import  {FaSistrix} from 'react-icons/fa'

import { TextField } from "@mui/material";
import CardView from "./cardtem";
//import { Button, Card } from "react-bootstrap";
//import CardView from "./cardtem";
function FlightavaliableatNow() {
  
 const [resdata,setResdata]=useState([])
  useEffect(()=>{
   fetch('http://localhost:5005/user/allinfo').then(res=>{
    return res.json()}).then(data=>{
      console.log(data)
     setResdata(data)
    })
},[])
  console.log(resdata)
  return (
    
      <div className="top">
        
           <h1 style={{'color':'white'}}>Domestic Flight Booking</h1> 
           <div className="imgbkg">
          <img src={flight} className="bkg" alt=""/><hr/>
        </div>
        
        <br/>
        <br/>
        <br/>
       
         <div className="wet">
             Current Running Flight
         </div>
       


        <div className="imgbk">
       
         
      
       
        <TextField id="outlined" InputProps={{endAdornment: <FaSistrix/>}} className="txtfld" label="Search"/>
         <br/>
         <br/>
         
         <div className="crddiv">
       
         {resdata.map((item,index)=>(
        <CardView data={item.city}/>
       ))}
 {resdata.map((item,index)=>(
        <CardView data={item.city}/>
       ))}

        </div>
        
        
         </div>

  
   
   
 
</div>

  );
}




export default FlightavaliableatNow;
