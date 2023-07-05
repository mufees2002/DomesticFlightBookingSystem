import { FormControl,  InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { Button} from "react-bootstrap";
import './PickAndPay.css';

export default function PickAndPay (){
    
   const Btn=()=>{
    fetch('')
   }




        const [type ,setType]=useState("Single");
        const [ch,setCh]=useState();
        const [ad,setAd]=useState();
        const chnge=(e)=>{
         setType(e.target.value)
         
        };
        if(ch===0||ad===0){
            console.log("TRUE")

        }
       
        return(
        <React.Fragment>
          <div className="pic1">
            <h1>TIME</h1>
            <div>
                <FormControl>
                <InputLabel id="demo-simple-select-helper-label" className="lble">Type</InputLabel>   
               <Select  labelId="demo-simple-select-helper-label" 
          id="demo-simple-select-helper"label="Type" value={type} onChange={chnge} className="select">
                <MenuItem value={"single"}>Single</MenuItem>
                <MenuItem value={"Double"}>Double</MenuItem>
                <MenuItem value={"First"}>First</MenuItem>
               </Select>
              
                  <br/>
                  <br/>
                  <br/>
                  
                  <TextField variant="outlined" label="Child" type={"number"} className="text"onChange={e=>(setCh(e.target.value))}/>
                  <br/>
                  <br/>
                  <br/>
                  <TextField variant="outlined" label="Adult" type={"number"} onChange={e=>(setAd(e.target.value))}/>

                 

                 <Button variant="primary" className="btn" onClick={Btn}>Continue</Button>
                 </FormControl>
              
            </div>
          </div>
          </React.Fragment>
        )
    }



 