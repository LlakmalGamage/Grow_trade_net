import { useEffect, useState } from 'react'
import logo from '../CurrencyExchange/currencylogo.png'
import currency from '../CurrencyExchange/currency.png'
import './Exrate.css'
import  axios from "axios"

const Exrate = () => {

  const [amount,setAmount]=useState(0)
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[info,setInfo]=useState([])
  const[options,setOptions]=useState([])
  const[output,setOutput]=useState()

  useEffect(() => {
    axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
      .then(res => {
        console.log(res.data)
        setInfo(res.data[from])
      }).catch(err => console.log(err))
  }, [from])

  useEffect(() => {
    if (info && Object.keys(info).length > 0) {
      setOptions(Object.keys(info))
    Convert()
    }
  }, [info])

  const Convert = () => {
    if (!info || Object.keys(info).length === 0) {
      return;
    }
      const rate= info[to]
      setOutput(amount*rate)
      
  }

  return (
    <div className='Appexrate'>
      <div className='convertor'>
        <div className="head">
          <h4><img src={logo} alt="" className='logoexrate'/>Currency convertor</h4>
        </div>

        <div className="containerexrate">
          <div className='left'>
            <h4>Amount</h4>
            <input type="text" placeholder='Enter Amount'
             onChange={(e) => setAmount(e.target.value)}/>
          </div>
          <div className='middle'>
            <h4>From</h4>
            <select onChange={(e) => setFrom(e.target.value)} value={from}>
            {options.map(o => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
            </select>
          </div>
          <div className='right'>
            <h4>To</h4>
            <select onChange={(e) => setTo(e.target.value)} value={to}>
            {options.map(o => (
              <option key={o} value={o}>
                {o}
               </option>
              ))}
            </select>
          </div>
          <div className='result'>
              <h5>Converted Amount</h5>
              <h5>{amount + " " + from + "=" + output + " " + to }</h5>
              <buttonex onClick={Convert}>Convert</buttonex>
          </div>
        </div>

      </div>
      <div className='image'>
          <img src={currency} className='c_image' alt="" />

      </div>
    </div>
  )
}

export default Exrate
