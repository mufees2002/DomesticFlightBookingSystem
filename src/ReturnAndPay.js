import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { React} from "react";

import './ReturnAndPay.css'
export default function RetPay(){
   
   return(
    <div className="cls1">

      


     
      
         <FormLabel id="demo-row-radio-buttons-group-label">Payment</FormLabel>
               <RadioGroup defaultValue="UPI"  className="rad"  row
        aria-labelledby="demo-row-radio-buttons-group-label">
                <FormControlLabel value={"UPI"} control={<Radio/> }label="UPI"/>
                <FormControlLabel value={"Credit Card"} control={<Radio/> }label="Credit Card"/>
                <FormControlLabel value={"Debit Card"} control={<Radio/> }label="Debit Card" />
                
                 </RadioGroup>
                 
                 <FormLabel id="demo-row-radio-buttons-group-label">Book a Return Ticket</FormLabel>
               <RadioGroup defaultValue="Yes"  className="rad"  row
        aria-labelledby="demo-row-radio-buttons-group-label">
                <FormControlLabel value={"Yes"} control={<Radio/> }label="Yes"/>
                <FormControlLabel value={"No"} control={<Radio/> }label="No"/>
                
                 </RadioGroup>
                 
                 <FormLabel id="demo-row-radio-buttons-group-label">Return Date</FormLabel><br/>

                 <TextField variant="outlined" type={"date"}  className="txt"/><br/>
                 <TextField variant="outlined" type={"time"}  className="txt1"/>

                  <br/>
                  <br/>
                  <Button variant="primary" className="btn">Continue</Button>
                  
                
    </div>
   )
}

