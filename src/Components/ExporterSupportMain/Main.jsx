import './main.css'
import exportservice from '../../Components/Audio And Video/exportservice.png'
import exportnetworking from '../../Components/Audio And Video/exportnetworking.jpg'
import exportfinacing from '../../Components/Audio And Video/exportfinacing.jpg'
import exportpromotion from '../../Components/Audio And Video/exportpromotion.png'
import supplychain from '../../Components/Audio And Video/supplychain.png'
import img1 from '../../Components/Audio And Video/meeting.jpg'
import capacitybuilding from '../../Components/Audio And Video/capacitybuilding.png'
import img2 from '../../Components/Audio And Video/team.jpg'
import compliance from '../../Components/Audio And Video/compliance.png'
import marketanalysis from '../../Components/Audio And Video/marketanalysis.png'
import img3 from '../../Components/Audio And Video/meeting_2.jpg'
import img4 from '../../Components/Audio And Video/digital.jpg'


import {MdOutlineEdgesensorHigh} from 'react-icons/md'
// import {FcOvertime} from 'react-icons/fc'
import {FcOnlineSupport} from 'react-icons/fc'

// import Aos from 'aos'
// import 'aos/dist/aos.css'
//array named data

const Data = [
  {
  id:1,
    imgSrc: exportservice,
    destTitle: 'Export Assistance Services',
    description: 'Export assistance services provide exporters with guidance and resources to navigate \
    the complexities of international trade and maximize their export potential. These services offer support \
    in various aspects of exporting, including market research, trade regulations, documentation, logistics, and \
    financial assistance. They aim to streamline the export process, expand market reach, and enhance export \
    competitiveness.'
  },

  {
    id:2,
    imgSrc: marketanalysis,
    destTitle: 'Market Research and Analysis',
    description: '`Market research and analysis services offer valuable insights into global market trends, demand patterns, \
    competitor analysis, and consumer preferences. They provide exporters with data-driven intelligence to identify lucrative \
    export markets, assess market potential, and tailor their export strategies accordingly. These services play a crucial \
    role in helping exporters make informed decisions and capitalize on market opportunities.'
  },

  {
    id:3,
    imgSrc: supplychain,
    destTitle: 'Logistics and Supply Chain Management',
    description: 'Logistics and supply chain management services assist exporters in managing the movement of goods from \
    production facilities to overseas markets. They offer expertise in transportation, warehousing, inventory management, \
    customs clearance, and freight forwarding. These services ensure efficient and cost-effective logistics solutions, \
    enabling exporters to deliver products to international customers seamlessly'
  },

  {
    id:4,
    imgSrc: exportfinacing,
    destTitle: 'Export Financing and Insurance',
    description: 'Export financing and insurance services help exporters mitigate financial risks and secure funding for \
    their export activities. They offer various financial products and services, such as export credit insurance, export \
    working capital loans, and trade finance solutions. These services provide exporters with financial security, facilitate \
    access to capital, and safeguard against payment defaults or non-payment from overseas buyers.'
  },

  {
    id:5,
    imgSrc: compliance,
    destTitle: 'Regulatory Compliance and Documentation',
    description: 'Regulatory compliance and documentation services assist exporters in navigating complex trade regulations, \
    export controls, and documentation requirements. They ensure exporters comply with legal and regulatory obligations, \
    including export licenses, customs declarations, and product certifications. These services help exporters avoid \
    compliance-related issues and expedite the export process.'
  },

  {
    id:6,
    imgSrc: capacitybuilding,
    destTitle: 'Export Training and Capacity Building',
    description: 'Export training and capacity building services provide exporters with training programs, workshops, and \
    seminars to enhance their export knowledge and skills. They cover topics such as export readiness assessment, export \
    marketing strategies, international trade finance, and cross-cultural communication. These services empower exporters \
    with the necessary expertise to succeed in global markets and overcome export-related challenges.'
  },

  {
    id:7,
    imgSrc: exportpromotion,
    destTitle: 'Export Promotion and Marketing',
    description: 'Export promotion and marketing services help exporters promote their products and services in international \
    markets. They offer marketing support, branding assistance, trade show participation, and digital marketing strategies \
    to increase export visibility and attract potential buyers. These services aim to position exporters competitively in \
    global markets and facilitate business expansion.'
  },

  {
    id:8,
    imgSrc: exportnetworking,
    destTitle: 'Export Networking and Collaboration',
    description: 'Export networking and collaboration services facilitate connections and partnerships among exporters, \
    industry associations, government agencies, and trade promotion organizations. They provide networking events, business \
    matchmaking services, and collaborative platforms for exporters to share knowledge, explore business opportunities, \
    and form strategic alliances. These services foster a supportive export ecosystem and encourage collaboration for mutual \
    growth and success.'
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
        <p> 
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