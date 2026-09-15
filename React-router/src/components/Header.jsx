import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Header(){
    return(
        <>
        <header>
     <Link to="/" className="site-logo">#VANLIFE</Link>
    <nav>
    <NavLink to="/host" classsName={({isActive})=>isActive? "active-link":null}>Host</NavLink>
    <NavLink to="/about" classsName={({isActive})=>isActive? "active-link":null}>About</NavLink>
    <NavLink to="/vans" classsName={({isActive})=>isActive? "active-link":null}>Van</NavLink>
    </nav>
    </header>
   
    </>
    )
}