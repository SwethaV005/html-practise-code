import React from 'react'
import {Link} from 'react-router-dom'
export default function Home(){
    return(
      <div className="home-container">
        <h1>you got the travel plans, we got the travel vans</h1>
        <p>Add adventure to your life by joining the #vanlife movement .Rent the perfect van to make perfect road trip</p>
        <Link to="/vans">Find you Van</Link>
        </div>
    )
}
