import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home'
import About from './pages/About'
import Van from './pages/Van/Vans'
import Vandetail from './pages/Van/Vandetail'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income';
import Review from './pages/Host/Review'
import HostLayout from './components/HostLayout'
import './pages/server'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return(
  <BrowserRouter>

    <Routes> 
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}/>
      {/* <Route path="vans" element={<Van />}/>
      <Route path="vans/:id" element={<Vandetail/>}/> */}
      /*Converting the code into nested route not layout route because/vans and /vans/:id does not haVe shared UI*/
      <Route path="vans"  >
        <Route index element={<Van/>}/>
        <Route path=":id" element={<Vandetail/>}/>
      </Route>
      <Route path="host" element={<HostLayout/>}>
           <Route index element={<Dashboard />}/>
          <Route path="income" element={<Income />}/>
          <Route path="review" element={<Review />}/>
     </Route>
      </Route>
    </Routes>
  </BrowserRouter> 
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);  