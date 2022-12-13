import {    Menu, TextField} from "@mui/material";
import axios from "axios";

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './Admindashboard.css'

//import { IconContext } from "react-icons";
//import { Link } from "react-router-dom";
import './Menubar.css'
export default function Dashboard(){
    const [city,setcity]=useState();
    const [flightname,setFlightname] =useState();
    const [airPortName,setAirportName]=useState();
    const [multi,setMulti ]=useState();
    const [single,setSingle]=useState();
    const [first,setFirst]=useState();
    
    const [time1,setTime1]=useState();
    const [time2,setTime2]=useState();
    const [time3,setTime3]=useState();
    const oncli=()=>{

      const time={
        time1:time1,
        time2:time2,
        time3:time3
      }
    const data={
        city:city,
        flightname:flightname,
        airPortName:airPortName,
        multi:multi,
        single:single,
        first:first,
        time:time
        
}
  axios.post('http://localhost:5005/user/addflightinfo',data).then(res=>{
    console.log(res.data)
  })
    }
    return(
        <React.Fragment>
         

         <div className="dashb1">
          
           <h1 >Dashboard For Flight Adding</h1>

           <br/>
           <br/>
           <br/>
           <br/>

           <h1>Flight Details</h1>

           <TextField variant="outlined" label="City" type={'text'} className="flightname" onChange={e=>setcity(e.target.value)}/> 
                
            <TextField variant="outlined" label="FlightName" type={'text'} className="flightname" onChange={e=>setFlightname(e.target.value)}/> 
            <TextField variant="outlined" label="AirPortName" type={'text'} className="flightname" onChange={e=>setAirportName(e.target.value)}/>       
            <TextField variant="outlined" label="Double Seat Count" type={'text'} className="flightname" onChange={e=>setMulti(e.target.value)}/>
            <TextField  variant="outlined" label="Single Seat Count" type={'text'} className="flightname" onChange={e=>setSingle(e.target.value)}/>
            <TextField variant="outlined" label="First Class Count" type={'text'} className="flightname" onChange={e=>setFirst(e.target.value)}/>


            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Time</h1>

            <TextField variant="outlined" label="Time1" type={'text'} className="flightname" onChange={e=>setTime1(e.target.value)}/>
            <TextField variant="outlined" label="Time2" type={'text'} className="flightname" onChange={e=>setTime2(e.target.value)}/>
            <TextField variant="outlined" label="Time3" type={'text'} className="flightname" onChange={e=>setTime3(e.target.value)}/>

            

            <br/>
            <br/>
            <br/>
            <h1>File Upload</h1>
               
            <TextField variant="outlined"  type={'file'} className="flightname"/>


            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
 
          
             <Button variant="primary" onClick={oncli}className="btn" >NEXT</Button>
        </div>          
       
        </React.Fragment>
    )
}



export function Menubar(){
    return(<React.Fragment>
        <div className="bg1">
         <Menu>
        
            </Menu>
        </div>
    </React.Fragment>)
}



