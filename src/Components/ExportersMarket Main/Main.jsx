import {useEffect}  from 'react'
import './main.css'
import img from '../../Components/Audio And Video/product.jpg'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import {GrAddCircle} from 'react-icons/gr'

import Aos from 'aos'
import 'aos/dist/aos.css'
//array named data

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Vegetables',
    location: 'Colombo',
    grade: 'Ratings',
    fees: 'Rs.100/Per 500g',
    description: 'Purchase and export of fresh, high-quality vegetables'
  },

  {
    id:2,
    imgSrc: img,
    destTitle: 'Fruits',
    location: 'Colombo',
    grade: 'Ratings',
    fees: 'Rs.200/Per 500g',
    description: 'Purchase and export of fresh, high-quality fruits'
  },

  {
    id:3,
    imgSrc: img,
    destTitle: 'Vegetables',
    location: 'Colombo',
    grade: 'Ratings',
    fees: 'Rs.150/Per 500g',
    description: 'Purchase and export of fresh, high-quality vegetables'
  },

  {
    id:4,
    imgSrc: img,
    destTitle: 'Vegetables',
    location: 'Colombo',
    grade: 'Ratings',
    fees: 'Rs.200/Per 500g',
    description: 'Purchase and export of fresh, high-quality vegetables'
  },

  {
    id:5,
    imgSrc: img,
    destTitle: 'Fruits',
    location: 'Colombo',
    grade: 'Ratings',
    fees: 'Rs.150/Per 500g',
    description: 'Purchase and export of fresh, high-quality fruits'
  },

  {
    id:6,
    imgSrc: img,
    destTitle: 'Vegetables',
    location: 'Colombo',
    grade: 'Ratings',
    fees: 'Rs.140/Per 500g',
    description: 'Purchase and export of fresh, high-quality vegetables'
  },

  {
    id:7,
    imgSrc: img,
    destTitle: 'Fruits',
    location: 'Colombo',
    grade: 'Ratings',
    fees: 'Rs.11000/Per 10Kg',
    description: 'Purchase and export of fresh, high-quality fruits'
  },

  {
    id:8,
    imgSrc: img,
    destTitle: 'Vegetables',
    location: 'Colombo',
    grade: 'Ratings',
    fees: 'Rs.15000/Per 10kg',
    description: 'Purchase and export of fresh, high-quality vegetables'
  },

  {
    id:9,
    imgSrc: img,
    destTitle: 'Vegetables',
    location: 'Colombo',
    grade: 'Ratings',
    fees: 'Rs.50000/Per 20kg',
    description: 'Purchase and export of fresh, high-quality vegetables'
  }

]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos='fade-right' className='title'>
          New Available
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} className="singleDestination">
                {/*Here it will return single id fron the map array*/}

                <div className="imageDiv1">
                  <img src={imgSrc} alt={destTitle}/>
                </div>

                <div className="cardInfo">
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className='grade'>
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <div className="fees flex">
                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className='icon'/>
                    </button>
                    <button className='btn flex'>
                      <a href='/home'>Home
                        ADD CART <GrAddCircle className='icon'/>
                      </a>
                    </button>
                  </div>

                </div>
              </div>
            )
          })
        }


      </div>
    </section>
  )
}

export default Main