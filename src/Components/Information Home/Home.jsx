import {useEffect} from 'react'
import './home.css'
import video from '../../Components/Audio And Video/information.mp4'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])



  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      {/* <img src={image} alt="Description of the image" /> */}


      <div className='homeContent container'>
        <div className="textDiv">
          <span data-aos='fade-up' className='smallText'>
            
          </span>
          <h1 data-aos='fade-up' className='homeTitle'>
            INFORMATION CENTER
          </h1>
        </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>

        <div data-aos='fade-up' className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <SiTripadvisor className='icon'/>
          </div>

          <div className="leftIcons">
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Home