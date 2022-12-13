//import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Button, Card } from "react-bootstrap";
import './imagelist.css'
import delhi from './DELHI.jpg'
//import { Button } from "react-bootstrap";
//import { Button } from "bootstrap";
class CardView extends React.Component{
 constructor(props){
        super(props);
         this.state={
            name:props.data,
         }
         console.log(props)
    }
    
    render(){
      const handleclick=()=>{
        
        
         
      }

        return(
            
        <div className="grid">
        <Card style={{width:'160px',height:'230px'}}>
          <img src={delhi} className="img" alt=""/>
          
          <Card.Title style={{textAlign:'center',fontSize:'15',fontFamily:'Times New Roman' ,fontStyle:'italic'}}>{this.state.name}</Card.Title>
           <Card.Body>
         
          <Button variant="primary" style={{marginLeft:'20px',width:'70px',marginTop:'-3px'}} onClick={handleclick}>Book</Button>
           </Card.Body >
           
        </Card>
        
        </div>          
            
        )
    }
}

export default CardView