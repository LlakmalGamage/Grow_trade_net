// import { useState } from "react";
import {Routes, Route} from 'react-router-dom'; 
// import { BrowserRouter as Router } from "react-router-dom";
import './App.css'

import MarketPage from '../src/Pages/MarketPage/Market'
import SupportPage_F from '../src/Pages/SupportPage/Support'
import FarmersHomePage from '../src/Pages/FarmerHomePage/Home'
import WeatherPage from './Pages/WeatherPage/weather'

import ExportersHomePage from './Pages/ExportersHomePage/Home'
import ExportersMylistPage from './Pages/ExportersMyListPage/MyList'
import ExportersSupportPage from './Pages/ExportersSupportPage/Support'

import MainPage from './Pages/MainPage/main'
import DashBoardPage from './Pages/AdminDashboard/dashboard'
// import WholesalerPage from './Pages/WholesalerPage/wholesaler'
import WholesalerPage from './Pages/WholesalerPage/wholesaler'


import Signup from './Components/Signup';
import Login from './Components/Login';
import VerifyEmail from './Components/VerifyEmail';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordResetRequest from './Components/PasswordResetRequest';
import ResetPassword from './Components/ResetPassword';

import Dashboard from "./scenes/dashboard";
import Add from "./scenes/add";
import Invoices from "./scenes/invoices";
import User from "./scenes/user";
import Bar from "./scenes/bar";
import ProfileDashboard from "./scenes/profile";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";



function App() {
  return (    
    <>
    <ToastContainer />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/farmers/home' element={<FarmersHomePage/>}/>
        
        {/* FarmerPage */}
        <Route path='/' element={<FarmersHomePage />} />
        <Route path='/farmers/home' element={<FarmersHomePage />} />
        <Route path='/farmers/market' element={<MarketPage />} />
        <Route path='/farmers/support_f' element={<SupportPage_F />} />
        <Route path='/farmers/weather' element={<WeatherPage />} />


        <Route path='/exporters/homeex' element={<ExportersHomePage/>}/>
        {/* Exporter Page */}
          <Route path='/' element={<ExportersHomePage/>}/>
          <Route path='/exporters/homeex' element={<ExportersHomePage/>}/>
          <Route path='/exporters/mylist' element={<ExportersMylistPage/>}/>
          <Route path='/exporters/supportex' element={<ExportersSupportPage/>}/>
          <Route path='/exporters/support_e' element={<ExportersSupportPage/>}/>

        {/* Dashboard Page */} 
          <Route path='/dashboard' element={<DashBoardPage/>}/>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add" element={<Add/>} />
                <Route path="/user" element={<User />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/profile" element={<ProfileDashboard />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar/>} />
                <Route path="/geography" element={<Geography />} />

        {/* Wholesaler Page */} 
        {/* <Route path='/whole' element={<WholesalerPage/>}/> */}
        {/* Wholesaler Page  */}
        <Route path='/whole' element={<WholesalerPage/>}/>


        {/* <ToastContainer /> */}
        <Route path='/signup' element={<Signup/>}/>
        {/*Sign Page*/}
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<MainPage/>}/>
        <Route path='/otp/verify' element={<VerifyEmail/>}/>
        <Route path='/forget-password' element={<PasswordResetRequest/>}/>
        <Route path='/password-reset-confirm/:uid/:token' element={<ResetPassword/>}/>


        
      </Routes>
    </>
  );
}

export default App;
