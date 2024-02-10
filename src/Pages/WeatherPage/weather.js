// import { useState } from 'react'
import '../../App.css'
import { BackgroundLayout} from '../../Components/MainWeather'
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/FarmersAfterLoginNavbar/Navbar"
import Main from '../../Components/MainWeather/WeatherApp'

function App() {

  return (
    <>
      <Navbar/>
      <div className='w-full h-screen text-white px-8'>
      <br></br>
      <br></br>
      <br></br>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>Weather</h1>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
          <Main/>
          {/* <Mini/> */}

      </main>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
      </div>
    </>
  )
}

export default App
