//import logo from './logo.svg';
import './App.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlightavaliableatNow from './Home';
import Login from './Login';
import Register from './RegisterUser';
import Dashboard from './AdminDashboard';
import Tipc from './TImeAndPics';
import PickAndPay from './PickandPaying';
import RetPay from './ReturnAndPay';
import UploadFile from './FileUpload';
import CardViewInfo from './CardViewInfo';
import Pay from './Payment';
import Profile from './ProFile';
import News from './News';
import Aboutus from './About Us';
import { Navbar } from 'react-bootstrap';
function App() {

  return (
    <div>
       
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
  );
}


export default App;
