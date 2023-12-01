
//test cases for this week bi weekly update

//modications for nav bar and footer

//fertilizer seller store code

// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { AuthProvider } from '../src/Context/AuthContex'
// import Header from '../src/Components/Header'
// import HomePage from '../src/Pages/HomePage'
// import LoginPage from '../src/Pages/LoginPage'
// import RegisterPage from '../src/Pages/RegisterPage'
// import Dashboard from '../src/Pages/Dashboard'
// import ProtectedRoutes from '../src/Utils/ProtectedRoutes';

{/*
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
*/}

// import { useState } from "react";
import { Routes, Route } from 'react-router-dom'; 
// import './app.css'

import MarketPage from '../src/Pages/MarketPage/Market'
import SupportPage_F from '../src/Pages/SupportPage/Support'
import FarmerHomePage from './Pages/FarmerHomePage/Home'
import WeatherPage from './Pages/WeatherPage/weather'

import ExportersHomePage from './Pages/ExportersHomePage/Home'
import ExportersMylistPage from './Pages/ExportersMyListPage/MyList'
import ExportersSupportPage from './Pages/ExportersSupportPage/Support'

import MainPage from './Pages/MainPage/main'
import DashBoardPage from './Pages/AdminDashboard/dashboard'
// import WholesalerPage from './Pages/WholesalerPage/wholesaler'
import WholesalerPage from './Pages/WholesalerPage/wholesaler'


import Dashboard from "./scenes/dashboard";
import Add from "./scenes/add";
import Invoices from "./scenes/invoices";
import User from "./scenes/user";
import Bar from "./scenes/bar";
import Profile from "./scenes/profile";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";

function App() {
  return (    
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/farmers' element={<FarmerHomePage/>}/>
        
        {/* FarmerPage */}
          <Route path='/' element={<FarmerHomePage/>}/>
          <Route path='/home' element={<FarmerHomePage/>}/>
          <Route path='/market' element={<MarketPage/>}/>
          <Route path='/support_f' element={<SupportPage_F/>}/>
          <Route path='/weather' element={<WeatherPage/>}/>

          <Route path='/exporters' element={<ExportersHomePage/>}/>
      

        {/* Exporter Page */}
          <Route path='/' element={<ExportersHomePage/>}/>
          <Route path='/homeex' element={<ExportersHomePage/>}/>
          <Route path='/mylist' element={<ExportersMylistPage/>}/>
          <Route path='/supportex' element={<ExportersSupportPage/>}/>
          <Route path='/support_e' element={<ExportersSupportPage/>}/>

        {/* Dashboard Page */} 
          <Route path='/dashboard' element={<DashBoardPage/>}/>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add" element={<Add/>} />
                <Route path="/user" element={<User />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar/>} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/Market" element={<MarketPage />} />

        {/* Wholesaler Page */} 
        {/* <Route path='/whole' element={<WholesalerPage/>}/> */}
        {/* Wholesaler Page  */}
        <Route path='/whole' element={<WholesalerPage/>}/>
      </Routes>    
    </>
  );
}

export default App;
