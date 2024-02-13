// import { useState } from "react";
import {Routes, Route} from 'react-router-dom'; 
// import { BrowserRouter as Router } from "react-router-dom";
import './App.css'

import MarketPage from '../src/Pages/MarketPage/Market'
import SupportPage_F from '../src/Pages/SupportPage/Support'
import FarmersHomePage from '../src/Pages/FarmerHomePage/Home'
import WeatherPage from './Pages/WeatherPage/weather'

import Crop_Prediction from './Pages/farmer_crop_prediction/prediction_form'
import Prediction_Output from "./Pages/farmer_crop_prediction/output"

import ExportersHomePage from './Pages/ExportersHomePage/Home'
import ExportersMylistPage from './Pages/ExportersMyListPage/MyList'
import ExportersSupportPage from './Pages/ExportersSupportPage/Support'
import ExporterCurrency from './Pages/ExportersCurrency/Currency';
import ExporterMylist from './Pages/ExportersMylist/Listing'

import MainPage from './Pages/MainPage/main'
import DashBoardPage from './Pages/AdminDashboard/dashboard'
// import WholesalerPage from './Pages/WholesalerPage/wholesaler'
import WholesalerHomePage from './Pages/WholesalerHomePage/Home'
import WholesalerListings from './Pages/WholesalerListings/Listing'
import WholesalerMarketPage from './Pages/WholesalerMarket/Market'
import WholesalerSupportPage from './Pages/WholesalerSupport/Support'

import FertilizerHome from './Pages/Fertilizer_Seller/Home/Home';
import FertilizerListing from './Pages/Fertilizer_Seller/listings/Listing'
import FertilizerMarket from './Pages/FertilizerSellerMarket/Market'
import FertilizerSupport from './Pages/FertilizerSellerSupport/Support'

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
import ADD from "./scenes/Adverticement";




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
        <Route path='/farmers/crop_prediction' element={<Crop_Prediction />} />
        <Route path='/farmers/prediction_output' element={<Prediction_Output />} />


        <Route path='/exporters/homeex' element={<ExportersHomePage/>}/>
        {/* Exporter Page */}
          <Route path='/' element={<ExportersHomePage/>}/>
          <Route path='/exporters/homeex' element={<ExportersHomePage/>}/>
          <Route path='/exporters/mylist' element={<ExporterMylist/>}/>
          <Route path='/exporters/market' element={<ExportersMylistPage/>}/>
          <Route path='/exporters/supportex' element={<ExportersSupportPage/>}/>
          <Route path='/exporters/support_e' element={<ExportersSupportPage/>}/>
          <Route path='/exporters/currencyrate' element={<ExporterCurrency/>}/>

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
                <Route path="/add_var" element={<ADD />} />
                

        {/* Wholesaler Page */} 
        <Route path='/whole/home' element={<WholesalerHomePage/>}/>
        {/* Wholesaler Page  */}
        <Route path='/' element={<WholesalerHomePage/>} />
        <Route path='/whole/home' element={<WholesalerHomePage/>}/>
        <Route path='/whole/market' element={<WholesalerMarketPage/>}/>
        <Route path='/whole/list' element={<WholesalerListings/>}/>
        <Route path='/whole/support' element={<WholesalerSupportPage/>}/>
        
        {/* Fertilizer */}
        <Route path='/fertilizer' element={<FertilizerHome />} />
        <Route path='/fertilizer/home' element={<FertilizerHome />} />
        <Route path='/fertilizer/listing' element={<FertilizerListing />} />
        <Route path='/fertilizer/market' element={<FertilizerMarket />} />
        <Route path='/fertilizer/support' element={<FertilizerSupport/>} />
        
        

        {/* <ToastContainer /> */}
        <Route path='/signup' element={<Signup/>}/>
        {/*Sign Page*/}
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/main' element={<MainPage/>}/> */}
        <Route path='/otp/verify' element={<VerifyEmail/>}/>
        <Route path='/forget-password' element={<PasswordResetRequest/>}/>
        <Route path='/password-reset-confirm/:uid/:token' element={<ResetPassword/>}/>


        
      </Routes>
    </>
  );
}

export default App;
