
import {React, useState} from "react";
import './RegisterUser.css'
//import { useEffect } from "react";
import { Button } from "react-bootstrap";
import {  TextField} from "@mui/material";
//import axios from "axios";
//import { Card } from "react-bootstrap";
//import { useState } from "react";
//const api=axios.create({
  //  baseURL:`https://jsonplaceholder.typicode.com/todos/1`
//})
//import Restapi from "./Service/UserService";
import axios from "axios";

function Register(){
 
      
    
       

     const [firstname,setFirstname]=useState('');
     const [lastname,setLastnamename]=useState('');
     const [email,setEmail]=useState('');
     const [phno,setPhno]=useState('');
     const [password,setPassword]=useState('');
     const [confirmpassword,setConfirmpassword]=useState('');
     const oncli=()=>{
    
    const data={firstname:firstname,
    lastname:lastname,
    email:email,
  phno:phno,
password:password,
confirmpassword:confirmpassword}
axios.post('http://localhost:8009/user/add',data).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
    }
    
        return (
        <div>
          
         
       
          <h1 >Welcome To Domestic Airlines Booking</h1>
    <form className="frm">
        <h1>Register Your Account</h1>
        <br/>
        
        
       <TextField variant="outlined" label="Firstname" type={'text'} onChange={e=>setFirstname(e.target.value)}/>
        <br/>
        <br/>
        <TextField variant="outlined" label="Lastname" type={'text'} onChange={e=>setLastnamename(e.target.value)}/><br/>
        <br/>
        <br/>
        <TextField variant="outlined" label="Email" type={'email'}onChange={e=>setEmail(e.target.value)}/><br/>
        <br/>
        <br/>
        <TextField variant="outlined" label="Phone" type={'tel'} onChange={e=>setPhno(e.target.value)}/><br/>
        <br/>
        <br/>
        <TextField variant="outlined" label="Password" type={'password'} onChange={e=>setPassword(e.target.value)}/><br/>
        <br/>
        <br/>
        <TextField variant="outlined" label="Confirm Password" type={'password'} onChange={e=>setConfirmpassword(e.target.value)}/>
        <br/>
        <br/>
        <Button variant="primary" onClick={oncli}>SUBMIT</Button>
       
    </form>
    </div>

        )
    }

export default Register