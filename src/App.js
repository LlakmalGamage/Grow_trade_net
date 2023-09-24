//import React from "react"
import './app.css'
//import { Routes } from 'react-router-dom'

//import NavbarAfterLogin  from "./Components/Navbar After Login/Navbar"
//import NavbarBeforeLogin from "./Components/Navbar Before Login/Navbar"
import NavbarMarket from "./Components/Market Navbar/Navbar"

import HomeMarket from "./Components/Market Home/Home"
//import HomeInformation from "./Components/Information Home/Home"
//import HomeSupport from "./Components/Support Home/Home"

import MainMarket from "./Components/Market Main/Main"
//import MainInformation from "./Components/Information Main/Main"
//import MainSupport from "./Components/Support Main/Main"

import Footer from "./Components/Footer/Footer"

const App = () => {
    return(
        <>
        <NavbarMarket/>
        <HomeMarket/>
        <MainMarket/>
        <Footer/>
        </>
    )
}

// function App() {

//     const cards = [
//       { title: 'product 1', imageUrl: image_1, quantity: 12, price: '4.99$', status: true },
//       { title: 'product 2', imageUrl: image_1, quantity: 2, price: '4.89$', status: true },
//       { title: 'product 3', imageUrl: image_1, quantity: 0, price: '3.99$', status: false },
//       { title: 'product 4', imageUrl: image_1, quantity: 9, price: '3.69$', status: true },
//       { title: 'product 5', imageUrl: image_1, quantity: 11, price: '4.99$', status: true },
//       { title: 'product 6', imageUrl: image_1, quantity: 26, price: '3.79$', status: true },
//       { title: 'product 7', imageUrl: image_1, quantity: 1, price: '2.99$', status: false },
//       { title: 'product 8', imageUrl: image_1, quantity: 42, price: '2.99$', status: true },
//       { title: 'product 9', imageUrl: image_1, quantity: 6, price: '1.99$', status: true },
//       { title: 'product 10', imageUrl: image_1, quantity: 7, price: '0.99$', status: true },
//       { title: 'product 11', imageUrl: image_1, quantity: 13, price: '1.69$', status: true },
//       { title: 'product 12', imageUrl: image_1, quantity: 10, price: '3.74$', status: false },
//     ];
//     return (
//       <>
//       <div className="App" style={{backgroundColor:'#f4f4f4'}}>
//         <Navbar />
//         <Home/>
//         <hr/>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
//           <input
//             type="text"
//             placeholder="Search..."
//           />
//           {/* <Dropdown style={{ marginLeft: 10, marginBottom: 10, backgroundColor:'#96A193' }}>
//             <Dropdown.Toggle variant="secondary" id="dropdown-basic">
//               Filters
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item>Price: High to low</Dropdown.Item>
//               <Dropdown.Item>Price: low to  high</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown> */}
  
//         </div>
//           <button style={{margin: 10, height: 40, backgroundColor:'#96A193'}}>
//             Add new listing
//           </button>
  
//         <h4 style={{textAlign:'left', margin: 10, padding:5, backgroundColor:'#96A193'}}>Products Available For Export</h4>
//         <div className="grid">
//           {cards.map((card, index) => (
//             <ProductCard
//               key={index}
//               itle={card.title}
//               imageUrl={card.imageUrl}
//               quantity={card.quantity}
//               price={card.price}
//               status={card.status} />
//           ))}
//         </div>
//             <hr/>
//         <Footer />
//       </div>
//       </>
//     );
//   }


export default App
