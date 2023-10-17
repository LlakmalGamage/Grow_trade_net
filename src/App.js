import React from "react"
import './App.css'



function App() {
  // const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (    
    <>
      {/* <Routes>
        <Route path='/home' element={<FarmerHomePage/>}/>
        <Route path='/market' element={<MarketPage/>}/>
        <Route path='/information' element={<InformationPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        
      </Routes> */}




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
    </ColorModeContext.Provider> 
    </>
  )
}

export default App;
