import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Vans from './Vans';

export default function Nav() {
  return(
    <BrowserRouter>
      <div className="header">
        <div className="logo">
          <Link to="/"><h2>#VANLIFE</h2></Link>
        </div>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}