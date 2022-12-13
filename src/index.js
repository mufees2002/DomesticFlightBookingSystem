import { AppBar, Button,  Divider,  Drawer, IconButton,List,ListItem,ListItemButton,ListItemText,styled,   Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, {  useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BiMenu } from 'react-icons/bi';

import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Dashboard from './AdminDashboard';
import FlightavaliableatNow from './Home';
import Login from './Login';
import Register from './RegisterUser';
//import './index.css';
//import FlightavaliableatNow from './Home';
import reportWebVitals from './reportWebVitals';
import Tipc from './TImeAndPics';
//import AddingNewInfo from './Admin';
//import Login from './Login';
//import Register from './RegisterUser';
import PickAndPay from './PickandPaying';
//import CardViewInfo from './CardViewInfo';
//import CardView from './cardtem';
//import PickAndPay from './PickandPaying';
//import { Menubar } from './AdminDashboard';

import RetPay from './ReturnAndPay';
import UploadFile from './FileUpload';
import CardViewInfo from './CardViewInfo';
import Pay from './Payment';
import Profile from './ProFile';
import News from './News';
import Aboutus from './About Us';
import Navbar from './components/Navbar';
import {TiArrowLeft} from 'react-icons/ti'
const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
export default function App(){
  const [open, setOpen] = useState(false);

  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

 
    return(
      
        <div>
          
        <Box sx={{ flexGrow: 1,width:'1600px',color:'skyblue' }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
          
            <BiMenu/>
          </IconButton>
           <Drawer
           onClose={handleDrawerClose}
           sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}

           
           >
            
           
           <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <TiArrowLeft/>
          </IconButton>
        </DrawerHeader>
          <Divider/>
          <List>
          {['Profile', 'Home', 'About Us', 'News'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton >
                 
                <ListItemText primary={text} />
               
              </ListItemButton>
            </ListItem>
          ))}
        </List>
           
           
           </Drawer>
         
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Domestic Flight Booking
          </Typography> 
            <Button color='white' variant='primary'  >LOGIN</Button>
            <Button color='white' variant='primary' >SIGN UP</Button> 
        </Toolbar>
      </AppBar>
                      
    </Box>
    <BrowserRouter>
              <Routes>
                <Route path="/" element={<FlightavaliableatNow/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Signup" element={<Register/>}/>
                <Route path='/Admin' element={<Dashboard/>}/>
                <Route path='/TimeAndPics' element={<Tipc/>}/>
                <Route path='/Book' element={<PickAndPay/>}/>
                <Route path='/Pay' element={<RetPay/>}/>
                <Route path='/File' element={<UploadFile/>}/>
                <Route path='/CardInfo' element={<CardViewInfo/>}/>
                <Route path='/Payment' element={<Pay/>}/>
                <Route path='/Profile' element={<Profile/>}/>
                <Route path='/News' element={<News/>}/>
                <Route path='/AboutUs'element={<Aboutus/>}/>
                <Route path='/Sidebar' element={<Navbar/>}/>
              </Routes>
              </BrowserRouter>
    </div>
    )

}






const root = ReactDOM.createRoot(document.getElementById('root'));




root.render( <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
