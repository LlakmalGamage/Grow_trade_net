// import { useState } from "react";
import { Routes, Route } from 'react-router-dom'; 
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";
// import { Navbar } from "react-bootstrap";
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
function App() {
  // const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

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
          <Route path='/home' element={<ExportersHomePage/>}/>
          <Route path='/mylist' element={<ExportersMylistPage/>}/>
          <Route path='/support' element={<ExportersSupportPage/>}/>


          <Route path='/dashboard' element={<DashBoardPage/>}/>

        
      </Routes>


    
    </>
  );
}

export default App;
