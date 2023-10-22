// import { useState } from "react";
import { Routes, Route } from 'react-router-dom'; 
import './app.css'

import MarketPage from '../src/Pages/MarketPage/Market'
import InformationPage from '../src/Pages/InformationPage/Information'
import SupportPage from '../src/Pages/SupportPage/Support'
import FarmerHomePage from './Pages/FarmerHomePage/Home'

import ExportersHomePage from './Pages/ExportersHomePage/Home'
import ExportersMylistPage from './Pages/ExportersMyListPage/MyList'
import ExportersSupportPage from './Pages/ExportersSupportPage/Support'

import MainPage from './Pages/MainPage/main'
import DashBoardPage from './Pages/AdminDashboard/dashboard'
import WholesalerPage from './Pages/WholesalerPage/wholesaler'
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
          <Route path='/information' element={<InformationPage/>}/>
          <Route path='/support' element={<SupportPage/>}/>

          <Route path='/exporters' element={<ExportersHomePage/>}/>
      

        {/* Exporter Page */}
          <Route path='/' element={<ExportersHomePage/>}/>
          <Route path='/homeex' element={<ExportersHomePage/>}/>
          <Route path='/mylist' element={<ExportersMylistPage/>}/>
          <Route path='/supportex' element={<ExportersSupportPage/>}/>

        {/* Dashboard Page */} 
          <Route path='/dashboard' element={<DashBoardPage/>}/>

        {/* Wholesaler Page */} 
        <Route path='/whole' element={<WholesalerPage/>}/>

          
          
          

        
      </Routes>


    
    </>
  );
}

export default App;
