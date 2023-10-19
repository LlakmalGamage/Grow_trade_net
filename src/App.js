<<<<<<< HEAD
// import React from "react"
// import './App.css'

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
=======
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

// import MarketPage from '../src/Pages/MarketPage/Market'
// import InformationPage from '../src/Pages/InformationPage/Information'
// import SupportPage from '../src/Pages/SupportPage/Support'
// import FarmerHomePage from './Pages/FarmerHomePage/Home'

import ExportersHomePage from './Pages/ExportersHomePage/Home'
import ExportersMylistPage from './Pages/ExportersMyListPage/MyList'
import ExportersSupportPage from './Pages/ExportersSupportPage/Support'

>>>>>>> 660be212e30d34db50440a54ef47859415a3cf01

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (    
    <>
<<<<<<< HEAD
      {/* <Routes>
=======
      <Routes>
        
        {/* FarmerPage */}
        {/* <Route path='/' element={<FarmerHomePage/>}/>
>>>>>>> 660be212e30d34db50440a54ef47859415a3cf01
        <Route path='/home' element={<FarmerHomePage/>}/>
        <Route path='/market' element={<MarketPage/>}/>
        <Route path='/information' element={<InformationPage/>}/>
        <Route path='/support' element={<SupportPage/>}/> */}

        {/* Exporter Page */}
        <Route path='/' element={<ExportersHomePage/>}/>
        <Route path='/home' element={<ExportersHomePage/>}/>
        <Route path='/mylist' element={<ExportersMylistPage/>}/>
        <Route path='/support' element={<ExportersSupportPage/>}/>

        

        
        
      </Routes> */}



<<<<<<< HEAD

=======
     {/*<br></br>
    <br></br>
    <br></br>
    <br></br>
>>>>>>> 660be212e30d34db50440a54ef47859415a3cf01
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
<<<<<<< HEAD
    </ColorModeContext.Provider> 
=======
    </ColorModeContext.Provider>  */}
>>>>>>> 660be212e30d34db50440a54ef47859415a3cf01
    </>
  );
}

export default App;
