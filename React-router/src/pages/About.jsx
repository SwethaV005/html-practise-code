import React from 'react'
import bgimg from '../assets/about-hero.png'
import { Link } from 'react-router-dom'
export default function About(){
    return (
       <div className="about-page-contianer">
        <img src={bgimg} className="about-hero-image"/>
        <div>
        <h1>Don't squeeze in sedan when you could relax in a van</h1>
        <p>Our mission is to enliven your road trip with perfect travel van rental.Our vans are recertified before
            each trip to ensure your travel plans go off without a hitch.(Hitch costs extra😉)
        </p>
        <p>
            Our tean is full of vanlife enthusiasts who know firsthand the magic of world on 4 wheels.
        </p>
        </div>
        <div className="about-page-box">
            <h2>Your destination is wating<br/>your van is ready.</h2>
            <Link to='/vans' className='link-button'>Explore your vans </Link>
        </div>
       </div>
    )
}
