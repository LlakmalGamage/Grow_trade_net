import {useEffect}  from 'react'
import './footer.css'
import video2 from "../Audio And Video/video2.mp4"

import {FiChevronRight} from 'react-icons/fi'
// import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {RiPlantFill} from 'react-icons/ri'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className='secContent container'>
        {/* <div className='contactDiv flex'>
          <div data-aos='fade-up'  className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>CONTACT WITH US</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos='fade-up'  type='text' placeholder='Enter Email Address'/>
            <button data-aos='fade-up'  className='btn flex' type='submit'>
              SEND<FiSend className='icon'/>
            </button>
          </div>
        </div> */}

        <div className="footerCard flex">
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#link' className='logo flex'>
                <RiPlantFill className='icon'/> GROW TRADE NET.
                {/* <MdOutlineTravelExplore className='icon'/> Travel. */}
              </a>
            </div>

            <div data-aos='fade-up'  className="footerParagraph">
              Your Agriculture Help Hub 
            </div>

            <div data-aos='fade-up'  className='footerSocials flex'>
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>

          <div className='footerLinks grid'>

            {/* Group One */}
            <div data-aos='fade-up' data-aos-duration='3000'  className='linkGroup'>
              <span className='groupTitle'>
                About Us
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Profile
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Corporate Information
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Our People
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Our Achievements
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Our Policies
              </li>
            </div>

            {/* Group Two */}
            <div data-aos='fade-up' data-aos-duration='4000'  className='linkGroup'>
              <span className='groupTitle'>
                Our Products & Services
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Crop Nutrition
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Planting Material
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Crop Protection
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Agri Mechanization
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Biotech
              </li>
            </div>

            {/* Group Three */}
            <div data-aos='fade-up' data-aos-duration='5000'  className='linkGroup'>
              <span className='groupTitle'>
                Other Services
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Extension Services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Advisory Service
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Outgrower Network
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Machinery Service Centers
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Laboratory Services
              </li>
            </div>


          </div>

          <div className='footerDiv flex'>
            <small>BEST AGRICULTURAL WEBSITE</small>
            <small>COPYRIGHTS RESERVED - GTN</small>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Footer