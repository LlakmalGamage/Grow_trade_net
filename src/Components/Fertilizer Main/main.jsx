import './main.css'
import video1 from '../../Components/Audio And Video/v1.mp4'
import video3 from '../../Components/Audio And Video/v3.mp4'
import video4 from '../../Components/Audio And Video/v4.mp4'
// import video2 from '../../Components/Audio And Video/v2.mp4'

// import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {
  return(
    <div className='main'>
      <h2 data-aos='fade-right'>AGRICULTURE SUPPORT HUB</h2>
      <p data-aos='fade-right'>GROW TRADE NET</p>
      <div className='first-des'>
        <div className='image'>
            <video src={video1} muted autoPlay loop type="cornfield/mp4"></video>
                


            <video src={video3} muted autoPlay loop type="cornfield/mp4"></video>

        </div>

        <div className='image'>
            <video src={video4} muted autoPlay loop type="cornfield/mp4"></video>
        </div>

      </div>

    </div>
  )
}


export default Main