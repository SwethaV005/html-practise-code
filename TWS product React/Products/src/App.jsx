import React from 'react'
import './App.css'
import business from './assets/business.png'
import searchIcon from './assets/search.png'
import cartIcon from './assets/cart.png'

function App() {
  return (
    <>
    <div className="head">
            <h1> <img src={business}  alt="Logitech"/>TWS</h1>
       
        <nav>
            <a><h2>Products</h2></a>
            <a><img src={searchIcon} id="searchicon"  alt="search"/>
            <input type="text" id="searchbar" placeholder="Search Products" /></a>

            <a><img src={cartIcon} alt="cart"><span id="cart-count"/>0</span></a>
        </nav>
        </div>
        
        <div className="images" id="images"> 
           
        </div>
      </>
  )
}

export default App