import {  Button, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useState }  from "react";
import './TimeAndPics.css'
export default function Tipc (){
   
    const [time1,setTime1]=useState('');
    const [time2,setTime2]=useState('');
    const [time3,setTime3]=useState('');
    const [file,setfile]=useState();
    const oncli1=()=>{
      const data={
        time1:time1,
        time2:time2,
        time3:time3
      }
      axios.post('http://localhost:8009/user/time',data).then(res=>{
        console.log(res.data)
      })
    }
   const fileupload=(event)=>{
   setfile(event.target.files[0])
   console.log(file)
   
   }
   const upload=(e)=>{
    e.preventDefault()
      const url = 'http://localhost:8009/user/files';
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      axios.post(url, formData, config).then((response) => {
        console.log(response.data);
      });
  };

   


        return(
            <>
            <React.Fragment>
                <div className="fr1">
                   <h1>Add Time</h1>
                   <FormLabel id="demo-row-radio-buttons-group-label"> Add Timing</FormLabel>
                   <TextField id="outlined"  className="txt"  type={"text"} onChange={e=>setTime1(e.target.value)} />
                   <br/>
                   <br/>+-
                   <TextField id="outlined" className="txt" type={"text"} onChange={e=>setTime2(e.target.value)}/>
                   <br/>
                   <br/>
                   <TextField id="outlined" className="txt" type={"text"} onChange={e=>setTime3(e.target.value)}/>  <Button variant="outlined" className="btn1" onClick={oncli1}>Update</Button>
                   <br/>
                   <br/>                   
                   <br/>
                   <br/>
                   <br/>
                   <FormLabel id="demo-row-radio-buttons-group-label">Picture</FormLabel>
                   <TextField variant="outlined" type={"file"} className="txt" onChange={fileupload}/>
                  
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    <Button variant="primary"  type="submit" onClick={upload} className="btn1" style={{marginLeft:'600px'}}>NEXT</Button>
                  </div>
               
               
            </React.Fragment>
            
            </>
        )
  
}
