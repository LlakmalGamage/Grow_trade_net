import './main.css'
import crop from '../../Components/Audio And Video/crop.png'
import community from '../../Components/Audio And Video/community.png'
import environmental from '../../Components/Audio And Video/environmental.png'
import finance from '../../Components/Audio And Video/finance.png'
import goverment from '../../Components/Audio And Video/goverment.png'
import market from '../../Components/Audio And Video/market.png'
import img1 from '../../Components/Audio And Video/meeting.jpg'
import soil from '../../Components/Audio And Video/soil.png'
import img2 from '../../Components/Audio And Video/team.jpg'
import technology from '../../Components/Audio And Video/technology.png'
import weather from '../../Components/Audio And Video/weather.png'
import img3 from '../../Components/Audio And Video/meeting_2.jpg'
import img4 from '../../Components/Audio And Video/digital.jpg'


import {MdOutlineEdgesensorHigh} from 'react-icons/md'
import {FcOvertime} from 'react-icons/fc'
import {FcOnlineSupport} from 'react-icons/fc'

// import Aos from 'aos'
// import 'aos/dist/aos.css'
//array named data

const Data = [
  {
    id:1,
    imgSrc: crop,
    destTitle: 'Crop Advisory Services',
    description: 'Crop advisory services provide farmers with guidance and \
                  recommendations to optimize crop production and mitigate risks. \
                  They offer information on crop planning, soil testing, pest management,\
                  irrigation, weather forecasts, and market insights. These services\
                  aim to improve agricultural practices, increase yields, and enhance farm profitability.'
  },

  {
    id:2,
    imgSrc: weather,
    destTitle: 'Weather Forecasting And Monitoring',
    description: 'Weather forecasting and monitoring services provide timely \
                  and accurate information about current and future weather \
                  conditions. They use meteorological data, satellite imagery,\
                  and other tools to predict weather patterns, temperatures, \
                  precipitation, and severe weather events. These services help\
                  individuals and organizations make informed decisions related\
                  to agriculture, travel, outdoor activities, disaster \
                  preparedness, and more.'
  },

  {
    id:3,
    imgSrc: market,
    destTitle: 'Market Information',
    description: 'Market information services offer real-time data and analysis \
                  on market trends, prices, demand, and supply for various commodities\
                  and products. They help businesses and individuals make informed \
                  decisions about buying, selling, or investing. These services play\
                  a crucial role in sectors like agriculture, finance, and commerce,\
                  facilitating efficient market operations and trade.'
  },

  {
    id:4,
    imgSrc: finance,
    destTitle: 'Financial And Insurance Services',
    description: 'Financial and insurance services involve managing money\
                 and mitigating risks. Financial services encompass banking, investing,\
                 and wealth management, helping individuals and businesses grow and protect \
                 their assets. Insurance services provide coverage against potential losses, \
                 offering peace of mind and financial protection in case of accidents, \
                 disasters, or other unforeseen events. Both services are vital for\
                economic stability and personal financial security.'
  },

  {
    id:5,
    imgSrc: technology,
    destTitle: 'Technology Adoption',
    description: 'Technology adoption services assist individuals and organizations in \
                  incorporating new technologies into their operations. These services include\
                  training, consulting, and support to ensure a smooth transition and maximize \
                  the benefits of technology. They help users understand, implement, and make \
                  effective use of digital tools and innovations to improve efficiency, \
                  productivity, and competitiveness.'
  },

  {
    id:6,
    imgSrc: soil,
    destTitle: 'Soil Health Assessment',
    description: 'Soil health assessment services evaluate the condition and quality of soil in \
                  agricultural or environmental contexts. They use various tests and analyses to \
                  measure factors like nutrient levels, pH, organic matter content, and microbial \
                  activity. These assessments help farmers and land managers make informed decisions \
                  about soil management practices to improve crop yields, sustainability, and overall \
                  soil health.'
  },

  {
    id:7,
    imgSrc: goverment,
    destTitle: 'Government Scheme Guidance ',
    description: 'Government scheme guidance services provide information and assistance to\
                 individuals and businesses about government programs, initiatives, and policies. \
                 These services help people navigate complex government regulations, access \
                 available benefits, grants, or incentives, and ensure compliance with relevant \
                 laws. They play a crucial role in facilitating citizen engagement with \
                 government resources and support.'
  },

  {
    id:8,
    imgSrc: community,
    destTitle: 'Community And Networking',
    description: 'Community and networking services facilitate connections and interactions \
                  among individuals or groups with common interests or goals. They provide\
                  platforms, events, or online spaces where people can connect, share information, \
                  collaborate, and support one another. These services promote social interaction, \
                  knowledge exchange, and collective action within communities or professional networks.'
  },

  {
    id:9,
    imgSrc: environmental,
    destTitle: 'Environmental Sustainability',
    description: 'Environmental sustainability services focus on promoting practices and\
                  solutions that protect the environment and conserve natural resources. \
                  They offer guidance, assessments, and strategies to help individuals, \
                  businesses, and organizations reduce their environmental impact. These \
                  services support initiatives such as energy efficiency, waste reduction, \
                  conservation of biodiversity, and the adoption of eco-friendly technologies \
                  to ensure a healthier planet for current and future generations.'
  }

]

const Main = () => {
  return(
    <div className='main'>
      <div className="secTitle">
        <h3 data-aos='fade-right' className='title'>
          Our Logistics Services
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,description})=>{
            return(
              <div key={id}  className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}/>
                </div>

                <div className="cardInfo">
                  <h4 className='destTitle'>{destTitle}</h4>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>

      <h2 data-aos='fade-right'>How We Works</h2>
      <p data-aos='fade-right'>More Works</p>
      <div className='first-des'>
        <div className='des-text'>
        <p ><h3><FcOvertime className='icon'/>Timely Updates And Forecasting</h3>
        Timely updates and forecasting provide current and predictive information about various subjects, including weather, market trends, or emerging events. 
        <h3><MdOutlineEdgesensorHigh className='icon'/>Understanding Your Needs</h3> 
        refers to the process of comprehending and recognizing the specific requirements, desires, or concerns of an individual, group, or organization. 
        <h3><FcOnlineSupport className='icon'/>Continuous Support</h3>
        refers to ongoing assistance, aid, or help provided without interruption over an extended period. 
        </p>
        </div>
        <div className='image'>
          <img alt='img' src={img1}/>
          <img alt='img2' src={img2}/>
        </div>
      </div>

      <div className='first-des-reverse'>
        <div className='des-text-reverse'>
          <h2>What Our Customer Say</h2>
          <p>Comming soon..</p>
        </div>
        <div className='image'>
          <img alt='img' src={img3}/>
          <img alt='img2' src={img4}/>
        </div>
      </div>
    </div>
  )
}

export default Main