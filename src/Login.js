import axios from "axios";
import React, { useState }  from "react";
import { Button } from "react-bootstrap";
//import App from "./App";
import { useNavigate } from "react-router-dom";
import './login.css'
//import FlightavaliableatNow from "./Home";
function Login(){ 
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const oncli=()=>{
    const data={
      email:email,
      password:password,
    }
    axios.post('http://localhost:8009/user/locate/',data).then(res=>{
      if(res.data){
       navigate(-1)
      }
    }).catch(err=>{
      console.log(err);
    })
  }
   

        return(

               
                <div>
                <h1>Welcome To Domestic FlightBooking</h1>
                <form  className="frm" >
                 <h1>Login</h1>
                 
                 
                 <input type={'email'} name='email'   id='email' placeholder="email" onChange={e=>setEmail(e.target.value)}/>
                 
                 
                  <input type={'password'} name='password' id="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                  
                  <Button variant="primary" style={{height:"40px",borderRadius:"20px"}} onClick={oncli}>LOGIN</Button>

                </form>
         </div>
        
        )
    }

export default Login