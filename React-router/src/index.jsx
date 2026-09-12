import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home'
import About from './pages/About'
import Van from './pages/Vans'
import './pages/server'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return(
  <BrowserRouter>
  <header>
     <Link to="/" className="site-logo">#VANLIFE</Link>
  <nav>
    
    <Link to="/About">About</Link>
    <Link to="/Vans">Van</Link>
    </nav>
    </header>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/vans" element={<Van />}/>
    </Routes>
  </BrowserRouter> 
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);  