import './main.css'
import video1 from '../../Components/Audio And Video/v7.mp4'
import video2 from '../../Components/Audio And Video/v6.mp4'
import video3 from '../../Components/Audio And Video/v5.mp4'
import video4 from '../../Components/Audio And Video/v4.mp4'
// import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {
  return(
    <div className='main'>
      <h2 data-aos='fade-right'>YOUR GATEWAY TO Agricultural Exports</h2>
      <p data-aos='fade-right'>GROW TRADE NET</p>
      <div className='first-des'>
        <div className='image'>
            <video src={video1} muted autoPlay loop type="cornfield/mp4"></video>
                


            <video src={video2} muted autoPlay loop type="cornfield/mp4"></video>
        </div>

        <div className='image'>
            <video src={video3} muted autoPlay loop type="cornfield/mp4"></video>
            <video src={video4} muted autoPlay loop type="cornfield/mp4"></video>
        </div>

      </div>

    </div>
  )
}


export default Main