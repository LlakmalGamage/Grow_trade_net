import {useEffect}  from 'react'
import './main.css'
import img from '../../Components/Audio And Video/seed1.jpg'
import img2 from '../../Components/Audio And Video/seed2.jpg'
import img3 from '../../Components/Audio And Video/seed3.jpg'
import img4 from '../../Components/Audio And Video/seed4.jpg'
import img5 from '../../Components/Audio And Video/seed5.jpg'
import img6 from '../../Components/Audio And Video/seed6.jpg'
import img7 from '../../Components/Audio And Video/item1.png'
import img8 from '../../Components/Audio And Video/item2.png'
import img9 from '../../Components/Audio And Video/item3.png'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'
//array named data

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Carrot Seeds',
    location: 'Nuwara Eliya',
    grade: 'Ratings',
    fees: 'Rs.100',
    description: 'Germination Percentage - 75%  Minimum PurityPercentage - 98%  Net Weight - 1g / 300+ seeds Variety - New Kurado'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Pomegranate Seeds',
    location: 'Polonnaruwa',
    grade: 'Ratings',
    fees: 'Rs.200',
    description: 'You will receive a safely packed plant.Height 20 cm to 30 cm Needs sunlight Can be grown anywhere in Sri Lanka This not the local variety red angel variety'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Ladies Finger Seeds',
    location: 'Kandy',
    grade: 'Ratings',
    fees: 'Rs.150',
    description: 'Germination Percentage - 75% Minimum PurityPercentage - 98% Net Weight - 2g Variety - MI05'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'AGRICULTURAL UREA',
    location: 'Colombo',
    grade: 'Ratings',
    fees: 'Rs.2000/per 1Kg',
    description: 'Urea, also known as carbamide, is an organic compound with chemical formula CO(NH2)2. This amide has two amino groups (NH2) joined by a carbonyl functional group (C(=O)).'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'DIAMMONIUM PHOSPHATE (DAP)',
    location: 'Kurunegala',
    grade: 'Ratings',
    fees: 'Rs.1500/per 1Kg',
    description: 'Ammonium phosphate fertilizers first became available in the 1960s, and DAP rapidly became the most popular in this class of products. Its formulated in a controlled reaction of phosphoric acid with ammonia, where the hot slurry is then cooled, granulated and sieved. '
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'CALCIUM NITRATE',
    location: 'Polonnaruwa',
    grade: 'Ratings',
    fees: 'Rs.1400/per 1Kg',
    description: 'Calcium nitrate, also called Norgessalpeter, is an inorganic compound with the formula Ca(NO₃)₂ₓ. The anhydrous compound, which is rarely encountered, absorbs moisture from the air to give the tetrahydrate. Both anhydrous and hydrated forms are colourless salts'
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: '16L Knapsack Hand Sprayer TM-16h',
    location: 'Anuradhapura',
    grade: 'Ratings',
    fees: 'Rs.11000',
    description: 'Hand sprayer Reagent Tank Capacity: 16L Working Pressure: 0.25-0.45MPA Packing Dimension: 39x18.5x52cm Packing Quantity: 1PCS/carton Switch: Stainless steel switch'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'New Manual PE Sprayers Knapsack',
    location: 'Anuradhapura',
    grade: 'Ratings',
    fees: 'Rs.15000',
    description: 'Working  Capacity : 16L Tank Material :  PE Packing Quantity : 1pcs/carton Dimension(cm) : 36*19*51 G.W/N.W(kg): 3.0/2.5'
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Hydraulic Trailed Semi',
    location: 'Anuradhapura',
    grade: 'Ratings',
    fees: 'Rs.50000',
    description: 'A Harrow is ground leveling implement and is used to break the clod, process the soil to destroy the weeds finally. There are different types of Harrows and let us start with Disc Harrow.'
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
                      <a href='/home'>
                        ADD CART
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