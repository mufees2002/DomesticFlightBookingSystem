import {React,useEffect} from "react";
import delhi from "./DELHI.jpg"
import './CardViewInfo.css'
import {  Card } from "react-bootstrap";
import {  TextField } from "@mui/material";
import { FaSistrix } from "react-icons/fa";


export default function CardViewInfo({ route, navigation }) {
const name=route.params
console.log(name)
  useEffect(() => {
    fetch("http://localhost:5005/{name}/").then(res=>res.json()).then(data=>{
      console.log(data);
    })
  }, []); 
   
    return(

            <div >
            <div className="crdmain">
              <img  src={delhi} alt="" className="crdimg"/> 
          </div>
          <hr/>
          <br/>
          <TextField id="outlined" InputProps={{endAdornment: <FaSistrix/>}}  className="txtfld" label="Search"/>
       <br/>
       <br/>
          <div className="crdtime">
            <Card style={{width:'18rem',padding:'20px'}}>
             <Card.Header>Name of The Airport Place</Card.Header>   
              <Card.Body>
                <div>
                  <span > Time1</span><br/><br/><br/>
                  <span>Time2</span><br/><br/><br/>
                  <span>Time3</span>
                </div>
              
              </Card.Body>
            </Card>
           
          </div>
          
          </div>
          
          
         )

    }
